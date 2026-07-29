"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/app/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;
const firstName = site.name.split(" ")[0];

type Phase = "arrive" | "sealed" | "open" | "reveal" | "done";

function PostageStamp() {
  return (
    <div
      className="absolute top-4 right-4 z-20 w-[56px] rotate-[3deg] md:top-5 md:right-5 md:w-[64px]"
      aria-hidden
    >
      <div className="rounded-sm border-[3px] border-dotted border-highlight/35 bg-white/90 p-[3px] shadow-[var(--shadow-glass)] backdrop-blur-sm">
        <div className="border border-border bg-gradient-to-b from-white to-[#f3f6fa] px-1.5 py-2 text-center">
          <p className="font-display text-xl leading-none text-foreground md:text-2xl">
            W
          </p>
          <p className="mt-1 text-[6px] font-medium uppercase tracking-[0.16em] text-highlight">
            Post
          </p>
        </div>
      </div>
    </div>
  );
}

function ClaySeal({ broken }: { broken: boolean }) {
  return (
    <motion.div
      className="absolute top-[46%] left-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
      aria-hidden
      animate={
        broken
          ? { y: 36, x: 22, rotate: 22, opacity: 0, scale: 0.82 }
          : { y: 0, x: 0, rotate: 0, opacity: 1, scale: 1 }
      }
      transition={{ duration: 0.75, ease }}
    >
      <div className="relative flex h-14 w-14 items-center justify-center md:h-[4.25rem] md:w-[4.25rem]">
        {/* Soft slate clay — site highlight family */}
        <div className="absolute inset-0 rounded-[46%_54%_48%_52%] bg-gradient-to-br from-[#6f92ae] via-[#3d6b8c] to-[#2a4f6a] shadow-[0_8px_20px_rgb(61_107_140/0.28),inset_0_2px_5px_rgb(255_255_255/0.28),inset_0_-4px_8px_rgb(20_40_60/0.3)]" />
        <div className="absolute inset-[11%] rounded-full border border-white/20" />
        <div className="absolute inset-[24%] rounded-full border border-[#1c2434]/15" />
        <span className="relative font-display text-2xl leading-none text-white/95 md:text-3xl">
          W
        </span>
      </div>
    </motion.div>
  );
}

function SealedLetter({ phase }: { phase: Phase }) {
  const opened = phase === "open" || phase === "reveal";
  const revealing = phase === "reveal";

  return (
    <motion.div
      className="relative mx-auto w-[min(100%,320px)] md:w-[360px]"
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, y: 36, scale: 0.94 }}
      animate={
        revealing
          ? { opacity: 0, y: -48, scale: 1.08 }
          : { opacity: 1, y: 0, scale: 1 }
      }
      transition={{ duration: revealing ? 0.9 : 0.95, ease }}
    >
      <div
        aria-hidden
        className="absolute -bottom-3 left-1/2 h-6 w-[78%] -translate-x-1/2 rounded-full bg-highlight/15 blur-xl"
      />

      <div className="relative">
        <motion.div
          className="glass-nav absolute inset-x-5 bottom-10 z-0 overflow-hidden rounded-2xl px-6 pt-7 pb-8 md:inset-x-6"
          initial={{ y: 56, opacity: 0 }}
          animate={
            opened
              ? { y: revealing ? -28 : -64, opacity: 1 }
              : { y: 56, opacity: 0 }
          }
          transition={{ duration: 0.9, ease, delay: opened ? 0.18 : 0 }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-highlight">
            A note for you
          </p>
          <p className="mt-3 font-display text-3xl tracking-tight text-foreground md:text-4xl">
            {firstName}
          </p>
          <p className="mt-2 text-sm text-muted">{site.title}</p>
          <div className="mt-6 space-y-2">
            <div className="h-px w-full bg-border" />
            <div className="h-px w-[85%] bg-border" />
            <div className="h-px w-[70%] bg-border" />
          </div>
        </motion.div>

        <div className="glass-nav relative z-10 overflow-hidden rounded-2xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "linear-gradient(135deg, transparent 49.6%, rgb(61_107_140/0.08) 50%, transparent 50.4%), linear-gradient(225deg, transparent 49.6%, rgb(61_107_140/0.08) 50%, transparent 50.4%)",
            }}
          />

          <div className="relative aspect-[1.55/1] w-full">
            <PostageStamp />

            <div className="absolute bottom-8 left-7 md:bottom-10 md:left-9">
              <p className="font-display text-lg tracking-tight text-foreground/80 md:text-xl">
                {firstName}
              </p>
              <p className="mt-1 text-[11px] text-muted">
                Remote · Medan, Indonesia
              </p>
              <div className="mt-3 space-y-2">
                <div className="h-px w-28 bg-border md:w-36" />
                <div className="h-px w-36 bg-border/70 md:w-44" />
              </div>
            </div>

            <ClaySeal broken={opened} />

            <motion.div
              className="absolute inset-x-0 top-0 z-20 h-[58%] origin-top"
              style={{ transformStyle: "preserve-3d" }}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: opened ? -162 : 0 }}
              transition={{ duration: 1.1, ease, delay: opened ? 0.08 : 0 }}
            >
              <div
                className="h-full w-full"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  background:
                    "linear-gradient(180deg, rgb(255 255 255 / 0.95) 0%, rgb(243 246 250 / 0.98) 100%)",
                  boxShadow: opened
                    ? "0 10px 24px rgb(22 24 29 / 0.08)"
                    : "inset 0 -1px 0 rgb(22 24 29 / 0.06)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PageLoader() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("arrive");

  useEffect(() => {
    if (reduceMotion) {
      const t = setTimeout(() => setPhase("done"), 180);
      return () => clearTimeout(t);
    }

    const sealed = setTimeout(() => setPhase("sealed"), 950);
    const open = setTimeout(() => setPhase("open"), 2100);
    const reveal = setTimeout(() => setPhase("reveal"), 3800);
    const done = setTimeout(() => setPhase("done"), 4700);

    return () => {
      clearTimeout(sealed);
      clearTimeout(open);
      clearTimeout(reveal);
      clearTimeout(done);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (phase === "reveal" || phase === "done") {
      document.documentElement.dataset.appReady = "true";
    } else {
      document.documentElement.dataset.appReady = "false";
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "done") {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const statusLabel =
    phase === "arrive" || phase === "sealed"
      ? "A sealed letter arrives"
      : phase === "open"
        ? "Opening"
        : "Welcome";

  return (
    <AnimatePresence>
      {phase !== "done" ? (
        <motion.div
          key="page-loader"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "reveal" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease }}
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="absolute inset-0 atmosphere" />

          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-[-8%] h-[380px] w-[380px] rounded-full bg-[#d5e4f4]/80 blur-3xl"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 1.1, ease }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-[#e4ebf3]/80 blur-3xl"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.08, ease }}
          />

          <div className="relative z-10 w-full px-6">
            <SealedLetter phase={phase} />

            <motion.p
              className="mt-10 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "reveal" ? 0 : 1 }}
              transition={{ duration: 0.45, delay: 0.3, ease }}
            >
              {statusLabel}
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
