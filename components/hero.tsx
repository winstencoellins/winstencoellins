"use client"

import Image from "next/image"

import { CircleCheck, Mail, Github, Linkedin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import Link from "next/link"

import { handleClickScroll } from "@/lib/utils"

import profile from "@/public/images/profile.jpeg"

export default function HeroSection() {
    return (
        <div className="">
            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 inset-x-0 h-full bg-linear-to-b from-[#135bec]/10 via-[#101622]/50 to-[#101622]"></div>
                    <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-linear-to-br from-[#135bec]/20 to-purple-500/20 blur-3xl opacity-60"></div>
                    <div className="absolute top-20 -left-20 w-100 h-100 rounded-full bg-linear-to-tr from-cyan-400/20 to-blue-500/20 blur-3xl opacity-50"></div>
                </div>
                <div className="lg:max-w-7xl md:max-w-3xl mx-auto py-20 flex flex-col items-center lg:flex-row-reverse lg:justify-between">
                    <Image src={profile} alt="profile pic" width={300} height={300} className="rounded-full my-8 border-3 border-gray-800 ring-1 ring-gray-900/5 shadow-xl shadow-[#135bec]/20 w-75 h-75 md:w-100 md:h-100 lg:w-125 lg:h-125 md:shadow-3xl" />

                    <div className="flex flex-col justify-center items-center lg:items-start lg:w-6/12">
                        <Badge className="bg-white/5 border border-white/20 backdrop-blur-2xl px-3 py-1 flex items-center text-[#135bec] lg:text-lg">
                            <CircleCheck className="animate-pulse text-[#135bec]/=" />
                            {/* <span className="text-xl animate-pulse text-[#135bec]">•</span> */}
                            Available for new opportunities
                        </Badge>

                        <h1 className="text-center w-11/12 text-4xl mt-5 font-bold text-white lg:text-left lg:text-6xl">Hello, I&apos;m Winsten. <br className=" hidden md:block lg:hidden" /><span className="text-transparent bg-clip-text bg-linear-to-r from-[#135bec] to-blue-400">I build pixel-perfect web applications that are fast, reliable, and built to scale.</span></h1>

                        <p className="text-center mt-5 w-11/12 text-gray-400 lg:text-left lg:text-lg">I am a Fullstack Engineer specializing in building accessible, high-performance web applications. I turn complex problems into elegant solutions.</p>

                        <div className="mt-5 mb-8">
                            <Button size={"lg"} className="bg-[#135bec] text-white font-bold mr-5 hover:bg-[#0f4bb8] hover:cursor-pointer" onClick={() => handleClickScroll("projects")}>View Projects</Button>
                            <Button size={"lg"} className="font-bold bg-gray-800 border border-gray-700 hover:cursor-pointer" onClick={() => handleClickScroll("contact")}>Contact Me</Button>
                        </div>

                        <div className="flex flex-row justify-around w-5/12 lg:w-1/12 lg:gap-x-5">
                            <Link href="mailto:winstencoellins13@gmail.com"><Mail className="text-slate-400" /></Link>
                            <Link href="https://github.com/winstencoellins"><Github className="text-slate-400" /></Link>
                            <Link href="https://www.linkedin.com/in/winstencoellins"><Linkedin className="text-slate-400" /></Link>
                        </div>
                    </div>
                </div>
            </div>
                {/* </div>
            </div> */}
        </div>
    )
}