import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { VariantKey, VariantTheme, variants, getVariant } from "@/utils/variants";

interface VariantContextValue {
  activeVariant: VariantKey;
  theme: VariantTheme;
  setVariant: (key: VariantKey) => void;
}

const VariantContext = createContext<VariantContextValue | undefined>(undefined);

interface VariantProviderProps {
  children: ReactNode;
  defaultVariant?: VariantKey;
}

export function VariantProvider({ children, defaultVariant = "A" }: VariantProviderProps) {
  const [activeVariant, setActiveVariant] = useState<VariantKey>(defaultVariant);

  const setVariant = useCallback((key: VariantKey) => {
    setActiveVariant(key);
  }, []);

  const theme = getVariant(activeVariant);

  return (
    <VariantContext.Provider value={{ activeVariant, theme, setVariant }}>
      {children}
    </VariantContext.Provider>
  );
}

export function useVariant(): VariantContextValue {
  const context = useContext(VariantContext);
  if (!context) {
    throw new Error("useVariant must be used within a VariantProvider");
  }
  return context;
}

export { VariantContext };
