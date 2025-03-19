"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
    ChevronRight,
    Info,
    AlertCircle,
    BookOpen,
    Download,
    Smartphone,
} from "lucide-react";

const iconMap = {
    ChevronRight,
    Info,
    AlertCircle,
    BookOpen,
    Download,
    Smartphone,
};

type IconName = keyof typeof iconMap;

interface CustomAlertProps extends Omit<ButtonProps, "onClick"> {
    buttonText: string;
    alertTitle: string;
    alertMessage: string;
    actionButtonText?: string;
    actionButtonVariant?: ButtonProps["variant"];
    iconName?: IconName;
}

export function CustomAlert({
    buttonText,
    alertTitle,
    alertMessage,
    actionButtonText = "OK",
    actionButtonVariant = "default",
    variant = "default",
    size = "default",
    className,
    iconName,
    ...props
}: CustomAlertProps) {
    const [isOpen, setIsOpen] = useState(false);

    const IconComponent = iconName ? iconMap[iconName] : undefined;

    return (
        <>
            <Button
                variant={variant}
                size={size}
                className={className}
                onClick={() => setIsOpen(true)}
                {...props}
            >
                {buttonText}
                {IconComponent && <IconComponent className="ml-2 h-4 w-4" />}
            </Button>

            <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {alertMessage}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction asChild>
                            <Button variant={actionButtonVariant}>
                                {actionButtonText}
                            </Button>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
