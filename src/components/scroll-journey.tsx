"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type FocusEvent,
} from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { panels } from "@/lib/content";
import { ShapeField } from "@/components/shapes";
import { IntroPanel } from "@/components/panels/intro-panel";
import { ExperiencePanel } from "@/components/panels/experience-panel";
import { SkillsPanel } from "@/components/panels/skills-panel";
import { WorksPanel } from "@/components/panels/works-panel";
import { ProjectsPanel } from "@/components/panels/projects-panel";
import { ContactPanel } from "@/components/panels/contact-panel";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia(REDUCED_MOTION_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function ScrollJourney() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.55,
    restDelta: 0.0005,
  });

  const progress = reduced ? scrollYProgress : smooth;
  const x = useTransform(progress, [0, 1], [
    "0%",
    `${(-100 * (panels.length - 1)) / panels.length}%`,
  ]);

  const [active, setActive] = useState(0);

  useMotionValueEvent(progress, "change", (value) => {
    const next = Math.min(
      panels.length - 1,
      Math.max(0, Math.round(value * (panels.length - 1))),
    );
    setActive((current) => (current === next ? current : next));
  });

  function goToPanel(target: number) {
    const element = wrapRef.current;
    if (!element) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (isMobile) {
      document
        .getElementById(panels[target].id)
        ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
      return;
    }

    const maxScroll = element.offsetHeight - window.innerHeight;
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;

    // Jump the document instantly; the carousel spring provides the visible
    // motion. This avoids combining browser smooth-scroll with the spring.
    root.style.scrollBehavior = "auto";
    window.scrollTo({
      top: (target / (panels.length - 1)) * maxScroll,
    });
    root.style.scrollBehavior = previousBehavior;
  }

  function handleFocus(event: FocusEvent<HTMLDivElement>) {
    const panel = (event.target as HTMLElement).closest<HTMLElement>(".panel");
    if (!panel) return;

    const target = panels.findIndex((item) => item.id === panel.id);
    if (target >= 0 && target !== active) {
      goToPanel(target);
    }
  }

  function goToId(target: "works" | "contact") {
    const index = panels.findIndex((panel) => panel.id === target);
    if (index >= 0) goToPanel(index);
  }

  useEffect(() => {
    function resetViewport() {
      const viewport =
        wrapRef.current?.querySelector<HTMLElement>(".journey-viewport");
      if (viewport) {
        viewport.scrollLeft = 0;
        viewport.scrollTop = 0;
      }
    }

    function focusPanel(target: number) {
      const section = document.getElementById(panels[target].id);
      if (!section) return;
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
    }

    function navigate(target: number, hash: string | null) {
      resetViewport();
      goToPanel(target);
      focusPanel(target);

      if (hash !== null) {
        window.history.replaceState(null, "", hash);
      }
    }

    function syncFromHash() {
      const hash = window.location.hash;
      if (!hash || hash === "#") return;

      const target = panels.findIndex(
        (panel) => `#${panel.id}` === hash,
      );
      if (target < 0) return;

      navigate(target, hash);
    }

    function handleAnchorClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (href === "#") {
        event.preventDefault();
        navigate(0, null);
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
        return;
      }

      const target = panels.findIndex((panel) => `#${panel.id}` === href);
      if (target < 0) return;

      event.preventDefault();
      navigate(target, href);
    }

    syncFromHash();
    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("hashchange", syncFromHash);
    };
    // goToPanel only depends on `reduced`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  return (
    <main
      className="journey"
      ref={wrapRef}
      style={{ "--panel-count": panels.length } as CSSProperties}
    >
      <div className="journey-viewport">
        <ShapeField progress={progress} reduced={reduced} />

        <motion.div
          className="journey-track"
          style={{ x }}
          onFocusCapture={handleFocus}
        >
          <IntroPanel id={panels[0].id} onNavigate={goToId} />
          <ExperiencePanel id={panels[1].id} />
          <SkillsPanel id={panels[2].id} />
          <WorksPanel id={panels[3].id} />
          <ProjectsPanel id={panels[4].id} />
          <ContactPanel id={panels[5].id} />
        </motion.div>

        <div className="journey-progress mono" aria-hidden="true">
          <span className="progress-count">
            {String(active + 1).padStart(2, "0")} / {String(panels.length).padStart(2, "0")}
          </span>
          <div className="progress-line">
            <motion.div className="progress-fill" style={{ scaleX: progress }} />
          </div>
          <span className="progress-section">{panels[active].label}</span>
        </div>
      </div>
    </main>
  );
}
