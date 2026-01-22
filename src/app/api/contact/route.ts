import { NextResponse } from "next/server";

const MIN_RESPONSE_DELAY_MS = 600;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(request: Request) {
  const start = Date.now();

  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
      website?: string; // honeypot
    };

    const { name, email, message, website } = body ?? {};

    // Honeypot rempli => probablement un bot : on répond "succès" mais on ignore.
    if (typeof website === "string" && website.trim().length > 0) {
      const elapsed = Date.now() - start;
      if (elapsed < MIN_RESPONSE_DELAY_MS) {
        await wait(MIN_RESPONSE_DELAY_MS - elapsed);
      }
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      const elapsed = Date.now() - start;
      if (elapsed < MIN_RESPONSE_DELAY_MS) {
        await wait(MIN_RESPONSE_DELAY_MS - elapsed);
      }
      return NextResponse.json(
        {
          success: false,
          error:
            "Merci de renseigner au minimum votre nom, votre e-mail et votre message.",
        },
        { status: 400 }
      );
    }

    // Ici on pourrait envoyer un e-mail ou stocker la demande.
    // Pour cette version, on se contente de simuler un traitement réussi.
    const elapsed = Date.now() - start;
    if (elapsed < MIN_RESPONSE_DELAY_MS) {
      await wait(MIN_RESPONSE_DELAY_MS - elapsed);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    const elapsed = Date.now() - start;
    if (elapsed < MIN_RESPONSE_DELAY_MS) {
      await wait(MIN_RESPONSE_DELAY_MS - elapsed);
    }
    return NextResponse.json(
      {
        success: false,
        error:
          "Impossible de traiter la demande pour le moment. Merci de réessayer plus tard.",
      },
      { status: 500 }
    );
  }
}