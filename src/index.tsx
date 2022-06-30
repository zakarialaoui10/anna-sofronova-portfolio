import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "./i18n/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
);
