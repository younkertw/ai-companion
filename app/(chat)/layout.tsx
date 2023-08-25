import '@/app/scrollbar.css'
const ChatLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="mx-auto max-w-4xl h-full w-full theme-scrollbar">
      {children}
    </div>
  );
}

export default ChatLayout;
