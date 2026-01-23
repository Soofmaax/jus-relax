const { getReservationInfo } = require("../src/lib/reservation");

describe("getReservationInfo", () => {
  test("privilégie WhatsApp quand disponible", () => {
    const contact = {
      phoneMain: "01 23 45 67 89",
      whatsapp: "+33 6 12 34 56 78",
      bookingUrl: "https://booking.example.com",
    };

    const result = getReservationInfo(contact);

    expect(result.href).toBe("https://wa.me/33612345678");
    expect(result.label).toBe("Réserver sur WhatsApp");
    expect(result.target).toBe("_blank");
    expect(result.rel).toBe("noreferrer");
  });

  test("retombe sur l'URL de réservation si pas de WhatsApp", () => {
    const contact = {
      phoneMain: "01 23 45 67 89",
      whatsapp: "",
      bookingUrl: "https://booking.example.com",
    };

    const result = getReservationInfo(contact);

    expect(result.href).toBe("https://booking.example.com");
    expect(result.label).toBe("Réserver en ligne");
    expect(result.target).toBe("_blank");
    expect(result.rel).toBe("noreferrer");
  });

  test("retombe sur le téléphone si aucun canal en ligne", () => {
    const contact = {
      phoneMain: "01 23 45 67 89",
      whatsapp: "",
      bookingUrl: "",
    };

    const result = getReservationInfo(contact);

    expect(result.href).toBe("tel:0123456789");
    expect(result.label).toBe("Réserver par téléphone");
  });
});