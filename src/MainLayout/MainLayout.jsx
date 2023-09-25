import React from "react";
import { Outlet } from "react-router";
import Nav from "../component/Header/Nav";

const MainLayout = () => {
	return (
		<div className="max-w-screen-xl mx-auto">
			<Nav></Nav>
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayout;
