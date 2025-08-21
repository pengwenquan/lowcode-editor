import { useMaterailDrop } from "../../hooks/useMaterialDrop";
import type { CommonComponentProps } from "../../interface";

const Container = ({ id, children }: CommonComponentProps) => {
  const { canDrop, drop } = useMaterailDrop(["Button", "Container"], id);

  return (
    <div
      ref={drop}
      data-component-id={id}
      className="border-[1px] border-[#000] min-h-[100px] p-[20px]"
      style={{ borderColor: canDrop ? "blue" : "#000" }}
    >
      {children}
    </div>
  );
};

export default Container;
