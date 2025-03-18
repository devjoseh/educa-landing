import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from 'next/image'

export function Certification() {
    return (
        <section id="certificacao" className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">Certificação</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Certificado de Acessibilidade
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                Reconhecemos e destacamos escolas que realmente se comprometem com a acessibilidade
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                    src="/banner_certificacao.svg?height=400&width=600"
                    alt="Certificado de Acessibilidade EducaAvalia"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Certificado Oficial</h3>
                    <p>Reconhecimento físico e digital da conformidade com padrões de acessibilidade</p>
                    </div>
                </div>
                </div>

                <div className="space-y-6">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-green-800">Como funciona a certificação?</h3>
                    <p className="text-gray-600">
                    As escolas podem solicitar uma análise completa de suas instalações e serviços. Nossa equipe
                    especializada realiza uma avaliação detalhada com base nos critérios estabelecidos pela NBR 9050, a
                    norma brasileira de acessibilidade.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 rounded-full mt-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-green-800">Análise Técnica</h4>
                        <p className="text-gray-600">
                        Avaliação completa da infraestrutura física, incluindo rampas, elevadores, banheiros adaptados e
                        sinalização tátil.
                        </p>
                    </div>
                    </div>

                    <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 rounded-full mt-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-green-800">Certificado Físico e Digital</h4>
                        <p className="text-gray-600">
                        Escolas aprovadas recebem um certificado físico para exibição e um selo digital para uso em seus
                        materiais de comunicação.
                        </p>
                    </div>
                    </div>

                    <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 rounded-full mt-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-green-800">Destaque no Aplicativo</h4>
                        <p className="text-gray-600">
                        Escolas certificadas ganham maior visibilidade no aplicativo, aparecendo com destaque nas buscas
                        e com um selo especial de verificação.
                        </p>
                    </div>
                    </div>
                </div>

                <Button className="bg-green-600 hover:bg-green-700 mt-4">Solicitar Certificação</Button>
                </div>
            </div>
            </div>
        </section>
    )
}