import { redirect } from "next/navigation";
import { auth, redirectToSignIn, useAuth } from "@clerk/nextjs";

//import supabase from '@/lib/supabaseClient';
import prismadb from "@/lib/prismadb";

import { ChatClient } from "./components/client";

interface ChatIdPageProps {
  params: {
    chatId: string;
  }
}

const ChatIdPage = async ({
  params
}: ChatIdPageProps) => {
  const { userId } = auth();
  //const { getToken } = useAuth();
  //const supabaseAccessToken = await getToken({ template: 'ai-companion' });

  //supabase.auth.setAuth(supabaseAccessToken)

  if (!userId) {
    return redirectToSignIn();
  }

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.chatId
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc"
        },
        where: {
          userId,
        },
      },
      Observations: {
        orderBy: {
          createdAt: "asc",
        },
        where: {
          userId,
        },
        take: 2,
      },
      _count: {
        select: {
          messages: true,
        }
      }
    }
  });


  if (!companion) {
    return redirect("/");
  }

  return (
    <ChatClient companion={companion} />
  );
}
 
export default ChatIdPage;
