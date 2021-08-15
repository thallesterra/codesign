import React from "react";
import { Accordion } from "../../components/accordions";
import { NavBar } from "../../components/navbar";

const Antes = () => {
	const props = {
		movimentos: [
			{ path: "/antes-do-design/art-nouveau", title: "Art Nouveau" },
			{
				path: "/antes-do-design/arts-&-crafts",
				title: "Arts & Crafts",
			},
			{
				path: "/antes-do-design/early-modern",
				title: "Early Modern",
			},
			{
				path: "/antes-do-design/era-vitoriana",
				title: "Era Vitoriana",
			},
			{
				path: "/antes-do-design/estilo-jugendstil",
				title: "Estilo Jugendstil",
			},
			{
				path: "/antes-do-design/invencao-da-imprensa",
				title: "Invenção da Imprensa",
			},
		],
		pessoas: [
			{
				path: "/antes-do-design/augustus-pugin",
				title: "Augustus Pugin",
			},
			{
				path: "/antes-do-design/hector-guimard",
				title: "Hector Guimard",
			},
			{
				path: "/antes-do-design/john-ruskin",
				title: "John Ruskin",
			},
			{
				path: "/antes-do-design/joseph-olbrich",
				title: "Joseph Olbrich",
			},
			{
				path: "/antes-do-design/leonardo-da-vinci",
				title: "Leonardo da Vinci",
			},
			{
				path: "/antes-do-design/william-morris",
				title: "William Morris",
			},
		],
		obras: [
			{
				path: "/antes-do-design/casa-ernst-ludwig",
				title: "Casa Ernst Ludwig",
			},
			{
				path: "/antes-do-design/casa-vermelha",
				title: "Casa Vermelha",
			},
			{
				path: "/antes-do-design/homem-vitruviano",
				title: "Homem Vitruviano",
			},
			{
				path: "/antes-do-design/sagrada-familia",
				title: "Sagrada Família",
			},
		],
		style: "antes-design",
	};
	return (
		<div className="bg-page pb-4">
			<NavBar />
			<Accordion {...props} />
		</div>
	);
};

export { Antes };
