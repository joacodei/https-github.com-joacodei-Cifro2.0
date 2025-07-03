"use client"

import type React from "react"

import { ArrowRight, Users, CheckCircle, Mail, MapPin, Target, Zap, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"
import { sendEmail } from "../actions/send-email"

export default function CifroLanding() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        alert("¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.")
        setIsDialogOpen(false)
        // Reset form
        ;(e.target as HTMLFormElement).reset()
      } else {
        alert(result.error || "Error al enviar el mensaje. Por favor, intenta nuevamente.")
      }
    } catch (error) {
      alert("Error al enviar el mensaje. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <Image
                src="/images/cifro-logo-full.png"
                alt="CIFRO - Soluciones Financieras para PyMEs"
                width={180}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-gray-600 hover:text-gray-900 transition-colors scroll-smooth">
                Servicios
              </a>
              <a href="#nosotros" className="text-gray-600 hover:text-gray-900 transition-colors scroll-smooth">
                Nosotros
              </a>
              <a href="#por-que" className="text-gray-600 hover:text-gray-900 transition-colors scroll-smooth">
                ¿Por qué CIFRO?
              </a>
              <a href="#contacto" className="text-gray-600 hover:text-gray-900 transition-colors scroll-smooth">
                Contacto
              </a>
            </nav>
            <Button size="lg" className="text-lg px-8 py-3 bg-blue-600 hover:bg-blue-700" asChild>
              <a href="https://calendly.com/cifro-info/30min" target="_blank" rel="noopener noreferrer">
                Consulta Gratuita
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Tu Socio Estratégico Financiero</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Soluciones Financieras</span> para PyMEs
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transformamos la gestión financiera de tu empresa con orden, claridad y resultados concretos. Nos
              convertimos en tu equipo financiero para que te enfoques en hacer crecer tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3 bg-blue-600 hover:bg-blue-700" asChild>
                <a href="https://calendly.com/cifro-info/30min" target="_blank" rel="noopener noreferrer">
                  Reunión Sin Cargo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent" asChild>
                <a href="#servicios">Conoce Nuestros Servicios</a>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Sin compromiso • 100% confidencial</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen izquierda */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%203%20jun%202025%2C%2009_17_33%20p.m.-ls8MZ6m1BCVLB5g4VwGtHB5EMgtjzw.png"
            alt="Equipo financiero trabajando con reportes y análisis"
            className="rounded-2xl shadow-lg"
            loading="lazy"
          />

          {/* Contenido derecho */}
          <div>
            <div className="mb-6">
              <Badge className="mb-3 bg-blue-600 text-white hover:bg-blue-600">Servicio Premium</Badge>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Área de Finanzas Tercerizada</h2>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                Nos convertimos en tu equipo financiero, para que te enfoques en hacer crecer tu negocio.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                  📊 Diagnóstico financiero integral
                </h3>
                <p className="text-gray-700">
                  Analizamos tu situación general y te entregamos un informe claro, con hallazgos y oportunidades de
                  mejora.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                  📈 Planificación financiera y estratégica
                </h3>
                <p className="text-gray-700">
                  Traducimos tus metas en un plan financiero claro, para que tomes decisiones con datos reales.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                  💰 Armado y control de presupuestos
                </h3>
                <p className="text-gray-700">
                  Diseñamos presupuestos alineados a tus objetivos y te ayudamos a darles seguimiento mes a mes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                  💧 Optimización del flujo de caja
                </h3>
                <p className="text-gray-700">
                  Mejoramos tu liquidez, identificamos desbalances y ajustamos para que el dinero alcance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                  ✂️ Reducción de gastos operativos
                </h3>
                <p className="text-gray-700">
                  Identificamos ineficiencias y áreas de ahorro para hacer más rentable tu negocio.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                  🔍 Análisis de costos y rentabilidad
                </h3>
                <p className="text-gray-700">
                  Descubrimos qué productos o servicios te dejan ganancias reales, y cuáles consumen recursos sin
                  retorno.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-2">
                  📋 Diseño de tableros de control (KPIs)
                </h3>
                <p className="text-gray-700">
                  Creamos herramientas simples para que veas la evolución de tu negocio en un solo lugar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿Quiénes Somos?</h2>
              <p className="text-lg text-gray-600 mb-6">
                En CIFRO, somos profesionales de la industria financiera, con años de experiencia en empresas
                internacionales. Conocemos de primera mano los desafíos que enfrentan las pequeñas y medianas empresas
                en su día a día, porque hemos estado allí, trabajando en la operación, tomando decisiones clave y
                liderando la gestión financiera.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Nuestra misión es ayudar a PyMEs a transformar su gestión financiera aportándoles orden, claridad y
                resultados concretos para que puedan enfocar sus esfuerzos en las operaciones.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-lg font-semibold text-blue-900 mb-2">
                  No somos un proveedor más: somos tu socio estratégico financiero.
                </p>
                <p className="text-blue-800">
                  Trabajamos codo a codo con dueños y equipos, para entender sus desafíos del día a día y así ayudarlos
                  a potenciar la rentabilidad y salud financiera de su negocio.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nuestra Experiencia</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Experiencia Internacional</p>
                    <p className="text-gray-600 text-sm">Profesionales con trayectoria en empresas globales</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Conocimiento Real</p>
                    <p className="text-gray-600 text-sm">Entendemos los desafíos diarios de las PyMEs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Enfoque Práctico</p>
                    <p className="text-gray-600 text-sm">Soluciones aplicables y resultados concretos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="por-que" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
            <p className="text-xl text-gray-600">Lo que nos diferencia como tu socio estratégico financiero</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Soluciones Prácticas y Aplicables</h3>
                <p className="text-gray-700">Nada de informes eternos: implementamos mejoras reales</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Experiencia Real en Empresas</h3>
                <p className="text-gray-700">Sabemos lo que es gestionar una PyME</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visión Estratégica y Operativa</h3>
                <p className="text-gray-700">Pensamos en tu negocio como un todo</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Acompañamiento Personalizado</h3>
                <p className="text-gray-700">Nos involucramos como tu socio financiero</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¡Contáctanos!</h2>
            <p className="text-xl mb-8 opacity-90">
              Te proponemos una primera reunión sin cargo para conocerte, entender tus desafíos y ver cómo podemos
              ayudarte.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-lg font-semibold mb-2">Primera Consulta Gratuita</p>
              <p className="opacity-90">Sin compromiso • 100% confidencial</p>
            </div>

            <div className="flex justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-blue-50" asChild>
                <a href="https://calendly.com/cifro-info/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 w-5 h-5" />
                  Agendar Reunión
                </a>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="opacity-90">info@cifro.com.ar</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Ubicación</h3>
                <p className="opacity-90">Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/cifro-logo-full.png"
                alt="CIFRO Logo"
                width={150}
                height={50}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">Soluciones financieras para PyMEs. Tu socio estratégico financiero.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Diagnóstico Financiero</li>
                <li>Planificación Estratégica</li>
                <li>Control de Presupuestos</li>
                <li>Optimización de Flujo de Caja</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Quiénes Somos</li>
                <li>Nuestro Enfoque</li>
                <li>Casos de Éxito</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Consulta Gratuita</li>
                <li>info@cifro.com.ar</li>
                <li>Buenos Aires, Argentina</li>
                <li>Términos y Condiciones</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CIFRO. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
