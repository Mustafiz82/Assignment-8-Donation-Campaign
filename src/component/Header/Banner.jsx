import React from "react";
import Nav from "./Nav";
import bgImage from "../../assets/Rectangle 4281.png";
const Banner = ({ handleSearch  }) => {

	return (
		<div className=" relative">
			<div
				className="hero h-[600px] opacity-10 "
				style={{
					backgroundImage: `url("${bgImage}")`,

					// backgroundSize: "cover"
				}}
			>
				<div className="hero-overlay"></div>
				<div className="hero-content text-center text-neutral-content ">
					<div className="text-black"></div>
				</div>
			</div>

			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
				<h1 className="mb-5 text-4xl font-bold ">
					I Grow By Helping People In Need
				</h1>
				<div className="flex justify-center">
					<div className=" border-2 rounded-xl w-96 flex justify-center items-center">
						<form onSubmit={handleSearch} >
							<input
								type="text "
								placeholder="Search here...."
								className="p-3 rounded-l-xl flex-1"
								id="search"
								name="searchInput"
							/>
							
							<input
								type="submit"
								value="Search"
								name="searchButton"
								className="btn btn-primary text-white bg-red-500 font-bold hover:bg-red-500  h-11 rounded-l-none"
							/>
						</form>
					</div>
				</div>
			</div>
			<div className=" absolute top-0">{/* <Nav></Nav>  */}</div>
		</div>
	);
};

export default Banner;
