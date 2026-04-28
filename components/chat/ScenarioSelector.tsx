"use client"

import { Activity, ShieldAlert, ClipboardList } from "lucide-react"
import { ScenarioType } from "@/lib/types"
import { cn } from "@/lib/utils"

const scenarios: {
  id: ScenarioType
  label: string
  sublabel: string
  Icon: React.ElementType
  color: string
  activeColor: string
}[] = [
  {
    id: "ai-monitoring",
    label: "AI Monitoring",
    sublabel: "Daily BP & medication check-ins",
    Icon: Activity,
    color: "text-violet-600",
    activeColor: "border-violet-500 bg-violet-50",
  },
  {
    id: "upcoding-trap",
    label: "Upcoding Trap",
    sublabel: "2-min visit billed as 99215",
    Icon: ShieldAlert,
    color: "text-red-600",
    activeColor: "border-red-500 bg-red-50",
  },
  {
    id: "clinical-anamnesis",
    label: "Clinical Anamnesis",
    sublabel: "New patient intake & file upload",
    Icon: ClipboardList,
    color: "text-emerald-600",
    activeColor: "border-emerald-500 bg-emerald-50",
  },
]

interface ScenarioSelectorProps {
  active: ScenarioType
  onChange: (id: ScenarioType) => void
}

export function ScenarioSelector({ active, onChange }: ScenarioSelectorProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Scenarios
      </p>
      {scenarios.map((s) => {
        const isActive = active === s.id
        return (
          <button
            key={s.id}
            onClick={() => onChange(s.id)}
            className={cn(
              "flex items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors",
              isActive
                ? s.activeColor + " border-opacity-100"
                : "border-transparent hover:bg-secondary"
            )}
          >
            <s.Icon className={cn("h-5 w-5 shrink-0", s.color)} />
            <div className="min-w-0">
              <div className="text-sm font-medium text-foreground">{s.label}</div>
              <div className="text-xs text-muted-foreground truncate">{s.sublabel}</div>
            </div>
          </button>
        )
      })}
    </div>
  )
}
