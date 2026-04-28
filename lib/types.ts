export type PatientStatus = "green" | "yellow" | "red"

export interface Patient {
  id: string
  name: string
  age: number
  photo: string
  condition: string
  diagnosis: string
  riskScore: number
  status: PatientStatus
  lastActivity: string
  lastUpdate: string
  adherenceScore: number
}

export interface Alert {
  id: string
  patientId: string
  patientName: string
  type: "vitals" | "behavior" | "ai"
  severity: "high" | "medium" | "low"
  headline: string
  cause: string
  metric?: string
  time: string
  status: "active" | "resolved"
}

export interface TimelineEvent {
  id: string
  patientId: string
  type: "symptom" | "device" | "ai" | "visit" | "note"
  date: string
  headline: string
  description: string
  fullText?: string
  attachments?: string[]
}

export interface Message {
  id: string
  patientId: string
  patientName: string
  patientPhoto: string
  content: string
  time: string
  isFromDoctor: boolean
}

export interface Notification {
  id: string
  type: "alert" | "message" | "system"
  title: string
  description: string
  time: string
  read: boolean
}

export interface AISummary {
  patientId: string
  title: string
  insights: string[]
  generatedAt: string
}

export interface AIRecommendation {
  id: string
  patientId: string
  text: string
  acknowledged: boolean
}

export interface DoctorProfile {
  id: string
  name: string
  specialization: string
  email: string
  phone: string
  photo: string
}

// ─── Provider Search ───────────────────────────────────────────────────────────

export type ProviderRisk = "low" | "medium" | "high"

export type Region =
  | "Western New York"
  | "Long Island"
  | "New York City"
  | "Hudson Valley"
  | "Capital Region"
  | "Central New York"
  | "North Country"
  | "Southern Tier"
  | "Finger Lakes"
  | "Mohawk Valley"

export type Specialty =
  | "Cardiology"
  | "Internal Medicine"
  | "Orthopedics"
  | "Neurology"
  | "Oncology"
  | "Pediatrics"
  | "Psychiatry"
  | "Radiology"
  | "General Surgery"
  | "Family Medicine"
  | "Endocrinology"
  | "Nephrology"
  | "Pulmonology"
  | "Gastroenterology"

export interface BillingCode {
  code: string
  description: string
  usageCount: number
}

export interface Provider {
  npi: string
  firstName: string
  lastName: string
  organization: string
  specialty: Specialty
  region: Region
  billingCodes: BillingCode[]
}

// ─── Chat / Logs ───────────────────────────────────────────────────────────────

export type ChatRole = "patient" | "doctor" | "ai"

export type AttachmentType = "pdf" | "image" | "lab"

export interface ChatAttachment {
  id: string
  name: string
  type: AttachmentType
  sizeLabel: string
}

export interface ChatMessage {
  id: string
  role: ChatRole
  authorName: string
  content: string
  timestamp: string
  attachments?: ChatAttachment[]
  anomalyFlag?: {
    severity: "warning" | "critical"
    reason: string
  }
}

export type ScenarioType = "ai-monitoring" | "upcoding-trap" | "clinical-anamnesis"

export interface ChatVisit {
  visitId: string
  visitDate: string
  billingCode: string
  billingLabel: string
  durationMinutes: number
  messages: ChatMessage[]
  anomalyDetected?: {
    severity: "warning" | "critical"
    summary: string
  }
}

export interface ChatScenario {
  id: ScenarioType
  label: string
  description: string
  patientName: string
  patientId: string
  visits: ChatVisit[]
}
