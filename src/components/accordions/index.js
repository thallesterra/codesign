import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/accordion.css";

const Accordion = (props) => {
	return (
		<div className={`container-${props.style}`}>
			<div className="container container-height pt-5">
				<div className="row">
					<div className="col-4">
						<div className="accordion" id="accordionExample">
							<div className="accordion-item">
								<h2
									className="accordion-header"
									id="headingOne"
								>
									<button
										className={`accordion-button collapsed text-${props.style}`}
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="false"
										aria-controls="collapseOne"
									>
										<i className="far fa-bookmark mr-3" />
										Movimentos e Estilos
									</button>
								</h2>
								<div
									id="collapseOne"
									className="accordion-collapse collapse"
									aria-labelledby="headingOne"
									data-bs-parent="#accordionExample"
								>
									<div
										className={`accordion-body bg-${props.style}`}
									>
										{props.movimentos.map((mov, index) => (
											<Link key={index} to={mov.path}>
												{mov.title}
												<i className="fas fa-external-link-alt" />
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="accordion" id="accordionTwoExample">
							<div className="accordion-item">
								<h2
									className="accordion-header"
									id="headingTwo"
								>
									<button
										className={`accordion-button collapsed text-${props.style}`}
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo"
									>
										<i className="fas fa-user-friends" />
										Pessoas
									</button>
								</h2>
								<div
									id="collapseTwo"
									className="accordion-collapse collapse"
									aria-labelledby="headingTwo"
									data-bs-parent="#accordionTwoExample"
								>
									<div
										className={`accordion-body bg-${props.style}`}
									>
										{props.pessoas.map((pes, index) => (
											<Link key={index} to={pes.path}>
												{pes.title}
												<i className="fas fa-external-link-alt" />
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="accordion" id="accordionThreeExample">
							<div className="accordion-item">
								<h2
									className="accordion-header"
									id="headingThree"
								>
									<button
										className={`accordion-button collapsed text-${props.style}`}
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseThree"
										aria-expanded="false"
										aria-controls="collapseThree"
									>
										<i className="fas fa-cubes" />
										Obras
									</button>
								</h2>
								<div
									id="collapseThree"
									className="accordion-collapse collapse"
									aria-labelledby="headingThree"
									data-bs-parent="#accordionThreeExample"
								>
									<div
										className={`accordion-body bg-${props.style}`}
									>
										{props.obras.map((obr, index) => (
											<Link key={index} to={obr.path}>
												{obr.title}
												<i className="fas fa-external-link-alt" />
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Accordion };
