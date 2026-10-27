import React, { useState } from 'react';
import {
  Menu,
  X,
  Utensils,
  Flame,
  HeartHandshake,
  Clock,
  MapPin,
  Phone,
  ShoppingBag,
  Sparkles,
  Coffee,
  Cake,
  Send
} from 'lucide-react';

export default function AntojitosLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('todos');

  // Menú de productos / gusgueras
  const menuItems = [
    {
      id: 1,
      nombre: 'Salchipulpos Especiales',
      categoria: 'salados',
      descripcion: 'Crujientes salchipulpos acompañados de papas a la francesa, queso amarillo fundido, catsup, crema y jalapeños.',
      precio: '$65',
      etiqueta: 'Más Vendido 🔥',
      imagen: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      nombre: 'Crepa Dulce Antojo',
      categoria: 'postres',
      descripcion: 'Crepa recién hecha con Nutella, fresas frescas, plátano, bola de helado de vainilla y jarabe de chocolate.',
      precio: '$75',
      etiqueta: 'Favorito 🍓',
      imagen: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      nombre: 'Esquites Preparados en Vasote',
      categoria: 'salados',
      descripcion: 'Elotito tierno en vaso grande con mayonesa, queso cotija rallado, limón, chile del que pica o del que no pica y Takis molidos.',
      precio: '$45',
      etiqueta: 'Imperdible 🌽',
      imagen: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      nombre: 'Frappé de Oreo & Nutella',
      categoria: 'bebidas',
      descripcion: 'Bebida helada super cremosa con galleta Oreo, crema batida, chispas de chocolate y una galleta completa arriba.',
      precio: '$60',
      etiqueta: 'Súper Frío ❄️',
      imagen: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      nombre: 'Maruchan Preparada Loco-Mix',
      categoria: 'salados',
      descripcion: 'Sopa Maruchan con elotito desgranado, queso fundido, crema, cacahuates japoneses, salsa Valentina y limón.',
      precio: '$55',
      etiqueta: 'Para el Monchis 🤤',
      imagen: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      nombre: 'Waffles Burbuja con Helado',
      categoria: 'postres',
      descripcion: 'Waffle de burbujas crujiente por fuera y suave por dentro, cargado de helado, topping de Choco-Krispis y M&M’s.',
      precio: '$70',
      etiqueta: 'Delicioso 🧇',
      imagen: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filteredItems = activeCategory === 'todos'
    ? menuItems
    : menuItems.filter(item => item.categoria === activeCategory);

  return (
    <div className="relative w-screen min-h-screen bg-amber-950/20 text-stone-800 font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

      {/* BACKGROUND GLOW / GRADIENT EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-red-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full">

        {/* HEADER / NAVIGATION */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-stone-900/90 border-b border-amber-900/40 text-stone-100 shadow-md">
          <div className="w-full px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                El Rincón del Antojo 🍿
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-stone-300">
              <a href="#menu" className="hover:text-amber-400 transition-colors">Menú de Antojitos</a>
              <a href="#nosotros" className="hover:text-amber-400 transition-colors">¿Por qué elegirnos?</a>
              <a href="#promos" className="hover:text-amber-400 transition-colors">Promociones</a>
              <a href="#contacto" className="hover:text-amber-400 transition-colors">Ubicación y Pedidos</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://wa.me/5213300000000?text=Hola!%20Quiero%20hacer%20un%20pedido%20de%20antojitos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-xl text-stone-900 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/25 transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Pedir por WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-amber-400 hover:text-white hover:bg-stone-800 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden border-b border-stone-800 bg-stone-900/95 backdrop-blur-xl px-6 pt-2 pb-6 space-y-3 w-full">
              <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-stone-300 hover:text-amber-400 hover:bg-stone-800">Menú de Antojitos</a>
              <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-stone-300 hover:text-amber-400 hover:bg-stone-800">¿Por qué elegirnos?</a>
              <a href="#promos" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-stone-300 hover:text-amber-400 hover:bg-stone-800">Promociones</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-stone-300 hover:text-amber-400 hover:bg-stone-800">Ubicación y Pedidos</a>
              <a
                href="https://wa.me/5213300000000?text=Hola!%20Quiero%20hacer%20un%20pedido%20de%20antojitos"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center mt-4 px-5 py-3 text-base font-bold rounded-xl text-stone-900 bg-amber-400"
              >
                Pedir por WhatsApp 🛵
              </a>
            </div>
          )}
        </header>

        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 px-6 sm:px-12 lg:px-16 w-full text-center bg-stone-950 text-white overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-sm">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>¡La mejor gusguera de la ciudad para calmar el antojo!</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight mb-6">
              Salchipulpos, Crepas & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Antojitos que Enamoran
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-xl text-stone-300 font-normal leading-relaxed mb-10">
              Prepárate para disfrutar de los mejores esquites, papas preparadas, crepas dulces y frappés. Todo hecho al momento y bien cargadito.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl text-stone-900 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
              >
                Ver Menú Antojable
                <Utensils className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-2xl text-stone-200 bg-stone-900 hover:bg-stone-800 border border-stone-800"
              >
                <MapPin className="mr-2 w-5 h-5 text-amber-400" />
                ¿Dónde estamos?
              </a>
            </div>
          </div>

          {/* BANNER / HIGHLIGHT CARDS */}
          <div className="mt-14 sm:mt-20 relative w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-stone-900/90 border border-amber-500/20 shadow-xl">
                <Flame className="w-8 h-8 text-orange-400 mb-3" />
                <div className="text-xl font-bold text-white">Botanas Calientitas</div>
                <div className="text-sm text-stone-400 mt-1">Salchipulpos, papas, nachos y esquites recién preparados.</div>
              </div>
              <div className="p-6 rounded-2xl bg-stone-900/90 border border-amber-500/20 shadow-xl">
                <Cake className="w-8 h-8 text-amber-400 mb-3" />
                <div className="text-xl font-bold text-white">Postres Deliciosos</div>
                <div className="text-sm text-stone-400 mt-1">Crepas crujientes, waffles burbuja y marquesitas al gusto.</div>
              </div>
              <div className="p-6 rounded-2xl bg-stone-900/90 border border-amber-500/20 shadow-xl">
                <Coffee className="w-8 h-8 text-red-400 mb-3" />
                <div className="text-xl font-bold text-white">Bebidas & Frappés</div>
                <div className="text-sm text-stone-400 mt-1">Malteadas, frappés, chamoyadas y refrescos bien helados.</div>
              </div>
            </div>
          </div>
        </section>

        {/* MENÚ DE PRODUCTOS */}
        <section id="menu" className="py-20 bg-stone-100 border-y border-stone-300 w-full px-6 sm:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                Lo mejor para tu monchis
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 mt-3 mb-4">Nuestro Menú de Antojitos</h2>
              <p className="text-stone-600 text-base sm:text-lg">Elige lo que más se te antoje hoy. ¡Ingredientes frescos y porciones generosas!</p>
            </div>

            {/* Filtros de Categoría */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { key: 'todos', label: 'Todos los Antojos ✨' },
                { key: 'salados', label: 'Salados y Botaneros 🍿' },
                { key: 'postres', label: 'Postres y Crepas 🍓' },
                { key: 'bebidas', label: 'Frappés y Bebidas 🥤' }
              ].map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat.key
                      ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/30'
                      : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid de Productos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-stone-200">
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full">
                        {item.etiqueta}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-stone-900">{item.nombre}</h3>
                        <span className="text-xl font-black text-orange-600 bg-orange-50 px-2.5 py-1 rounded-lg">
                          {item.precio}
                        </span>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <a
                      href={`https://wa.me/5213300000000?text=Hola!%20Me%20interesa%20pedir:%20${encodeURIComponent(item.nombre)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 flex items-center justify-center space-x-2 transition-colors"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Pedir este antojo</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ ELEGIRNOS */}
        <section id="nosotros" className="py-20 bg-stone-900 text-stone-100 w-full px-6 sm:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">¿Por qué somos tu mejor opción?</h2>
              <p className="text-stone-400 text-base sm:text-lg">Nos apasiona preparar cada pedido como si fuera para nosotros mismos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-stone-800/80 border border-stone-700/60">
                <Sparkles className="w-8 h-8 text-amber-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Preparación al Instante</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Nada de comida calentada en microondas. Cocinamos y preparamos todo en el momento para garantizar frescura y textura crujiente.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-stone-800/80 border border-stone-700/60">
                <HeartHandshake className="w-8 h-8 text-orange-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Salsas y Toppings ilimitados</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Tú pones el límite. Contamos con amplia variedad de salsas caseras, chiles, aderezos, jarabes dulces y granillo.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-stone-800/80 border border-stone-700/60">
                <Clock className="w-8 h-8 text-red-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Atención Rápida y Amigable</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Pide por WhatsApp para pasar a recoger sin filas o visítanos directamente en nuestro local con el mejor ambiente familiar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROMO BANNER */}
        <section id="promos" className="py-16 bg-gradient-to-r from-orange-600 to-amber-500 text-stone-950 w-full px-6 sm:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto rounded-3xl bg-white/10 backdrop-blur-md p-8 sm:p-12 border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <span className="bg-stone-950 text-amber-400 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                ¡Combo Pareja / Amigos! 👯‍♂️
              </span>
              <h3 className="text-3xl sm:text-4xl font-black mt-3 mb-2 text-stone-950">
                2 Crepas Dulces + 2 Frappés por $220
              </h3>
              <p className="text-stone-900 font-medium text-sm sm:text-base">
                Válido de Viernes a Domingo a partir de las 6:00 PM. ¡Ven con quien más quieras!
              </p>
            </div>
            <a
              href="https://wa.me/5213300000000?text=Hola!%20Quiero%20aprovechar%20la%20promo%20de%202%20Crepas%20%2B%202%20Frappes"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-8 py-4 font-black rounded-2xl bg-stone-950 text-amber-400 hover:bg-stone-900 shadow-xl transition-all"
            >
              Pedir Combo Ahora 🔥
            </a>
          </div>
        </section>

        {/* UBICACIÓN Y CONTACTO */}
        <section id="contacto" className="py-20 bg-stone-950 border-t border-stone-800 text-stone-100 w-full px-6 sm:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Info de contacto */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Visítanos o pide a domicilio</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">¿Se te antojó algo?</h2>
                <p className="text-stone-400 text-sm sm:text-base">
                  Pasa a nuestro local a disfrutar tus antojos o envíanos un mensaje por WhatsApp para tener listo tu pedido cuando llegues.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-stone-900 border border-stone-800">
                  <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Ubicación</h4>
                    <p className="text-xs text-stone-400 mt-0.5">Av. Hidalgo #123, Col. Centro (A un lado del parque principal)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-stone-900 border border-stone-800">
                  <Clock className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Horario de Atención</h4>
                    <p className="text-xs text-stone-400 mt-0.5">Martes a Domingo: 4:00 PM – 11:00 PM (Lunes cerrado)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-stone-900 border border-stone-800">
                  <Phone className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Pedidos y WhatsApp</h4>
                    <p className="text-xs text-stone-400 mt-0.5">+52 (33) 0000-0000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario rápido de mensaje / pedido especial */}
            <div className="p-8 sm:p-10 rounded-3xl bg-stone-900 border border-stone-800 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Envíanos un mensaje rápido</h3>
              <p className="text-xs text-stone-400 mb-6">¿Tienes duda sobre algún ingrediente o deseas hacer un pedido para evento?</p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Tu Nombre</label>
                  <input type="text" placeholder="Ej. Juan Pérez" className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white focus:outline-none focus:border-amber-500 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Tu Teléfono / WhatsApp</label>
                  <input type="tel" placeholder="Ej. 33 1234 5678" className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white focus:outline-none focus:border-amber-500 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">¿Qué se te antoja o qué consulta tienes?</label>
                  <textarea rows="3" placeholder="Ej. Quiero 2 salchipulpos y un esquite para las 7:30pm..." className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white focus:outline-none focus:border-amber-500 text-sm"></textarea>
                </div>
                <button type="submit" className="w-full py-3.5 px-6 rounded-xl font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2 transition-colors">
                  <span>Enviar Consulta</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-stone-800 bg-stone-950 py-8 px-6 text-center text-xs text-stone-500 w-full">
        <p>© {new Date().getFullYear()} El Rincón del Antojo. Todos los derechos reservados. ¡Calmando antojos con amor! 🍿✨</p>
      </footer>
    </div>
  );
}
