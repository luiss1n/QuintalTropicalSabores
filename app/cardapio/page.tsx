import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MenuExplorer from "@/components/MenuExplorer";
export const metadata={title:"Cardápio | Quintal Tropical Sabores",description:"Explore o cardápio da Quintal Tropical Sabores em Lambari, MG."};
export default function Cardapio(){return <main className="menu-page"><header className="menu-page-head"><Link href="/" className="text-link"><ArrowLeft size={16}/> Voltar ao início</Link><p className="eyebrow">QUINTAL TROPICAL · LAMBARI</p><h1>Um mundo de<br/><i>sabores.</i></h1><p>Escolha uma categoria e encontre seu próximo momento gostoso.</p></header><MenuExplorer/></main>}
