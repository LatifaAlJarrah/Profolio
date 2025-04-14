// src/app/context/EditorContext.tsx
import React, { createContext, useReducer, useContext } from "react";

type TemplateState = {
  templateId: string;
  customizations: {
    colors: Record<string, string>;
    texts: Record<string, string>;
    images: Record<string, string>;
  };
};

type EditorAction =
  | { type: "SET_TEMPLATE"; payload: string }
  | { type: "UPDATE_COLOR"; payload: { key: string; value: string } }
  | { type: "UPDATE_TEXT"; payload: { key: string; value: string } }
  | { type: "UPDATE_IMAGE"; payload: { key: string; value: string } }
  | { type: "RESET" };

const initialState: TemplateState = {
  templateId: "",
  customizations: {
    colors: {},
    texts: {},
    images: {},
  },
};

const EditorReducer = (
  state: TemplateState,
  action: EditorAction
): TemplateState => {
  switch (action.type) {
    case "SET_TEMPLATE":
      return { ...state, templateId: action.payload };
    case "UPDATE_COLOR":
      return {
        ...state,
        customizations: {
          ...state.customizations,
          colors: {
            ...state.customizations.colors,
            [action.payload.key]: action.payload.value,
          },
        },
      };
    case "UPDATE_TEXT":
      return {
        ...state,
        customizations: {
          ...state.customizations,
          texts: {
            ...state.customizations.texts,
            [action.payload.key]: action.payload.value,
          },
        },
      };
    case "UPDATE_IMAGE":
      return {
        ...state,
        customizations: {
          ...state.customizations,
          images: {
            ...state.customizations.images,
            [action.payload.key]: action.payload.value,
          },
        },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const EditorContext = createContext<{
  state: TemplateState;
  dispatch: React.Dispatch<EditorAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const EditorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(EditorReducer, initialState);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => useContext(EditorContext);
