type Metric = { v: string; u: string };
type CaseData = {
  num: string;
  client: string;
  chain: string;
  title: string;
  tagline: string;
  desc: string;
  metrics: Metric[];
  mock: "dashboard" | "bridge" | "mobile";
  accent: string;
  quote: string;
  quoteBy: string;
};

const CASES: CaseData[] = [
  {
    num: "01",
    client: "Mysten Labs",
    chain: "Sui",
    title: "Surflux",
    tagline: "The data layer for Sui Network.",
    desc: "Real-time data infrastructure powering Sui's developer ecosystem — flux streams, NFT Indexing API, DeepBook Indexing, gRPC. Built from zero in 11 weeks, now in production across 12+ major dApps.",
    metrics: [
      { v: "11", u: "weeks to prod" },
      { v: "340M+", u: "events indexed" },
      { v: "42ms", u: "p95 latency" },
    ],
    mock: "dashboard",
    accent: "#4da2ff",
    quote: '"Buidly pushing infra forward on Sui where it matters."',
    quoteBy: "George Danezis · Chief Scientist, Mysten Labs",
  },
  {
    num: "02",
    client: "OneFinity",
    chain: "MultiversX",
    title: "Cross-chain bridge",
    tagline: "A sovereign blockchain and bridge handling $100M+ in TVL.",
    desc: "Custom appchain + production bridge to Ethereum, Solana, MultiversX. Zero-downtime deployment, audited smart contracts, and monitoring infrastructure handling $100M+ in user assets.",
    metrics: [
      { v: "$100M+", u: "total value" },
      { v: "0", u: "incidents" },
      { v: "4", u: "chains bridged" },
    ],
    mock: "bridge",
    accent: "#e8465a",
    quote: '"The kind of infrastructure work most teams can\'t even scope, let alone ship."',
    quoteBy: "Lucian Mincu · Co-Founder, MultiversX",
  },
  {
    num: "03",
    client: "Claynosaurz",
    chain: "Solana",
    title: "Popkins NFT drop",
    tagline: "NFT infrastructure at scale for one of Solana's biggest brands.",
    desc: "High-traffic minting infrastructure, backend, and real-time inventory. Zero-failure drop handling peak load from hundreds of thousands of concurrent users — every mint settled, every NFT delivered.",
    metrics: [
      { v: "180k", u: "concurrent users" },
      { v: "99.98%", u: "uptime" },
      { v: "12s", u: "mint settlement" },
    ],
    mock: "mobile",
    accent: "#14f195",
    quote: '"Buidly is the kind of best-kept-secret team I want all to myself."',
    quoteBy: "Nypam · Head of Product, Claynosaurz",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="work"
      className="section"
      style={{ background: "var(--bg-tint)", borderTop: "1px solid var(--border)" }}
    >
      <div className="wrap-wide">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Selected work · 2024–2025</div>
            <h2 className="display">
              Production code.
              <br />
              Real <span className="italic" style={{ color: "var(--accent)" }}>outcomes.</span>
            </h2>
          </div>
          <p className="lead">
            Three representative projects. The rest — and the ones under NDA — live in our portfolio. Every case study links to a longer write-up.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {CASES.map((c, idx) => (
          <CaseStudyCard key={c.num} data={c} flip={idx % 2 === 1} />
        ))}
      </div>

      <div className="wrap-wide" style={{ marginTop: 48, textAlign: "center" }}>
        <a href="#" className="btn btn-ghost">
          See all 25+ projects
          <svg
            className="arrow"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function CaseStudyCard({ data, flip }: { data: CaseData; flip: boolean }) {
  return (
    <div className="wrap-wide">
      <article
        className="case-card"
        style={{
          background: "#fff",
          borderRadius: 24,
          border: "1px solid var(--border)",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: flip ? "1.05fr 1fr" : "1fr 1.05fr",
          minHeight: 540,
        }}
      >
        <div
          className="case-content"
          style={{
            padding: "56px 56px 48px",
            order: flip ? 2 : 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#fff",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <span className="mono" style={{ fontSize: 12, color: "var(--fg4)", letterSpacing: ".15em" }}>
                CASE / {data.num}
              </span>
              <span
                style={{
                  padding: "4px 10px",
                  borderRadius: 4,
                  background: data.accent + "14",
                  color: data.accent,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: ".04em",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {data.chain}
              </span>
              <span style={{ fontSize: 12, color: "var(--fg3)" }}>
                · Client: <b style={{ color: "var(--ink)" }}>{data.client}</b>
              </span>
            </div>

            <h3 className="display" style={{ fontSize: 48, marginBottom: 14, lineHeight: 1 }}>
              {data.title}
            </h3>
            <p
              style={{
                fontSize: 20,
                fontWeight: 500,
                color: "var(--ink)",
                margin: "0 0 16px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              {data.tagline}
            </p>
            <p
              style={{
                fontSize: 15,
                color: "var(--fg3)",
                lineHeight: 1.6,
                marginBottom: 32,
                maxWidth: 520,
              }}
            >
              {data.desc}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 0,
                borderTop: "1px solid var(--border)",
                paddingTop: 24,
                marginBottom: 32,
              }}
            >
              {data.metrics.map((m, i) => (
                <div
                  key={i}
                  style={{
                    paddingRight: 16,
                    borderRight: i < 2 ? "1px solid var(--border)" : "none",
                    paddingLeft: i > 0 ? 20 : 0,
                  }}
                >
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: "var(--ink)",
                      lineHeight: 1,
                      fontFeatureSettings: '"tnum"',
                    }}
                  >
                    {m.v}
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 10,
                      color: "var(--fg3)",
                      letterSpacing: ".08em",
                      marginTop: 6,
                    }}
                  >
                    {m.u.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>

            <blockquote
              style={{
                margin: 0,
                padding: "18px 22px",
                borderLeft: `3px solid ${data.accent}`,
                background: "var(--bg-tint)",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: "var(--ink)",
                  margin: "0 0 8px",
                  fontWeight: 500,
                }}
              >
                {data.quote}
              </p>
              <cite
                style={{
                  fontSize: 11.5,
                  color: "var(--fg3)",
                  fontStyle: "normal",
                  fontFamily: "JetBrains Mono, monospace",
                  letterSpacing: ".02em",
                }}
              >
                {data.quoteBy}
              </cite>
            </blockquote>
          </div>

          <div style={{ marginTop: 32 }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "var(--ink)",
                fontWeight: 600,
                fontSize: 14,
                borderBottom: "1px solid var(--ink)",
                paddingBottom: 4,
              }}
            >
              Read case study
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>

        <div
          style={{
            order: flip ? 1 : 2,
            background: `linear-gradient(135deg, ${data.accent}12 0%, ${data.accent}04 100%)`,
            borderLeft: flip ? "none" : "1px solid var(--border)",
            borderRight: flip ? "1px solid var(--border)" : "none",
            padding: 48,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            className="pattern-optional"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.4,
              backgroundImage: `linear-gradient(${data.accent}10 1px, transparent 1px), linear-gradient(90deg, ${data.accent}10 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
          <CaseMockup type={data.mock} accent={data.accent} />
        </div>
      </article>
    </div>
  );
}

function CaseMockup({ type, accent }: { type: CaseData["mock"]; accent: string }) {
  if (type === "dashboard") return <DashboardMock accent={accent} />;
  if (type === "bridge") return <BridgeMock accent={accent} />;
  if (type === "mobile") return <MobileMock accent={accent} />;
  return null;
}

function DashboardMock({ accent }: { accent: string }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 540,
        background: "#0a1628",
        borderRadius: 14,
        boxShadow: "0 30px 60px -15px rgba(10,41,87,.3)",
        overflow: "hidden",
        position: "relative",
        transform: "perspective(2000px) rotateY(-3deg)",
      }}
    >
      <div
        style={{
          padding: "10px 14px",
          background: "#061220",
          borderBottom: "1px solid rgba(255,255,255,.08)",
          display: "flex",
          gap: 6,
        }}
      >
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f57" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#febc2e" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840" }} />
        <div
          className="mono"
          style={{ flex: 1, textAlign: "center", fontSize: 10, color: "rgba(255,255,255,.35)" }}
        >
          surflux.buidly.dev
        </div>
      </div>
      <div style={{ padding: 18 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <div>
            <div
              className="mono"
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,.4)",
                letterSpacing: ".08em",
                marginBottom: 3,
              }}
            >
              FLUX STREAM / MAINNET
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>DeepBook events</div>
          </div>
          <div className="mono" style={{ fontSize: 10, color: accent }}>
            ●  live · 2,481 ev/s
          </div>
        </div>

        <div style={{ height: 120, display: "flex", alignItems: "end", gap: 2, marginBottom: 14 }}>
          {[32, 38, 30, 42, 50, 44, 52, 58, 48, 60, 68, 62, 72, 80, 74, 84, 92, 86, 96, 104, 98, 108, 116, 110, 120, 128].map(
            (h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${(h / 128) * 100}%`,
                  background: `linear-gradient(180deg, ${accent}, ${accent}33)`,
                  borderRadius: 1,
                }}
              />
            )
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {[
            { l: "Indexed 24h", v: "12.4M" },
            { l: "Subscribers", v: "847" },
            { l: "Uptime", v: "99.98%" },
          ].map((m, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,.04)",
                padding: 10,
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,.05)",
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 8.5,
                  color: "rgba(255,255,255,.35)",
                  letterSpacing: ".1em",
                  marginBottom: 3,
                }}
              >
                {m.l.toUpperCase()}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
                {m.v}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 12,
            padding: 10,
            background: "rgba(0,0,0,.3)",
            borderRadius: 6,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10,
            lineHeight: 1.6,
          }}
        >
          <div style={{ color: "rgba(255,255,255,.35)" }}>
            [14:32:04] <span style={{ color: accent }}>tx 0x4f..8ea</span> order_filled 2,840 SUI
          </div>
          <div style={{ color: "rgba(255,255,255,.35)" }}>
            [14:32:04] <span style={{ color: accent }}>tx 0x7b..2cd</span> pool_created USDC/SUI
          </div>
          <div style={{ color: "rgba(255,255,255,.35)" }}>
            [14:32:05] <span style={{ color: accent }}>tx 0x91..4fa</span> liquidity_added 14k
          </div>
        </div>
      </div>
    </div>
  );
}

function BridgeMock({ accent }: { accent: string }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 480,
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 30px 60px -15px rgba(10,41,87,.25)",
        border: "1px solid var(--border)",
        overflow: "hidden",
        transform: "perspective(2000px) rotateY(3deg)",
      }}
    >
      <div
        style={{
          padding: "14px 18px",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>
          OneFinity Bridge
        </div>
        <span className="mono" style={{ fontSize: 10, color: accent }}>
          ●  Mainnet
        </span>
      </div>

      <div style={{ padding: 22 }}>
        <div
          className="mono"
          style={{ fontSize: 10, color: "var(--fg3)", letterSpacing: ".1em", marginBottom: 10 }}
        >
          FROM
        </div>
        <div
          style={{
            background: "var(--bg-tint)",
            borderRadius: 10,
            padding: 14,
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontSize: 13, color: "var(--fg3)", marginBottom: 4 }}>MultiversX</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>
              2,480.00
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            EGLD
          </div>
        </div>

        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <div
            style={{
              display: "inline-flex",
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: accent,
              color: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 2v12M3 9l5 5 5-5" />
            </svg>
          </div>
        </div>

        <div
          className="mono"
          style={{ fontSize: 10, color: "var(--fg3)", letterSpacing: ".1em", marginBottom: 10 }}
        >
          TO
        </div>
        <div
          style={{
            background: "var(--bg-tint)",
            borderRadius: 10,
            padding: 14,
            marginBottom: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontSize: 13, color: "var(--fg3)", marginBottom: 4 }}>Ethereum</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>
              28.4127
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            ETH
          </div>
        </div>

        <div
          style={{
            background: "var(--bg-tint)",
            borderRadius: 8,
            padding: 12,
            fontSize: 11,
            color: "var(--fg3)",
            marginBottom: 14,
            display: "grid",
            gridTemplateColumns: "1fr auto",
            rowGap: 4,
          }}
        >
          <span>Network fee</span>
          <span style={{ color: "var(--ink)", fontWeight: 500 }}>€1.84</span>
          <span>Bridge time</span>
          <span style={{ color: "var(--ink)", fontWeight: 500 }}>~ 4m 20s</span>
          <span>Route audit</span>
          <span style={{ color: "var(--green)", fontWeight: 500 }}>✓ Verified</span>
        </div>

        <button
          style={{
            width: "100%",
            height: 48,
            border: 0,
            borderRadius: 10,
            background: accent,
            color: "#fff",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Bridge assets
        </button>
      </div>
    </div>
  );
}

function MobileMock({ accent }: { accent: string }) {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: 240,
          height: 480,
          background: "#000",
          borderRadius: 38,
          padding: 6,
          boxShadow: "0 30px 60px -15px rgba(10,41,87,.35)",
          border: "1px solid rgba(0,0,0,.5)",
          transform: "perspective(2000px) rotateY(-6deg)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 32,
            overflow: "hidden",
            background: `linear-gradient(180deg, ${accent}22, #0a1628)`,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 80,
              height: 22,
              background: "#000",
              borderRadius: 14,
              zIndex: 2,
            }}
          />
          <div style={{ padding: "44px 20px 20px" }}>
            <div
              className="mono"
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,.5)",
                letterSpacing: ".1em",
                marginBottom: 6,
              }}
            >
              POPKINS DROP
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: 14,
              }}
            >
              Claim your
              <br />
              Claynosaur.
            </div>
            <div
              style={{
                aspectRatio: "1",
                borderRadius: 16,
                background: `linear-gradient(135deg, ${accent}, #0a1628)`,
                marginBottom: 14,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="80%" height="80%" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="40" r="18" fill="#fff" fillOpacity=".8" />
                <ellipse cx="50" cy="75" rx="32" ry="14" fill="#fff" fillOpacity=".6" />
                <circle cx="44" cy="38" r="3" fill="#000" />
                <circle cx="56" cy="38" r="3" fill="#000" />
              </svg>
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  background: "rgba(0,0,0,.4)",
                  backdropFilter: "blur(8px)",
                  padding: "4px 8px",
                  borderRadius: 6,
                  fontSize: 10,
                  color: "#fff",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                #4821 / 10k
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 14,
                fontSize: 11,
                color: "rgba(255,255,255,.7)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 9,
                    opacity: 0.6,
                    fontFamily: "JetBrains Mono, monospace",
                    letterSpacing: ".08em",
                  }}
                >
                  PRICE
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>2.4 SOL</div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 9,
                    opacity: 0.6,
                    fontFamily: "JetBrains Mono, monospace",
                    letterSpacing: ".08em",
                  }}
                >
                  QUEUE
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>#142 / 180k</div>
              </div>
            </div>
            <button
              style={{
                width: "100%",
                height: 44,
                border: 0,
                borderRadius: 12,
                background: accent,
                color: "#0a1628",
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              Mint now
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-widgets" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          { l: "CONCURRENT", v: "180,432", c: accent },
          { l: "MINTED 24H", v: "9,847", c: "#4db8ff" },
          { l: "AVG SETTLE", v: "12s", c: "#17b26a" },
        ].map((w, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              padding: "14px 18px",
              borderRadius: 12,
              border: "1px solid var(--border)",
              boxShadow: "0 8px 20px -8px rgba(10,41,87,.1)",
              minWidth: 140,
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: 9,
                color: "var(--fg3)",
                letterSpacing: ".12em",
                marginBottom: 5,
              }}
            >
              {w.l}
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: w.c,
                fontFeatureSettings: '"tnum"',
              }}
            >
              {w.v}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
