import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
    subsets:["latin"],
    weight: ["600"],
});

interface HeaderProps {
    label: string;
}

export const ThankHeader = ({
label,
}: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-1 items-center justify-center">
            
            <Image className=" "src='/validé.png' width={150} height={139} alt="Message_sent" priority />
            
            <h1 className={cn("text-3xl font-semibold", font.className)}>
                
            Succès!
            </h1>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>

        </div>
    )

}