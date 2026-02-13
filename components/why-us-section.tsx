'use client'

import { Check } from 'lucide-react'

const reasons = [
  {
    title: 'خبرة أكثر من 10 سنوات',
    description: 'فريق متخصص بخبرة عملية واسعة في جميع مجالات القانون',
  },
  {
    title: 'سرية تامة',
    description: 'نحن نلتزم بأعلى معايير السرية والخصوصية في التعامل مع قضاياك',
  },
  {
    title: 'التزام كامل',
    description: 'متابعة دقيقة لقضاياك من البداية إلى النهاية بكل احترافية',
  },
  {
    title: 'نتائج مثبتة',
    description: 'سجل حافل من القضايا الناجحة والعملاء الراضين',
  },
]

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-xl">
              <div className="space-y-8">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">{reason.title}</h4>
                      <p className="text-foreground/60">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-right space-y-6">
            <div className="space-y-3">
              <span className="text-accent font-semibold">لماذا تختار مكتبنا</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary text-balance">
                نحن شركاؤك الموثوقون في جميع قضاياك القانونية
              </h2>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              يتمتع فريقنا بخبرة عملية واسعة في مختلف المجالات القانونية، مما يمكننا من تقديم حلول قانونية فعالة وسريعة لجميع عملائنا.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              نعمل على بناء علاقات طويلة الأمد مع عملائنا بناءً على الثقة والشفافية والنتائج المثبتة.
            </p>

            <div className="pt-4">
              <p className="text-primary font-semibold text-lg">استعد للتعامل مع محامي متخصصين وأكفاء</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
