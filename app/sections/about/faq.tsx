export function FAQ() {
    return (
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">FAQ</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Perguntas Frequentes
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                Respostas para as dúvidas mais comuns sobre o EducaAvalia
              </p>
            </div>

            <div className="grid gap-4 md:gap-8 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-green-800 mb-2">O aplicativo é gratuito?</h3>
                <p className="text-gray-600">
                  Sim, o EducaAvalia é totalmente gratuito para estudantes e famílias. Nosso objetivo é tornar a
                  educação acessível para todos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-green-800 mb-2">Como as escolas são avaliadas?</h3>
                <p className="text-gray-600">
                  As escolas são avaliadas com base em critérios específicos de acessibilidade, incluindo infraestrutura
                  física, recursos pedagógicos e suporte especializado.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-green-800 mb-2">Posso contribuir com avaliações?</h3>
                <p className="text-gray-600">
                  Sim! Incentivamos estudantes e famílias a compartilharem suas experiências para ajudar outros a
                  encontrarem escolas adequadas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  O aplicativo está disponível em quais regiões?
                </h3>
                <p className="text-gray-600">
                  Atualmente, cobrimos as principais cidades brasileiras e estamos expandindo constantemente para novas
                  regiões.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Como uma escola pode obter o certificado de acessibilidade?
                </h3>
                <p className="text-gray-600">
                  A escola pode solicitar uma avaliação através do aplicativo ou site. Nossa equipe realizará uma
                  análise completa baseada na NBR 9050 e, se aprovada, a escola receberá o certificado e destaque no
                  aplicativo.
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}