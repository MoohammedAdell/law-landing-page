'use client'

import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container max-w-6xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="text-right">
            <h3 className="text-2xl font-bold mb-4">مكتب الركيزة القانونية</h3>
            <p className="text-white/80 leading-relaxed">
              متخصصون في تقديم خدمات قانونية متميزة بخبرة واحترافية منذ 2012
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  تواصل معنا
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  الشروط والأحكام
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-4">معلومات التواصل</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="tel:+966501234567" className="hover:text-white transition-colors">
                  الهاتف: +966 50 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@alrakeeza.com" className="hover:text-white transition-colors">
                  البريد: info@alrakeeza.com
                </a>
              </li>
              <li>الرياض - حي العليا</li>
              <li>ساعات العمل: من الأحد إلى الخميس 9:00 - 17:00</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 text-white/70 text-sm">
          <p>© 2024 مكتب الركيزة القانونية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-white transition-colors">
              الشروط والأحكام
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
