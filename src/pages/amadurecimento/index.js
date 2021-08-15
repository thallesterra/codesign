import React from "react";
import { Accordion } from "../../components/accordions";
import { NavBar } from "../../components/navbar";

const Amadurecimento = () => {
	const props = {
		movimentos: [
			{
				path: "/amadurecimento-do-design/moderno-japones",
				title: "Moderno Japonês",
			},
			{
				path: "/amadurecimento-do-design/movimento-memphis",
				title: "Movimento Memphis",
			},
			{
				path: "/amadurecimento-do-design/movimento-mod",
				title: "Movimento Mod",
			},
			{
				path: "/amadurecimento-do-design/movimento-new-wavr",
				title: "Movimento New Wavr",
			},
			{
				path: "/amadurecimento-do-design/movimento-psicodelico",
				title: "Movimento Psicodélico",
			},
			{
				path: "/amadurecimento-do-design/movimento-punk",
				title: "Movimento Punk",
			},
			{
				path: "/amadurecimento-do-design/op-art",
				title: "Op Art",
			},
		],
		pessoas: [
			{
				path: "/amadurecimento-do-design/david-carson",
				title: "David Carson",
			},
			{
				path: "/amadurecimento-do-design/jamie-reid",
				title: "Jamie Reid",
			},
			{
				path: "/amadurecimento-do-design/verner-panton",
				title: "Verner Panton",
			},
			{
				path: "/amadurecimento-do-design/wes-wilson",
				title: "Wes Wilson",
			},
		],
		obras: [
			{
				path: "/amadurecimento-do-design/cadeira-sao-paulo",
				title: "Cadeira São Paulo",
			},
			{
				path: "/amadurecimento-do-design/estante-carlton",
				title: "Estante Carlton",
			},
			{
				path: "/amadurecimento-do-design/lava-lamp",
				title: "Lava Lamp",
			},
			{
				path: "/amadurecimento-do-design/the-sound",
				title: "The Sound",
			},
			{
				path: "/amadurecimento-do-design/vespa-lambreta",
				title: "Vespa/Lambreta",
			},
		],
		style: "amadurecimento-design",
	};
	return (
		<div className="bg-page pb-4">
			<NavBar />
			<Accordion {...props} />
		</div>
	);
};

export { Amadurecimento };
