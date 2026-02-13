'use client'

const steps = [
  {
    number: '01',
    title: 'استشارة أولية',
    description: 'نبدأ برسم صورة واضحة عن قضيتك من خلال استشارة مفصلة',
  },
  {
    number: '02',
    title: 'دراسة القضية',
    description: 'نقوم بدراسة شاملة للقضية وتحليل جميع الجوانب القانونية',
  },
  {
    number: '03',
    title: 'تمثيل قانوني كامل',
    description: 'نتولى تمثيلك أمام المحاكم والجهات الحكومية المختصة',
  },
  {
    number: '04',
    title: 'متابعة ودعم',
    description: 'متابعة دقيقة لقضيتك حتى الوصول للحكم النهائي',
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-balance">
            طريقة عملنا
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-balance">
            نتبع نهجاً منظماً وفعالاً في التعامل مع جميع القضايا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-3 w-6 h-1 bg-gradient-to-r from-primary to-primary/30"></div>
              )}

              <div className="bg-gradient-to-br from-blue-50 to-white border border-border rounded-2xl p-6 h-full hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
