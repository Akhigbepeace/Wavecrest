import { combinedConstant } from "config/constants/editable-copy/combined";
import { USE_ONLINE_CONFIG } from "config/settings";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type ConstantType = typeof combinedConstant;
type ContextValues = {
  data: ConstantType;
  loading: boolean;
  error: boolean;
  mutate?: (
    parentKey: keyof ConstantType,
    newData: ConstantType[keyof ConstantType],
    imagesChanged?: string[]
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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function retrieveUICopy() {
  //     try {
  //       setLoading(true);

  //       if (USE_ONLINE_CONFIG) {
  //         const response = await fetch("/api/ui-copy");
  //         const data = await response.json();
  //         setUIData(data);
  //       }
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   retrieveUICopy();
  // }, []);

  const mutate = useCallback(
    async (
      parentKey: keyof ConstantType,
      newData: ConstantType[keyof ConstantType],
      imagesChanged: string[] = []
    ) => {
      const newUIData = {
        ...uiData,
        [parentKey]: {
          ...uiData[parentKey],
          ...newData,
        },
      };
      setUIData(newUIData);

      await fetch("/api/ui-copy", {
        method: "POST",
        body: JSON.stringify({
          parentKey,
          newData,
          imagesChanged,
        }),
      });
    },
    [uiData]
  );

  return (
    <EditableCopyContext.Provider
      value={{
        loading,
        data: uiData,
        error,
        mutate,
      }}
    >
      {props.children}
    </EditableCopyContext.Provider>
  );
};
