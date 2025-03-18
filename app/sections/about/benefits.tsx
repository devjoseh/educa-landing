import { CheckCircle } from "lucide-react"

export function Benefits() {
    return (
        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">Benefícios</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Por que usar o EducaAvalia?
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                Nosso aplicativo oferece diversas vantagens para estudantes e famílias
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-green-800">Aplicativo Acessível</h3>
                  <p className="text-gray-600">
                    Aplicativo desenvolvido com uma interface intuitiva e amigável, incorporando tecnologias de acessibilidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-green-800">Avaliações Reais</h3>
                  <p className="text-gray-600">
                    Leia experiências de outros estudantes e famílias com necessidades semelhantes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-green-800">Filtros Personalizados</h3>
                  <p className="text-gray-600">
                    Busque escolas com base nas necessidades específicas de acessibilidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-green-800">Comunidade Engajada</h3>
                  <p className="text-gray-600">Conecte-se com outras famílias e compartilhe experiências e dicas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}