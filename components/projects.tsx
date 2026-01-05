import { Card, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"

import { ExternalLink } from "lucide-react"

import quantum from "@/public/images/quantum.png"
import shaga from "@/public/images/shaga.png"
import chez from "@/public/images/chez.png"

import Image from "next/image"
import Link from "next/link"

export default function ProjectSection() {
    const projects = [
        { title: "Quantum Booking System", desc: "A booking system is a tool that lets people schedule appointments, reserve services, or book resources online. It keeps everything organized, shows available times, and confirms bookings automatically, so both users and service providers save time and avoid conflicts.", tech: ["Next.js", "Hono.js", "PostgreSQL", "TypeScript"], demo: "https://quantumsocialclub.id", cover: quantum },
        { title: "Shaga Logistics", desc: "Move your products quickly and reliably with our all-in-one logistics platform. Track shipments in real time, manage deliveries effortlessly, and ensure everything arrives on time. Simplify your shipping and keep your business running smoothly.", tech: ["Next.js", "TypeScript"], demo: "https://shagalogistics.com/en", cover: shaga },
        { title: "Chez Bakery", desc: "Enjoy freshly baked treats made with love and the finest ingredients. From crusty breads to sweet pastries and cakes, every bite is crafted to delight. Whether it’s a daily treat or a special occasion, we bring warmth and flavor to your table.", tech: ["Next.js", "TypeScript", "PostgreSQL"], demo: "https://chezbakery.id", cover: chez },
    ]

    return (
        <div className="bg-[#101622] scroll-mt-20" id="projects">
            <div className="py-20 px-6 mx-auto md:max-w-3xl md:px-0 lg:max-w-7xl">
                <h1 className="text-3xl font-bold text-center text-white">Featured Projects</h1>

                <p className="text-center mt-4 mb-8 text-gray-400 md:max-w-sm md:mx-auto lg:max-w-lg">A selection of projects that showcase my passion for building clean, efficient, and user-centric applications.</p>

                <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 md:gap-y-3 lg:grid-cols-3">
                    {
                        projects.map((p, index) => (
                            <Card key={index} className="bg-gray-800 border border-gray-700 pt-0">
                                <Image src={p.cover} alt="project view" width={400} height={400} className="pt-0 px-0 rounded-lg rounded-b-none w-full h-75" />
                                <CardContent>
                                    <h3 className="text-white my-4 font-bold text-xl">{ p.title }</h3>
                                    <p className="text-gray-200 my-4">{ p.desc }</p>

                                    <div className="flex flex-wrap gap-y-2">
                                        {
                                            p.tech.map((t, index) => (
                                                <p key={index} className="px-3 py-1 bg-gray-600 text-white mr-3 text-xs rounded-full">{ t }</p>
                                            ))
                                        }
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="bg-[#135bec] hover:bg-[#0f4bb8] text-white font-bold">
                                        <Link href={ p.demo }><ExternalLink /> Live Website</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}