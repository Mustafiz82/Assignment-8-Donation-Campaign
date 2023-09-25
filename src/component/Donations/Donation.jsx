import React from "react";
import { Link } from "react-router-dom";

const Donation = ({ item }) => {
	const {
		title,
		image,
		cardColor,
		buttonBackgroundColor,
		textColor,
		categoryBackgroundColor,
		category,
		id,
	} = item;

	console.log(
		cardColor,
		buttonBackgroundColor,
		textColor,
		categoryBackgroundColor
	);

	const cardStyle = {
		backgroundColor: cardColor,
	};

	const buttonStyle = {
		backgroundColor: buttonBackgroundColor,
		color: textColor,
	};

	return (
		<div>
			<Link to={`/Donation/${id}`}>
				<div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
					<div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border  shadow-none">
						<img
							src={image}
							alt={title}
						/>
					</div>
					<div
						className={`p-6 space-y-4 `}
						style={cardStyle}
					>
						<button
							className={`btn  text-sm `}
							style={buttonStyle}
						>
							{category}
						</button>
						<div>
							<h4
								style={{ color: textColor }}
								className={`block font-sans text-xl font-semibold leading-snug tracking-normal antialiased `}
							>
								{title}
							</h4>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Donation;
