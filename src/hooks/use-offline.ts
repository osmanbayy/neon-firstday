"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useOffline = () => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOffline = () => {
      setIsOffline(true);

      toast.error("Connection lost", { description: "You are offline.", duration: Infinity });
    };

    const handleOnline = () => {
      setIsOffline(false);

      toast.dismiss();

      toast.success("Connection restored", { description: "You are online." });
    };

    window.addEventListener("offline", handleOffline);

    window.addEventListener("online", handleOnline);

    setIsOffline(!navigator.onLine);

    return () => {
      window.removeEventListener("offline", handleOffline);

      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return isOffline;
};