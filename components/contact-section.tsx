'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    caseType: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, caseType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', phone: '', caseType: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
                تواصل معنا
              </h2>
              <p className="text-xl text-foreground/60">
                نحن هنا للإجابة على أسئلتك والاستماع إلى احتياجاتك القانونية
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-border hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">رقم الهاتف</h4>
                    <a href="tel:+966501234567" className="text-foreground/70 hover:text-primary transition-colors">
                      +966 50 123 4567
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">البريد الإلكتروني</h4>
                    <a href="mailto:info@alrakeeza.com" className="text-foreground/70 hover:text-primary transition-colors">
                      info@alrakeeza.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">العنوان</h4>
                    <p className="text-foreground/70">الرياض - حي العليا</p>
                    <p className="text-sm text-foreground/60 mt-1">ساعات العمل: من الأحد إلى الخميس 9:00 - 17:00</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 border-border shadow-lg">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">تم إرسال رسالتك بنجاح</h3>
                  <p className="text-foreground/60">سنتواصل معك في أقرب وقت ممكن</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">الاسم الكامل</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="أدخل اسمك الكامل"
                      className="border-border focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">رقم الجوال</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="966501234567+"
                      className="border-border focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">نوع القضية</label>
                    <Select value={formData.caseType} onValueChange={handleSelectChange}>
                      <SelectTrigger className="border-border focus:border-primary">
                        <SelectValue placeholder="اختر نوع القضية" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="civil">قضايا مدنية</SelectItem>
                        <SelectItem value="commercial">قضايا تجارية</SelectItem>
                        <SelectItem value="founding">تأسيس الشركات</SelectItem>
                        <SelectItem value="consultation">استشارات قانونية</SelectItem>
                        <SelectItem value="other">أخرى</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">الرسالة</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="اكتب تفاصيل قضيتك أو استفسارك..."
                      className="border-border focus:border-primary min-h-32 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold h-12 transition-all"
                  >
                    إرسال الرسالة
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/966501234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </section>
  )
}
