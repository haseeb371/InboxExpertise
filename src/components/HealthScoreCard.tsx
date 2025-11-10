import { CheckCircle } from "lucide-react";
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { useState, useEffect } from 'react';

const HealthScoreCard = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const targetScore = 100;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const increment = 1;

    const animateScore = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentScore = Math.round(progress * targetScore);

      setScore(currentScore);

      if (progress < 1) {
        requestAnimationFrame(animateScore);
      }
    };

    requestAnimationFrame(animateScore);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-4 w-72">
      {/* Header */}
      <div className="flex items-center justify-center mb-3">
        <h3 className="text-navy font-semibold text-base">Domain Health Score</h3>
      </div>

      {/* MUI Gauge Chart */}
      <div className="flex items-center justify-center mb-3">
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(187, 56%, 65%)" />
              <stop offset="100%" stopColor="hsl(187, 56%, 39%)" />
            </linearGradient>
          </defs>
        </svg>
        <Gauge
          value={score}
          valueMax={100}
          startAngle={-110}
          endAngle={110}
          cornerRadius="50%"
          sx={{
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 40,
              transform: 'translate(0px, 0px)',
              fill: 'hsl(192, 86%, 17%)',
              fontWeight: 700,
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: 'url(#gaugeGradient)',
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: '#E5E7EB',
            },
          }}
          width={240}
          height={150}
          text={({ value }) => `${value}%`}
        />
      </div>

      {/* Status Message */}
      <div className="bg-primary/5 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-1.5">
          <CheckCircle className="w-4 h-4 text-primary" />
          <span className="text-primary font-medium text-sm">Your domain is healthy!</span>
        </div>
        <p className="text-navy text-xs leading-relaxed">
          A healthy domain is the key to high sender reputation and deliverability.
        </p>
      </div>
    </div>
  );
};

export default HealthScoreCard;
