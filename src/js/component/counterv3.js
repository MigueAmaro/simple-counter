import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function SecondsCounter1(props) {
	return (
		<div id="app">
			<div className="counter">
				<div>
					<i className="fa fa-clock" />
				</div>
				<div className="Fourth">{props.fourthSeconds}</div>
				<div className="Third">{props.thirdSeconds}</div>
				<div className="Second">{props.secondSeconds}</div>
				<div className="First">{props.firstSeconds}</div>
			</div>
		</div>
	);
}

SecondsCounter1.propTypes = {
	fourthSeconds: PropTypes.number,
	thirdSeconds: PropTypes.number,
	secondSeconds: PropTypes.number,
	firstSeconds: PropTypes.number,
};
const [counter, setSeconds] = useState(0);
const [paused, setPaused] = useState(false);

setInterval(function () {
	const fourth = Math.floor((counter / 1000) % 10);
	const third = Math.floor((counter / 100) % 10);
	const second = Math.floor((counter / 10) % 10);
	const first = Math.floor((counter / 1) % 10);
	counter++;
	ReactDOM.render(
		<SecondsCounter
			fourthSeconds={fourth}
			thirdSeconds={third}
			secondSeconds={second}
			firstSeconds={first}
		/>,
		document.querySelector("#app")
	);
}, 1000);
