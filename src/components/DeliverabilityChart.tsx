import { Badge } from "@/components/ui/badge";

const DeliverabilityChart = () => {
  return (
    <div className="relative w-[340px] h-[680px] bg-black rounded-[48px] shadow-card-lg p-1">
      {/* iPhone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>
      
      {/* Screen Content */}
      <div className="w-full h-full bg-white rounded-[44px] overflow-hidden">
        <div className="p-8 h-full flex flex-col">
          <h2 className="text-3xl font-bold text-navy mb-6">Deliverability Ratio</h2>
          
          {/* Chart Area */}
          <div className="flex-1 relative">
            {/* SVG Chart */}
            <svg className="w-full h-full" viewBox="0 0 280 320" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="80" x2="280" y2="80" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="0" y1="160" x2="280" y2="160" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="0" y1="240" x2="280" y2="240" stroke="#f3f4f6" strokeWidth="1" />
              
              {/* Gradient fill */}
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(178, 40%, 54%)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(178, 40%, 54%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Area fill */}
              <path
                d="M 0,250 Q 70,200 140,180 T 280,120 L 280,320 L 0,320 Z"
                fill="url(#chartGradient)"
              />
              
              {/* Line */}
              <path
                d="M 0,250 Q 70,200 140,180 T 280,120"
                stroke="hsl(178, 40%, 54%)"
                strokeWidth="3"
                fill="none"
              />
              
              {/* Data points */}
              <circle cx="0" cy="250" r="4" fill="hsl(196, 42%, 30%)" />
              <circle cx="70" cy="220" r="4" fill="hsl(196, 42%, 30%)" />
              <circle cx="140" cy="180" r="4" fill="hsl(196, 42%, 30%)" />
              <circle cx="210" cy="160" r="4" fill="hsl(196, 42%, 30%)" />
              <circle cx="280" cy="120" r="4" fill="hsl(196, 42%, 30%)" />
            </svg>
            
            {/* Data badges */}
            <div className="absolute left-[35%] bottom-[35%]">
              <Badge className="bg-accent text-white hover:bg-accent rounded-xl px-3 py-1 text-xs font-semibold flex items-center gap-1">
                <span className="text-white">↓</span> 10,000
              </Badge>
            </div>
            
            <div className="absolute right-[5%] top-[15%]">
              <Badge className="bg-accent text-white hover:bg-accent rounded-xl px-3 py-1 text-xs font-semibold flex items-center gap-1">
                <span className="text-white">↓</span> 25,000
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverabilityChart;
