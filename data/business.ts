const address = "Rua Garção Stockler, 206 — Centro — Lambari, Minas Gerais";
const destination = encodeURIComponent(address);

export const business = {
  name: "Quintal Tropical Sabores",
  slogan: "Sabores para deixar seu dia mais gostoso.",
  address,
  hours: "Todos os dias, das 9h às 19h30",
  whatsapp: "https://wa.me/5535998353700",
  instagram: "https://www.instagram.com/quintaltropicalsabores/",
  maps: `https://www.google.com/maps/dir/?api=1&destination=${destination}`,
  mapEmbed: `https://maps.google.com/maps?q=${destination}&hl=pt-BR&z=17&output=embed`,
};
