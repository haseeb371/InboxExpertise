import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TrustedUsersCard = () => {
  const avatars = [
    { color: "bg-blue-500", initial: "A" },
    { color: "bg-pink-500", initial: "B" },
    { color: "bg-yellow-500", initial: "C" },
    { color: "bg-purple-500", initial: "D" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 w-[280px]">
      <div className="flex -space-x-3 mb-4">
        {avatars.map((avatar, index) => (
          <Avatar key={index} className="w-12 h-12 border-4 border-white">
            <AvatarFallback className={avatar.color}>
              {avatar.initial}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="space-y-1">
        <p className="text-3xl font-bold text-navy">124.98K+</p>
        <p className="text-sm font-medium text-muted-foreground">Trusted Users</p>
      </div>
    </div>
  );
};

export default TrustedUsersCard;
