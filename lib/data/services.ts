import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "individual",
    icon: "M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z",
    title: "Individual Therapy",
    description:
      "A private, supportive space to explore your thoughts and emotions at your own pace. Work through personal challenges with tailored, evidence-based approaches.",
    features: ["Cognitive Behavioural Therapy", "Mindfulness-Based Therapy", "Psychodynamic Therapy"],
    color: "bg-sage-100",
  },
  {
    id: "couples",
    icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    title: "Couples Counselling",
    description:
      "Rebuild connection, improve communication, and navigate relationship challenges together. Our therapists create a safe, neutral space for both partners.",
    features: ["Communication Skills", "Conflict Resolution", "Gottman Method"],
    color: "bg-beige-200",
  },
  {
    id: "anxiety",
    icon: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
    title: "Anxiety & Stress",
    description:
      "Learn effective techniques to manage anxiety, reduce stress, and regain a sense of calm. Reclaim your life from the grip of worry and overwhelm.",
    features: ["Breathing & Relaxation", "Exposure Therapy", "Stress Management"],
    color: "bg-sage-50",
  },
  {
    id: "depression",
    icon: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-1-9h2v4h-2zm0 6h2v2h-2z",
    title: "Depression Support",
    description:
      "Compassionate support to help you find hope and meaning again. We use proven therapies to address the root causes of depression and restore wellbeing.",
    features: ["Behavioural Activation", "Interpersonal Therapy", "ACT Therapy"],
    color: "bg-beige-100",
  },
  {
    id: "trauma",
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
    title: "Trauma Recovery",
    description:
      "Heal from the impact of past trauma in a safe, respectful, and trauma-informed environment. Move forward at a pace that feels right for you.",
    features: ["EMDR Therapy", "Trauma-Focused CBT", "Somatic Approaches"],
    color: "bg-sage-100",
  },
  {
    id: "transitions",
    icon: "M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z",
    title: "Life Transitions",
    description:
      "Navigate major life changes — career shifts, loss, parenthood, divorce — with clarity and resilience. Find your footing and a new sense of direction.",
    features: ["Grief & Loss", "Career Transitions", "Identity & Purpose"],
    color: "bg-beige-200",
  },
];
