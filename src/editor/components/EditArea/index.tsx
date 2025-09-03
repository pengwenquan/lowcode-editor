import React, { useState, type MouseEventHandler } from "react";
import { useComponentConfigStore } from "../../../stores/component-config";
import { type Component, useComponetsStore } from "../../../stores/components";
import SelectedMask from "../SelectedMask";
import HoverMask from "../HoverMask";

export function EditArea() {
  const { components, curComponentId, curComponent, setCurComponentId } = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();

  const [hoverComponentId, setHoverComponentId] = useState<number>();

  const handleMouseOver: MouseEventHandler = (e) => {
    console.log("e", e);
    const path = e.nativeEvent.composedPath();

    for (let i = 0; i < path.length; i += 1) {
      const ele = path[i] as HTMLElement;

      const componentId = ele.dataset?.componentId;
      if (componentId) {
        setHoverComponentId(+componentId);
        return;
      }
    }
  };

  const handleMouseLeave = () => {
    setHoverComponentId(undefined);
  };

  const handleClick: MouseEventHandler  = (e) => {
    const target = (e.target as HTMLElement).closest("[data-component-id]");
    if (target) {
      const componentId = target.getAttribute("data-component-id");
      if (componentId) {
        setCurComponentId(Number(componentId));
      }
    }
  };

  function renderComponents(components: Component[]): React.ReactNode {
    return components.map((component: Component) => {
      const config = componentConfig?.[component.name];

      if (!config?.dev) {
        return null;
      }

      return React.createElement(
        config.dev,
        {
          key: component.id,
          id: component.id,
          name: component.name,
          styles: component.styles,
          ...config.defaultProps,
          ...component.props,
        },
        renderComponents(component.children || [])
      );
    });
  }

  return (
    <div
      className="h-[100%] edit-area"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {renderComponents(components)}
      {hoverComponentId && curComponentId !== hoverComponentId &&(
        <HoverMask
          portalWrapperClassName="portal-wrapper"
          containerClassName="edit-area"
          componentId={hoverComponentId}
        />
      )}
      {curComponentId && (
        <SelectedMask
          portalWrapperClassName="portal-wrapper"
          containerClassName="edit-area"
          componentId={curComponentId}
        />
      )}
      <div className="portal-wrapper"></div>
    </div>
  );
}
