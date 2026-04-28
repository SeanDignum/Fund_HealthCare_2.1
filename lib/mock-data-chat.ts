import { ChatScenario } from "./types"

export const chatScenarios: ChatScenario[] = [
  // ── A. AI-Monitoring ──────────────────────────────────────────────────────
  {
    id: "ai-monitoring",
    label: "AI Monitoring",
    description: "Daily AI check-ins: blood pressure & medication adherence",
    patientName: "Margaret Sullivan",
    patientId: "PT-1042",
    visits: [
      {
        visitId: "V-AM-1",
        visitDate: "2026-04-21",
        billingCode: "99457",
        billingLabel: "Remote Physiologic Monitoring — first 20 min",
        durationMinutes: 18,
        messages: [
          {
            id: "am-1-1",
            role: "ai",
            authorName: "AI Health Assistant",
            content:
              "Good morning, Margaret! Time for your daily check-in. How are you feeling today?",
            timestamp: "08:02",
          },
          {
            id: "am-1-2",
            role: "patient",
            authorName: "Margaret Sullivan",
            content: "Morning. A little tired, but okay overall.",
            timestamp: "08:05",
          },
          {
            id: "am-1-3",
            role: "ai",
            authorName: "AI Health Assistant",
            content:
              "Thank you. Have you taken your morning medications — Lisinopril and Metoprolol?",
            timestamp: "08:05",
          },
          {
            id: "am-1-4",
            role: "patient",
            authorName: "Margaret Sullivan",
            content: "Yes, just took them with breakfast.",
            timestamp: "08:08",
          },
          {
            id: "am-1-5",
            role: "ai",
            authorName: "AI Health Assistant",
            content:
              "Great. Can you please share your blood pressure reading from your home monitor?",
            timestamp: "08:08",
          },
          {
            id: "am-1-6",
            role: "patient",
            authorName: "Margaret Sullivan",
            content: "138/88. Is that okay?",
            timestamp: "08:12",
          },
          {
            id: "am-1-7",
            role: "ai",
            authorName: "AI Health Assistant",
            content:
              "It's slightly above your target range of 130/80. I'm flagging this for Dr. Reeves to review. No immediate action needed — please avoid salty foods today and stay hydrated.",
            timestamp: "08:12",
          },
          {
            id: "am-1-8",
            role: "doctor",
            authorName: "Dr. Reeves",
            content:
              "Margaret, I've reviewed the reading. Let's keep monitoring — if it's above 140/90 tomorrow, we'll adjust the dose. You're doing great staying consistent with the check-ins.",
            timestamp: "09:47",
          },
        ],
      },
      {
        visitId: "V-AM-2",
        visitDate: "2026-04-22",
        billingCode: "99457",
        billingLabel: "Remote Physiologic Monitoring — first 20 min",
        durationMinutes: 14,
        messages: [
          {
            id: "am-2-1",
            role: "ai",
            authorName: "AI Health Assistant",
            content:
              "Good morning, Margaret! How are you today? Did you take your medications?",
            timestamp: "08:01",
          },
          {
            id: "am-2-2",
            role: "patient",
            authorName: "Margaret Sullivan",
            content: "Yes, all done. Blood pressure is 132/82 today.",
            timestamp: "08:09",
          },
          {
            id: "am-2-3",
            role: "ai",
            authorName: "AI Health Assistant",
            content:
              "Excellent improvement! That reading is within your target range. Keep up the good work. I'll update your monitoring log.",
            timestamp: "08:09",
          },
          {
            id: "am-2-4",
            role: "doctor",
            authorName: "Dr. Reeves",
            content: "Good progress. No changes needed. See you at the monthly check-up.",
            timestamp: "10:15",
          },
        ],
      },
    ],
  },

  // ── B. Upcoding Trap ──────────────────────────────────────────────────────
  {
    id: "upcoding-trap",
    label: "Upcoding Trap",
    description: "Brief prescription pickup billed as complex office visit",
    patientName: "David Kim",
    patientId: "PT-0887",
    visits: [
      {
        visitId: "V-UT-1",
        visitDate: "2026-04-15",
        billingCode: "99215",
        billingLabel: "Office Visit — High Complexity (40–54 min)",
        durationMinutes: 3,
        anomalyDetected: {
          severity: "critical",
          summary:
            "Chat log shows a 3-minute prescription pickup. Billing code 99215 requires 40–54 min of high-complexity medical decision-making. Duration mismatch is a strong upcoding indicator.",
        },
        messages: [
          {
            id: "ut-1-1",
            role: "patient",
            authorName: "David Kim",
            content: "Hey doc, I'll stop by in like 2 minutes just to grab the prescription. That ok?",
            timestamp: "14:22",
            anomalyFlag: {
              severity: "critical",
              reason:
                "Patient explicitly states intent: brief pickup, not a clinical visit. Contradicts 99215 billing.",
            },
          },
          {
            id: "ut-1-2",
            role: "doctor",
            authorName: "Dr. Harmon",
            content: "Sure, come on in.",
            timestamp: "14:23",
            anomalyFlag: {
              severity: "critical",
              reason:
                "No clinical instructions, assessment, or follow-up discussion. Inconsistent with high-complexity visit documentation.",
            },
          },
          {
            id: "ut-1-3",
            role: "patient",
            authorName: "David Kim",
            content: "Thanks, got it. See you next time!",
            timestamp: "14:25",
          },
          {
            id: "ut-1-4",
            role: "doctor",
            authorName: "Dr. Harmon",
            content: "Take care.",
            timestamp: "14:25",
          },
        ],
      },
    ],
  },

  // ── C. Clinical Anamnesis ─────────────────────────────────────────────────
  {
    id: "clinical-anamnesis",
    label: "Clinical Anamnesis",
    description: "New patient intake: symptom review, history & file upload",
    patientName: "Elena Vasquez",
    patientId: "PT-1109",
    visits: [
      {
        visitId: "V-CA-1",
        visitDate: "2026-04-24",
        billingCode: "99204",
        billingLabel: "New Patient Office Visit — Moderate Complexity (45–59 min)",
        durationMinutes: 52,
        messages: [
          {
            id: "ca-1-1",
            role: "ai",
            authorName: "AI Health Assistant",
            content:
              "Hello Elena! Welcome. Before your appointment with Dr. Chen, I'd like to collect some background information. What brings you in today?",
            timestamp: "09:05",
          },
          {
            id: "ca-1-2",
            role: "patient",
            authorName: "Elena Vasquez",
            content:
              "I've been having chest tightness and shortness of breath for about three weeks. It mostly happens when I climb stairs or walk fast. I'm also really fatigued.",
            timestamp: "09:08",
          },
          {
            id: "ca-1-3",
            role: "ai",
            authorName: "AI Health Assistant",
            content:
              "Thank you for sharing that. Do you have any known heart conditions, high blood pressure, or diabetes? And are you currently taking any medications?",
            timestamp: "09:08",
          },
          {
            id: "ca-1-4",
            role: "patient",
            authorName: "Elena Vasquez",
            content:
              "No known heart issues. My blood pressure was a little high last year — 145/92 — but I wasn't prescribed anything. I take ibuprofen occasionally for back pain.",
            timestamp: "09:13",
          },
          {
            id: "ca-1-5",
            role: "ai",
            authorName: "AI Health Assistant",
            content:
              "Understood. I've noted a history of elevated blood pressure. Do you have any recent lab results or EKG records? You can upload them directly here.",
            timestamp: "09:13",
          },
          {
            id: "ca-1-6",
            role: "patient",
            authorName: "Elena Vasquez",
            content: "Yes, I have labs from three months ago. Let me attach them.",
            timestamp: "09:16",
            attachments: [
              {
                id: "att-1",
                name: "Elena_Vasquez_LabResults_Jan2026.pdf",
                type: "pdf",
                sizeLabel: "284 KB",
              },
              {
                id: "att-2",
                name: "EKG_Report_Jan2026.pdf",
                type: "pdf",
                sizeLabel: "118 KB",
              },
            ],
          },
          {
            id: "ca-1-7",
            role: "ai",
            authorName: "AI Health Assistant",
            content:
              "Files received. Preliminary scan shows elevated LDL (148 mg/dL) and borderline low ferritin (12 ng/mL). I'll flag these for Dr. Chen's review.",
            timestamp: "09:17",
          },
          {
            id: "ca-1-8",
            role: "doctor",
            authorName: "Dr. Chen",
            content:
              "Elena, I've reviewed your intake and the documents. The combination of exertional dyspnea, elevated BP history, and low ferritin suggests we should rule out both anemia-related fatigue and early hypertensive heart disease. I'd like to order an echocardiogram and a repeat CBC today.",
            timestamp: "09:58",
          },
          {
            id: "ca-1-9",
            role: "patient",
            authorName: "Elena Vasquez",
            content: "Of course. Should I be worried?",
            timestamp: "10:02",
          },
          {
            id: "ca-1-10",
            role: "doctor",
            authorName: "Dr. Chen",
            content:
              "Not at this stage — we're being thorough. I'm also uploading the referral order. Please check in with the cardiology lab on the 3rd floor after this.",
            timestamp: "10:04",
            attachments: [
              {
                id: "att-3",
                name: "Referral_Cardiology_Vasquez.pdf",
                type: "pdf",
                sizeLabel: "96 KB",
              },
              {
                id: "att-4",
                name: "CBC_OrderForm.pdf",
                type: "lab",
                sizeLabel: "52 KB",
              },
            ],
          },
          {
            id: "ca-1-11",
            role: "patient",
            authorName: "Elena Vasquez",
            content: "Thank you, Dr. Chen. I'll head there now.",
            timestamp: "10:06",
          },
        ],
      },
    ],
  },
]
