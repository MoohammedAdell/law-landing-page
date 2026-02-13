'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/01069418171?text=مرحبا%20أحتاج%20مساعدة%20قانونية"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse hover:animate-none"
      aria-label="تواصل عبر واتس آب"
    >
      <MessageCircle size={24} />
    </a>
  )
}
