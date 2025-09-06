// src/components/ActivityFeed.js
import React from 'react';
import { FiAlertTriangle, FiCheckCircle, FiCpu } from 'react-icons/fi';

const ActivityFeed = () => {
  const recentActivities = [
    {
      id: 1,
      title: 'New high-risk zone detected in Sector B',
      time: '15 minutes ago',
      icon: <FiAlertTriangle className="w-5 h-5 text-red-400" />,
      bgColor: 'bg-red-500/10'
    },
    {
      id: 2,
      title: 'Image batch #C8F1 processed successfully',
      time: '1 hour ago',
      icon: <FiCheckCircle className="w-5 h-5 text-emerald-400" />,
      bgColor: 'bg-emerald-500/10'
    },
    {
      id: 3,
      title: 'AI model recalibrated with 98.2% accuracy',
      time: '4 hours ago',
      icon: <FiCpu className="w-5 h-5 text-blue-400" />,
      bgColor: 'bg-blue-500/10'
    }
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
      <ul className="space-y-4">
        {recentActivities.map(activity => (
          <li key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
            <div className={`p-3 rounded-full ${activity.bgColor}`}>
              {activity.icon}
            </div>
            <div>
              <p className="font-medium text-slate-200">{activity.title}</p>
              <p className="text-xs text-slate-400">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
