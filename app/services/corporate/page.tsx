'use client'

import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function CorporateServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100">
            <ArrowRight size={20} />
            العودة إلى الخدمات
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">قانون الشركات</h1>
          <p className="text-lg opacity-90">
            خدمات شاملة في تأسيس الشركات والإجراءات التنظيمية والإدارة القانونية
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">نطاق الخدمة</h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              نقدم خدمات شاملة في جميع جوانب قانون الشركات من التأسيس والتسجيل إلى الإدارة القانونية والتدقيق. نساعد الشركات الناشئة والقائمة على الامتثال للقوانين والأنظمة المعمول بها في المملكة. فريقنا يمتلك خبرة واسعة في التعامل مع الهيئات الحكومية والتراخيص.
            </p>
          </div>

          {/* Key Areas */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">مجالات التخصص</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'تأسيس وتسجيل الشركات',
                'عقود الشراكة والتعديلات',
                'إدارة الشركات والامتثال',
                'الإجراءات الإدارية والترخيص',
                'حل الشركات والتصفية',
                'نزاعات الشركاء والإدارة',
              ].map((area) => (
                <div key={area} className="flex gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                  <p className="text-foreground/80 font-medium">{area}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Examples */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">خدمات تقدمها</h2>
            <div className="space-y-4">
              {[
                'تأسيس شركة محدودة المسؤولية وتسجيلها في الجهات الحكومية',
                'صياغة وتعديل عقود الشراكة والنظام الأساسي للشركة',
                'متابعة الإجراءات القانونية للحصول على التراخيص المطلوبة',
                'تمثيل الشركة في النزاعات والقضايا الإدارية',
              ].map((example, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-lg bg-accent/10 border-r-4 border-accent">
                  <div className="text-accent font-bold flex-shrink-0">✓</div>
                  <p className="text-foreground/80">{example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">لماذا تختارنا؟</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'خبرة في التأسيس', desc: 'مئات الشركات تأسست بمساعدتنا بنجاح' },
                { title: 'متابعة دقيقة', desc: 'نتابع جميع الإجراءات الحكومية نيابة عنك' },
                { title: 'استشارات مستمرة', desc: 'نقدم استشارات مستمرة لضمان الامتثال' },
                { title: 'حل سريع للمشاكل', desc: 'نحل المشاكل القانونية بكفاءة وسرعة' },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-lg bg-secondary/40 hover:bg-secondary/60 transition-colors">
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-foreground/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">هل تحتاج مساعدة في تأسيس شركتك أو إدارتها قانونياً؟</h2>
          <p className="text-lg opacity-90">
            فريقنا جاهز لمساعدتك في جميع الجوانب القانونية لشركتك
          </p>
          <a
            href="/consultation"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            احجز استشارة الآن
          </a>
        </div>
      </section>
    </main>
  )
}
