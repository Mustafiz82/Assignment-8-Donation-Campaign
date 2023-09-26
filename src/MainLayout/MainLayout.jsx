import React from "react";
import { Outlet } from "react-router";
import Nav from "../component/Header/Nav";

const MainLayout = () => {
	return (
		<div className="max-w-screen-xl lg:mx-auto mx-5 lg:mx-0">
			<Nav></Nav>
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayout;
