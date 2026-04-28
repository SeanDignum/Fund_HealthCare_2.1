"use client"

import { Calendar, Clock, Receipt } from "lucide-react"
import { ChatVisit } from "@/lib/types"
import { AnomalyBanner } from "./AnomalyBanner"

interface VisitHeaderProps {
  visit: ChatVisit
}

export function VisitHeader({ visit }: VisitHeaderProps) {
  const date = new Date(visit.visitDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="mb-4 space-y-3">
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-border" />
        <div className="flex items-center gap-4 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground shadow-sm">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {visit.durationMinutes} min
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-foreground">
            <Receipt className="h-3.5 w-3.5" />
            {visit.billingCode}
            <span className="font-normal text-muted-foreground">— {visit.billingLabel}</span>
          </span>
        </div>
        <div className="h-px flex-1 bg-border" />
      </div>

      {visit.anomalyDetected && (
        <AnomalyBanner
          severity={visit.anomalyDetected.severity}
          summary={visit.anomalyDetected.summary}
        />
      )}
    </div>
  )
}
