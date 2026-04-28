"use client"

import { Bot, UserRound, Stethoscope, AlertTriangle, ShieldAlert } from "lucide-react"
import { ChatMessage } from "@/lib/types"
import { AttachmentChip } from "./AttachmentChip"
import { cn } from "@/lib/utils"

const roleConfig = {
  patient: {
    Icon: UserRound,
    label: "Patient",
    bubble: "bg-blue-600 text-white",
    meta: "text-blue-700",
    side: "right" as const,
    icon: "bg-blue-100 text-blue-600",
  },
  doctor: {
    Icon: Stethoscope,
    label: "Doctor",
    bubble: "bg-card border border-border text-foreground",
    meta: "text-emerald-700",
    side: "left" as const,
    icon: "bg-emerald-100 text-emerald-600",
  },
  ai: {
    Icon: Bot,
    label: "AI Health Assistant",
    bubble: "bg-card border border-border text-foreground",
    meta: "text-violet-700",
    side: "left" as const,
    icon: "bg-violet-100 text-violet-600",
  },
}

interface MessageBubbleProps {
  message: ChatMessage
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const cfg = roleConfig[message.role]
  const isRight = cfg.side === "right"

  return (
    <div className={cn("flex gap-2.5", isRight && "flex-row-reverse")}>
      {/* Avatar */}
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          cfg.icon
        )}
      >
        <cfg.Icon className="h-4 w-4" />
      </div>

      <div className={cn("flex max-w-[72%] flex-col gap-1", isRight && "items-end")}>
        {/* Meta */}
        <div className={cn("flex items-center gap-2 text-xs font-medium", cfg.meta)}>
          <span>{message.authorName}</span>
          <span className="font-normal text-muted-foreground">{message.timestamp}</span>
        </div>

        {/* Bubble */}
        <div
          className={cn(
            "rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm",
            cfg.bubble,
            isRight ? "rounded-tr-sm" : "rounded-tl-sm",
            message.anomalyFlag && "ring-2",
            message.anomalyFlag?.severity === "critical" && "ring-red-400",
            message.anomalyFlag?.severity === "warning" && "ring-amber-400"
          )}
        >
          {message.content}
        </div>

        {/* Attachments */}
        {message.attachments && message.attachments.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {message.attachments.map((a) => (
              <AttachmentChip key={a.id} attachment={a} />
            ))}
          </div>
        )}

        {/* Anomaly flag */}
        {message.anomalyFlag && (
          <div
            className={cn(
              "flex items-start gap-1.5 rounded-lg px-3 py-2 text-xs",
              message.anomalyFlag.severity === "critical"
                ? "bg-red-50 text-red-700"
                : "bg-amber-50 text-amber-700"
            )}
          >
            {message.anomalyFlag.severity === "critical" ? (
              <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            ) : (
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            )}
            <span>{message.anomalyFlag.reason}</span>
          </div>
        )}
      </div>
    </div>
  )
}
