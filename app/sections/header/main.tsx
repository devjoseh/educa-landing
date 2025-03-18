import { CustomAlert } from "@/components/custom-alert";
import Image from "next/image";
import Link from "next/link";

export function HeaderSection() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/educaavalia_square.svg?height=32&width=32"
                        alt="EducaAvalia Logo"
                        width={32}
                        height={32}
                        className="rounded-md bg-green-600"
                    />
                    <span className="text-xl font-bold text-green-600">
                        EducaAvalia
                    </span>
                </Link>
                <nav className="hidden md:flex gap-6">
                    <Link href="#quem-somos" className="text-sm font-medium hover:text-green-600 transition-colors">
                        Quem Somos
                    </Link>
                    <Link href="#como-funciona" className="text-sm font-medium hover:text-green-600 transition-colors">
                        Como Funciona
                    </Link>
                    <Link href="#beneficios" className="text-sm font-medium hover:text-green-600 transition-colors">
                        Benefícios
                    </Link>
                    <Link href="#certificacao" className="text-sm font-medium hover:text-green-600 transition-colors">
                        Certificação
                    </Link>
                    <Link href="#faq" className="text-sm font-medium hover:text-green-600 transition-colors">
                        FAQ
                    </Link>
                    <Link href="#contato" className="text-sm font-medium hover:text-green-600 transition-colors">
                        Contato
                    </Link>
                </nav>
                <CustomAlert
                    buttonText="Baixe o App"
                    alertTitle="Aplicativo"
                    alertMessage="Nosso aplicativo ainda está em desenvolvimento e não está disponível para o público. Enquanto isso, nos ajude respondendo a nossa pesquisa de campo."
                    variant="default"
                    size="default"
                    className="bg-green-600 hover:bg-green-700"
                    actionButtonText="OK"
                    actionButtonVariant="default"
                />
            </div>
        </header>
    );
}
