"use client"

import { SubmitHandler, useForm } from "react-hook-form"

import Link from "next/link"

import { Card, CardContent } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

import { Mail, MapPin, Share2 } from "lucide-react"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import clsx from "clsx"

type FormValues = {
    name: string,
    email: string,
    message: string
}

export default function ContactSection() {
    const { register, handleSubmit, formState: { errors }, } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }

    const general = [
        { icon: <Mail />, title: "Email Me", text: "winstencoellins13@gmail.com" },
        { icon: <MapPin />, title: "Location", text: "Medan, Indonesia (Open to Remote)" },
    ]

    const socials = [
        { platform: "LinkedIn", link: "https://linkedin.com/in/winsten-coellins" },
        { platform: "Github", link: "https://github.com/winstencoellins" },
        { platform: "Instagram", link: "https://instagram.com/winstencoellins" },
    ]

    return (
        <div className="bg-gray-800 scroll-mt-20" id="contact">
            <div className="py-20 px-6 mx-auto md:max-w-3xl md:flex md:px-0 md:flex-row md:justify-between md:gap-x-5 md:items-center lg:max-w-5xl lg:gap-x-10">
                <div className="md:w-6/12">
                    <h1 className="text-3xl font-bold text-white">Let&apos;s work together</h1>

                    <p className="mt-4 mb-8 text-gray-400">Have a project in mind or want to hire me? Feel free to reach out. I&apos;m always open to discussing new opportunities.</p>

                    <div>
                        {
                            general.map((info, index) => (
                                <div key={index} className="flex items-center my-4">
                                    <div className="bg-[#135bec]/20 text-[#135bec] px-3 py-3 rounded-lg mr-3">
                                        { info.icon }
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white">{ info.title }</h5>
                                        <p className="text-gray-400">{ info.text }</p>
                                    </div>
                                </div>
                            ))
                        }

                        <div className="flex items-center mt-4">
                            <div className="bg-[#135bec]/20 text-[#135bec] px-3 py-3 rounded-lg mr-3">
                                <Share2 />
                            </div>
                            <div>
                                <h5 className="font-bold text-white">Socials</h5>
                                <div>
                                    {
                                        socials.map((social, index) => (
                                            <Link key={index} href={`${ social.link }`} className="mr-4 text-gray-400">{ social.platform }</Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Card className="mt-8 bg-[#101622] border border-gray-800 md:w-6/12">
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mt-4">
                                <Label htmlFor="name" className="mb-2 text-white">Name</Label>
                                <Input { ...register("name", { required: "Name is required." }) } placeholder="John Doe" className={clsx("bg-gray-800 text-gray-400 border border-[#101622]", errors.name?.message ? "border-red-500" : "")} />
                                { errors.name?.message && <p className="text-xs mt-1 text-red-500">{ errors.name.message }</p> }
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="email" className="mb-2 text-white">Email</Label>
                                <Input { ...register("email", { required: "Email is required.", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } }) } placeholder="johndoe@example.com" className={clsx("bg-gray-800 text-gray-400 border border-[#101622]", errors.email?.message ? "border-red-500" : "")} />
                                { errors.email?.message && <p className="text-xs mt-1 text-red-500">{ errors.email.message }</p> }
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="message" className="mb-2 text-white">Message</Label>
                                <Textarea { ...register("message", { required: "Message is required." })} placeholder="Enter message here." className={clsx("bg-gray-800 text-gray-400 border border-[#101622]", errors.message?.message ? "border-red-500" : "")} />
                                { errors.message?.message && <p className="text-xs mt-1 text-red-500">{ errors.message.message }</p> }
                            </div>

                            <Button type="submit" className="bg-[#135bec] mt-5 hover:bg-[#0f4bb8] hover:cursor-pointer">Submit</Button>
                        </form>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}