"use client";

import { useCompletion } from "ai/react";
import { FormEvent, useState } from "react";
import { Companion, Message, Observations } from "@prisma/client";
import { useRouter } from "next/navigation";

import { ChatForm } from "@/components/chat-form";
import { ChatHeader } from "@/components/chat-header";
import { ChatMessages } from "@/components/chat-messages";
import { ChatMessageProps } from "@/components/chat-message";
import Character from './character'
import ObservationNew from '@/components/observation/observation-new';
import { Characters } from './config'
import { CharacterType } from '@/lib/CharacterType'



interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    observations: Observations[];
    _count: {
      messages: number;
    }
  };
};

export const ChatClient = ({
  companion,
}: ChatClientProps) => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessageProps[]>(companion.messages);
  const [character, setCharacter] = useState<CharacterType>(Characters[0]);

  const observations: Observations[] = companion ? companion.observations : [];
  const {
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    setInput,
  } = useCompletion({
    api: `/api/chat/${companion.id}`,
    onFinish(_prompt, completion) {
      const systemMessage: ChatMessageProps = {
        role: "system",
        content: completion
      };

      setMessages((current) => [...current, systemMessage]);
      setInput("");

      router.refresh();
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage: ChatMessageProps = {
      role: "user",
      content: input
    };

    setMessages((current) => [...current, userMessage]);

    handleSubmit(e);
  }

  return (
  <div className="flex max-w-screen min-h-screen max-h-screen">
    {/* Left Panel */}
    <div className="hidden lg:block md:flex w-[35%] flex-grow items-start pt-[2.75rem] px-1 overflow-y-auto division">
      <div className="h-[60%] flex flex-col justify-center overflow-y-auto">
         <ObservationNew observations={observations} /> 
      </div>
      <div>
      </div>
    </div>
    
    {/* Center Panel */}
    <div className="flex flex-col h-full w-[50%] p-4 space-y-2">
      <ChatHeader companion={companion} />
      <ChatMessages 
        companion={companion}
        isLoading={isLoading}
        messages={messages}
      />
      <ChatForm 
        isLoading={isLoading} 
        input={input} 
        handleInputChange={handleInputChange} 
        onSubmit={onSubmit} 
      />
      {isLoading && <Character character={character} />}
    </div>

    {/* Right Panel */}
    <div className="hidden lg:block w-[35%] flex-grow pt-[2.75rem] px-1 overflow-y-auto division">
      <div className="flex flex-col justify-center">
      </div>
    </div>
  </div>
   
   );
}
