// src/components/AnalyticsChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FiBarChart2 } from 'react-icons/fi';

const data = [
  { name: 'Mon', processed: 400, damaged: 240 },
  { name: 'Tue', processed: 300, damaged: 139 },
  { name: 'Wed', processed: 200, damaged: 480 },
  { name: 'Thu', processed: 278, damaged: 390 },
  { name: 'Fri', processed: 189, damaged: 280 },
  { name: 'Sat', processed: 239, damaged: 380 },
  { name: 'Sun', processed: 349, damaged: 430 },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <FiBarChart2 className="mr-2" />
        Weekly Processing Trends
      </h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                borderColor: '#374151',
                color: '#fff'
              }}
              labelStyle={{ color: '#9ca3af' }}
            />
            <Legend wrapperStyle={{ fontSize: '14px' }} />
            <Line type="monotone" dataKey="processed" stroke="#818cf8" strokeWidth={2} activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="damaged" stroke="#f87171" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChart;

