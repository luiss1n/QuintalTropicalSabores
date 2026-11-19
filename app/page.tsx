import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Menu as MenuIcon } from "lucide-react";
import { business } from "@/data/business";
import MenuExplorer from "@/components/MenuExplorer";
import { AboutSection, LocationSection } from "@/components/VisitSections";

function Header(){return <header className="header"><a className="brand" href="#inicio"><Image src="/images/brand/logo.png" alt="Quintal Tropical Sabores" width={54} height={54}/><span>QUINTAL<br/><b>TROPICAL</b></span></a><nav><a href="#inicio">Início</a><a href="#sabores">Sabores</a><a href="#sobre">Sobre</a><a href="#visite">Localização</a></nav><a className="header-cta" href={business.whatsapp} target="_blank" rel="noreferrer">Fale conosco <ArrowUpRight size={15}/></a><details className="phone-menu"><summary aria-label="Menu de navegação"><MenuIcon/></summary><div>{[["/#inicio","Início"],["/cardapio","Cardápio"],["/#sobre","Sobre"],["/#visite","Localização"],[business.whatsapp,"WhatsApp"]].map(([url,label])=><a key={url} href={url}>{label}</a>)}</div></details></header>}
export default function Home(){return <><Header/><main><section id="inicio" className="hero"><div className="hero-copy"><p className="eyebrow">UM QUINTAL DE SABORES · LAMBARI, MG</p><h1>Sabores para<br/>deixar seu dia<br/><i>mais gostoso.</i></h1><p className="lead">Sorvetes, açaís, lanches e pequenos momentos para saborear.</p><div className="hero-actions"><Link className="button button-dark" href="/cardapio">Explore nosso cardápio <ArrowUpRight size={17}/></Link><a className="text-link" href={business.maps} target="_blank" rel="noreferrer">Como chegar <ArrowDown size={15}/></a></div></div><div className="hero-visual"><div className="sun-disc"/><Image className="hero-icecream" src="/images/hero/morango.webp" alt="Casquinha com duas bolas de sorvete rosa e um morango fresco" width={1024} height={1536} sizes="(max-width: 800px) 85vw, 46vw" priority/></div></section>
<section id="sabores" className="menu-intro section-pad"><div className="section-heading"><p className="eyebrow">O CARDÁPIO</p><h2>Descubra seu próximo<br/><i>sabor favorito.</i></h2></div><div className="menu-aside"><p>Um convite para escolher com calma. Explore as categorias e encontre algo gostoso para o seu momento.</p><Link className="text-link" href="/cardapio">Explorar cardápio completo <ArrowUpRight size={16}/></Link></div><div style={{clear:"both",paddingTop:"2rem"}}><MenuExplorer preview/></div></section>
<AboutSection/>
<section className="reviews section-pad" aria-labelledby="reviews-title">
  <h2 id="reviews-title">Avaliações de clientes</h2>
  <p>Exemplos fictícios para demonstração.</p>
  <div className="review-list">
    <blockquote>“Adorei a combinação de burrata e tomate no Toast Caprese.”</blockquote>
    <blockquote>“Escolhi o empadão de palmito e deixei espaço para o pudim.”</blockquote>
    <blockquote>“O milk-shake de morango foi minha escolha para a pausa da tarde.”</blockquote>
  </div>
</section>
<LocationSection/></main><footer className="site-footer">
  <div className="footer-columns">
    <div><a className="brand brand-light" href="#inicio"><Image src="/images/brand/logo.png" alt="" width={54} height={54}/><span>QUINTAL<br/><b>TROPICAL</b></span></a><p>{business.slogan}</p></div>
    <nav aria-label="Rodapé"><h2>Explore</h2><Link href="/cardapio">Cardápio</Link><a href="#sobre">Sobre a Quintal</a><a href="#visite">Como chegar</a></nav>
    <div><h2>Visite a loja</h2><address>{business.address}</address><p>{business.hours}</p></div>
    <div><h2>Converse com a gente</h2><a href={business.whatsapp}>WhatsApp</a><a href={business.instagram}>Instagram</a></div>
  </div>
  <small>© {new Date().getFullYear()} Quintal Tropical Sabores <a href="https://lszdev.com.br">Desenvolvido por LSZDEV</a></small>
</footer></>}
