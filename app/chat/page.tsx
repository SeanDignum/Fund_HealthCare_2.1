"use client"

import { useState, useMemo } from "react"
import { User2, ShieldAlert } from "lucide-react"
import { ScenarioType } from "@/lib/types"
import { chatScenarios } from "@/lib/mock-data-chat"
import { ScenarioSelector } from "@/components/chat/ScenarioSelector"
import { ChatWindow } from "@/components/chat/ChatWindow"
import { AppShell } from "@/components/layout/app-shell"

export default function ChatLogsPage() {
  const [activeScenario, setActiveScenario] = useState<ScenarioType>("ai-monitoring")

  const scenario = useMemo(
    () => chatScenarios.find((s) => s.id === activeScenario)!,
    [activeScenario]
  )

  const hasAnomaly = scenario.visits.some((v) => v.anomalyDetected)
  const anomalyCount = scenario.visits.filter((v) => v.anomalyDetected).length

  return (
    <AppShell>
    <div className="-m-6 flex h-[calc(100vh-4rem)] gap-0">
      {/* Left sidebar */}
      <aside className="w-72 shrink-0 border-r border-border bg-card flex flex-col">
        <div className="border-b border-border px-5 py-4">
          <h1 className="text-base font-semibold text-foreground">Chat / Logs</h1>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Communication logs with fraud indicators
          </p>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <ScenarioSelector active={activeScenario} onChange={setActiveScenario} />
        </div>
      </aside>

      {/* Main area */}
      <main className="flex flex-1 flex-col min-w-0">
        {/* Chat header */}
        <div className="flex items-center justify-between border-b border-border bg-card px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
              <User2 className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">
                {scenario.patientName}
              </div>
              <div className="text-xs text-muted-foreground">
                {scenario.patientId} · {scenario.description}
              </div>
            </div>
          </div>

          {hasAnomaly && (
            <div className="flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3 py-1.5 text-xs font-medium text-red-700">
              <ShieldAlert className="h-3.5 w-3.5" />
              {anomalyCount} fraud indicator{anomalyCount > 1 ? "s" : ""} detected
            </div>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="mx-auto max-w-3xl">
            <ChatWindow scenario={scenario} />
          </div>
        </div>

        {/* Read-only notice */}
        <div className="border-t border-border bg-card px-6 py-3">
          <p className="text-center text-xs text-muted-foreground">
            This is a read-only audit log. Messages cannot be edited or deleted.
          </p>
        </div>
      </main>
    </div>
    </AppShell>
  )
}
