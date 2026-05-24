import { html } from 'hono/html'

export const Layout = (props: { children: any; title?: string }) => {
  return html`
    <!DOCTYPE html>
    <html lang="es" class="scroll-smooth scroll-pt-24">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${props.title || 'Óptica Visión Clara - Cuida tus ojos'}</title>
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body class="bg-white text-gray-800 font-sans antialiased flex flex-col min-h-screen">
        <header class="bg-white shadow-sm sticky top-0 z-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold text-primary flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Óptica Visión Clara
            </div>
            <nav class="hidden md:flex space-x-8">
              <a href="#servicios" class="text-gray-600 hover:text-primary transition">Servicios</a>
              <a href="#proceso" class="text-gray-600 hover:text-primary transition">Cómo Funciona</a>
              <a href="#contacto" class="text-gray-600 hover:text-primary transition">Contacto</a>
            </nav>
            <a href="#contacto" class="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition">Agendar Cita</a>
          </div>
        </header>

        <main class="flex-grow">
          ${props.children}
        </main>

        <footer class="bg-gray-900 text-white mt-16 py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Óptica Visión Clara
              </h3>
              <p class="text-gray-400">Tu visión es nuestra prioridad. Ofrecemos los mejores servicios oftalmológicos y productos ópticos.</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul class="space-y-2">
                <li><a href="#servicios" class="text-gray-400 hover:text-white transition">Servicios</a></li>
                <li><a href="#proceso" class="text-gray-400 hover:text-white transition">Cómo Funciona</a></li>
                <li><a href="#contacto" class="text-gray-400 hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Síguenos</h4>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white transition" aria-label="Facebook">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition" aria-label="Instagram">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition" aria-label="WhatsApp">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.637.838 5.08 2.27 7.086L.863 24l5.011-1.315c1.928 1.3 4.241 2.053 6.697 2.053 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 22.754c-2.188 0-4.22-.596-5.996-1.63l-.431-.252-3.415.895.912-3.328-.276-.438a10.638 10.638 0 0 1-1.688-5.97c0-5.882 4.786-10.668 10.668-10.668 5.882 0 10.668 4.786 10.668 10.668s-4.786 10.668-10.668 10.668zm5.83-7.981c-.32-.16-1.895-.935-2.188-1.042-.294-.107-.507-.16-.721.16-.213.32-.828 1.042-1.014 1.256-.187.213-.374.24-.694.08-.32-.16-1.353-.5-2.58-1.594-.954-.85-1.597-1.9-1.784-2.22-.187-.32-.02-.493.14-.653.143-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.721-1.742-.988-2.384-.26-.627-.525-.541-.72-.551-.187-.01-.4-.01-.614-.01-.213 0-.56.08-.854.4-2.187 2.373-.24 3.733-.24 3.733s1.786 2.72 4.326 3.813c.605.26 1.077.416 1.446.533.606.19 1.157.163 1.591.099.488-.072 1.501-.613 1.714-1.206.213-.593.213-1.1.149-1.206-.064-.107-.24-.17-.56-.33z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            &copy; ${new Date().getFullYear()} Óptica Visión Clara. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  `
}