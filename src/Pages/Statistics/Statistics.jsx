import React, { PureComponent, useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
	const [value, setVelue] = useState();
	const Donation = JSON.parse(localStorage.getItem("donation"));
	// const value = Donation.length
	// console.log(Donation);
	if (Donation) {
		useEffect(() => {
			setVelue(Donation.length);
			console.log("hello donation if");
		}, []);
	}

	const data = [
		{ name: "Group A", value: 12 - value },
		{ name: "Group B", value: value },
	];

	const COLORS = ["#FF444A", "#00C49F"];

	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
		index,
	}) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline="central"
			>
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	return (
		<div className="h-full w-full flex justify-center items-center flex-col">
			<PieChart
				width={400}
				height={400}
			>
				<Pie
					className="w-96"
					data={data}
					cx="50%"
					cy="50%"
					labelLine={false}
					label={renderCustomizedLabel}
					outerRadius={200}
					fill="#8884d8"
					dataKey="value"
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
				</Pie>
			</PieChart>

            <div className="flex gap-6 mt-12">
                <div className="flex gap-3">
                    <h1>Your Donation</h1>
                    <div className="w-24 h-6 bg-[#00C49F] "></div>
                </div>
                <div className="flex gap-3">
                    <h1>Total Donation</h1>
                    <div className="w-24 h-6 bg-[#FF444A]"></div>
                </div>
            </div>
		</div>
	);
};

export default Statistics;
