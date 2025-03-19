import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="relative mx-auto w-32 h-32 mb-4">
                    <div className="absolute inset-0 bg-green-200 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                        <span className="text-5xl">404</span>
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-green-800">
                    Página não encontrada
                </h1>

                <p className="text-green-700">
                    Ops! Parece que esta página não está acessível, assim como
                    algumas escolas ainda não são. Estamos trabalhando para
                    mudar isso!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
                        <Home className="w-5 h-5" />
                        <span>Voltar ao início</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}