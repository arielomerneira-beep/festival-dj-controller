# festival-dj-controller
Controller DJ 
festival-dj-controller
 ├── package.json
 ├── vite.config.js
 ├── index.html
 └── src
      ├── main.tsx
      └── App.tsx
   {
  "name": "festival-dj-controller",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "wavesurfer.js": "^7",
    "tone": "^15",
    "vite": "^5"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
