import clsx from "clsx"
import { Badge } from "./ui/badge"

export default function ExperienceSection() {
    const experiences = [
        { role: "Software Engineer", year: "2023 - Present", company: "Wilmar Consultancy Services", desc: "Improved system reliability and performance by modernizing services, automating deployments, and enabling secure, scalable access for 1,000+ users, while also streamlining data cleaning and transformation for more accurate, actionable insights.", tech: ["Python", "HTML5", "CSS3", "JavaScript", "FastAPI", "Outsystems", "Azure", "AWS"] },
        { role: "Software Engineer", year: "2022 - 2023", company: "Umify Pte Ltd", desc: "Helped deliver a high-performing MVP by optimizing workflows, strengthening security, and integrating payment and email systems, resulting in smoother user experiences and fewer post-release issues.", tech: ["Next.js", "React", "Express.js", "Docker", "TypeScript", "AWS", "Git", "Github", "Tailwind CSS"] },
        { role: "Web Developer", year: "2022 - 2023", company: "Collaboration For Good, Inc", desc: "Built responsive, user-friendly web platforms that boosted engagement and dramatically improved performance, creating faster, smoother experiences for visitors.", tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "ExpressionEngine CMS"] },
        { role: "IT Assistant", year: "2021 - 2022", company: "McBurner Disability Resource Center", desc: "Streamlined asset management and automated workflows to boost efficiency, while helping teams create accessible digital materials that meet compliance standards.", tech: ["HTML5", "Git", "Haskell", "Pandoc"] },
    ]

    return (
        <div className="bg-gray-800 scroll-mt-20" id="experience">
            <div className="px-6 mx-auto py-20 md:max-w-3xl md:px-0 lg:max-w-5xl">
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-white">Experience</h1>
                    <div className="h-1 w-20 bg-[#135bec] rounded-full"></div>
                </div>

                <div className="my-8">
                    {
                        experiences.map((exp, index) => (
                            <div key={index} className="flex flex-col my-4">
                                <div className="flex items-center">
                                    <p className={clsx("text-[#135bec] text-2xl mr-3", index === 0 ? "animate-pulse" : "")}>•</p>
                                    <div className="md:flex md:flex-row md:justify-between md:w-full">
                                        <h3 className="text-xl font-bold text-white">{ exp.role }</h3>
                                        <p className={clsx(index === 0 ? "bg-[#135bec]/20 text-[#135bec] w-fit rounded-full px-3 py-1 text-sm md:block hidden" : " text-sm text-slate-500 md:block hidden")}>{ exp.year }</p>
                                    </div>
                                </div>
                                <div className="border-l border-[#135bec] pl-4 ml-1 mt-1">
                                    <p className={clsx(index === 0 ? "bg-[#135bec]/20 text-[#135bec] w-fit rounded-full px-3 py-1 text-sm block md:hidden" : " text-sm text-slate-500 block md:hidden")}>{ exp.year }</p>
                                    <h5 className="text-slate-500 font-semibold mt-3 mb-2">{ exp.company }</h5>

                                    <p className="text-sm mt-1 text-gray-200 md:text-md mb-4">{ exp.desc }</p>

                                    <div className="flex flex-wrap gap-x-2 mt-2">
                                        {
                                            exp.tech.map((t, index) => (
                                                <div key={index}>
                                                    <Badge>{ t }</Badge>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}