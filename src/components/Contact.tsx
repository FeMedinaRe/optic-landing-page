import { html } from 'hono/html'

export const Contact = () => html`
  <section id="contacto" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Contáctanos</h2>
        <div class="h-1 w-20 bg-primary mx-auto rounded"></div>
        <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Visítanos o envíanos un mensaje.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Info de contacto -->
        <div class="bg-secondary rounded-lg p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Información</h3>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-medium text-gray-900">Dirección</h4>
                <p class="text-gray-600">Av. Principal 123, Centro Médico, Ciudad</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-medium text-gray-900">Teléfono</h4>
                <p class="text-gray-600">+1 234 567 8900</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-medium text-gray-900">Horario de Atención</h4>
                <p class="text-gray-600">Lunes a Viernes: 9:00 AM - 7:00 PM<br/>Sábados: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <a href="#" class="w-full flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-green-600 transition shadow-md">
              <svg class="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.637.838 5.08 2.27 7.086L.863 24l5.011-1.315c1.928 1.3 4.241 2.053 6.697 2.053 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 22.754c-2.188 0-4.22-.596-5.996-1.63l-.431-.252-3.415.895.912-3.328-.276-.438a10.638 10.638 0 0 1-1.688-5.97c0-5.882 4.786-10.668 10.668-10.668 5.882 0 10.668 4.786 10.668 10.668s-4.786 10.668-10.668 10.668zm5.83-7.981c-.32-.16-1.895-.935-2.188-1.042-.294-.107-.507-.16-.721.16-.213.32-.828 1.042-1.014 1.256-.187.213-.374.24-.694.08-.32-.16-1.353-.5-2.58-1.594-.954-.85-1.597-1.9-1.784-2.22-.187-.32-.02-.493.14-.653.143-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.721-1.742-.988-2.384-.26-.627-.525-.541-.72-.551-.187-.01-.4-.01-.614-.01-.213 0-.56.08-.854.4-2.187 2.373-.24 3.733-.24 3.733s1.786 2.72 4.326 3.813c.605.26 1.077.416 1.446.533.606.19 1.157.163 1.591.099.488-.072 1.501-.613 1.714-1.206.213-.593.213-1.1.149-1.206-.064-.107-.24-.17-.56-.33z" />
              </svg>
              Agendar vía WhatsApp
            </a>
          </div>
        </div>

        <!-- Mapa placeholder -->
        <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center overflow-hidden relative border border-gray-300">
           <div class="absolute inset-0 bg-secondary flex flex-col items-center justify-center text-gray-400">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
             </svg>
             <span class="text-lg font-medium">Mapa Interactivo</span>
             <span class="text-sm">(Integración con Google Maps aquí)</span>
           </div>
        </div>
      </div>
    </div>
  </section>
`