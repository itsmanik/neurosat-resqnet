// src/components/ResultsSection.js
import React from 'react';
import NoiseReductionResults from './NoiseReductionResults';
import DamageDetectionResults from './DamageDetectionResults';
import RiskHeatmap from './RiskHeatmap.jsx';

const ResultsSection = ({ results, selectedOptions }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Processing Results</h2>
        <button className="flex items-center text-blue-600 hover:text-blue-800">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export All Results
        </button>
      </div>

      <div className="space-y-8">
        {selectedOptions.noiseReduction && results.noiseReduction && (
          <NoiseReductionResults results={results.noiseReduction} />
        )}
        
        {selectedOptions.damageDetection && results.damageDetection && (
          <DamageDetectionResults results={results.damageDetection} />
        )}
        
        {selectedOptions.riskHeatmap && (
          <RiskHeatmap results={results.heatmapData} />
        )}
      </div>
    </div>
  );
};

export default ResultsSection;