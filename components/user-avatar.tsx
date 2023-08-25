"use client";

import { useUser } from "@clerk/nextjs";

import { Avatar, AvatarImage } from "@/components/ui/avatar"

export const UserAvatar = () => {
  const { user } = useUser();

  return (
    <Avatar className="h-9 w-9">
      <AvatarImage src={user?.imageUrl} />
    </Avatar>
  );
};
