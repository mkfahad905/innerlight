export const GOOGLE_FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSefziIgLIwbiAeNkwEi6bc5EppfXVfGtskrEt_hi6CGMt1TqQ/formResponse";

export type AppointmentFieldType =
  | "text"
  | "number"
  | "tel"
  | "textarea"
  | "radio"
  | "checkbox";

export interface AppointmentField {
  id: string;
  entryId: string;
  label: string;
  description?: string;
  type: AppointmentFieldType;
  required: boolean;
  options?: string[];
}

export const appointmentFields: AppointmentField[] = [
  {
    id: "fullName",
    entryId: "1635122384",
    label: "FULL NAME",
    type: "text",
    required: true,
  },
  {
    id: "age",
    entryId: "112535215",
    label: "AGE",
    type: "number",
    required: true,
  },
  {
    id: "gender",
    entryId: "244275648",
    label: "GENDER",
    type: "radio",
    required: true,
    options: ["FEMALE", "MALE", "Prefer not to say"],
  },
  {
    id: "city",
    entryId: "1847894606",
    label: "CITY",
    type: "text",
    required: true,
  },
  {
    id: "phoneNumber",
    entryId: "512895109",
    label: "PHONE NUMBER",
    type: "tel",
    required: true,
  },
  {
    id: "counsellingReason",
    entryId: "1837510287",
    label: "What brings you to counselling?",
    description: "എന്ത് കാരണത്താലാണ് നിങ്ങൾ കൗൺസിലിംഗ് തേടുന്നത്?",
    type: "textarea",
    required: true,
  },
  {
    id: "concernDuration",
    entryId: "680969471",
    label: "How long have you been experiencing this concern?",
    description: "ഈ പ്രശ്നം എത്ര നാളായി അനുഭവപ്പെടുന്നു?",
    type: "radio",
    required: true,
    options: [
      "less than 1 month / 1 മാസത്തിൽ താഴെ",
      "1–6 months / 1–6 മാസം",
      "6–12 months / 6–12 മാസം",
      "More than 1 year / 1 വർഷത്തിലധികം",
    ],
  },
  {
    id: "previousConsultation",
    entryId: "1585724465",
    label: "Have you consulted a psychologist or psychiatrist before?",
    description:
      "മുമ്പ് ഒരു സൈക്കോളജിസ്റ്റിനെയോ സൈക്യാട്രിസ്റ്റിനെയോ സമീപിച്ചിട്ടുണ്ടോ?",
    type: "radio",
    required: true,
    options: ["yes", "no"],
  },
  {
    id: "previousExperience",
    entryId: "1517920634",
    label: "IF YES PLEASE TELL ME YOUR EXPERIENCE",
    type: "textarea",
    required: false,
  },
  {
    id: "diagnosedCondition",
    entryId: "243939014",
    label: "Have you ever been diagnosed with a mental health condition?",
    type: "radio",
    required: true,
    options: ["Yes", "No"],
  },
  {
    id: "currentMedication",
    entryId: "1767553451",
    label: "Are you currently taking any medication for your mental health?",
    description:
      "നിലവിൽ മാനസികാരോഗ്യവുമായി ബന്ധപ്പെട്ട് എന്തെങ്കിലും മരുന്നുകൾ കഴിക്കുന്നുണ്ടോ?",
    type: "radio",
    required: true,
    options: ["YES", "NO"],
  },
  {
    id: "medicationDetails",
    entryId: "1009256745",
    label: "IF MEDICINES ARE TAKEN PLS SPECIFY IT HERE",
    type: "text",
    required: false,
  },
  {
    id: "selfHarmThoughts",
    entryId: "1934749866",
    label: "Are you currently having thoughts of harming yourself?",
    description:
      "ഇപ്പോൾ നിങ്ങൾക്ക് സ്വയം ഉപദ്രവിക്കണമെന്നുള്ള ചിന്തകൾ ഉണ്ടാകുന്നുണ്ടോ?",
    type: "radio",
    required: true,
    options: ["yes", "no"],
  },
  {
    id: "counsellingGoal",
    entryId: "2138785183",
    label: "What are you hoping to achieve through counselling?",
    description: "കൗൺസിലിംഗിലൂടെ നിങ്ങൾ എന്താണ് പ്രതീക്ഷിക്കുന്നത്?",
    type: "textarea",
    required: true,
  },
  {
    id: "preferredDateTime",
    entryId: "146978405",
    label: "preferred date and time",
    type: "textarea",
    required: true,
  },
  {
    id: "confidentialityConsent",
    entryId: "821421920",
    label:
      "Consent form: 1. I understand that the information I provide will be kept confidential and used only for therapeutic purposes. Everything you share during counseling will be kept confidential. However, confidentiality may be broken if there is a serious risk of harm to yourself or someone else, if required by law, or if professional supervision is needed to ensure the best quality of care.",
    type: "checkbox",
    required: true,
    options: ["YES I AGREE"],
  },
  {
    id: "voluntaryConsent",
    entryId: "1811318391",
    label:
      "Consent form: 2, I understand that therapy is voluntary and I can stop at any time.",
    type: "checkbox",
    required: true,
    options: ["YES I AGREE"],
  },
  {
    id: "paymentConsent",
    entryId: "1157034112",
    label:
      "Consent form: Kindly note that the consultation fee is to be paid before the session. Your appointment will be confirmed once the payment is received.",
    type: "checkbox",
    required: true,
    options: ["YES I AGREE"],
  },
];
