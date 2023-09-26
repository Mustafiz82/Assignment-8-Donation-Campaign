import React, { useEffect, useState } from "react";
import DonationEach from "./DonationEach";

const DonationLIst = () => {
	const [donation, setdonation] = useState([]);
	const [noData, setNoData] = useState(false);
	const [isShow, setIsShow] = useState(false);

	useEffect(() => {
		const donatedItem = JSON.parse(localStorage.getItem("donation"));
		if (donatedItem) {
			setdonation(donatedItem);
		} else {
			setNoData(true);
		}
	}, []);
	console.log(donation);

	const donations = JSON.parse(localStorage.getItem("donation"));
	// let newDonasion = donations.slice(0,4)

	const handleSeeAll = () => {
		setIsShow(!isShow);
		console.log(isShow);
	};

	return (
		<div>
			{noData && (
				<p className="text-center text-3xl font-semibold">No Donation found</p>
			)}
			<div className="grid grid-cols-1  md:grid-cols-2 gap-5">
				{isShow
					? donation.map((item) => (
							<DonationEach
								key={item.id}
								item={item}
							></DonationEach>
					  ))
					: donation.slice(0, 4).map((item) => (
							<DonationEach
								key={item.id}
								item={item}
							></DonationEach>
					  ))}
			</div>

			<div className="flex justify-center mt-8 ">
				<button
					onClick={handleSeeAll}
					className={`bg-green-600 btn btn-primary ${
						donation.length < 4 ? "hidden" : ""
					}`}
				>
					{isShow ? "Show Less" : "Show All"}
				</button>
			</div>
		</div>
	);
};

export default DonationLIst;
