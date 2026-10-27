import React, { useState } from 'react';
import { Menu, X, ArrowRight, Smartphone, Layout, Zap, CheckCircle2, Send, BarChart3, Code2 } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-screen min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white overflow-x-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* HEADER / NAVIGATION */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 w-full">
          <div className="w-full px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                ApexStudio
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
              <a href="#caracteristicas" className="hover:text-white transition-colors">Características</a>
              <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              <a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a>
              <a href="#precios" className="hover:text-white transition-colors">Planes</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="#contacto" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/25">
                Empezar Proyecto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-6 pt-2 pb-6 space-y-3 w-full">
              <a href="#caracteristicas" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900">Características</a>
              <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900">Servicios</a>
              <a href="#testimonios" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900">Testimonios</a>
              <a href="#precios" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900">Planes</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center mt-4 px-5 py-3 text-base font-semibold rounded-xl text-white bg-indigo-600">Empezar Proyecto</a>
            </div>
          )}
        </header>

        {/* HERO SECTION */}
        <section className="relative pt-16 pb-24 md:pt-28 md:pb-36 px-6 sm:px-12 lg:px-16 w-full text-center">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              <span>Desarrollo Web & Apps de Alto Rendimiento</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Transformamos tus ideas en <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                experiencias digitales únicas
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-400 font-normal leading-relaxed mb-10">
              Diseñamos e implementamos plataformas web modernas, ultra rápidas y optimizadas para convertir visitantes en clientes frecuentes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
              <a href="#contacto" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-2xl text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/30">
                Agendar Asesoría
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#caracteristicas" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-2xl text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800">
                Saber Más
              </a>
            </div>
          </div>

          {/* MOCKUP */}
          <div className="mt-16 sm:mt-24 relative w-full max-w-6xl mx-auto">
            <div className="p-2 sm:p-4 rounded-2xl sm:rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-2xl backdrop-blur-sm">
              <div className="rounded-xl sm:rounded-2xl bg-slate-950 p-4 sm:p-8 border border-slate-800 overflow-hidden">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <div className="ml-4 text-xs font-mono text-slate-500 hidden sm:inline-block">https://tu-cliente.com</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <BarChart3 className="w-8 h-8 text-indigo-400 mb-3" />
                    <div className="text-2xl font-bold text-white">+145%</div>
                    <div className="text-xs text-slate-400">Aumento en conversiones</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <Zap className="w-8 h-8 text-purple-400 mb-3" />
                    <div className="text-2xl font-bold text-white">&lt; 0.8s</div>
                    <div className="text-xs text-slate-400">Tiempo de carga promedio</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <Smartphone className="w-8 h-8 text-pink-400 mb-3" />
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-slate-400">Adaptabilidad móvil responsive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CARACTERÍSTICAS */}
        <section id="caracteristicas" className="py-20 bg-slate-900/40 border-y border-slate-800/60 w-full px-6 sm:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Diseñado para destacar en cualquier dispositivo</h2>
              <p className="text-slate-400 text-base sm:text-lg">Combinamos código limpio con arquitectura optimizada para entregar la mejor velocidad.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                <Smartphone className="w-6 h-6 text-indigo-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Mobile First Real</h3>
                <p className="text-slate-400 text-sm">Interfaces pensadas desde cero para smartphones y tablets sin errores de scroll.</p>
              </div>
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                <Zap className="w-6 h-6 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Velocidad Extrema</h3>
                <p className="text-slate-400 text-sm">Carga instantánea asegurada para evitar la fuga de posibles compradores.</p>
              </div>
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                <Layout className="w-6 h-6 text-pink-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Personalización Total</h3>
                <p className="text-slate-400 text-sm">Estructura modular adaptable a las necesidades concretas de tu negocio.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRECIOS */}
        <section id="precios" className="py-20 px-6 sm:px-12 lg:px-16 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Planes a la medida de tu negocio</h2>
              <p className="text-slate-400 text-base">Soluciones claras y transparentes para escalar tu presencia en línea.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Landing Básica</h3>
                  <p className="text-slate-400 text-sm mb-6">Ideal para lanzar rápidamente una idea o producto.</p>
                  <div className="text-4xl font-extrabold text-white mb-6">$299 <span className="text-base font-normal text-slate-500">/pago único</span></div>
                  <ul className="space-y-4 text-sm text-slate-300 mb-8">
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-indigo-400 mr-3" /> Diseño Responsive completo</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-indigo-400 mr-3" /> Hasta 5 secciones</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-indigo-400 mr-3" /> Formulario de contacto</li>
                  </ul>
                </div>
                <a href="#contacto" className="w-full py-3.5 text-center font-semibold rounded-xl text-white bg-slate-800 hover:bg-slate-700">Seleccionar Plan</a>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-950/60 to-slate-900 border-2 border-indigo-500/80 flex flex-col justify-between relative shadow-2xl">
                <div className="absolute -top-3.5 right-6 px-3 py-1 bg-indigo-500 text-white text-xs font-bold rounded-full uppercase">Recomendado</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Plataforma Pro</h3>
                  <p className="text-slate-400 text-sm mb-6">Para empresas que buscan automatización y máxima conversión.</p>
                  <div className="text-4xl font-extrabold text-white mb-6">$599 <span className="text-base font-normal text-slate-500">/pago único</span></div>
                  <ul className="space-y-4 text-sm text-slate-300 mb-8">
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-indigo-400 mr-3" /> Todo lo del plan Básico</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-indigo-400 min-w-max mr-3" /> Dashboard interactivo</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-indigo-400 mr-3" /> Optimización SEO avanzada</li>
                  </ul>
                </div>
                <a href="#contacto" className="w-full py-3.5 text-center font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30">Obtener Plan Pro</a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="py-20 bg-slate-900/30 border-t border-slate-800/80 w-full px-6 sm:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-2">Hablemos de tu proyecto</h2>
                <p className="text-slate-400 text-sm">Escríbenos y te responderemos en menos de 24 horas.</p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Nombre</label>
                    <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Correo</label>
                    <input type="email" placeholder="tu@email.com" className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Mensaje</label>
                  <textarea rows="4" placeholder="Cuéntanos brevemente qué necesitas..." className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"></textarea>
                </div>
                <button type="submit" className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2">
                  <span>Enviar Mensaje</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800/80 py-8 px-6 text-center text-xs text-slate-500 w-full">
        <p>© {new Date().getFullYear()} ApexStudio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
