"use client";

import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Individual Therapy",
  "Couples Counselling",
  "Anxiety & Stress",
  "Depression Support",
  "Trauma Recovery",
  "Life Transitions",
  "Not sure yet",
];

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "[Clinic Address, City, State, PIN]",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "[+91 XXXXX XXXXX]",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "[innerlight_counselling@email.com]",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Working Hours",
    value: "Mon–Sat: 9am – 7pm\nSun: By appointment",
  },
];

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Please tell us a little about what brings you here.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Simulate form submission (no backend for now)
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-sage-900 text-sm placeholder:text-sage-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-sage-400";
  const inputNormal = "border-beige-300 hover:border-sage-300";
  const inputError = "border-red-300 bg-red-50 focus:ring-red-300";

  return (
    <section
      id="contact"
      aria-label="Contact InnerLight Counselling"
      className="py-24 lg:py-32 bg-beige-50"
    >
      <div className="container-custom flex flex-col gap-14">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Contact"
            title="Begin Your Journey Today"
            subtitle="Ready to take the first step? Fill in the form below or reach out directly. I respond to all enquiries personally within one business day."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10">
          {/* Left: Contact info */}
          <div className="flex flex-col gap-6">
            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-beige-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sage-500 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-sage-800 whitespace-pre-line leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Free consult nudge */}
            <div
              className="rounded-3xl p-6 text-white flex flex-col gap-3"
              style={{ background: "linear-gradient(135deg, #2D4A3E 0%, #4E6A5E 100%)" }}
            >
              <span className="text-3xl" aria-hidden="true">🌟</span>
              <h3 className="font-display font-semibold text-xl">Free 20-Min Consultation</h3>
              <p className="text-sage-200 text-sm leading-relaxed">
                Not sure if counselling is right for you? Book a free, no-obligation call to find out how we can help.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-beige-200 shadow-[var(--shadow-card)]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-6 h-full min-h-[400px] text-center">
                <div className="w-20 h-20 rounded-full bg-sage-100 flex items-center justify-center text-4xl">
                  🌿
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-sage-900 mb-2">
                    Message Received!
                  </h3>
                  <p className="text-muted leading-relaxed max-w-sm">
                    Thank you for reaching out, {form.name.split(" ")[0]}. We&rsquo;ll be in touch
                    within one business day to arrange your session.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialState); }}
                  className="text-sage-600 text-sm underline underline-offset-2 hover:text-sage-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                aria-label="Contact form"
                className="flex flex-col gap-5"
                noValidate
              >
                <h3 className="font-display font-semibold text-xl text-sage-900 mb-1">
                  Send a Message
                </h3>

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-sage-800">
                      Full Name <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-sage-800">
                      Email Address <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone + Service row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-sage-800">
                      Phone{" "}
                      <span className="text-sage-400 font-normal text-xs">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={`${inputBase} ${inputNormal}`}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-sm font-medium text-sage-800">
                      Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputBase} ${inputNormal} cursor-pointer`}
                    >
                      <option value="">Select a service…</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-sage-800">
                    Your Message <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about what's brought you here, or ask us anything you'd like to know…"
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${inputBase} ${errors.message ? inputError : inputNormal} resize-none`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Privacy note */}
                <p className="text-xs text-muted">
                  🔒 Your information is completely confidential and will never be shared with third parties.
                </p>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full mt-1"
                >
                  Send Message
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
