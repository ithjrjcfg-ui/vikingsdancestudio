import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";

interface CtaContextType {
  isOpen: boolean;
  interest?: string;
  openAdmission: (interest?: string) => void;
  closeAdmission: () => void;
}

const CtaContext = createContext<CtaContextType | null>(null);

export function CtaProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [interest, setInterest] = useState<string | undefined>(undefined);

  const openAdmission = useCallback((i?: string) => {
    setInterest(i);
    setIsOpen(true);
  }, []);

  const closeAdmission = useCallback(() => setIsOpen(false), []);

  return (
    <CtaContext.Provider value={{ isOpen, interest, openAdmission, closeAdmission }}>
      {children}
    </CtaContext.Provider>
  );
}

export function useCta() {
  const ctx = useContext(CtaContext);
  if (!ctx) throw new Error("useCta must be used within CtaProvider");
  return ctx;
}
