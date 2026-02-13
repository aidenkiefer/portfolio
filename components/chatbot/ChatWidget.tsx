'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, RotateCcw } from 'lucide-react';
import { designTokens } from '@/lib/design-tokens';
import { getOrCreateSessionId, setSessionId as saveSessionId, clearSessionId } from '@/lib/chatbot/sessionStorage';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  citations?: string[];
  isGreeting?: boolean;
}

const INITIAL_GREETING: Message = {
  id: 'greeting',
  role: 'assistant',
  content: "Hey! I'm Aiden's site assistant. Ask me anything about his services, pricing, timelines, or what would work best for your business.",
  isGreeting: true,
};

const QUICK_START_PROMPTS = [
  "Which service is best if I want more leads?",
  "Can you explain the AI chatbot service?",
  "How fast can these be delivered?",
  "What's the pricing and process?",
  "What tech stack do you use?",
  "How do I get started?",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | undefined>(undefined);
  const [mounted, setMounted] = useState(false);
  const [animationStyle, setAnimationStyle] = useState<'gentle-scale' | 'shape-morph'>('gentle-scale');
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // After mount: restore session and show greeting (avoids hydration mismatch with sessionStorage)
  useEffect(() => {
    setMounted(true);
    const storedSessionId = getOrCreateSessionId();
    setSessionId(storedSessionId);
    setMessages((prev) => (prev.length === 0 ? [INITIAL_GREETING] : prev));

    // Load animation preference
    const storedAnimation = localStorage.getItem('chatbot-animation') as 'gentle-scale' | 'shape-morph' | null;
    if (storedAnimation) {
      setAnimationStyle(storedAnimation);
    }

    // For testing - expose toggle globally
    if (typeof window !== 'undefined') {
      (window as any).toggleChatAnimation = toggleAnimation;
    }
  }, []);

  // Focus input when drawer opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmedInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmedInput,
          sessionId,
          pathname: typeof window !== 'undefined' ? window.location.pathname : undefined,
          pageTitle: typeof window !== 'undefined' ? document.title : undefined,
        }),
      });

      const data = await response.json();

      // Update sessionId if API returned a new one
      if (data.sessionId) {
        setSessionId(data.sessionId);
        saveSessionId(data.sessionId);
      }

      // Handle typed errors
      if (data.ok === false || data.errorType) {
        let errorContent = data.error || 'Sorry, I encountered an issue. Please try again.';

        // Customize error message based on type
        if (data.errorType === 'RATE_LIMITED') {
          errorContent = data.error || 'Too many messages. Please wait a moment and try again.';
        } else if (data.errorType === 'RETRIEVAL_ERROR') {
          errorContent = data.error || "I'm having trouble searching the site information. Please try again in a moment.";
        } else if (data.errorType === 'LLM_ERROR') {
          errorContent = data.error || "I'm having trouble generating a response. Please try again in a moment.";
        } else if (data.errorType === 'CONFIG_ERROR') {
          errorContent = data.error || 'The chatbot is not properly configured. Please contact support.';
        }

        const errorMessage: Message = {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: errorContent,
        };
        setMessages((prev) => [...prev, errorMessage]);
        return;
      }

      // Success case
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.answer || data.assistantMessage, // Support both new and legacy response formats
        citations: data.citations,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: 'Sorry, I encountered an issue. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickStart = (prompt: string) => {
    // Avoid sending duplicate prompts in the same session
    const alreadySent = messages.some(msg => msg.role === 'user' && msg.content === prompt);
    if (alreadySent) return;

    setInput(prompt);
    // Send the prompt directly
    setTimeout(() => handleSend(), 0);
  };

  const handleReset = () => {
    // Clear messages and start fresh
    setMessages([INITIAL_GREETING]);
    setInput('');
    setSessionId(undefined);
    clearSessionId();
    // Generate new session on next message
  };

  // Simple markdown: escape HTML first, preserve newlines, then apply inline patterns
  const renderMarkdown = (content: string) => {
    const escape = (s: string) =>
      s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    const safe = escape(content);
    return safe
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, (_, t) => `<strong>${t}</strong>`)
      .replace(/\*(.*?)\*/g, (_, t) => `<em>${t}</em>`)
      .replace(/`(.*?)`/g, (_, t) => `<code>${t}</code>`)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, href) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`);
  };

  // Check if we should show quick-start buttons (only when greeting is visible and no user messages)
  const shouldShowQuickStart = messages.length === 1 && messages[0]?.isGreeting;

  const toggleAnimation = () => {
    const newStyle = animationStyle === 'gentle-scale' ? 'shape-morph' : 'gentle-scale';
    setAnimationStyle(newStyle);
    localStorage.setItem('chatbot-animation', newStyle);
    console.log(`Animation style changed to: ${newStyle}`);
  };

  // Compute drawer styles based on animation type
  const getDrawerStyles = () => {
    const baseStyles = {
      backgroundColor: designTokens.colors.surface.raised,
      border: `1px solid ${designTokens.colors.border.subtle}`,
      boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
      pointerEvents: isOpen ? ('auto' as const) : ('none' as const),
    };

    if (animationStyle === 'shape-morph') {
      // Shape Morph: grows from bubble's center with border-radius morphing
      // Button is 56px × 56px, center is at 28px from bottom-right corner
      return {
        ...baseStyles,
        transformOrigin: 'calc(100% - 28px) calc(100% - 28px)',
        borderRadius: isOpen ? designTokens.radii.md : '50%',
        transition: `transform 400ms ${designTokens.motion.easing.standard}, opacity 400ms ${designTokens.motion.easing.standard}, border-radius 400ms ${designTokens.motion.easing.standard}`,
      };
    } else {
      // Gentle Scale: standard transition
      return {
        ...baseStyles,
        transformOrigin: 'bottom right' as const,
        transition: `transform 400ms ${designTokens.motion.easing.standard}, opacity 400ms ${designTokens.motion.easing.standard}`,
      };
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-md transition-all duration-200 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{
          backgroundColor: designTokens.colors.accent.primary,
          color: designTokens.colors.text.inverse,
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        }}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Chat assistant"
        className={`fixed z-50 flex flex-col ${
          isOpen ? 'scale-100 opacity-100' : 'scale-[0.14] opacity-0'
        } w-full h-[600px] bottom-0 right-0 sm:bottom-6 sm:right-6 sm:w-[400px] sm:rounded-md sm:h-[600px]`}
        style={getDrawerStyles()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between border-b px-5 py-4"
          style={{
            borderColor: designTokens.colors.border.subtle,
          }}
        >
          <h2
            className="text-lg font-semibold"
            style={{ color: designTokens.colors.text.primary }}
          >
            Questions?
            <span
              className="ml-2 text-xs"
              style={{ color: designTokens.colors.text.muted }}
              title="Click console: window.toggleChatAnimation()"
            >
              ({animationStyle})
            </span>
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="flex h-8 w-8 items-center justify-center rounded transition-colors hover:opacity-70"
              style={{
                color: designTokens.colors.text.secondary,
              }}
              aria-label="Reset conversation"
              title="Start new conversation"
            >
              <RotateCcw size={16} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded transition-colors hover:opacity-70"
              style={{
                color: designTokens.colors.text.secondary,
              }}
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Messages — only render after mount to avoid hydration mismatch with sessionStorage / initial greeting */}
        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
          {mounted && messages.map((message) => (
            <div key={message.id}>
              <div
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-md px-4 py-2.5 text-sm ${
                    message.role === 'user'
                      ? 'rounded-br-sm'
                      : 'rounded-bl-sm'
                  }`}
                  style={{
                    backgroundColor:
                      message.role === 'user'
                        ? designTokens.colors.accent.primary
                        : designTokens.colors.surface.sunken,
                    color:
                      message.role === 'user'
                        ? designTokens.colors.text.inverse
                        : designTokens.colors.text.primary,
                  }}
                >
                  {message.role === 'assistant' ? (
                    <div
                      className="prose-inline"
                      suppressHydrationWarning
                      dangerouslySetInnerHTML={{
                        __html: renderMarkdown(message.content),
                      }}
                    />
                  ) : (
                    message.content
                  )}
                </div>
              </div>

              {/* Citations for assistant messages */}
              {message.role === 'assistant' && message.citations && message.citations.length > 0 && (
                <div className="mt-2 flex justify-start">
                  <div className="max-w-[85%] text-xs">
                    <span style={{ color: designTokens.colors.text.muted }}>
                      Sources:{' '}
                    </span>
                    {message.citations.map((citation, index) => (
                      <span key={citation}>
                        <a
                          href={citation}
                          target="_self"
                          rel="noopener"
                          className="underline hover:opacity-70"
                          style={{ color: designTokens.colors.accent.primary }}
                        >
                          {citation}
                        </a>
                        {index < message.citations!.length - 1 && (
                          <span style={{ color: designTokens.colors.text.muted }}>, </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick-start buttons after greeting message */}
              {message.isGreeting && shouldShowQuickStart && (
                <div className="mt-4 flex flex-col gap-2">
                  {QUICK_START_PROMPTS.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickStart(prompt)}
                      className="rounded-md border px-3 py-2 text-left text-xs transition-colors hover:opacity-80"
                      style={{
                        borderColor: designTokens.colors.border.subtle,
                        backgroundColor: designTokens.colors.bg,
                        color: designTokens.colors.text.secondary,
                      }}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div
                className="max-w-[85%] rounded-md rounded-bl-sm px-4 py-2.5 text-sm"
                style={{
                  backgroundColor: designTokens.colors.surface.sunken,
                  color: designTokens.colors.text.secondary,
                }}
                role="status"
                aria-live="polite"
              >
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div
          className="border-t px-5 py-4"
          style={{
            borderColor: designTokens.colors.border.subtle,
          }}
        >
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={isLoading}
              aria-label="Chat message"
              className="flex-1 rounded-md border px-3 py-2 text-sm outline-none transition-colors focus:border-opacity-100"
              style={{
                backgroundColor: designTokens.colors.bg,
                borderColor: designTokens.colors.border.subtle,
                color: designTokens.colors.text.primary,
              }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="rounded-md px-4 py-2 text-sm font-medium transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
              style={{
                backgroundColor: designTokens.colors.accent.primary,
                color: designTokens.colors.text.inverse,
              }}
            >
              Send
            </button>
          </div>
          {/* Disclaimer */}
          <p
            className="mt-2 text-xs"
            style={{ color: designTokens.colors.text.muted }}
          >
            This demo is powered by AI and may make mistakes. For specific details, contact Aiden directly.
          </p>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 sm:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
