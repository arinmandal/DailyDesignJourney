import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AnalaticsChats = () => {
  const data = [
    { name: "Jan", users: 400, revenue: 2400, clicks: 1400 },
    { name: "Feb", users: 300, revenue: 1398, clicks: 1210 },
    { name: "Mar", users: 200, revenue: 9800, clicks: 1290 },
    { name: "Apr", users: 278, revenue: 3908, clicks: 1300 },
    { name: "May", users: 189, revenue: 4800, clicks: 1400 },
    { name: "Jun", users: 239, revenue: 3800, clicks: 1500 },
  ];
  return (
    <div className='w-full h-96'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='users'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey='revenue' stroke='#82ca9d' />
          <Line type='monotone' dataKey='clicks' stroke='#ffc658' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalaticsChats;
