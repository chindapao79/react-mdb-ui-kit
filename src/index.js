import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export const baseURL = "https://jsonplaceholder.typicode.com/";
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
