"use client"
import { FileSearchIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <FileSearchIcon size={64} className="text-cyberpunk-accent mb-4"/>
            <div className="bg-cyberpunk-primary text-cyberpunk-main">
                NOT FOUND
            </div>
            <button onClick={() => router.back()} className="mt-4 text-cyberpunk-accent hover:text-cyberpunk-secondary transition-all font-bold text-xl">
                Back
            </button>
        </div>
    )
}

export default Page