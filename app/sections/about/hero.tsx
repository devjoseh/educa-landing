import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-green-800">
                  Encontre escolas acessíveis para todos
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Conectamos estudantes com deficiência física a escolas verdadeiramente acessíveis, promovendo educação
                  inclusiva e oportunidades iguais para todos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Saiba Mais
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Entre em Contato
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
                <Image
                  src="/banner_hero.svg?height=500&width=500"
                  alt="Estudantes em uma escola acessível"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
    )
}