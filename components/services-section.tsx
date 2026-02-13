'use client'

import { Card } from '@/components/ui/card'
import { Briefcase, Building2, Scale, FileText } from 'lucide-react'

const services = [
  {
    icon: Scale,
    title: 'القضايا المدنية',
    description: 'تمثيل قانوني شامل في جميع القضايا المدنية بما في ذلك المنازعات العقارية والعائلية والضمان',
  },
  {
    icon: Briefcase,
    title: 'القضايا التجارية',
    description: 'خبرة متخصصة في المنازعات التجارية والعقود والمطالبات المالية والشراكات التجارية',
  },
  {
    icon: Building2,
    title: 'تأسيس الشركات',
    description: 'خدمات متكاملة لتأسيس الشركات والتعديل على الأنظمة الداخلية والحصول على التراخيص اللازمة',
  },
  {
    icon: FileText,
    title: 'الاستشارات القانونية',
    description: 'استشارات قانونية متخصصة وشاملة لجميع جوانب عملك التجاري والقانوني',
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-balance">
            خدماتنا
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-balance">
            نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية احتياجاتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
