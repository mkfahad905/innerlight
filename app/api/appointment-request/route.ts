import { NextResponse } from "next/server";
import {
  appointmentFields,
  GOOGLE_FORM_RESPONSE_URL,
} from "@/lib/appointmentForm";

type AppointmentPayload = {
  values?: Record<string, unknown>;
};

const isValidStatus = (status: number) =>
  (status >= 200 && status < 300) || status === 302 || status === 303;

export async function POST(request: Request) {
  let payload: AppointmentPayload;

  try {
    payload = (await request.json()) as AppointmentPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid form submission." },
      { status: 400 },
    );
  }

  const values = payload.values ?? {};
  const errors: Record<string, string> = {};
  const formData = new URLSearchParams();

  for (const field of appointmentFields) {
    const rawValue = values[field.id];
    const value = typeof rawValue === "string" ? rawValue.trim() : "";

    if (field.required && !value) {
      errors[field.id] = "This field is required.";
      continue;
    }

    if (value && field.options && !field.options.includes(value)) {
      errors[field.id] = "Please choose a valid option.";
      continue;
    }

    if (value) {
      formData.append(`entry.${field.entryId}`, value);
    }
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please complete all required fields.", errors },
      { status: 400 },
    );
  }

  formData.append("fvv", "1");
  formData.append("pageHistory", "0");
  formData.append("submit", "Submit");

  try {
    const response = await fetch(GOOGLE_FORM_RESPONSE_URL, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      redirect: "manual",
      cache: "no-store",
    });

    if (!isValidStatus(response.status)) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Your form could not be submitted right now. Please try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Your form could not be submitted right now. Please try again.",
      },
      { status: 502 },
    );
  }
}
