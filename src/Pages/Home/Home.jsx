import React, { useEffect, useState } from "react";
import Banner from "../../component/Header/Banner";
import Donation from "../../component/Donations/Donation";
import Donations from "../../component/Donations/Donations";
import { useLoaderData } from "react-router-dom";

const Home = () => {
	const [search, setSearch] = useState("");

	const handleSearch = (event) => {
		event.preventDefault();
		const value = event.target.searchInput.value;
		setSearch(value);


       
	};
	useEffect(() => {
	}, [search]);
	return (
		<div>
			<Banner handleSearch={handleSearch}></Banner>
			<Donations
				handleSearch={handleSearch}
				search={search}
			></Donations>
		</div>
	);
};

export default Home;
