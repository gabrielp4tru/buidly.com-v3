"use client";

import { useEffect, useState } from "react";

type Accent = "blue" | "coral" | "amber" | "ink";
type Density = "compact" | "default" | "spacious";

type TweakValues = {
  accent: Accent;
  density: Density;
  pattern: boolean;
};

declare global {
  interface Window {
    __TWEAK_DEFAULTS?: Partial<TweakValues>;
  }
}

const DEFAULTS: TweakValues = { accent: "blue", density: "default", pattern: true };

export default function Tweaks() {
  const [enabled, setEnabled] = useState(false);
  const [values, setValues] = useState<TweakValues>(() => ({
    ...DEFAULTS,
    ...(typeof window !== "undefined" ? window.__TWEAK_DEFAULTS : {}),
  }));

  useEffect(() => {
    function onMsg(e: MessageEvent) {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") setEnabled(true);
      if (e.data.type === "__deactivate_edit_mode") setEnabled(false);
    }
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  useEffect(() => {
    const body = document.body;
    const accent =
      ({ blue: "#0b80ef", coral: "#e8465a", amber: "#f59e0b", ink: "#0a2957" } as const)[values.accent] ||
      "#0b80ef";
    body.style.setProperty("--accent", accent);
    body.setAttribute("data-density", values.density);
    body.setAttribute("data-pattern", values.pattern ? "on" : "off");
  }, [values]);

  const update = <K extends keyof TweakValues>(k: K, v: TweakValues[K]) => {
    const next = { ...values, [k]: v };
    setValues(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };

  if (!enabled) return null;

  const accents: [Accent, string][] = [
    ["blue", "#0b80ef"],
    ["coral", "#e8465a"],
    ["amber", "#f59e0b"],
    ["ink", "#0a2957"],
  ];
  const densities: Density[] = ["compact", "default", "spacious"];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 200,
        width: 280,
        background: "#fff",
        borderRadius: 14,
        boxShadow: "0 30px 60px -15px rgba(10,41,87,.3), 0 0 0 1px rgba(10,41,87,.1)",
        padding: 20,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 700, color: "#0a2957" }}>Tweaks</div>
        <span className="mono" style={{ fontSize: 10, color: "#8395ae", letterSpacing: ".1em" }}>
          LIVE
        </span>
      </div>

      <Group label="Accent color">
        <Row>
          {accents.map(([k, c]) => (
            <button
              key={k}
              onClick={() => update("accent", k)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: c,
                border: values.accent === k ? "2px solid #0a2957" : "2px solid transparent",
                cursor: "pointer",
                outline: "none",
                padding: 0,
              }}
              title={k}
            />
          ))}
        </Row>
      </Group>

      <Group label="Density">
        <Row>
          {densities.map((d) => (
            <button
              key={d}
              onClick={() => update("density", d)}
              style={{
                flex: 1,
                padding: "6px 8px",
                borderRadius: 6,
                border: "1px solid " + (values.density === d ? "#0a2957" : "#e6eef7"),
                background: values.density === d ? "#0a2957" : "#fff",
                color: values.density === d ? "#fff" : "#3b5479",
                fontSize: 11,
                fontWeight: 500,
                textTransform: "capitalize",
                cursor: "pointer",
              }}
            >
              {d}
            </button>
          ))}
        </Row>
      </Group>

      <Group label="Decorative grid pattern">
        <Row>
          {([["on", true], ["off", false]] as const).map(([lbl, v]) => (
            <button
              key={String(v)}
              onClick={() => update("pattern", v)}
              style={{
                flex: 1,
                padding: "6px 8px",
                borderRadius: 6,
                border: "1px solid " + (values.pattern === v ? "#0a2957" : "#e6eef7"),
                background: values.pattern === v ? "#0a2957" : "#fff",
                color: values.pattern === v ? "#fff" : "#3b5479",
                fontSize: 11,
                fontWeight: 500,
                textTransform: "capitalize",
                cursor: "pointer",
              }}
            >
              {lbl}
            </button>
          ))}
        </Row>
      </Group>

      <div style={{ marginTop: 12, fontSize: 10.5, color: "#8395ae", lineHeight: 1.5 }}>
        Changes apply live. Turn off &ldquo;Tweaks&rdquo; in the toolbar to hide this panel.
      </div>
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div
        className="mono"
        style={{
          fontSize: 9.5,
          color: "#8395ae",
          letterSpacing: ".12em",
          marginBottom: 8,
        }}
      >
        {label.toUpperCase()}
      </div>
      {children}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "flex", gap: 8 }}>{children}</div>;
}
