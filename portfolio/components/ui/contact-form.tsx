"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  reason: z.enum(["collaboration", "hiring", "question", "other"]).refine(
    (val) => ["collaboration", "hiring", "question", "other"].includes(val),
    { message: "Please select a reason" }
  ),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must be under 2000 characters"),
  honeypot: z.string().max(0).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const REASON_OPTIONS = [
  { value: "collaboration", label: "Project collaboration" },
  { value: "hiring", label: "Hiring opportunity" },
  { value: "question", label: "Engineering question" },
  { value: "other", label: "Something else" },
];

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const messageValue = watch("message", "");

  async function onSubmit(data: ContactFormData) {
    if (data.honeypot) return;

    setFormState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setFormState("success");
      reset();
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <p className="font-display font-semibold text-lg text-foreground">Message sent</p>
          <p className="text-sm text-muted-foreground mt-1">
            Thanks for reaching out. I'll be in touch within a few days.
          </p>
        </div>
        <button
          onClick={() => setFormState("idle")}
          className="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      aria-label="Contact form"
    >
      {/* Honeypot */}
      <input
        {...register("honeypot")}
        type="text"
        autoComplete="off"
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name <span className="text-destructive" aria-label="required">*</span>
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(
              "w-full px-3 py-2 rounded-lg border bg-background text-sm",
              "placeholder:text-muted-foreground/60",
              "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors",
              errors.name ? "border-destructive" : "border-border"
            )}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-destructive flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email <span className="text-destructive" aria-label="required">*</span>
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(
              "w-full px-3 py-2 rounded-lg border bg-background text-sm",
              "placeholder:text-muted-foreground/60",
              "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors",
              errors.email ? "border-destructive" : "border-border"
            )}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-destructive flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Organization */}
        <div className="space-y-1.5">
          <label htmlFor="organization" className="text-sm font-medium text-foreground">
            Organization{" "}
            <span className="text-muted-foreground text-xs font-normal">(optional)</span>
          </label>
          <input
            {...register("organization")}
            id="organization"
            type="text"
            autoComplete="organization"
            placeholder="Company or institution"
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors"
          />
        </div>

        {/* Reason */}
        <div className="space-y-1.5">
          <label htmlFor="reason" className="text-sm font-medium text-foreground">
            Reason <span className="text-destructive" aria-label="required">*</span>
          </label>
          <select
            {...register("reason")}
            id="reason"
            aria-invalid={!!errors.reason}
            aria-describedby={errors.reason ? "reason-error" : undefined}
            className={cn(
              "w-full px-3 py-2 rounded-lg border bg-background text-sm",
              "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors",
              "cursor-pointer",
              errors.reason ? "border-destructive" : "border-border"
            )}
          >
            <option value="">Select a reason</option>
            {REASON_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.reason && (
            <p id="reason-error" className="text-xs text-destructive flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.reason.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message <span className="text-destructive" aria-label="required">*</span>
          </label>
          <span className="text-xs text-muted-foreground">
            {messageValue.length}/2000
          </span>
        </div>
        <textarea
          {...register("message")}
          id="message"
          rows={6}
          placeholder="Describe the project, role, or question. The more context you share, the more useful my response can be."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "w-full px-3 py-2 rounded-lg border bg-background text-sm resize-y min-h-32",
            "placeholder:text-muted-foreground/60",
            "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors",
            errors.message ? "border-destructive" : "border-border"
          )}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Privacy note */}
      <p className="text-xs text-muted-foreground">
        Your information will be used only to respond to your message. I will not share it
        with third parties or add you to any mailing list.
      </p>

      {/* Error state */}
      {formState === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Something went wrong. Please try again or email directly.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "loading"}
        className={cn(
          "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg",
          "bg-primary text-primary-foreground text-sm font-medium",
          "hover:bg-primary/90 transition-colors",
          "disabled:opacity-60 disabled:cursor-not-allowed"
        )}
        aria-busy={formState === "loading"}
      >
        {formState === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
