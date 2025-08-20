import { Allotment } from "allotment";
import { Header } from "./components/Header/index.tsx";
import { EditArea } from "./components/EditArea/index.tsx";
import { Setting } from "./components/Setting/index.tsx";
import { Material } from "./components/Material";
import "allotment/dist/style.css";

export default function ReactPlayground() {
  return (
    <div className="h-[100vh] flex flex-col">
      <div className="h-[60px] flex items-center border-b-[1px] border-[#000]">
        <Header />
      </div>
      <Allotment>
        <Allotment.Pane preferredSize={240} maxSize={300} minSize={200}>
          <Material />
        </Allotment.Pane>
        <Allotment.Pane>
          <EditArea />
        </Allotment.Pane>
        <Allotment.Pane preferredSize={300} maxSize={500} minSize={300}>
          <Setting />
        </Allotment.Pane>
      </Allotment>
    </div>
  );
}
