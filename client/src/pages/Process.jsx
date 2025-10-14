// src/pages/Landing.js
import React, { useState } from "react";
import {
  FiUpload,
  FiCheckCircle,
  FiMapPin,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";

// Simulated safe zones for this example
const safeZones = [
  {
    name: "Sector A Relief Center",
    address: "123 Oak Ave",
    distance: "2.3 km",
  },
  { name: "Community Shelter", address: "45 River St", distance: "3.1 km" },
  { name: "Downtown Safe Zone", address: "301 Main Blvd", distance: "4.7 km" },
];

const Process = () => {
  const [preImage, setPreImage] = useState(null);
  const [postImage, setPostImage] = useState(null);
  const [step, setStep] = useState(0); // Step 0=upload, 1=heatmap, 2=safezone ask, 3=safe zones, 4=done

  const handlePreUpload = (e) => setPreImage(e.target.files[0]);
  const handlePostUpload = (e) => setPostImage(e.target.files[0]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Disaster Intensity Analyzer
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Upload pre and post disaster images to analyze affected intensity
            zones and get safe area recommendations.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-slate-700/50">
          {/* Step 0: Upload Images */}
          {step === 0 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-dashed border-slate-600 hover:border-indigo-500 transition-colors flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <FiUpload className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Pre-Disaster Image
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Upload the image before the disaster occurred
                  </p>
                  <label
                    htmlFor="preImageUpload"
                    className="cursor-pointer mb-3 px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded-lg text-slate-200 text-sm font-medium shadow-sm inline-flex items-center"
                  >
                    <FiUpload className="mr-1 w-4 h-4" />
                    Upload Pre-Disaster
                  </label>
                  <input
                    type="file"
                    id="preImageUpload"
                    accept="image/*"
                    onChange={handlePreUpload}
                    className="hidden"
                  />

                  {preImage && (
                    <div className="mt-4 flex items-center text-emerald-400">
                      <FiCheckCircle className="mr-2" />
                      <span className="text-sm">Image uploaded</span>
                    </div>
                  )}
                </div>

                <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-dashed border-slate-600 hover:border-red-500 transition-colors flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                    <FiUpload className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Post-Disaster Image
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Upload the image after the disaster occurred
                  </p>
                  <label
                    htmlFor="postImageUpload"
                    className="cursor-pointer px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded-lg text-slate-200 text-sm font-medium shadow-sm inline-flex items-center"
                  >
                    <FiUpload className="mr-1 w-4 h-4" />
                    Upload Post-Disaster
                  </label>
                  <input
                    type="file"
                    id="postImageUpload"
                    accept="image/*"
                    onChange={handlePostUpload}
                    className="hidden"
                  />

                  {postImage && (
                    <div className="mt-4 flex items-center text-emerald-400">
                      <FiCheckCircle className="mr-2" />
                      <span className="text-sm">Image uploaded</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  className="px-8 py-4 px-4 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center"
                  disabled={!(preImage && postImage)}
                  onClick={nextStep}
                >
                  Analyze Intensity
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 1: Heatmap */}
          {step === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Damage Intensity Analysis
                </h2>
                <p className="text-slate-400">
                  Heatmap showing affected areas based on image comparison
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    <FiCheckCircle className="text-emerald-400 mr-2" />
                    Damage Intensity Heatmap
                  </h3>
                  <div className="flex space-x-2">
                    <div className="flex items-center text-xs text-red-400">
                      <div className="w-3 h-3 bg-red-500 rounded mr-1"></div>
                      High Damage
                    </div>
                    <div className="flex items-center text-xs text-yellow-400">
                      <div className="w-3 h-3 bg-yellow-500 rounded mr-1"></div>
                      Medium
                    </div>
                    <div className="flex items-center text-xs text-green-400">
                      <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
                      Low Damage
                    </div>
                  </div>
                </div>

                <div className="rounded-xl w-full h-80 bg-gradient-to-br from-red-500 via-yellow-400 to-green-500 opacity-80 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <span className="text-4xl font-bold text-white drop-shadow-lg z-10">
                    Heatmap Visualization
                  </span>
                </div>

                <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                  <p className="text-slate-300 text-center">
                    Analysis complete. Red zones indicate highest damage
                    intensity, while green areas show minimal impact.
                  </p>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  className="px-6 py-3 rounded-xl font-semibold bg-slate-700 hover:bg-slate-600 text-white shadow-lg transition-colors flex items-center"
                  onClick={prevStep}
                >
                  <FiArrowLeft className="mr-2" />
                  Back
                </button>
                <button
                  className="px-6 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-colors flex items-center"
                  onClick={nextStep}
                >
                  Continue
                  <FiArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Safe Zone Prompt */}
          {step === 2 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Safe Zone Assistance
                </h2>
                <p className="text-slate-400">
                  We can help you locate nearby safe zones and relief centers
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-12 shadow-lg border border-slate-700 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                  <FiMapPin className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Need Safe Zone Recommendations?
                </h3>
                <p className="text-slate-400 mb-8 max-w-md">
                  We can show you the nearest safe zones, relief centers, and
                  emergency shelters based on your location.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center"
                    onClick={nextStep}
                  >
                    <FiMapPin className="mr-2" />
                    Yes, Show Safe Zones
                  </button>
                  <button
                    className="px-8 py-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold shadow-lg transition-colors"
                    onClick={() => setStep(4)}
                  >
                    No, Finish
                  </button>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  className="px-6 py-3 rounded-xl font-semibold bg-slate-700 hover:bg-slate-600 text-white shadow-lg transition-colors flex items-center"
                  onClick={prevStep}
                >
                  <FiArrowLeft className="mr-2" />
                  Back
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Safe Zones */}
          {step === 3 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Nearby Safe Zones
                </h2>
                <p className="text-slate-400">
                  Recommended safe locations based on your area
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
                <div className="flex items-center mb-6">
                  <FiMapPin className="text-blue-400 mr-3 w-6 h-6" />
                  <h3 className="text-xl font-semibold text-white">
                    Available Safe Zones
                  </h3>
                </div>

                <div className="space-y-4">
                  {safeZones.map((zone, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:border-blue-500 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                            <FiCheckCircle className="text-emerald-400 w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-lg">
                              {zone.name}
                            </h4>
                            <p className="text-slate-300 text-sm mt-1">
                              {zone.address}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                            {zone.distance}
                          </span>
                          <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                            Get Directions
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  className="px-6 py-3 rounded-xl font-semibold bg-slate-700 hover:bg-slate-600 text-white shadow-lg transition-colors flex items-center"
                  onClick={prevStep}
                >
                  <FiArrowLeft className="mr-2" />
                  Back
                </button>
                <button
                  className="px-6 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-colors"
                  onClick={nextStep}
                >
                  Complete Analysis
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Completion */}
          {step === 4 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheckCircle className="w-12 h-12 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Analysis Complete
              </h2>
              <p className="text-slate-300 text-lg max-w-md mx-auto mb-8">
                Thank you for using Disaster Intensity Analyzer. Stay safe and
                follow local authorities' guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-6 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-colors"
                  onClick={() => setStep(0)}
                >
                  New Analysis
                </button>
                <button className="px-6 py-3 rounded-xl font-semibold bg-slate-700 hover:bg-slate-600 text-white shadow-lg transition-colors">
                  Download Report
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Process;
