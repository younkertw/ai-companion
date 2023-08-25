import { Avatar, AvatarImage } from "@/components/ui/avatar"

interface BotAvatarProps {
  src: string;
};

export const BotAvatar = ({
  src
}: BotAvatarProps) => {
  return (
    <Avatar className="h-10 w-10">
      <AvatarImage src={src} />
    </Avatar>
  );
};
