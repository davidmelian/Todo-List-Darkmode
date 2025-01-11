import "./components/outils/darkMode.js";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/ThemeProvider.jsx";
import { TodoProvider } from "./components/TodoProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <TodoProvider>
      <App />;
    </TodoProvider>
  </ThemeProvider>
);
