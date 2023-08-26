import '@/app/scrollbar.css'
const ChatLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="mx-auto max-w-7xl max-h-screen w-full">
      {children}
    </div>
  );
}

export default ChatLayout;
