import { useState } from "react";

export default function App() {
  const [trackA, setTrackA] = useState("");
  const [trackB, setTrackB] = useState("");

  return (
    <div
      style={{
        background: "#111",
        color: "#fff",
        minHeight: "100vh",
        padding: 20,
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        FESTIVAL DJ CONTROLLER
      </h1>

      <div
        style={{
          display: "flex",
          gap: 20,
          justifyContent: "space-between",
          marginTop: 30
        }}
      >
        <div
          style={{
            flex: 1,
            background: "#222",
            padding: 20,
            borderRadius: 12
          }}
        >
          <h2>DECK A</h2>

          <input
            type="file"
            accept="audio/*"
            onChange={(e) =>
              setTrackA(e.target.files?.[0]?.name || "")
            }
          />

          <p>{trackA}</p>

          <button>PLAY</button>
          <button>PAUSE</button>
          <button>CUE</button>
        </div>

        <div
          style={{
            flex: 1,
            background: "#000",
            padding: 20,
            borderRadius: 12,
            textAlign: "center"
          }}
        >
          <h2>PIONEER STYLE DISPLAY</h2>

          <div
            style={{
              height: 200,
              border: "2px solid #0ff",
              borderRadius: 12,
              marginTop: 20
            }}
          >
            WAVEFORM DISPLAY
          </div>
        </div>

        <div
          style={{
            flex: 1,
            background: "#222",
            padding: 20,
            borderRadius: 12
          }}
        >
          <h2>DECK B</h2>

          <input
            type="file"
            accept="audio/*"
            onChange={(e) =>
              setTrackB(e.target.files?.[0]?.name || "")
            }
          />

          <p>{trackB}</p>

          <button>PLAY</button>
          <button>PAUSE</button>
          <button>CUE</button>
        </div>
      </div>

      <div
        style={{
          marginTop: 30,
          background: "#181818",
          padding: 20,
          borderRadius: 12
        }}
      >
        <h2>MIXER</h2>

        <input type="range" min="0" max="100" />
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <h1>Festival DJ Controller</h1>
      <p>Welcome to your DJ Controller app</p>
    </div>
  )
}
