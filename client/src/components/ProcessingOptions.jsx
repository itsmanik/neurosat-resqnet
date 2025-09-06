// src/components/ProcessingOptions.js
import React from 'react';

const ProcessingOptions = ({ selectedOptions, onOptionChange, onProcess, processing, hasFiles }) => {
  const options = [
    {
      id: 'noiseReduction',
      title: 'Noise Reduction',
      description: 'AI-powered image enhancement and noise removal',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )
    },
    {
      id: 'damageDetection',
      title: 'Damage Detection',
      description: 'Identify and classify damage in infrastructure',
      icon: (
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'riskHeatmap',
      title: 'Risk Heatmap',
      description: 'Generate interactive risk assessment maps',
      icon: (
        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Processing Options</h3>
      
      <div className="space-y-4 mb-6">
        {options.map(option => (
          <div 
            key={option.id}
            className={`flex items-start p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
              selectedOptions[option.id] 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onOptionChange({ ...selectedOptions, [option.id]: !selectedOptions[option.id] })}
          >
            <div className="flex-shrink-0 mt-1">
              {option.icon}
            </div>
            <div className="ml-3">
              <div className="flex items-center">
                <input
                  id={option.id}
                  name={option.id}
                  type="checkbox"
                  checked={selectedOptions[option.id]}
                  onChange={() => {}}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor={option.id} className="ml-2 block text-sm font-medium text-gray-700">
                  {option.title}
                </label>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                {option.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onProcess}
        disabled={processing || !hasFiles || !Object.values(selectedOptions).some(opt => opt)}
        className={`w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center transition-colors duration-200 ${
          processing || !hasFiles || !Object.values(selectedOptions).some(opt => opt)
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {processing ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          'Process Data'
        )}
      </button>

      {!hasFiles && (
        <p className="mt-3 text-sm text-red-600 text-center">Please upload data before processing</p>
      )}
    </div>
  );
};

export default ProcessingOptions;