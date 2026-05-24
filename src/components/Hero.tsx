import { html } from 'hono/html'

export const Hero = () => html`
  <section class="bg-secondary py-20 lg:py-32 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="lg:w-2/3">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Ve el mundo con <span class="text-primary">claridad</span> y estilo
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl">
          Especialistas en análisis de visión y fabricación de lentes ópticos personalizados. Cuida tu salud visual con nuestros expertos.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#contacto" class="bg-primary text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-800 transition text-center shadow-lg hover:shadow-xl">
            Agendar Análisis
          </a>
          <a href="#servicios" class="bg-white text-primary border border-primary px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-50 transition text-center">
            Ver Servicios
          </a>
        </div>
      </div>
    </div>
    <!-- Decoración abstracta (placeholder para imagen) -->
    <div class="hidden lg:block absolute top-0 right-0 h-full w-1/2 bg-blue-100 rounded-l-full transform translate-x-1/4 -skew-x-12 opacity-50"></div>
  </section>
`