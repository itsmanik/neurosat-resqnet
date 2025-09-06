// src/components/RiskHeatmap.js
import React from 'react';

const RiskHeatmap = () => {
  // In a real application, this would be an interactive map using Leaflet/Mapbox
  // For this example, we'll use a static image with a legend
  
  return (
    <div className="border border-gray-200 rounded-lg p-5">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
        Risk Heatmap
      </h3>
      
      <div className="mb-4 bg-gray-100 rounded-lg p-4 text-center">
        <div className="text-gray-500 text-sm">
          Interactive map would appear here with Leaflet/Mapbox integration
        </div>
        <div className="mt-2 h-64 bg-gradient-to-r from-green-400 via-yellow-400 to-red-600 rounded-md overflow-hidden"></div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Risk Level:</span>
          <div className="flex">
            <div className="w-4 h-4 bg-green-500"></div>
            <div className="w-4 h-4 bg-green-400"></div>
            <div className="w-4 h-4 bg-yellow-400"></div>
            <div className="w-4 h-4 bg-orange-500"></div>
            <div className="w-4 h-4 bg-red-600"></div>
          </div>
        </div>
        
        <div className="text-sm">
          <span className="text-green-600 mr-2">Low</span>
          <span className="text-red-600">High</span>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-50 p-3 rounded-lg">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
            <span className="font-medium text-red-800">High Risk Areas</span>
          </div>
          <div className="mt-1 text-2xl font-bold text-red-700">12.7%</div>
        </div>
        
        <div className="bg-yellow-50 p-3 rounded-lg">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span className="font-medium text-yellow-800">Medium Risk Areas</span>
          </div>
          <div className="mt-1 text-2xl font-bold text-yellow-700">23.4%</div>
        </div>
        
        <div className="bg-green-50 p-3 rounded-lg">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="font-medium text-green-800">Low Risk Areas</span>
          </div>
          <div className="mt-1 text-2xl font-bold text-green-700">63.9%</div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end space-x-3">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
          Export as GeoJSON
        </button>
        <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          Print Map
        </button>
      </div>
    </div>
  );
};

export default RiskHeatmap;