import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./Loading";

interface ScreenshotButtonProps {
    screenshot: string | null,
    onScreenshotTook: (screenshot:string | null) => void;
}

export function ScreenshotButton( {
    screenshot, 
    onScreenshotTook
} : ScreenshotButtonProps) {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)
    

    // Função para tirar a foto e depois enviar para o outro componente
    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true)
        // Forçando a tirar um print de todo o HTML com a !
        const canvas = await html2canvas(document.querySelector('html')!)
        // convertendo para uma image png
        const base64image = canvas.toDataURL('image/png')

        // console.log(base64image)
        onScreenshotTook(base64image)
        setIsTakingScreenshot(false)

    }

    if(screenshot){
        return (
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"  
                onClick={() => onScreenshotTook(null)}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    // Isso daqui é só pq não está em um site
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180
                }}         
            >
                <Trash weight="fill"/>
            </button>
        )
    }

    return (

        <div>

            <button
                type="button"
                className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                onClick={handleTakeScreenshot}
            >
               

                {isTakingScreenshot ? <Loading/> :  <Camera className="w-6 h-6" />}

            </button>
        </div>


    )
}