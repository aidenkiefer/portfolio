/**
 * Feature flags for the services chatbot (widget on /services/*).
 *
 * Enable: set NEXT_PUBLIC_SERVICES_CHATBOT_ENABLED=true in `.env.local` and in Vercel
 * project Environment Variables, then redeploy.
 *
 * When unset or any value other than "true", the widget is hidden and POST /api/chat
 * returns immediately (no Supabase or LLM usage).
 */
export function isServicesChatbotEnabled(): boolean {
  return process.env.NEXT_PUBLIC_SERVICES_CHATBOT_ENABLED === 'true';
}
