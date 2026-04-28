"use client"

import { ChatScenario } from "@/lib/types"
import { MessageBubble } from "./MessageBubble"
import { VisitHeader } from "./VisitHeader"

interface ChatWindowProps {
  scenario: ChatScenario
}

export function ChatWindow({ scenario }: ChatWindowProps) {
  return (
    <div className="flex flex-col gap-6">
      {scenario.visits.map((visit) => (
        <div key={visit.visitId} className="flex flex-col gap-4">
          <VisitHeader visit={visit} />
          {visit.messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
        </div>
      ))}
    </div>
  )
}
