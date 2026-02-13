'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, Calendar } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-slate-100 overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-right space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
                <span className="text-sm font-semibold text-primary">خبرة واحترافية منذ 2012</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight text-balance">
                حماية حقوقك <span className="text-accent">القانونية</span> أولويتنا
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed text-balance">
                نقدم استشارات قانونية شاملة في القضايا المدنية والتجارية وتأسيس الشركات بأعلى معايير الكفاءة والسرية التامة
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full font-semibold text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Calendar className="w-5 h-5 ml-2" />
                احجز استشارة الآن
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 rounded-full font-semibold text-base px-8 h-12"
                asChild
              >
                <a href="https://wa.me/966501234567" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  تواصل عبر واتساب
                </a>
              </Button>
            </div>
          </div>

          {/* Visual - Scales of Justice Theme */}
          <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl"></div>
            <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
              <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-2xl">
                <div className="text-8xl lg:text-9xl">⚖️</div>
              </div>
              <div className="text-center space-y-2">
                <p className="text-primary font-semibold text-lg">استشارات قانونية موثوقة</p>
                <p className="text-foreground/60 text-sm">تمثيل قانوني متميز وكفء</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mt-20 mb-20 pt-20 border-t border-border">
          <div className="text-center space-y-2">
            <p className="text-3xl lg:text-4xl font-bold text-primary">+500</p>
            <p className="text-foreground/60">قضية ناجحة</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl lg:text-4xl font-bold text-primary">12+</p>
            <p className="text-foreground/60">سنة خبرة</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl lg:text-4xl font-bold text-primary">95%</p>
            <p className="text-foreground/60">رضا العملاء</p>
          </div>
        </div>
      </div>
    </section>
  )
}
