'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'أحمد الشمري',
    role: 'رجل أعمال',
    content: 'تعاملت مع المكتب في قضية تجارية معقدة، وكانوا احترافيين جداً ولم أشعر أبداً بأنني وحدي في تلك العملية. النتيجة كانت ممتازة وتجاوزت توقعاتي.',
    rating: 5,
  },
  {
    name: 'فاطمة العتيبي',
    role: 'صاحبة مشروع',
    content: 'ساعدوني في تأسيس شركتي بكل احترافية وسهولة. فريق متعاون جداً وملم بجميع الإجراءات والمتطلبات. أنصح الجميع بهم.',
    rating: 5,
  },
  {
    name: 'محمد الدعيلج',
    role: 'مدير شركة',
    content: 'خدماتهم الاستشارية ساعدتنا في تجنب الكثير من المشاكل القانونية. فريق متخصص وذو خبرة عالية جداً وسعر عادل جداً.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-balance">
            آراء عملائنا
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-balance">
            شهادات من عملائنا الراضين عن خدماتنا القانونية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/70 leading-relaxed mb-6 flex-1">{testimonial.content}</p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
