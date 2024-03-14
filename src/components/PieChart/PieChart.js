/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Legend, LabelList } from "recharts";
import "./pieChart.css";

const COLORS = ["#FECD66", "#A3A1FB", "#FB718A", "#0083ff"];
const data01 = [
  { name: "Pending", value: 100 },
  { name: "Approved", value: 500 },
  { name: "Rejected", value: 1000 },
];

/**
 *
 * @param {*} props -- required props
 * @returns {React.ReactElement} returns pieChart
 */
export const CustomPieChart = (props) => {
  const { data, percentage } = props;
  return (
    <div className="pie-chart">
      <PieChart width={400} height={400}>
        <Pie
          className="pie-chart1"
          width={50}
          height={50}
          data={data01}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
        >
          {data01.map((entry, index) => {
            const key = index;
            return <Cell fill={COLORS[index % COLORS.length]} key={key} />;
          })}
        </Pie>
        <LabelList />
        <text
          textAnchor="middle"
          x="31%"
          y="50%"
          fill="#000"
          strokeWidth="2px"
          fontFamily="sans-serif"
          fontSize="20px"
        >
          Approvals
        </text>
        <text
          textAnchor="middle"
          x="32%"
          y="58%"
          fill="rgb(163, 161, 251)"
          strokeWidth="2px"
          fontFamily="sans-serif"
          fontSize="25px"
          fontWeight="900"
        >
          {percentage >= 0 ? percentage : 0}%
        </text>
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconType="rect"
          chartWidth={100}
        />
      </PieChart>
    </div>
  );
};

CustomPieChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  percentage: PropTypes.string,
};

CustomPieChart.defaultProps = {
  percentage: "",
};
