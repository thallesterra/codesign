import React from "react";
import { Accordion } from "../../components/accordions";
import { NavBar } from "../../components/navbar";

const Inicio = () => {
	const props = {
		movimentos: [
			{ path: "/inicio-do-design/art-deco", title: "Art Deco" },
			{
				path: "/inicio-do-design/escola bauhaus",
				title: "Escola Bauhaus",
			},
		],
		pessoas: [
			{
				path: "/inicio-do-design/charles-e-ray-eames",
				title: "Charles e Ray Eames",
			},
			{
				path: "/inicio-do-design/charlotte-perriand",
				title: "Charlotte Perriand",
			},
			{
				path: "/inicio-do-design/eileen-gray",
				title: "Eileen Gray",
			},
			{
				path: "/inicio-do-design/florence-knoll",
				title: "Florence Knoll",
			},
			{
				path: "/inicio-do-design/gabrielle-chanel",
				title: "Gabrielle Chanel",
			},
			{
				path: "/inicio-do-design/madeleine-vionnet",
				title: "Madeleine Vionnet",
			},
			{
				path: "/inicio-do-design/norman-bel-geddes",
				title: "Norman Bel Geddes",
			},
			{
				path: "/inicio-do-design/paul-renner",
				title: "Paul Renner",
			},
			{
				path: "/inicio-do-design/Peter-bherens",
				title: "Peter Bherens",
			},
		],
		obras: [
			{
				path: "/inicio-do-design/bar-jacket",
				title: "Bar Jacket",
			},
			{
				path: "/inicio-do-design/chaise-LC4",
				title: "Chaise LC4",
			},
			{
				path: "/inicio-do-design/luminaria-le-poing",
				title: "Luminária Le Poing",
			},
			{
				path: "/inicio-do-design/times-new-roman",
				title: "Times New Roman",
			},
			{
				path: "/inicio-do-design/vestido-infanta",
				title: "Vestido Infanta",
			},
		],
		style: "inicio-design",
	};
	return (
		<div className="bg-page pb-4">
			<NavBar />
			<Accordion {...props} />
		</div>
	);
};

export { Inicio };
