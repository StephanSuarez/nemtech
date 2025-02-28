import { Navbar } from "@/src/components/navbar"
import { HeroSection } from "@/src/components/hero-section"
import NuestrosAsesores from "./sections/advisrd"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* FORMULARIO DE CONTACTO */}
      <NuestrosAsesores />

      <div className="mt-20"></div>
      <HeroSection
        title="CONTACTO"
        subtitle="Estamos aquí para responder a tus preguntas y ayudarte a encontrar la solución de seguridad perfecta para tus necesidades."
        buttonText="ENVIAR MENSAJE"
        buttonLink="#contact"
        showPlayButton={false}
      />
      
      <div className="container mx-auto px-4 md:px-8 py-16" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white bg-opacity-5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Formulario de Contacto</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full">
                Enviar
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-1">Dirección</h3>
                <p className="text-gray-300">Av. Tecnológica 123, Ciudad Innovación</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Teléfono</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-gray-300">info@nemtech.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Horario de Atención</h3>
                <p className="text-gray-300">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

