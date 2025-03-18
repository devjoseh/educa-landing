import { HeaderSection, FooterSection, Content } from "@/app/sections";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <HeaderSection />
            
            <main className="flex-1">
                {/* Hero Section */}
                <Content.Hero />

                {/* Quem Somos Section */}
                <Content.AboutUs />

                {/* Como Funciona Section */}
                <Content.HowWorks />

                {/* Benefícios Section */}
                <Content.Benefits />

                {/* Certificação Section */}
                <Content.Certification />

                {/* Testimonials Section */}
                <Content.Testimonials />

                {/* FAQ Section */}
                <Content.FAQ />

                {/* CTA Section */}
                <Content.CTA />
            </main>

            {/* Footer */}
            <FooterSection />
        </div>
    );
}
