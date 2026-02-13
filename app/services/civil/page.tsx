'use client'

import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function CivilServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100">
            <ArrowRight size={20} />
            العودة إلى الخدمات
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">القضايا المدنية</h1>
          <p className="text-lg opacity-90">
            نمثل عملائنا في جميع القضايا المدنية بكفاءة واحترافية عالية وخبرة طويلة
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">نطاق الخدمة</h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              نتعامل مع جميع أنواع القضايا المدنية بما فيها الدعاوى المتعلقة بالعقود والأموال والمسؤولية المدنية والقضايا الأسرية. فريقنا متخصص في معالجة القضايا المعقدة وتقديم الحلول القانونية الأنسب لكل حالة.
            </p>
          </div>

          {/* Key Areas */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">مجالات التخصص</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'قضايا العقود والالتزامات',
                'قضايا الملكية والعقارات',
                'المسؤولية المدنية والتعويضات',
                'قضايا الأحوال الشخصية',
                'القضايا الأسرية والميراث',
                'النزاعات بين الشركاء والشركات',
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
            <h2 className="text-3xl font-bold text-primary mb-6">أمثلة على القضايا</h2>
            <div className="space-y-4">
              {[
                'تمثيل عميل في قضية نزاع على عقد بيع عقار بقيمة عالية',
                'الدفاع عن مستأجر ضد صاحب عقار بخصوص الإخلاء والتعويضات',
                'تسوية نزاع بين شركاء في شركة بخصوص المسؤوليات والأموال',
                'متابعة قضية تعويضات لحادث سير وإصابات جسدية',
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
                { title: 'خبرة عملية', desc: 'سنوات من الخبرة في القضايا المدنية المعقدة' },
                { title: 'نتائج إيجابية', desc: 'معدل نجاح عالي في القضايا المتشابهة' },
                { title: 'متابعة دقيقة', desc: 'نتابع القضية بكل دقة من البداية للنهاية' },
                { title: 'أسعار عادلة', desc: 'نقدم أسعاراً عادلة وخطط دفع مرنة' },
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
          <h2 className="text-3xl font-bold">هل لديك قضية مدنية تحتاج استشارة قانونية؟</h2>
          <p className="text-lg opacity-90">
            فريقنا المتخصص جاهز لمساعدتك. احجز استشارتك الأولى معنا اليوم
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
