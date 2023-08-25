import { redirect } from "next/navigation";
import { auth, redirectToSignIn, useAuth } from "@clerk/nextjs";

//import supabase from '@/lib/supabaseClient';
import prismadb from "@/lib/prismadb";

import { ChatClient } from "./components/client";
import ObservationNew from '@/components/observation/observation-new';
import type { ObservationType } from '@/lib/ObservationType'

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
  <div className="flex max-w-screen min-h-screen max-h-screen antialiased">
    <div className="hidden lg:block md:flex w-[45%] flex-grow items-start pt-[2.75rem] px-1 overflow-y-auto division">
      <div className="h-[60%] flex flex-col justify-center overflow-y-auto">
           <ObservationNew observationMessages={companion.messages} /> 
      </div>
      <div>
      </div>
    </div>
    <div className="w-full min-h-screen max-h-screen division">
      <div className="flex flex-col justify-center px-1 py-1 overflow-y-auto">
           <ChatClient companion={companion} />
      </div>
    </div>
    <div className="hidden lg:block w-[45%] flex-grow pt-[2.75rem] px-1 overflow-y-auto division">
      <div className="flex flex-col justify-center">
      </div>
    </div>
  </div>
  );
}
 
export default ChatIdPage;
