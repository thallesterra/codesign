import React from "react";
import { NavBar } from "../../components/navbar";
import imgMao from "../../assets/images/mao.png";
import "../../assets/css/home.css";

const Home = () => {
	return (
		<div className="bg-page pb-4">
			<NavBar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12 col-md-7">
						<img src={imgMao} alt="mão" className="img-mao" />
					</div>
					<div className="col-sm-12 col-md-5">
						<div className="row">
							<h1 className="title">Sobre o Jogo</h1>
						</div>
						<div className="row text mt-3 text-limit">
							<p className="pl-2 pr-2">
								Codesign é um jogo de cartas para 3 - 8+
								jogadores, criado pelos alunos da 25ª Turma do
								curso de Bacharel em Design na Universidade
								Federal de Minas Gerais para a disciplina de
								Introdução ao Design, inspirado no jogo
								Codenames de Vlaada Chvátil.{" "}
							</p>
							<p className="mt-3">
								Duas equipes competem, cada uma com um "mestre",
								dando pistas de uma palavra que pode apontar
								para várias cartas da mesa. Os outros jogadores
								da equipe tentam adivinhar as cartas de sua
								equipe, evitando as da outra equipe.
							</p>
						</div>
					</div>
				</div>
				<div className="row bg-white pb-5">
					<div className="col-12">
						<div className="row">
							<h1 className="title-black">Como Jogar</h1>
						</div>
						<div className="row mt-4">
							<h1 className="sub-title">Objetivo</h1>
							<p className="text-play mt-2">
								Fazer seu grupo descobrir todas as cartas que
								são do seu time.
							</p>
						</div>
						<div className="row mt-4">
							<h1 className="sub-title">Regras</h1>
							<p className="text-play mt-2">
								Os jogadores devem ser divididos em dois times
								(Gráfico e Produto). Começa-se o jogo
								distribuindo, em ordem aleatória pela mesa, 25
								cartas relacionadas à história do Design. Elas
								são organizadas em uma matriz de 5x5 cartas, com
								as palavras viradas para cima.
							</p>
							<p className="text-play mt-2">
								Depois, apenas os Mestres de cada time recebem
								um “mapa” que indica quais das 25 cartas são do
								seu time, quais representam o “passa a vez” e
								qual delas representa a “perde a partida”.
							</p>
							<p className="text-play mt-2">
								Em sua rodada, o Mestre deve dar uma dica para
								as pessoas do seu time descobrirem quais cartas
								são do seu grupo, utilizando códigos ou
								codinomes associados à carta, ou seja, sem
								revelar qual carta é de forma literal. Por
								exemplo, se a carta é uma obra de Mondrian, a
								dica poderia ser “Geometria 1”, porém essa dica
								também pode estar relacionada ao movimento Art
								Deco e também ao Cubismo, assim, o mestre deve
								pensar bem na dica para que a carta em mente
								seja a escolhida pelo seu time. Sempre evitando,
								é claro, que eles chutem cartas erradas (time
								adversário) ou que escolham sem querer o “perde
								a rodada”.
							</p>
							<p className="text-play mt-2">
								A dica que o Mestre dá, tem que ser uma única
								palavra e um número. A palavra deve ser
								associada às cartas da mesa que o mestre quer
								que o time descubra, e o número indicando
								quantas cartas são.
							</p>
						</div>
						<div className="row mt-4">
							<h1 className="sub-title">
								Relação com a disciplina
							</h1>
							<p className="text-play mt-2">
								Uma das melhores formas de aprender algo é se
								divertindo e a ideia com o jogo é justamente
								essa, promover o conhecimento da História do
								Design brincando.
							</p>
							<p className="text-play mt-2">
								Como as cartas estão relacionadas a diversos
								Designers, Movimentos e Obras da História do
								Design, os mestres devem dar dicas relacionadas
								a elas e tem vantagem o grupo que tem mais
								conhecimento sobre o assunto.
							</p>
							<p className="text-play mt-2">
								Desse modo, quanto mais se joga, mais o time
								aprende sobre os temas das cartas, e mais
								profundas vão se tornando as dicas sobre a
								História do Design. Mesmo quem não conhece nada
								sobre esse nicho pode jogar, pois as dicas são
								dadas a partir da criatividade e dedução de cada
								um.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Home };
