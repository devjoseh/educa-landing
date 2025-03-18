import { MapPin, Mail, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function FooterSection() {
    return (
        <footer id="contato" className="w-full border-t bg-green-800 text-white">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/educaavalia_square.svg?height=32&width=32"
                  alt="EducaAvalia Logo"
                  width={32}
                   
                  height={32}
                  className="rounded-md bg-white"
                />
                <span className="text-xl font-bold">EducaAvalia</span>
              </Link>
              <p className="text-green-100 max-w-xs">
                Conectando estudantes com deficiência física a escolas verdadeiramente acessíveis.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Links Rápidos</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#quem-somos" className="hover:text-green-300 transition-colors">
                  Quem Somos
                </Link>
                <Link href="#como-funciona" className="hover:text-green-300 transition-colors">
                  Como Funciona
                </Link>
                <Link href="#beneficios" className="hover:text-green-300 transition-colors">
                  Benefícios
                </Link>
                <Link href="#certificacao" className="hover:text-green-300 transition-colors">
                  Certificação
                </Link>
                <Link href="#faq" className="hover:text-green-300 transition-colors">
                  FAQ
                </Link>
                <Link href="#" className="hover:text-green-300 transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="#" className="hover:text-green-300 transition-colors">
                  Termos de Uso
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contato</h3>
              <div className="flex flex-col space-y-2 text-green-100">
                <div className="flex items-start">
                  <MapPin className="mr-2 h-4 w-4 mt-1" />
                  <span>ETEC Abdias do Nascimento S/N - São Paulo, SP</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>contato@educaavalia.com.br</span>
                </div>
                <div className="flex items-start">
                  <Instagram className="mr-2 h-4 w-4 mt-1" />
                  <Link href="https://www.instagram.com/educaavalia/" target="_blank" className="hover:text-green-300 transition-colors">
                    @educaavalia
                  </Link>
                </div>
                <div className="flex items-start">
                  <Linkedin className="mr-2 h-4 w-4 mt-1" />
                  <Link href="https://www.linkedin.com/company/educaavalia" target="_blank" className="hover:text-green-300 transition-colors">
                    EducaAvalia
                  </Link>
                </div>
              </div>
            </div>

            {/* Adicionar funcionalidade para o usuário cadastrar o e-mail dele */}
            {/* <div className="space-y-4">
              <h3 className="text-lg font-bold">Newsletter</h3>
              <p className="text-green-100">Receba novidades e atualizações sobre acessibilidade escolar.</p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-3 py-2 bg-green-700 rounded-md text-white placeholder:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <Button className="bg-white text-green-800 hover:bg-green-100">Inscrever-se</Button>
              </form>
            </div> */}
          </div>

          <div className="mt-12 pt-6 border-t border-green-700 text-center text-green-300 text-sm">
            <p>©2025 EducaAvalia | Todos os Direitos Reservados</p>
          </div>
        </div>
      </footer>
    )
}