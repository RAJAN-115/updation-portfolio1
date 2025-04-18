'use client';

import { AIChatButton } from './ai-chat-button';

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col-reverse gap-4">
      <AIChatButton />
    </div>
  );
}