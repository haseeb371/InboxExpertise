import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

const TrustedUsersCard = () => {
  const avatars = [
    { image: "https://i.pravatar.cc/150?img=1" },
    { image: "https://i.pravatar.cc/150?img=2" },
    { image: "https://i.pravatar.cc/150?img=3" },
    { image: "https://i.pravatar.cc/150?img=4" },
  ];

  const [count, setCount] = useState(100);
  const startCount = 100;
  const targetCount = 124.98;

  useEffect(() => {
    // Small delay to ensure layout is ready
    const timeout = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const startTime = Date.now();

      const animateCount = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out effect
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = startCount + (easeProgress * (targetCount - startCount));

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-4 w-auto inline-flex items-center gap-3">
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <Avatar key={index} className="w-8 h-8 border-2 border-white">
            <AvatarImage src={avatar.image} alt={`User ${index + 1}`} />
            <AvatarFallback>U{index + 1}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="space-y-0">
        <p className="text-lg font-bold text-navy">{count.toFixed(2)}K+</p>
        <p className="text-xs font-medium text-muted-foreground">Trusted Users</p>
      </div>
    </div>
  );
};

export default TrustedUsersCard;
