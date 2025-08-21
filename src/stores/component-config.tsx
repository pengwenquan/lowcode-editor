import { create } from "zustand";
import Container from "../editor/materials/Container";
import Button from "../editor/materials/Button";
import Page from "../editor/materials/Page";

export interface ComponentConfig {
  name: string;
  desc: string;
  defaultProps: Record<string, any>;
  component: any;
}

interface State {
  componentConfig: { [key: string]: ComponentConfig };
}

interface Action {
  registerComponent: (name: string, componentConfig: ComponentConfig) => void;
}

export const useComponentConfigStore = create<State & Action>((set) => ({
  componentConfig: {
    Container: {
      name: "Container",
      defaultProps: {},
      component: Container,
      desc: '容器'
    },
    Button: {
      name: "Button",
      defaultProps: {
        type: "primary",
        text: "按钮",
      },
      component: Button,
      desc: '按钮'
    },
    Page: {
      name: "Page",
      defaultProps: {},
      component: Page,
      desc: '页面'
    },
  },
  registerComponent: (name, componentConfig) =>
    set((state) => {
      return {
        ...state,
        componentConfig: {
          ...state.componentConfig,
          [name]: componentConfig,
        },
      };
    }),
}));
