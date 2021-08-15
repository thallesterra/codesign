import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-light bg-nav-primary">
				<div className="container-fluid">
					<div className="row-custom text-center mt-4 mb-4">
						<Link className="navbar-brand  text-uppercase" to="/">
							Codesign
						</Link>
					</div>
				</div>
			</nav>
			<nav className="navbar navbar-expand-lg navbar-light bg-nav-secondary pt-3 pb-3">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav margin-center">
							<li className="nav-item">
								<Link
									className="nav-link text-uppercase"
									to="/antes-do-design"
								>
									Antes do Design
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link text-uppercase"
									aria-current="page"
									to="/inicio-do-design"
								>
									Início do Design
								</Link>
							</li>

							<li className="nav-item">
								<Link
									className="nav-link active text-uppercase"
									to="/"
								>
									O Jogo
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link text-uppercase"
									to="/amadurecimento-do-design"
								>
									Amadurecimento do Design
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link text-uppercase"
									to="/design-contemporaneo"
								>
									Design Contemporâneo
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export { NavBar };
