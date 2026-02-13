'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('شكراً لتواصلك معنا! سيتم الرد عليك قريباً')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-lg opacity-90">
            نحن هنا للإجابة على جميع استفساراتك. تواصل معنا بأي طريقة مناسبة لك
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          {/* Phone */}
          <div className="p-8 rounded-lg bg-secondary/40 hover:bg-secondary/60 transition-colors text-center border border-border">
            <Phone className="text-accent mx-auto mb-4" size={32} />
            <h3 className="font-bold text-lg text-primary mb-2">رقم الهاتف</h3>
            <a href="tel:+966501234567" className="text-foreground/80 hover:text-accent transition-colors">
              +966 50 123 4567
            </a>
            <p className="text-sm text-foreground/60 mt-2">متاح من الأحد إلى الخميس</p>
          </div>

          {/* Email */}
          <div className="p-8 rounded-lg bg-secondary/40 hover:bg-secondary/60 transition-colors text-center border border-border">
            <Mail className="text-accent mx-auto mb-4" size={32} />
            <h3 className="font-bold text-lg text-primary mb-2">البريد الإلكتروني</h3>
            <a href="mailto:info@alrakeza.com" className="text-foreground/80 hover:text-accent transition-colors">
              info@alrakeza.com
            </a>
            <p className="text-sm text-foreground/60 mt-2">سنرد عليك في أسرع وقت</p>
          </div>

          {/* Address */}
          <div className="p-8 rounded-lg bg-secondary/40 hover:bg-secondary/60 transition-colors text-center border border-border">
            <MapPin className="text-accent mx-auto mb-4" size={32} />
            <h3 className="font-bold text-lg text-primary mb-2">العنوان</h3>
            <p className="text-foreground/80">
              حي النرجس
              <br />
              الرياض 12000
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border focus:border-accent focus:outline-none transition-colors"
                  placeholder="أدخل اسمك"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border focus:border-accent focus:outline-none transition-colors"
                  placeholder="بريدك الإلكتروني"
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
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border focus:border-accent focus:outline-none transition-colors"
                  placeholder="رقم جوالك"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الموضوع
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border focus:border-accent focus:outline-none transition-colors"
                  placeholder="موضوع رسالتك"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="اكتب رسالتك هنا"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                أرسل الرسالة
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Hours */}
            <div className="p-8 rounded-lg bg-secondary/30 border border-border space-y-6">
              <div className="flex items-start gap-4">
                <Clock className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-primary text-lg mb-4">ساعات العمل</h3>
                  <div className="space-y-2 text-sm text-foreground/80">
                    <p>الأحد - الخميس: 8:00 ص - 5:00 م</p>
                    <p>الجمعة والسبت: مغلق</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/966501234567?text=مرحبا%20أحتاج%20مساعدة"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              <MessageCircle size={24} />
              تواصل عبر واتس آب
            </a>

            {/* Map Placeholder */}
            <div className="rounded-lg bg-secondary/50 h-64 flex items-center justify-center border border-border">
              <div className="text-center">
                <MapPin className="text-accent mx-auto mb-3" size={40} />
                <p className="text-foreground/60 font-medium">خريطة الموقع</p>
                <p className="text-sm text-foreground/50">حي النرجس، الرياض</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">أسئلة شائعة</h2>
          <div className="space-y-6">
            {[
              {
                q: 'ما هي رسوم الاستشارة الأولية؟',
                a: 'نقدم استشارة أولية مجانية لجميع العملاء الجدد. بعد ذلك، تعتمد الرسوم على طبيعة القضية وتعقيدها.',
              },
              {
                q: 'هل يمكن حجز استشارة عبر الهاتف؟',
                a: 'نعم، نقدم استشارات عبر الهاتف والفيديو وفي المكتب. اختر الطريقة التي تناسبك.',
              },
              {
                q: 'كم يستغرق الرد على استفسار؟',
                a: 'نسعى للرد على جميع الاستفسارات في خلال 24 ساعة خلال أيام العمل.',
              },
              {
                q: 'هل تمثلون في المحاكم؟',
                a: 'نعم، فريقنا يمثل العملاء في جميع محاكم المملكة العربية السعودية.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-background border border-border">
                <h3 className="font-bold text-primary mb-3 text-lg">{faq.q}</h3>
                <p className="text-foreground/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
