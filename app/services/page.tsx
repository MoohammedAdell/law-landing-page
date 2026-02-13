'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      id: 'civil',
      title: 'القضايا المدنية',
      description: 'نمثل عملائنا في جميع القضايا المدنية بكفاءة واحترافية عالية',
      details: 'نتعامل مع الدعاوى المتعلقة بالعقود والأموال والمسؤولية المدنية والقضايا الأسرية',
      icon: '⚖️',
    },
    {
      id: 'commercial',
      title: 'القضايا التجارية',
      description: 'استشارات وتمثيل قانوني في جميع النزاعات التجارية والعقود',
      details: 'متخصصون في قانون التجارة والعقود والشراكات والملكية الفكرية',
      icon: '📊',
    },
    {
      id: 'corporate',
      title: 'قانون الشركات',
      description: 'خدمات شاملة في تأسيس الشركات والإجراءات التنظيمية',
      details: 'من التأسيس والتسجيل إلى الإدارة القانونية والتدقيق',
      icon: '🏢',
    },
    {
      id: 'employment',
      title: 'قانون العمل',
      description: 'استشارات وتمثيل في جميع مسائل قانون العمل والعمالة',
      details: 'عقود العمل والتسريح والتعويضات والنزاعات العمالية',
      icon: '👥',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">خدماتنا القانونية</h1>
          <p className="text-lg opacity-90">
            نقدم خدمات قانونية متخصصة تغطي جميع جوانب القانون المدني والتجاري
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <div className="h-full p-8 rounded-lg bg-secondary/50 hover:bg-secondary/80 hover:shadow-lg transition-all cursor-pointer group">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  اعرف أكثر
                  <ArrowLeft size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">لماذا تختار خدماتنا؟</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'خبرة واسعة', desc: 'أكثر من 10 سنوات في تقديم الخدمات القانونية' },
              { title: 'فريق متخصص', desc: 'محامون ذوو خبرة في مختلف فروع القانون' },
              { title: 'حلول مخصصة', desc: 'نقدم حلولاً مخصصة حسب احتياجات كل عميل' },
              { title: 'متابعة دقيقة', desc: 'نتابع قضاياك بعناية واهتمام حتى النهاية' },
            ].map((item) => (
              <div key={item.title} className="space-y-2 p-4">
                <h3 className="font-bold text-primary text-lg">{item.title}</h3>
                <p className="text-foreground/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">هل تحتاج استشارة قانونية؟</h2>
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
