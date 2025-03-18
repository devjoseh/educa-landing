import { CustomAlert } from "@/components/custom-alert";

export function CTA() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Pronto para encontrar a escola ideal?
                    </h2>
                    <p className="max-w-[700px] md:text-xl/relaxed">
                        Baixe o aplicativo EducaAvalia hoje mesmo e dê o
                        primeiro passo para uma educação verdadeiramente
                        acessível.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <CustomAlert
                            buttonText="Google Play"
                            alertTitle="Aplicativo"
                            alertMessage="Nosso aplicativo ainda está em desenvolvimento e não está disponível para o público. Enquanto isso, nos ajude respondendo a nossa pesquisa de campo."
                            variant="default"
                            size="default"
                            className="bg-white text-green-600 hover:bg-green-50"
                            actionButtonText="OK"
                            actionButtonVariant="default"
                            iconName="Smartphone"
                        />
                        <CustomAlert
                            buttonText="App Store"
                            alertTitle="Aplicativo"
                            alertMessage="Nosso aplicativo ainda está em desenvolvimento e não está disponível para o público. Enquanto isso, nos ajude respondendo a nossa pesquisa de campo."
                            variant="default"
                            size="default"
                            className="bg-white text-green-600 hover:bg-green-50"
                            actionButtonText="OK"
                            actionButtonVariant="default"
                            iconName="Smartphone"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
