import Image from "next/image"

export function Testimonials() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">Depoimentos</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                O que dizem sobre nós
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                Histórias reais de famílias que encontraram escolas acessíveis através do nosso aplicativo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-green-100 p-1">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Avatar"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Ana Silva</h4>
                    <p className="text-sm text-gray-500">Mãe de estudante</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-green-100 p-1">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Avatar"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Carlos Oliveira</h4>
                    <p className="text-sm text-gray-500">Estudante</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-green-100 p-1">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Avatar"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Mariana Santos</h4>
                    <p className="text-sm text-gray-500">Professora</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}