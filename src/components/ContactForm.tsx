"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string; // honeypot
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const updateField =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Impossible d'envoyer le message pour le moment. Merci de réessayer."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-sm" noValidate>
      {/* Champ honeypot (anti-spam) */}
      <div className="hidden">
        <label htmlFor="website" className="block text-xs font-medium text-slate-200">
          Site web (laisser vide)
        </label>
        <input
          id="website"
          name="website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          value={form.website}
          onChange={updateField("website")}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-[#6b5d4f]">
          Nom
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={updateField("name")}
          className="mt-1 w-full rounded-xl border border-[#d4c5b0] bg-[#faf8f3] px-3 py-2 text-sm text-[#2d2416] outline-none ring-[#d946a6]/0 transition focus:border-[#d946a6] focus:ring-2"
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-[#6b5d4f]">
          E-mail
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={updateField("email")}
          className="mt-1 w-full rounded-xl border border-[#d4c5b0] bg-[#faf8f3] px-3 py-2 text-sm text-[#2d2416] outline-none ring-[#d946a6]/0 transition focus:border-[#d946a6] focus:ring-2"
          placeholder="votre@email.com"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-[#6b5d4f]">
          Téléphone
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={updateField("phone")}
          className="mt-1 w-full rounded-xl border border-[#d4c5b0] bg-[#faf8f3] px-3 py-2 text-sm text-[#2d2416] outline-none ring-[#d946a6]/0 transition focus:border-[#d946a6] focus:ring-2"
          placeholder="Votre numéro"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-[#6b5d4f]">
          Objet
        </label>
        <input
          type="text"
          value={form.subject}
          onChange={updateField("subject")}
          className="mt-1 w-full rounded-xl border border-[#d4c5b0] bg-[#faf8f3] px-3 py-2 text-sm text-[#2d2416] outline-none ring-[#d946a6]/0 transition focus:border-[#d946a6] focus:ring-2"
          placeholder="Réservation, événement, autre..."
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-[#6b5d4f]">
          Message
        </label>
        <textarea
          rows={4}
          required
          value={form.message}
          onChange={updateField("message")}
          className="mt-1 w-full rounded-xl border border-[#d4c5b0] bg-[#faf8f3] px-3 py-2 text-sm text-[#2d2416] outline-none ring-[#d946a6]/0 transition focus:border-[#d946a6] focus:ring-2"
          placeholder="Votre message..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#d946a6] px-4 py-2 text-xs font-semibold text-white shadow-sm ring-1 ring-[#f472b6]/70 transition hover:bg-[#f472b6] hover:ring-[#fce7f3] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Envoi en cours..." : "Envoyer"}
      </button>
      {status === "success" && (
        <p className="text-[11px] text-[#5a7a52]">
          Merci, votre message a bien été envoyé. Nous vous répondrons au plus vite.
        </p>
      )}
      {status === "error" && error && (
        <p className="text-[11px] text-[#d946a6]">
          {error}
        </p>
      )}
    </form>
  );
}