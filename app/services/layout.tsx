import { isServicesChatbotEnabled } from '@/lib/chatbot/featureFlags';
import { ServicesChatWidgetClient } from '@/components/services/ServicesChatWidgetClient';

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const chatbotOn = isServicesChatbotEnabled();

  return (
    <>
      {children}
      {chatbotOn ? <ServicesChatWidgetClient /> : null}
    </>
  );
}
