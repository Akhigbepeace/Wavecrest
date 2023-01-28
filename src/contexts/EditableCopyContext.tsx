import { combinedConstant } from "config/constants/editable-copy/combined";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

type ConstantType = typeof combinedConstant;
type ContextValues = {
  data: ConstantType;
  loading: boolean;
  error: boolean;
  mutate?: (
    parentKey: keyof ConstantType,
    newData: ConstantType[keyof ConstantType]
  ) => void;
};

const EditableCopyContext = createContext<ContextValues>({
  data: combinedConstant,
  loading: true,
  error: false,
});

export const useCopyData = () => {
  return useContext(EditableCopyContext);
};

type AppDataProviderProps = {
  children: ReactNode;
};
export const EditableCopyProvider = (props: AppDataProviderProps) => {
  const [uiData, setUIData] = useState(combinedConstant);

  const mutate = useCallback(
    (
      parentKey: keyof ConstantType,
      newData: ConstantType[keyof ConstantType]
    ) => {
      const newUIData = {
        ...uiData,
        [parentKey]: {
          ...uiData[parentKey],
          ...newData,
        },
      };

      setUIData(newUIData);
    },
    [uiData]
  );

  return (
    <EditableCopyContext.Provider
      value={{
        loading: true,
        data: uiData,
        error: false,
        mutate,
      }}
    >
      {props.children}
    </EditableCopyContext.Provider>
  );
};
