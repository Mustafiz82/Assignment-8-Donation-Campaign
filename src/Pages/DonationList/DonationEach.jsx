import React from "react";
import { Link } from "react-router-dom";

const DonationEach = ({ item }) => {
	const {
		title,
		image,
		cardColor,
		buttonBackgroundColor,
		textColor,
		categoryBackgroundColor,
		category,
		id,price
	} = item;

	const cardStyle = {
		backgroundColor: cardColor,
	};

	const buttonStyle = {
		backgroundColor: buttonBackgroundColor,
		color: textColor,
	};
    

	return (
		<div>
			<div className="card lg:card-side ">
                <div>
					<img
                        className="h-full w-full object-cover"
						src={image}
						alt="Album"

					/>
				</div>
				<div style={cardStyle} className="card-body flex items-center">
					<button
						className={`btn w-min `}
						style={buttonStyle}
					>
						{category}
					</button>
					<h2  className="card-title">{title}</h2>
					<p style={{ color: textColor }} className="text-xl font-semibold">{price}</p>
					<div className="card-actions ">
						<Link to={`/DonationDetail/${id}`}><button className="btn btn-primary">View Detail</button></Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DonationEach;
