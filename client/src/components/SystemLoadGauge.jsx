// Enhanced SystemLoadGauge Component
const SystemLoadGauge2 = () => {
  const systemLoadValue = 72;
  const systemLoadData = [{ name: "System Load", value: systemLoadValue }];

  // Determine the status text and color based on the value
  let statusText = "Optimal";
  let statusColor = "text-emerald-400";
  if (systemLoadValue > 65) {
    statusText = "High Load";
    statusColor = "text-amber-400";
  }
  if (systemLoadValue > 85) {
    statusText = "Critical";
    statusColor = "text-red-400";
  }

  return (
    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
      <h3 className="text-lg font-semibold text-white mb-2">AI Engine Load</h3>
      <div className="relative">
        <ResponsiveContainer width="100%" height={200}>
          <RadialBarChart
            innerRadius="70%"
            outerRadius="90%"
            data={systemLoadData}
            startAngle={180}
            endAngle={0}
            barSize={15}
          >
            {/* Define the gradient for the bar */}
            <defs>
              <linearGradient id="loadGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#34d399" /> 
                <stop offset="70%" stopColor="#fde047" /> 
                <stop offset="100%" stopColor="#f87171" />
              </linearGradient>
            </defs>

            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            
            {/* Background for the arc */}
            <RadialBar
              background
              dataKey="value"
              cornerRadius={10}
              fill="#2d3748" // A dark, neutral background for the track
              isAnimationActive={false}
            />

            {/* The main data bar with the gradient */}
            <RadialBar
              dataKey="value"
              cornerRadius={10}
              fill="url(#loadGradient)"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        
        {/* Center Text and Labels */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <p className="text-4xl font-bold text-white">{`${systemLoadValue}%`}</p>
          <p className={`text-sm font-semibold ${statusColor}`}>{statusText}</p>
        </div>

        {/* Min/Max Labels */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-6 text-xs text-slate-400">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default SystemLoadGauge2;