
import Image from "next/image"
import { CardHeader } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { ThankHeader } from "@/components/auth/thank-header"
import { Card } from "@/components/ui/card"
import { CardFooter } from "@/components/ui/card"
import { BackButton } from "@/components/auth/back-button"
const ThankYouPage = () => {
    return (
        <Card className="w-[400px] shadow-xl">
            
            <CardHeader className="text-center">
                <ThankHeader label={<span>"Vous avez envoyé vos informations ! <br /> Merci d'avoir répondu."</span>} />
            </CardHeader>
            
            <CardContent>
            
            </CardContent>
            <CardFooter>
                <BackButton
                label="Revenir au site"
                href = "/"
                />
                 
            </CardFooter>         
        </Card>
    )
}
export default ThankYouPage