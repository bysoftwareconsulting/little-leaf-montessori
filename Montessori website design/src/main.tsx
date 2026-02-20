
  import { createRoot } from "react-dom/client";
  import App from "./app/App";
  import "./styles/index.css";
  import { LanguageProvider } from "./context/LanguageContext";

  createRoot(document.getElementById("root")!).render(<LanguageProvider><App /></LanguageProvider>);
  