import { Settings, CheckCircle2 } from "lucide-react";

const HealthScoreCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-card p-8 w-[320px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-navy">Domain Health Score</h3>
        <Settings className="w-4 h-4 text-muted-foreground" />
      </div>

      {/* Circular Progress */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-40 h-40">
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="72"
              stroke="#E5E7EB"
              strokeWidth="16"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="80"
              cy="80"
              r="72"
              stroke="hsl(160, 84%, 39%)"
              strokeWidth="16"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 72}`}
              strokeDashoffset="0"
              strokeLinecap="round"
            />
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-bold text-navy">100%</span>
          </div>
        </div>
      </div>

      {/* Status Message */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-success" />
          <p className="text-sm font-semibold text-success">Your domain is healthy!</p>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          A healthy domain is the key to high email reputation and deliverability.
        </p>
      </div>
    </div>
  );
};

export default HealthScoreCard;
