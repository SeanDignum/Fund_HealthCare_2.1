"use client"

import { FileText, Image, FlaskConical } from "lucide-react"
import { ChatAttachment } from "@/lib/types"
import { cn } from "@/lib/utils"

const iconMap = {
  pdf: FileText,
  image: Image,
  lab: FlaskConical,
}

const colorMap = {
  pdf: "bg-blue-50 text-blue-700 border-blue-200",
  image: "bg-purple-50 text-purple-700 border-purple-200",
  lab: "bg-emerald-50 text-emerald-700 border-emerald-200",
}

interface AttachmentChipProps {
  attachment: ChatAttachment
}

export function AttachmentChip({ attachment }: AttachmentChipProps) {
  const Icon = iconMap[attachment.type]
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium cursor-default select-none",
        colorMap[attachment.type]
      )}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" />
      <span className="max-w-[180px] truncate">{attachment.name}</span>
      <span className="ml-1 opacity-60">{attachment.sizeLabel}</span>
    </div>
  )
}
