'use client'

import { useState } from 'react'
import { Phone, MessageCircle, MapPin } from 'lucide-react'

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    caseType: 'civil',
    date: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('تم استقبال طلبك! سيتواصل معك فريقنا قريباً')
    setFormData({ name: '', phone: '', caseType: 'civil', date: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">احجز استشارة قانونية</h1>
          <p className="text-lg opacity-90">
            احصل على استشارة قانونية متخصصة من فريقنا. املأ النموذج أدناه واختر الموعد المناسب لك
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-lg bg-secondary/30 border border-border">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                  placeholder="رقم جوالك"
                />
              </div>

              {/* Case Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  نوع القضية
                </label>
                <select
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="civil">قضايا مدنية</option>
                  <option value="commercial">قضايا تجارية</option>
                  <option value="corporate">قانون الشركات</option>
                  <option value="employment">قانون العمل</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  التاريخ المفضل للاستشارة
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  تفاصيل قضيتك
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="أخبرنا عن قضيتك وما تحتاج إليه"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                احجز الاستشارة
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="p-6 rounded-lg bg-primary text-primary-foreground space-y-6">
              <h3 className="text-2xl font-bold">معلومات التواصل</h3>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone size={24} className="flex-shrink-0" />
                <div>
                  <p className="text-sm opacity-80">الهاتف</p>
                  <a href="tel:+966501234567" className="font-semibold hover:underline">
                    +966 50 123 4567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <MessageCircle size={24} className="flex-shrink-0" />
                <div>
                  <p className="text-sm opacity-80">البريد الإلكتروني</p>
                  <a href="mailto:info@alrakeza.com" className="font-semibold hover:underline">
                    info@alrakeza.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <MapPin size={24} className="flex-shrink-0" />
                <div>
                  <p className="text-sm opacity-80">العنوان</p>
                  <p className="font-semibold">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/966501234567?text=مرحبا%20أحتاج%20استشارة%20قانونية"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={20} />
              تواصل عبر واتس آب
            </a>

            {/* Benefits */}
            <div className="p-6 rounded-lg bg-secondary/40 space-y-4">
              <h3 className="font-bold text-primary text-lg">مميزات الاستشارة</h3>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>استشارة مباشرة مع محامي متخصص</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>دراسة شاملة لحالتك</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>خطة عمل قانونية واضحة</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>أسعار عادلة وشفافة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">خطوات حجز الاستشارة</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'ملء النموذج', desc: 'أخبرنا عن حالتك' },
              { step: '2', title: 'التأكيد', desc: 'سنتواصل معك للتأكيد' },
              { step: '3', title: 'تحديد الموعد', desc: 'اختر الموعد المناسب' },
              { step: '4', title: 'الاستشارة', desc: 'احصل على استشارتك' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
