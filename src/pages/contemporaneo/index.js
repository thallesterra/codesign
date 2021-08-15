import React from "react";
import { Accordion } from "../../components/accordions";
import { NavBar } from "../../components/navbar";

const Contemporaneo = () => {
	const props = {
		movimentos: [
			{
				path: "/design-contemporaneo/design-sustentavel",
				title: "Design Sustentável",
			},
			{
				path: "/design-contemporaneo/movimento-minimalista",
				title: "Movimento Minimalista",
			},
			{
				path: "/design-contemporaneo/movimento-superflat",
				title: "Movimento Superflat",
			},
			{
				path: "/design-contemporaneo/new-media",
				title: "New Media",
			},
			{
				path: "/design-contemporaneo/street-art",
				title: "Street Art",
			},
		],
		pessoas: [
			{
				path: "/design-contemporaneo/eddie-opara",
				title: "Eddie Opara",
			},
			{
				path: "/design-contemporaneo/gail-anderson",
				title: "Gail Anderson",
			},
			{
				path: "/design-contemporaneo/jader-almeida",
				title: "Jader Almeida",
			},
			{
				path: "/design-contemporaneo/jonathan-ive",
				title: "Jonathan Ive",
			},
			{
				path: "/design-contemporaneo/karim-rashid",
				title: "Karim Rashid",
			},
			{
				path: "/design-contemporaneo/kenichiro-ashida",
				title: "Kenichiro Ashida",
			},
			{
				path: "/design-contemporaneo/stefan-sagmeister",
				title: "Stefan Sagmeister",
			},
			{
				path: "/design-contemporaneo/wally-olins",
				title: "Wally Olins",
			},
		],
		obras: [
			{
				path: "/design-contemporaneo/cadeira-bossa",
				title: "Cadeira Bossa",
			},
			{
				path: "/design-contemporaneo/lixeira-garbino",
				title: "Lixeira Garbino",
			},
			{
				path: "/design-contemporaneo/oculo-reciclado",
				title: "Óculo Reciclado",
			},
		],
		style: "contemporaneo-design",
	};
	return (
		<div className="bg-page pb-4">
			<NavBar />
			<Accordion {...props} />
		</div>
	);
};

export { Contemporaneo };
