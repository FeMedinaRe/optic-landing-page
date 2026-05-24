import { html } from 'hono/html'

export const Services = () => html`
  <section id="servicios" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
        <div class="h-1 w-20 bg-primary mx-auto rounded"></div>
        <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Atención integral para tu salud visual con tecnología de punta y profesionales capacitados.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Servicio 1 -->
        <div class="bg-secondary rounded-lg p-8 text-center hover:shadow-lg transition">
          <div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Análisis de Visión</h3>
          <p class="text-gray-600">
            Exámenes visuales completos realizados por optometristas para detectar cualquier anomalía y determinar tu graduación exacta.
          </p>
        </div>

        <!-- Servicio 2 -->
        <div class="bg-secondary rounded-lg p-8 text-center hover:shadow-lg transition">
          <div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Fabricación de Lentes</h3>
          <p class="text-gray-600">
            Creamos lentes ópticos de alta precisión basados en tu receta, utilizando cristales de la mejor calidad (antirreflejo, blue block, etc).
          </p>
        </div>

        <!-- Servicio 3 -->
        <div class="bg-secondary rounded-lg p-8 text-center hover:shadow-lg transition">
          <div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Variedad de Marcos</h3>
          <p class="text-gray-600">
            Amplio catálogo de armazones modernos, clásicos y de diseñador para que encuentres el estilo perfecto que se adapte a tu rostro.
          </p>
        </div>
      </div>
    </div>
  </section>
`