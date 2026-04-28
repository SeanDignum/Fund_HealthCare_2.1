"use client"

import { AlertTriangle, ShieldAlert } from "lucide-react"
import { cn } from "@/lib/utils"

interface AnomalyBannerProps {
  severity: "warning" | "critical"
  summary: string
  className?: string
}

export function AnomalyBanner({ severity, summary, className }: AnomalyBannerProps) {
  const isCritical = severity === "critical"
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border px-4 py-3 text-sm",
        isCritical
          ? "border-red-300 bg-red-50 text-red-800"
          : "border-amber-300 bg-amber-50 text-amber-800",
        className
      )}
    >
      {isCritical ? (
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
      ) : (
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
      )}
      <div>
        <span className="font-semibold mr-1">
          {isCritical ? "Fraud Indicator Detected:" : "Anomaly Detected:"}
        </span>
        {summary}
      </div>
    </div>
  )
}
