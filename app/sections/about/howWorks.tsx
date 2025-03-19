import { Smartphone, School, Search } from "lucide-react";

export function HowWorks() {
    return (
        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                        Como Funciona
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                        Simples e Eficiente
                    </h2>
                    <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                        Nosso aplicativo facilita a busca por escolas acessíveis
                        em apenas alguns passos
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md">
                        <div className="p-3 bg-green-100 rounded-full">
                            <Smartphone className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-green-800">
                            Baixe o App
                        </h3>
                        <p className="text-gray-600 text-center">
                            Em breve disponível para Android e iOS. Baixe
                            gratuitamente e crie seu perfil.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md">
                        <div className="p-3 bg-green-100 rounded-full">
                            <Search className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-green-800">
                            Busque Escolas
                        </h3>
                        <p className="text-gray-600 text-center">
                            Filtre por localização, recursos de acessibilidade e
                            avaliações.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md">
                        <div className="p-3 bg-green-100 rounded-full">
                            <School className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-green-800">
                            Encontre a Ideal
                        </h3>
                        <p className="text-gray-600 text-center">
                            Compare opções, leia avaliações e encontre a escola
                            perfeita para suas necessidades.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
