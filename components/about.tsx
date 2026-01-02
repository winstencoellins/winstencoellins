import { Code, Users, ClipboardCheck } from "lucide-react"
import { Card, CardContent } from "./ui/card"


export default function AboutSection() {
    const yearsOfExp: number = new Date().getFullYear() - new Date("2022-01-01").getFullYear()

    const abouts = [
        { icon: <Code className="text-[#135bec]"/>, text: "EXPERIENCE", desc: `${yearsOfExp}+ Years` },
        { icon: <Users className="text-[#135bec]"/>, text: "CLIENTS", desc: "5+ Nationwide" },
        { icon: <ClipboardCheck className="text-[#135bec]"/>, text: "PROJECTS", desc: "10+ Completed" },
    ]

    return (
        <div className="bg-gray-800">
            <div className="px-6 mx-auto py-20 md:flex md:flex-row md:max-w-2xl lg:max-w-5xl md:items-center md:justify-between md:px-0">
                <div className="md:w-6/12">
                    <div>
                        <h1 className="text-3xl font-bold mb-4 text-white">About Me</h1>
                        <div className="h-1 w-20 bg-[#135bec] rounded-full"></div>
                    </div>

                    <p className="mt-8 text-md tracking-wide text-gray-300">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <p className="my-4 text-md tracking-wide text-gray-300">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <Card className="mt-8 bg-[#101622] border border-gray-800 md:h-fit md:w-4/12">
                    <CardContent>
                        <div className="">
                            {
                                abouts.map((info, index) => (
                                    <div key={index} className="flex items-center mb-4">
                                        <div className="mr-3">
                                            { info.icon }
                                        </div>
                                        <div>
                                            <p className="text-sm tracking-wide font-semibold text-gray-500">{ info.text }</p>
                                            <p className="font-bold text-white">{ info.desc }</p>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}