import Link from "next/link";
import { ArrowUpRight, Clock3, Instagram, MapPin, MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import styles from "./visit.module.css";

export function AboutSection() {
  return (
    <section id="sobre" className={styles.about} aria-labelledby="sobre-titulo">
      <div>
        <h2 id="sobre-titulo">Uma pausa deliciosa no coração de <i>Lambari.</i></h2>
        <p>No centro de Lambari, a Quintal Tropical reúne sorvetes, açaís e lanches para diferentes momentos do dia. Para uma pausa salgada, o Toast Caprese combina pão italiano tostado, burrata, tomate confit e manjericão.</p>
        <p>Se a vontade for de um doce, há pudim tradicional, brownie recheado e milk-shake de morango. Escolha seu favorito e venha nos visitar na Rua Garção Stockler.</p>
        <Link className="text-link" href="/cardapio">Ver o cardápio <ArrowUpRight size={16}/></Link>
      </div>
      <div className={styles.photos}>
        <figure>
          <div className={styles.photoSlot} role="img" aria-label="Espaço reservado para foto do interior da sorveteria" />
          <figcaption>Interior da sorveteria</figcaption>
        </figure>
        <figure>
          <div className={styles.photoSlot} role="img" aria-label="Espaço reservado para outra foto do interior da sorveteria" />
          <figcaption>Um cantinho do Quintal</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section id="visite" className={styles.visit} aria-labelledby="visite-titulo">
      <div>
        <h2 id="visite-titulo">Visite a <i>Quintal Tropical.</i></h2>
        <address>{business.address}</address>
        <dl className={styles.contacts}>
          <div><dt><Clock3 aria-hidden="true"/>Funcionamento</dt><dd>{business.hours}</dd></div>
          <div><dt><MessageCircle aria-hidden="true"/>WhatsApp</dt><dd><a href={business.whatsapp} target="_blank" rel="noreferrer">(35) 99835-3700</a></dd></div>
          <div><dt><Instagram aria-hidden="true"/>Instagram</dt><dd><a href={business.instagram} target="_blank" rel="noreferrer">@quintaltropicalsabores</a></dd></div>
          <div><dt><MapPin aria-hidden="true"/>Como chegar</dt><dd><a href={business.maps} target="_blank" rel="noreferrer">Abrir rota no Google Maps</a></dd></div>
        </dl>
      </div>
      <iframe className={styles.map} src={business.mapEmbed} title="Localização da Quintal Tropical no centro de Lambari" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"/>
    </section>
  );
}
