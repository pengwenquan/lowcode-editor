import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "./index.css";
import '@ant-design/v5-patch-for-react-19';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>
);
