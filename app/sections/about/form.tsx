import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import Link from "next/link";

export function Form() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-20 bg-green-600 text-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Pesquisa de Campo
                    </h2>
                    <p className="max-w-[700px] md:text-xl/relaxed">
                        Responda nosso formulário e nos ajude a melhorar a
                        educação para milhares de pessoas com deficiência
                        física.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link href="/formulario" className="flex items-center gap-2">
                            <Button className="bg-white text-green-600 hover:bg-green-50">
                                <Book className="mr-2 h-4 w-4" />
                                Formulário
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
