"use client"


import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "../ui/card";
import { Header } from "./header";
import { BackButton } from "./back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    BackButtonLabel: string,
    backButtonHref: string;
}

export const CardWrapper = ({
    children,
    headerLabel,
    BackButtonLabel,
    backButtonHref,
    
}: CardWrapperProps) => {
    return(
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
            <CardFooter>
                <BackButton
                label={BackButtonLabel}
                href = {backButtonHref}
                />
                 
            </CardFooter>         
        </Card>
    )
}