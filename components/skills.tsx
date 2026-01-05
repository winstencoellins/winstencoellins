import { LayoutPanelLeft, Server } from "lucide-react";
import { Card, CardContent, CardTitle } from "./ui/card";

export default function SkillSection() {
    const frontendSkills = ["React", "Typescript", "Next.js", "Tailwind CSS", "Motion", "HTML5", "CSS3"]
    const backendSkills = ["FastAPI", "Node.js", "Express.js", "Hono.js", "Docker", "PostgreSQL", "Git", "Github", "AWS", "Azure"]

    return (
        <div className="bg-[#101622] scroll-mt-20" id="technical-skills">
            <div className="py-20 px-6 mx-auto md:px-0 md:max-w-3xl lg:max-w-5xl">
                <h1 className="text-3xl font-bold text-center text-white">Technical Skills</h1>

                <p className="text-center mt-4 mb-8 text-gray-400 md:max-w-sm md:mx-auto lg:max-w-md">A look at the technologies, tools, and languages I use to build robust products.</p>

                <div className="md:flex md:flex-row md:justify-between md:gap-x-5">
                    <Card className="px-6 mb-8 bg-gray-800 border border-gray-700 md:w-6/12 md:h-fit">
                        <CardTitle className="flex items-center text-xl font-bold text-white">
                            <div className="bg-[#135bec]/20 w-fit px-2 py-2 rounded-lg mr-3">
                                <LayoutPanelLeft className="text-[#135bec]"/>
                            </div>
                            Frontend
                        </CardTitle>
                        <CardContent className="flex flex-wrap gap-y-2 gap-x-2 pl-0">
                            {
                                frontendSkills.map((skill, index) => (
                                    <div key={index} className="bg-gray-700 text-gray-200 w-fit px-3 py-1 rounded-md font-semibold text-sm">
                                        { skill }
                                    </div>
                                ))
                            }
                        </CardContent>
                    </Card>

                    <Card className="px-6 bg-gray-800 border border-gray-700 md:w-6/12 md:h-fit">
                        <CardTitle className="flex items-center text-xl font-bold text-white">
                            <div className="bg-green-300/30 w-fit px-2 py-2 rounded-lg mr-3">
                                <Server className="text-green-600"/>
                            </div>
                            Backend &amp; Tools
                        </CardTitle>
                        <CardContent className="flex flex-wrap gap-y-2 gap-x-2 pl-0">
                            {
                                backendSkills.map((skill, index) => (
                                    <div key={index} className="bg-gray-700 text-gray-200 w-fit px-3 py-1 rounded-md font-semibold text-sm">
                                        { skill }
                                    </div>
                                ))
                            }
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}