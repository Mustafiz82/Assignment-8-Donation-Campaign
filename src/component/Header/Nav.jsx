import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Nav = () => {
	return (
		<div className="mb-12">
			<div className="navbar bg-base-100 flex flex-col lg:flex-row">
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl m-0 p-0">
						{" "}
						<img
							className="w-full lg:w-44 m-0 p-0 "
							src={logo}
							alt=""
						/>
					</a>
				</div>
				<div className="flex mt-5 ">
					<ul className="menu w-full menu-horizontal px-1  text-lg gap-10  justify-between mt-5  text-2xl lg:text-xl ">
						<NavLink
							to="/"
							className={({ isActive, isPending }) =>
								isPending
									? ""
									: isActive
									? "font-bold text-red-500 underline"
									: ""
							}
						>Home
							
						</NavLink>
						<NavLink
							to="/Donation"
							className={({ isActive, isPending }) =>
								isPending
									? ""
									: isActive
									? "font-bold text-red-500 underline"
									: ""
							}
						>
							<span className="text-right">Donation</span>
						</NavLink>
						<NavLink
							to="/Statistics"
							className={({ isActive, isPending }) =>
								isPending
									? ""
									: isActive
									? "font-bold text-red-500 underline"
									: ""
							}
						>
							Statistics
						</NavLink>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Nav;
