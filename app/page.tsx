"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Download,
  CheckCircle,
  Star,
  Printer,
  BookOpen,
  Church,
  Home,
  School,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function LandingPage() {
  const [currentFeedback, setCurrentFeedback] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState("")

  const feedbacks = [
    { img: "/feedback1.jpg", alt: "Feedback cliente 1" },
    { img: "/feedback2.jpg", alt: "Feedback cliente 2" },
    { img: "/feedback3.jpg", alt: "Feedback cliente 3" },
    { img: "/feedback4.jpg", alt: "Feedback cliente 4" },
    { img: "/feedback5.jpg", alt: "Feedback cliente 5" },
    { img: "/feedback6.jpg", alt: "Feedback cliente 6" },
    { img: "/feedback7.jpg", alt: "Feedback cliente 7" },
  ]

  const customerNames = [
    "Marcia",
    "Ana Paula",
    "Carla",
    "Fernanda",
    "Juliana",
    "Patricia",
    "Luciana",
    "Daniela",
    "Renata",
    "Claudia",
    "Vanessa",
    "Simone",
    "Adriana",
    "Cristina",
    "Monica",
  ]

  useEffect(() => {
    const showNotificationInterval = () => {
      // Random interval between 8-15 seconds
      const randomInterval = Math.random() * 7000 + 8000

      setTimeout(() => {
        // Pick random customer name
        const randomName = customerNames[Math.floor(Math.random() * customerNames.length)]
        setCurrentCustomer(randomName)
        setShowNotification(true)

        // Hide after 4 seconds
        setTimeout(() => {
          setShowNotification(false)
        }, 4000)

        // Schedule next notification
        showNotificationInterval()
      }, randomInterval)
    }

    // Start the cycle after 5 seconds
    setTimeout(showNotificationInterval, 5000)
  }, [])

  const scrollToOffer = () => {
    const offerSection = document.getElementById("offer-section")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const nextFeedback = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length)
  }

  const prevFeedback = () => {
    setCurrentFeedback((prev) => (prev - 1 + feedbacks.length) % feedbacks.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250722_0237_Pintura%20com%20Prop%C3%B3sito_simple_compose_01k0ra426gezyv4zzk5j9gm5gm-4NH33hKMjMRNO6HZfCFi3vVvfOr1ux.png"
              alt="Pintura com Propósito Logo"
              width={60}
              height={60}
              className="rounded-full bg-white/20 p-1"
            />
            <span className="text-xl font-bold text-white">PINTURA COM PROPÓSITO</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 text-sm font-bold">
              🔥 ESTILO BOBBIE GOODS CRISTÃO
            </Badge>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              MOMENTOS COM JESUS - <span className="text-pink-500">PÁGINAS PARA COLORIR</span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Mostre às crianças a presença de Jesus no dia a dia delas, enquanto pintam! 😍
            </p>
            <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-xl mx-auto border-2 border-yellow-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lg-bj3df-com-um-toque-ative-10-especialistas-e-transforme-sua-ideia-em-produto-digital-21-QbxgsWr6J7sDSn42Ncs7G18bSXhk2y.png"
                alt="Menina feliz segurando o livro Momentos com Jesus"
                width={500}
                height={300}
                className="rounded-lg shadow-lg mx-auto mb-4 w-full"
              />
              <p className="text-sm md:text-base text-gray-600 mb-4">Arquivo Digital pronto para Imprimir!</p>
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-xs md:text-sm text-gray-600 ml-2">(+500 famílias satisfeitas)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button after Hero */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Button
            onClick={scrollToOffer}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-base md:text-lg"
          >
            QUERO MEUS DESENHOS
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">Por que escolher nosso material? 💖</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-8">
              <div>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  📚 Coleção exclusiva com cenas que retratam Jesus com as crianças em momentos simples:
                </p>
                <div className="space-y-2">
                  {[
                    "Tomando café da manhã ☕",
                    "Indo à escola 🎒",
                    "Brincando na pracinha 🛝",
                    "Ajudando nas tarefas 🧹",
                    "No consultório do dentista! 😁",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-4 md:p-6 border-2 border-pink-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lg-wa3kq-copia-de-god-is-t5BLTbBw1pn1ntihF4TqDenc2A5SN2.png"
                  alt="Livro de colorir Momentos com Jesus"
                  width={350}
                  height={250}
                  className="rounded-lg shadow-lg mx-auto w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { icon: Church, text: "Escolas Bíblicas", color: "bg-purple-100 text-purple-600" },
                { icon: Home, text: "Família", color: "bg-pink-100 text-pink-600" },
                { icon: School, text: "Ensino Cristão", color: "bg-green-100 text-green-600" },
                { icon: BookOpen, text: "Casa", color: "bg-orange-100 text-orange-600" },
              ].map((item, index) => (
                <div key={index} className={`text-center p-2 md:p-3 rounded-lg ${item.color}`}>
                  <item.icon className="h-6 md:h-8 w-6 md:w-8 mx-auto mb-2" />
                  <p className="text-xs md:text-sm font-semibold">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Pages */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">Veja as Amostras 😍</h2>
              <p className="text-sm md:text-base text-gray-600">Exemplos das páginas para colorir:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lg-8m4wv-1-P9Tpm2lqOhfS52T4QwH5nXot6odBrx.png",
                  title: "Jesus no Consultório 🦷",
                },
                {
                  img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lg-5uobd-2-w90ZFkBGS40EVSENdzxccEBVqD6hn7.png",
                  title: "Cabaninha com Jesus ⛺",
                },
                {
                  img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lg-chw78-3-w4x3pgnQsrPnf48Y6yKSKer9zoDrqV.png",
                  title: "Guardando com Jesus 🧸",
                },
              ].map((item, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all border-2 border-yellow-300">
                  <CardContent className="p-3 md:p-4">
                    <Image
                      src={item.img || "/placeholder.svg"}
                      alt={item.title}
                      width={250}
                      height={180}
                      className="rounded-lg mb-3 w-full"
                    />
                    <h3 className="text-xs md:text-sm font-bold text-center text-gray-800">{item.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">BÔNUS: Personagens Bíblicos 🎁</h2>

            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6 border-2 border-purple-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lg-4d0um-amostra-1550-x-1080-px-1-7VdQyoK1QasQls3rWephGMrSZaj2xz.png"
                alt="Livro Personagens Bíblicos"
                width={400}
                height={250}
                className="rounded-lg shadow-lg mx-auto mb-4 w-full max-w-md"
              />
              <h3 className="text-base md:text-lg font-bold mb-3 text-purple-600">🎨 GOD IS GOOD – COLEÇÃO CRISTÃ ✝️</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-4">
                31 desenhos de personagens bíblicos no estilo Bobbie Goods
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-200 to-orange-200 rounded-xl p-4 md:p-6 border-2 border-yellow-400 mb-6">
              <h3 className="text-base md:text-lg font-bold text-orange-700">🎨 SUPER BÔNUS: 50 DESENHOS EXTRAS</h3>
            </div>

            <Button
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-base md:text-lg"
            >
              QUERO GARANTIR MINHA OFERTA
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Feedbacks Section */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Feedbacks Reais dos Nossos Clientes 💬</h2>
            <p className="text-xs md:text-sm text-gray-600">Conversas direto do WhatsApp</p>
          </div>

          <div className="max-w-md mx-auto relative">
            <div className="bg-white rounded-xl shadow-lg p-4 border-2 border-green-300">
              <Image
                src={feedbacks[currentFeedback].img || "/placeholder.svg"}
                alt={feedbacks[currentFeedback].alt}
                width={300}
                height={500}
                className="rounded-lg mx-auto w-full max-w-xs"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevFeedback}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <button
              onClick={nextFeedback}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 gap-2">
              {feedbacks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeedback(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentFeedback ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">O que dizem nossos clientes 💕</h2>
            <p className="text-xs md:text-sm text-gray-600">+1.500 famílias satisfeitas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              {
                img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carla_oliveira.jpg-rS6tAKKtILTpB1TZVUx0gYGkJIim0i.webp",
                text: "Meus filhos adoraram colorir! Uma forma linda de aprender sobre a Bíblia.",
                name: "Carla Oliveira",
                role: "Mãe de 3 filhos",
              },
              {
                img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pastor_joao.jpg-7AOxiJix97NhLNsWDCwsIRna0gADZX.webp",
                text: "Excelente recurso para usar na igreja! As crianças amam esses desenhos.",
                name: "Pastor João",
                role: "Líder Infantil",
              },
              {
                img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maria_santos.jpg-Kk8myaGvPUfIyvDRKViuWSTZX7MXAJ.webp",
                text: "A qualidade dos desenhos é excepcional. Perfeito para atividades educativas.",
                name: "Maria Santos",
                role: "Professora",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-lg border-2 border-pink-300">
                <CardContent className="p-3 md:p-4">
                  <Image
                    src={testimonial.img || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={250}
                    height={150}
                    className="rounded-lg shadow-md w-full h-24 md:h-32 object-cover mb-3"
                  />
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 mb-3">"{testimonial.text}"</p>
                  <div className="text-xs">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="offer-section" className="py-8 md:py-12 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold mb-6 text-white">🙌 OFERTA ESPECIAL</h2>

            <Card className="border-4 border-yellow-400 shadow-2xl bg-white relative">
              <CardContent className="p-4 md:p-6">
                <Badge className="bg-red-500 text-white px-3 md:px-4 py-2 text-xs md:text-sm mb-4 animate-bounce">
                  ⏰ ÚLTIMAS HORAS
                </Badge>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-lg md:text-xl text-orange-400 line-through">R$ 47,00</span>
                  <span className="text-3xl md:text-4xl font-bold text-green-600">R$ 9,97</span>
                </div>
                <p className="text-sm md:text-base text-gray-600 font-semibold mb-6">Desconto de 79%!</p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 md:p-4 mb-6">
                  <h3 className="text-sm md:text-base font-bold text-center mb-3 text-gray-800">🎁 VOCÊ RECEBE:</h3>
                  <div className="space-y-2 text-left text-xs md:text-sm">
                    {[
                      "✅ +30 Desenhos Momentos com Jesus",
                      "✅ +31 Desenhos Personagens Bíblicos",
                      "✅ Super Bônus: 50 desenhos extras",
                      "✅ PDFs alta qualidade para impressão",
                      "✅ Acesso imediato por email e WhatsApp",
                      "✅ Garantia de 7 dias",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✅</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => window.open("https://go.pepperpay.com.br/r51ok", "_blank")}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-base md:text-lg py-3 md:py-4 rounded-lg font-bold shadow-lg"
                >
                  <Download className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  QUERO AGORA POR R$ 9,97
                </Button>

                <div className="flex items-center justify-center gap-2 md:gap-4 mt-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-blue-500" />
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Printer className="h-3 w-3 text-purple-500" />
                    <span>Pronto p/ imprimir</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 7-Day Guarantee Badge - Now Below the Card */}
            <div className="mt-6 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/30 flex items-center gap-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/md-sk873-ll15png-6ILT6pfq8le5JsFbWg22e7e4zvBFAG.webp"
                  alt="Garantia de 7 dias"
                  width={60}
                  height={60}
                  className="animate-pulse w-12 md:w-15"
                />
                <div className="text-white text-left">
                  <p className="font-bold text-sm md:text-lg">Garantia de 7 Dias</p>
                  <p className="text-xs md:text-sm opacity-90">Satisfação garantida ou seu dinheiro de volta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Dúvidas Frequentes</h2>
            </div>

            <Card className="shadow-lg border-2 border-purple-300">
              <CardContent className="p-3 md:p-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left text-xs md:text-sm font-bold text-purple-800">
                      O material é impresso ou digital?
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-gray-700 bg-purple-50 p-3 rounded">
                      Digital em PDF. Você recebe no email e WhatsApp após a compra.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left text-xs md:text-sm font-bold text-purple-800">
                      Posso imprimir e usar na escola/igreja?
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-gray-700 bg-purple-50 p-3 rounded">
                      Sim! Pode imprimir quantas vezes quiser para uso educacional.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left text-xs md:text-sm font-bold text-purple-800">
                      Como recebo após a compra?
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-gray-700 bg-purple-50 p-3 rounded">
                      Acesso imediato! Links de download por email e WhatsApp.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Notification */}
      {showNotification && (
        <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-left duration-500">
          <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 max-w-xs">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm font-semibold">{currentCustomer} acabou de comprar</p>
              <p className="text-xs opacity-90">Momentos com Jesus</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250722_0237_Pintura%20com%20Prop%C3%B3sito_simple_compose_01k0ra426gezyv4zzk5j9gm5gm-4NH33hKMjMRNO6HZfCFi3vVvfOr1ux.png"
              alt="Pintura com Propósito Logo"
              width={32}
              height={32}
              className="rounded-full bg-white/20 p-1"
            />
            <span className="text-base md:text-lg font-bold">PINTURA COM PROPÓSITO</span>
          </div>
          <p className="text-gray-400 text-xs">© 2025 Pintura com Propósito. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
