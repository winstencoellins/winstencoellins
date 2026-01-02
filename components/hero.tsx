import Image from "next/image"

import { CircleCheck, Mail, Github, Linkedin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import placeholder from "@/public/placeholder.svg"
import Link from "next/link"

export default function HeroSection() {
    return (
        <div className="">
            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#135bec]/10 via-[#101622]/50 to-[#101622]"></div>
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#135bec]/20 to-purple-500/20 blur-3xl opacity-60"></div>
                    <div className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 blur-3xl opacity-50"></div>
                </div>
                <div className="lg:max-w-7xl md:max-w-3xl mx-auto py-20 flex flex-col items-center md:flex-row-reverse md:justify-between">
                    <Image src={placeholder} alt="profile pic" width={400} height={400} className="rounded-full my-8" />

                    <div className="flex flex-col justify-center items-center md:items-start md:w-6/12">
                        <Badge className="bg-[#135bec]/20 px-3 py-1 flex items-center text-[#135bec]">
                            <CircleCheck className="animate-pulse text-[#135bec]" />
                            {/* <span className="text-xl animate-pulse text-[#135bec]">•</span> */}
                            Available for new opportunities
                        </Badge>

                        <h1 className="text-center w-11/12 text-4xl mt-5 font-bold text-white md:text-left md:text-5xl lg:text-6xl">Hello, I&apos;m John. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-blue-400">I build pixel-perfect web experiences.</span></h1>

                        <p className="text-center mt-5 w-11/12 text-gray-600 md:text-left">I am a Senior Fullstack Engineer specializing in building accessible, high-performance web applications. I turn complex problems into elegant solutions</p>

                        <div className="mt-5 mb-8">
                            <Button size={"lg"} className="bg-[#135bec] text-white font-bold mr-5">View Projects</Button>
                            <Button size={"lg"} className="font-bold bg-gray-800 border border-gray-700">Contact Me</Button>
                        </div>

                        <div className="flex flex-row justify-around w-5/12 lg:w-2/12 lg:gap-x-5">
                            <Link href=""><Mail className="text-slate-400" /></Link>
                            <Link href=""><Github className="text-slate-400" /></Link>
                            <Link href=""><Linkedin className="text-slate-400" /></Link>
                        </div>
                    </div>
                </div>
            </div>
                {/* </div>
            </div> */}
        </div>
    )
}