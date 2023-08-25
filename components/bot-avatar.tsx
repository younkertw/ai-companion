import { Avatar, AvatarImage } from "@/components/ui/avatar"

interface BotAvatarProps {
  src: string;
};

export const BotAvatar = ({
  src
}: BotAvatarProps) => {
  return (
    <Avatar className="h-11 w-11">
      <AvatarImage src={src} />
    </Avatar>
  );
};
