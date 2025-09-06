// src/components/DashboardCard.js
import React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const DashboardCard = ({ title, value, change, changePositive, icon, color }) => {
  const isPositive = changePositive;
  const ChangeIcon = isPositive ? FiArrowUp : FiArrowDown;

  // Define color themes for icons and text
  const colorThemes = {
    indigo: {
      iconBg: 'bg-indigo-500/10',
      iconText: 'text-indigo-400',
      changeText: isPositive ? 'text-emerald-400' : 'text-red-400',
    },
    red: {
      iconBg: 'bg-red-500/10',
      iconText: 'text-red-400',
      changeText: isPositive ? 'text-emerald-400' : 'text-red-400',
    },
    blue: {
      iconBg: 'bg-blue-500/10',
      iconText: 'text-blue-400',
      changeText: isPositive ? 'text-emerald-400' : 'text-red-400',
    },
    green: {
      iconBg: 'bg-emerald-500/10',
      iconText: 'text-emerald-400',
      changeText: isPositive ? 'text-emerald-400' : 'text-red-400',
    },
  };
  
  const theme = colorThemes[color] || colorThemes.indigo;

  return (
    <div className="bg-slate-800 p-5 rounded-2xl shadow-lg border border-slate-700 hover:-translate-y-1 transition-transform duration-300 flex items-start space-x-4">
      {/* Icon on the left */}
      <div className={`p-3 rounded-lg ${theme.iconBg}`}>
        <div className={theme.iconText}>{icon}</div>
      </div>
      
      {/* Content on the right */}
      <div className="flex-1">
        <p className="text-sm font-medium text-slate-400">{title}</p>
        <div className="flex items-baseline space-x-2 mt-1">
          <p className="text-2xl font-bold text-white">{value}</p>
          <div className={`flex items-center text-xs font-semibold ${theme.changeText}`}>
            <ChangeIcon className="w-3 h-3" />
            <span>{change}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
