import { Card, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"

import { ExternalLink } from "lucide-react"

import Link from "next/link"

export default function ProjectSection() {
    const projects = [
        { title: "", desc: "", tech: [], demo: "", cover: "" },
    ]

    return (
        <div className="bg-[#101622]">
            <div className="py-20 px-6 mx-auto md:max-w-3xl lg:max-w-7xl">
                <h1 className="text-3xl font-bold text-center text-white">Featured Projects</h1>

                <p className="text-center mt-4 mb-8 text-gray-400 md:max-w-sm md:mx-auto lg:max-w-lg">A selection of projects that showcase my passion for building clean, efficient, and user-centric applications.</p>

                <div className="md:grid md:grid-cols-3 md:gap-x-3">
                    {
                        projects.map((p, index) => (
                            <Card key={index} className="bg-gray-800 border border-gray-700">
                                {/* <Image src={"https://placehold.co/600x400"} alt="project view" width={400} height={400}/> */}
                                <CardContent>
                                    <h3 className="text-white my-4">{ p.title }</h3>
                                    <p className="text-gray-200">{ p.desc }</p>

                                    <div className="flex flex-wrap">
                                        {
                                            p.tech.map((t, index) => (
                                                <p key={index} className="px-3 py-1 bg-[#135bec]/20 text-[#135bec] mr-3">{ t }</p>
                                            ))
                                        }
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="bg-[#135bec]">
                                        <Link href=""><ExternalLink /> Live Website</Link>
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