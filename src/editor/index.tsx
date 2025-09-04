import { Allotment } from "allotment";
import { Header } from "./components/Header/index.tsx";
import { EditArea } from "./components/EditArea/index.tsx";
import { Setting } from "./components/Setting/index.tsx";
import { MaterialWrapper } from "./components/MaterialWrapper";
import { useComponetsStore } from "../stores/components.tsx";
import { Preview } from "./components/Prview/index.tsx";
import "allotment/dist/style.css";

export default function ReactPlayground() {
  const { mode } = useComponetsStore();
  return (
    <div className="h-[100vh] flex flex-col">
      <div className="h-[60px] flex items-center border-b-[1px] border-[#000]">
        <Header />
      </div>
      {
        mode === 'edit'
        ? <Allotment>
            <Allotment.Pane preferredSize={240} maxSize={300} minSize={200}>
              <MaterialWrapper />
            </Allotment.Pane>
            <Allotment.Pane>
              <EditArea />
            </Allotment.Pane>
            <Allotment.Pane preferredSize={300} maxSize={500} minSize={300}>
              <Setting />
            </Allotment.Pane>
          </Allotment>
        : <Preview />
      }
    </div>
  );
}
