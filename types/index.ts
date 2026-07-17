// Shared TypeScript interfaces for InnerLight Counselling

export interface Service {
  id: string;
  icon: string; // SVG path string
  title: string;
  description: string;
  features: string[];
  color: string; // Tailwind bg class for icon background
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  sessionType: string;
  rating: number;
  initials: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}
