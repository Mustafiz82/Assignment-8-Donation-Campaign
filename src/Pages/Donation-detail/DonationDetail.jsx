import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetail = () => {
	const data = useParams();

	const loadData = useLoaderData();
	console.log(loadData);
	// console.log(data.id);

	// const [loadData , setLoadData] = useState()

	// useEffect(() =>{
	//     fetch('/DonationData.json')
	//     .then(response => response.json())
	//     .then(json => setLoadData(json))

	// },[])

	// console.log(loadData);

	const foundData = loadData.find((item) => item.id == data.id);
	console.log(foundData);

    const {
		title,
		image,

		cardColor,
		buttonBackgroundColor,
		textColor,
		categoryBackgroundColor,
		category,
		id,price,description
	} = foundData;

   

	return (
		<div>
			<div className="relative">
                <img src={image} alt="" className="h-[600px] w-full object-cover" />
                <button className={`btn text-white absolute bottom-0 m-8`} style={{background: textColor}}>Donate {price}</button>

            </div>
            <div>
                <h1 className="text-5xl my-5 font-semibold">{title}</h1>
                <p>{description}</p>
            </div>
		</div>
	);
};

export default DonationDetail;
