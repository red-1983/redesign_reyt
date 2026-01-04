"use client";
import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { toast } from "sonner";
interface CookieSettings {
  statistical: boolean;
  functional: boolean;
}
interface CookieContextType {
  settings: CookieSettings;
  setStatistical: (value: boolean) => void;
  setFunctional: (value: boolean) => void;
  saveSettings: () => void;
  isInitialized: boolean;
  consentGiven: boolean;
  acceptAll: () => void;
}
const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [consentGiven, setConsentGiven] = useState(true); // Изначально true, чтобы избежать моргания
  const [settings, setSettings] = useState<CookieSettings>({
    statistical: true, // Значения по умолчанию
    functional: true,
  });
  useEffect(() => {
    try {
      const storedSettings = localStorage.getItem("cookieSettings");
      if (storedSettings) {
        setSettings(JSON.parse(storedSettings));
      }

      const consent = localStorage.getItem("cookie_consent_given");
      if (!consent) {
        setConsentGiven(false); // Если согласия нет, показываем диалог
      }
    } catch (error) {
      console.error("Failed to parse cookie settings from localStorage", error);
    }
    setIsInitialized(true);
  }, []);
  const setStatistical = useCallback((value: boolean) => {
    setSettings((prev) => ({ ...prev, statistical: value }));
  }, []);

  const setFunctional = useCallback((value: boolean) => {
    setSettings((prev) => ({ ...prev, functional: value }));
  }, []);
  const saveSettings = () => {
    try {
      localStorage.setItem("cookieSettings", JSON.stringify(settings));

      toast.success("Настройки сохранены");
    } catch (error) {
      console.error("Failed to save cookie settings to localStorage", error);
    }

    if (!consentGiven) {
      localStorage.setItem("cookie_consent_given", "true");
      setConsentGiven(true);
    }
  };

  const acceptAll = () => {
    const allEnabledSettings = { statistical: true, functional: true };
    setSettings(allEnabledSettings);
    localStorage.setItem("cookieSettings", JSON.stringify(allEnabledSettings));
    localStorage.setItem("cookie_consent_given", "true");
    setConsentGiven(true);
    toast.info("Приняты настройки cookie по умолчанию");
  };
  const value = {
    settings,
    setStatistical,
    setFunctional,
    saveSettings,
    isInitialized,
    consentGiven,
    acceptAll,
  };

  return (
    <CookieContext.Provider value={value}>{children}</CookieContext.Provider>
  );
}

export function useCookieSettings() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error("useCookieSettings must be used within a CookieProvider");
  }
  return context;
}
