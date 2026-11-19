"use client";

import { useState } from "react";
import Image from "next/image";
import { Leaf, List, Orbit, Search } from "lucide-react";
import { categories, displayPrice, money, products } from "@/data/products";
import DishOrbitCarousel from "./ui/dish-orbit-carousel";

export default function MenuExplorer({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState(categories[0]);
  const [experience, setExperience] = useState(true);
  const [query, setQuery] = useState("");
  const items = products.filter(item => item.category === category);
  const matches = items.filter(item => item.name.toLocaleLowerCase("pt-BR").includes(query.trim().toLocaleLowerCase("pt-BR")));

  const carousel = <DishOrbitCarousel category={category} onCategoryChange={setCategory}/>;
  if (preview) return carousel;

  return <>
    <div className="menu-controls">
      {!experience && <div className="category-scroll" aria-label="Categorias">{categories.map(name =>
        <button key={name} aria-pressed={name === category} className={name === category ? "selected" : ""}
          onClick={() => setCategory(name)}>{name}</button>)}</div>}
      <div className="mode-switch">
        <button aria-pressed={!experience} className={!experience ? "active" : ""} onClick={() => setExperience(false)}><List size={16}/> Catálogo</button>
        <button aria-pressed={experience} className={experience ? "active" : ""} onClick={() => setExperience(true)}><Orbit size={16}/> Experiência</button>
      </div>
    </div>
    {experience ? carousel : <>
      <label className="search-box"><Search size={18}/><input aria-label="Buscar produto nesta categoria" value={query}
        placeholder="Buscar nesta categoria" onChange={event => setQuery(event.target.value)}/><span>{matches.length} itens</span></label>
      <div className="catalog-grid">{matches.map(item =>
        <article className="catalog-item" key={item.id}>
          <div className="catalog-art">{item.image ? <Image src={item.image} alt={item.name} width={320} height={230}/> : <Leaf/>}</div>
          <div className="catalog-info"><div><h2>{item.name}</h2><p>{item.description}</p></div><b>{displayPrice(item)}</b></div>
          {item.options && <p className="sizes">{item.options.map(option => <span key={option.name}>{option.name} · {money(option.price)}</span>)}</p>}
        </article>)}</div>
      {!matches.length && <p className="empty-state">Nenhum produto encontrado. Escolha outra categoria ou ajuste a busca.</p>}
    </>}
  </>;
}
