export function AboutUs() {
    return (
        <section id="quem-somos" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                        Quem Somos
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                        Nossa Missão
                    </h2>
                    <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Fornecer informações precisas e confiáveis sobre a
                        acessibilidade das escolas. Queremos ajudar a tornar o
                        processo de escolha de uma escola mais fácil e inclusiva
                        para todos, fornecendo avaliações detalhadas e precisas
                        sobre a acessibilidade das escolas para pessoas com
                        deficiência física.
                    </p>
                    <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        A educação é um direito fundamental e universal, e todas
                        as pessoas devem ter acesso a uma educação de qualidade,
                        independente de suas limitações físicas ou cognitivas.
                    </p>
                </div>
            </div>
        </section>
    );
}
