"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { appointmentFields, type AppointmentField } from "@/lib/appointmentForm";

const inputBaseClasses =
  "w-full rounded-2xl border border-beige-200 bg-white px-4 py-3 text-sm text-sage-900 outline-none transition-all duration-200 placeholder:text-muted/60 focus:border-sage-400 focus:ring-2 focus:ring-sage-100";

const fieldShellClasses =
  "rounded-3xl border border-sage-200/70 bg-beige-50/95 p-4 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-sage-900 hover:shadow-[var(--shadow-card-hover)] md:p-5 lg:p-6";

const initialValues = appointmentFields.reduce<Record<string, string>>(
  (values, field) => {
    values[field.id] = "";
    return values;
  },
  {},
);

function FieldLabel({ field }: { field: AppointmentField }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={field.id} className="text-sm font-semibold text-sage-900">
        {field.label}
        {field.required && <span className="text-sage-600"> *</span>}
      </label>
      {field.description && (
        <p className="text-sm leading-relaxed text-muted">{field.description}</p>
      )}
    </div>
  );
}

export function AppointmentRequestForm() {
  const router = useRouter();
  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateValue = (id: string, value: string) => {
    setValues((current) => ({ ...current, [id]: value }));
    setErrors((current) => {
      if (!current[id]) return current;
      const next = { ...current };
      delete next[id];
      return next;
    });
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    for (const field of appointmentFields) {
      if (field.required && !values[field.id]?.trim()) {
        nextErrors[field.id] = "This field is required.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/appointment-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        errors?: Record<string, string>;
      };

      if (!response.ok || !result.ok) {
        if (result.errors) setErrors(result.errors);
        setFormError(
          result.message ??
            "Your form could not be submitted right now. Please try again.",
        );
        return;
      }

      router.push("/thank-you");
    } catch {
      setFormError(
        "Your form could not be submitted right now. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-beige-100 py-10 md:py-14 lg:py-24">
      <div className="container-custom max-w-4xl">
        <div className="flex flex-col gap-7 lg:gap-10">
          <header className="flex flex-col gap-3 text-center lg:gap-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sage-600">
              Appointment Request
            </p>
            <div className="flex flex-col gap-2.5 lg:gap-4">
              <h1 className="font-display text-3xl font-semibold leading-tight text-sage-900 md:text-4xl lg:text-5xl">
                Therapy Appointment Request
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Thank you for reaching out and taking this step toward your
                well-being. Please complete this confidential form so I can
                understand your needs and make it easier to schedule your first
                session.
              </p>
            </div>
          </header>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 lg:gap-5"
            aria-label="Appointment request form"
          >
            {appointmentFields.map((field) => {
              const error = errors[field.id];

              return (
                <div key={field.id} className={fieldShellClasses}>
                  <div className="flex flex-col gap-3 lg:gap-4">
                    <FieldLabel field={field} />

                    {field.type === "textarea" && (
                      <textarea
                        id={field.id}
                        name={field.id}
                        value={values[field.id]}
                        onChange={(event) =>
                          updateValue(field.id, event.target.value)
                        }
                        rows={4}
                        className={`${inputBaseClasses} resize-y`}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? `${field.id}-error` : undefined}
                      />
                    )}

                    {(field.type === "text" ||
                      field.type === "number" ||
                      field.type === "tel") && (
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        value={values[field.id]}
                        onChange={(event) =>
                          updateValue(field.id, event.target.value)
                        }
                        className={inputBaseClasses}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? `${field.id}-error` : undefined}
                      />
                    )}

                    {field.type === "radio" && field.options && (
                      <div
                        className="grid gap-2.5 sm:grid-cols-2 lg:gap-3"
                        role="radiogroup"
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? `${field.id}-error` : undefined}
                      >
                        {field.options.map((option) => {
                          const optionId = `${field.id}-${option}`;

                          return (
                            <label
                              key={option}
                              htmlFor={optionId}
                              className="flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border border-sage-200/70 bg-white px-4 py-3 text-sm font-medium text-sage-800 transition-all duration-300 hover:border-sage-900 hover:bg-sage-50"
                            >
                              <input
                                id={optionId}
                                name={field.id}
                                type="radio"
                                value={option}
                                checked={values[field.id] === option}
                                onChange={() => updateValue(field.id, option)}
                                className="h-4 w-4 accent-sage-600"
                              />
                              <span>{option}</span>
                            </label>
                          );
                        })}
                      </div>
                    )}

                    {field.type === "checkbox" && field.options && (
                      <label
                        htmlFor={field.id}
                        className="flex min-h-12 cursor-pointer items-start gap-3 rounded-2xl border border-sage-200/70 bg-white px-4 py-3 text-sm font-medium text-sage-800 transition-all duration-300 hover:border-sage-900 hover:bg-sage-50"
                      >
                        <input
                          id={field.id}
                          name={field.id}
                          type="checkbox"
                          value={field.options[0]}
                          checked={values[field.id] === field.options[0]}
                          onChange={(event) =>
                            updateValue(
                              field.id,
                              event.target.checked ? field.options?.[0] ?? "" : "",
                            )
                          }
                          className="mt-1 h-4 w-4 flex-shrink-0 accent-sage-600"
                          aria-invalid={Boolean(error)}
                          aria-describedby={error ? `${field.id}-error` : undefined}
                        />
                        <span>{field.options[0]}</span>
                      </label>
                    )}

                    {error && (
                      <p id={`${field.id}-error`} className="text-sm text-sage-700">
                        {error}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {formError && (
              <div
                className="rounded-2xl border border-sage-300 bg-sage-50 px-5 py-4 text-sm font-medium text-sage-800"
                role="alert"
              >
                {formError}
              </div>
            )}

            <div className="flex flex-col items-center gap-3 pt-2 lg:pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-sage-500 px-9 py-4 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit Appointment Request"}
              </button>
              <p className="text-center text-xs text-muted">
                Your information is confidential and will be reviewed personally.
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
