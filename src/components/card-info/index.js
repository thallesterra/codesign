import React from "react";
import { NavBar } from "../navbar";
import "../../assets/css/accordion.css";

const CardInfo = (props) => {
	console.log(props);
	return (
		<div className="bg-page pb-4">
			<NavBar />
			<div className={`container-${props.style}`}>
				<div className="container container-height pt-5">
					<div className={`row row-title text-${props.style}`}>
						{props.title}
					</div>
					<div className="row text-info">
						<label>{props.info}</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export { CardInfo };
