import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DonationDetail = () => {
	const data = useParams();
	const loadData = useLoaderData();
	const foundData = loadData.find((item) => item.id == data.id);
	const { title, image, textColor, id, price, description, category } =
		foundData;

	const array = [];

	const handleLoad = () => {
		const donation = JSON.parse(localStorage.getItem("donation"));


		if (!donation) {
			array.push(foundData);
			localStorage.setItem("donation", JSON.stringify(array));
            Swal.fire(
                "Donation Successfull",
                `You Donated the ${price} for ${title}!`,
                "success"
            );
		} else {
			const isExist = donation.find((item) => item.id == data.id);
			
			if (isExist) {
				Swal.fire({
					icon: "error",
					title: "Donation Not successfull",
					text: `You have already donated for ${title}`,
				});
			} else {
				array.push(...donation, foundData);

				localStorage.setItem("donation", JSON.stringify(array));

				Swal.fire(
					"Donation Successfull",
					`You Donated the ${price} for ${title}!`,
					"success"
				);
			}
		}
	};

	return (
		<div className="mb-10">
			<div className="relative ">
				<img
					src={image}
					alt=""
					className="h-auto lg:h-[600px] w-full object-cover"
				/>
				<button
					className={`btn text-white absolute bottom-0 m-8`}
					style={{ background: textColor }}
					onClick={handleLoad}
				>
					Donate {price}
				</button>
			</div>
			<div>
				<h1 className="text-3xl lg:text-5xl my-5 font-semibold">{title}</h1>
				<p className="text-justify">{description}</p>
			</div>
		</div>
	);
};

export default DonationDetail;
