'use client';

import dynamic from 'next/dynamic';

const ServicesChatWidget = dynamic(
  () =>
    import('@/components/chatbot/ChatWidget').then((mod) => ({
      default: mod.ChatWidget,
    })),
  { ssr: false }
);

export function ServicesChatWidgetClient() {
  return <ServicesChatWidget />;
}

