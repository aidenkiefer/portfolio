import { ChatWidget } from '@/components/chatbot/ChatWidget';

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ChatWidget />
    </>
  );
}
