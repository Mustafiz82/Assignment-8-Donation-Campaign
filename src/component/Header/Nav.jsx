import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<div className="">
			<div className="navbar bg-base-100">
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl m-0 p-0">
						{" "}
						<img
							className="w-44 m-0 p-0"
							src="src/assets/Logo.png"
							alt=""
						/>
					</a>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1 text-lg gap-4">
							<NavLink
								to="/"
								className={({ isActive, isPending }) =>
									isPending ? "" : isActive ? "font-bold text-red-500 underline" : ""
								}
							>
								Home
							</NavLink>
						<li>
						</li>
							<NavLink
								to="/Donation"
								className={({ isActive, isPending }) =>
									isPending ? "" : isActive ? "font-bold text-red-500 underline" : ""
								}
							>
								Donation
							</NavLink>
						<li>
						</li>
							<NavLink
								to="/Statistics"
								className={({ isActive, isPending }) =>
									isPending ? "" : isActive ? "font-bold text-red-500 underline" : ""
								}
							>
								Statistics
							</NavLink>
						<li>
						</li>
						
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Nav;
