"use client";

import { WifiOff } from "lucide-react";

interface Props {
  isOffline: boolean;
}

export default function OfflineAlert({
  isOffline,
}: Props) {
  if (!isOffline) return null;

  return (
    <div className="flex items-center gap-2 rounded-lg border border-red-500 bg-red-100 px-4 py-3 text-red-600">
      <WifiOff size={18} />

      <span>
        Internet connection lost
      </span>
    </div>
  );
}