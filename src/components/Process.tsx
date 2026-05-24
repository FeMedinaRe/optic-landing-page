import { html } from 'hono/html'

export const Process = () => html`
  <section id="proceso" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">¿Cómo Funciona?</h2>
        <div class="h-1 w-20 bg-primary mx-auto rounded"></div>
        <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Tu camino hacia una mejor visión en tres sencillos pasos.
        </p>
      </div>

      <div class="flex flex-col md:flex-row justify-center items-start md:space-x-8 lg:space-x-12 relative">
        <!-- Línea conectora (visible solo en desktop) -->
        <div class="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-300 z-0"></div>

        <!-- Paso 1 -->
        <div class="relative z-10 flex flex-col items-center text-center w-full md:w-1/3 mb-10 md:mb-0">
          <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-white">
            1
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Agenda tu Cita</h3>
          <p class="text-gray-600">
            Contáctanos para programar tu análisis de visión en el horario que más te convenga.
          </p>
        </div>

        <!-- Paso 2 -->
        <div class="relative z-10 flex flex-col items-center text-center w-full md:w-1/3 mb-10 md:mb-0">
          <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-white">
            2
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Examen y Elección</h3>
          <p class="text-gray-600">
            Nuestros especialistas evaluarán tu vista. Luego, te ayudaremos a elegir el marco ideal.
          </p>
        </div>

        <!-- Paso 3 -->
        <div class="relative z-10 flex flex-col items-center text-center w-full md:w-1/3">
          <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-white">
            3
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Recibe tus Lentes</h3>
          <p class="text-gray-600">
            Fabricamos tus lentes a medida. En pocos días estarán listos para que veas el mundo perfecto.
          </p>
        </div>
      </div>
    </div>
  </section>
`