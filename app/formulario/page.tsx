"use client"

import { ArrowRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function RedirectPage() {
    const [countdown, setCountdown] = useState(5)
    const surveyUrl = "https://forms.gle/XsQk1gZoWTtLB8h79"
    const homeUrl = "/"

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1)
            }, 1000)

            return () => clearTimeout(timer)
        } else {
            window.location.href = surveyUrl
        }
    }, [countdown, surveyUrl])

    const handleCancel = () => {
        window.location.href = homeUrl
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
            <Card className="max-w-md w-full p-6 shadow-lg">
                <div className="flex flex-col items-center text-center space-y-6">
                    <div className="rounded-full bg-green-100 p-3">
                        <ArrowRight className="h-8 w-8 text-green-600" />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-green-800">Redirecionando...</h1>
                        <p className="text-gray-600">
                            Você está sendo redirecionado para nossa pesquisa de campo.
                        </p>
                    </div>

                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-green-200">
                        <span className="text-2xl font-bold text-green-700">{countdown}</span>
                    </div>

                    <div className="space-y-4 w-full">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={() => (window.location.href = surveyUrl)}>
                            Ir para a pesquisa agora
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full border-green-300 text-green-700 hover:bg-green-50"
                            onClick={handleCancel}
                            >
                        <Home className="mr-2 h-4 w-4" />
                            Voltar para a página inicial
                        </Button>
                    </div>

                    <p className="text-sm text-gray-500">
                        Ajude-nos a transformar a vida dos alunos com deficiência física.
                    </p>
                </div>
            </Card>
        </div>
    )
}