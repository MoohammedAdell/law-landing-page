'use client'

import { CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            من نحن
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            مكتب الركيزة القانونية هو مكتب متخصص في تقديم الاستشارات القانونية والتمثيل القانوني للعملاء الأفراد والشركات، مع التركيز على تقديم خدمات قانونية عالية الجودة وذات كفاءة احترافية.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">رؤيتنا</h2>
            <p className="text-foreground/80 leading-relaxed">
              أن نكون المكتب القانوني الأول المفضل لدى العملاء في المملكة العربية السعودية، من خلال تقديم خدمات قانونية متميزة وحلول قانونية مبتكرة تساهم في حماية حقوق عملائنا وتحقيق أهدافهم.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">رسالتنا</h2>
            <p className="text-foreground/80 leading-relaxed">
              تقديم استشارات قانونية شاملة وموثوقة تغطي جميع جوانب القانون المدني والتجاري، مع الالتزام بأعلى معايير المهنية والأخلاق في أداء عملنا.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">قيمنا الأساسية</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'الاحترافية',
                description: 'نلتزم بتقديم خدمات احترافية على أعلى مستويات الكفاءة والجودة',
              },
              {
                title: 'الأمانة والشفافية',
                description: 'نتعامل مع عملائنا بكل أمانة وشفافية في جميع التعاملات',
              },
              {
                title: 'الابتكار',
                description: 'نسعى للابتكار في طرقنا وحلولنا القانونية لخدمة عملائنا بشكل أفضل',
              },
              {
                title: 'الالتزام',
                description: 'نلتزم بحماية حقوق عملائنا والدفاع عنها بكل قوة واجتهاد',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="flex gap-4 p-6 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
              >
                <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-foreground/80 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Stats */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">خبرتنا وإنجازاتنا</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'سنوات الخبرة', value: '10+' },
              { label: 'قضايا منجزة', value: '500+' },
              { label: 'عملاء راضون', value: '95%' },
              { label: 'معدل النجاح', value: '92%' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-sm opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">فريقنا</h2>
          <p className="text-foreground/80 leading-relaxed text-center mb-12">
            يتكون فريق عملنا من محامين متخصصين ذوي خبرة عملية واسعة في مختلف فروع القانون، وملتزمين بتقديم أفضل الخدمات القانونية لعملائنا.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: 'الشريك المؤسس والمحامي الرئيسي',
                expertise: 'القضايا المدنية والتجارية',
              },
              {
                role: 'محامي متخصص',
                expertise: 'القضايا العمالية وقانون الشركات',
              },
              {
                role: 'محامية متخصصة',
                expertise: 'قضايا الأحوال الشخصية والعقود',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-primary mb-2">{member.role}</h3>
                <p className="text-sm text-foreground/70">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-accent/10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">هل تحتاج استشارة قانونية؟</h2>
          <p className="text-foreground/80">
            فريقنا جاهز لمساعدتك. احجز استشارتك الأولى معنا اليوم
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
