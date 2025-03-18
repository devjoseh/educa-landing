import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"

export function CTA() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para encontrar a escola ideal?
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed">
                Baixe o aplicativo EducaAvalia hoje mesmo e dê o primeiro passo para uma educação verdadeiramente
                acessível.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button className="bg-white text-green-600 hover:bg-green-50">
                  <Smartphone className="mr-2 h-4 w-4" />
                  App Store
                </Button>
                <Button className="bg-white text-green-600 hover:bg-green-50">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </section>
    )
}