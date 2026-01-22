import type { JustRelaxData } from "@/lib/just-relax-schema";

export interface ReservationInfo {
  href: string;
  label: string;
  target?: "_blank";
  rel?: string;
}

/**
 * Centralise la logique de choix du canal de réservation
 * (WhatsApp, URL de réservation, téléphone).
 */
export function getReservationInfo(
  contact: JustRelaxData["contact"]
): ReservationInfo {
  const phoneHref = contact.phoneMain
    ? `tel:${contact.phoneMain.replace(/\s+/g, "")}`
    : "#";

  const hasWhatsapp = !!contact.whatsapp && contact.whatsapp.trim().length > 0;
  const hasBookingUrl =
    !!contact.bookingUrl && contact.bookingUrl.trim().length > 0;

  const whatsappHref = hasWhatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`
    : undefined;

  const bookingHref = hasBookingUrl ? contact.bookingUrl : undefined;

  if (hasWhatsapp && whatsappHref) {
    return {
      href: whatsappHref,
      label: "Réserver sur WhatsApp",
      target: "_blank",
      rel: "noreferrer",
    };
  }

  if (hasBookingUrl && bookingHref) {
    return {
      href: bookingHref,
      label: "Réserver en ligne",
      target: "_blank",
      rel: "noreferrer",
    };
  }

  return {
    href: phoneHref,
    label: "Réserver par téléphone",
  };
}