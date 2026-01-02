import { Badge } from "./ui/badge"

export default function ExperienceSection() {
    const experiences = [
        { role: "Senior Software Engineer", year: "2023 - Present", company: "Wilmar Consultancy Services", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", tech: ["React", "Next.js"] },
    ]

    return (
        <div className="bg-gray-800">
            <div className="px-6 mx-auto py-20 md:max-w-2xl lg:max-w-5xl">
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-white">Experience</h1>
                    <div className="h-1 w-20 bg-[#135bec] rounded-full"></div>
                </div>

                <div className="my-8">
                    {
                        experiences.map((exp, index) => (
                            <div key={index} className="flex flex-col my-4">
                                <div className="flex items-center">
                                    <p className={`${index === 0 ? "animate-pulse text-[#135bec] text-2xl mr-3" : "text-[#135bec] text-2xl mr-3"}`}>•</p>
                                    <div className="md:flex md:flex-row md:justify-between md:w-full">
                                        <h3 className="text-xl font-bold text-white">{ exp.role }</h3>
                                        <p className={`${index === 0 ? "bg-[#135bec]/20 text-[#135bec] w-fit rounded-full px-3 py-1 text-sm md:block hidden" : " text-sm text-slate-500 block md:hidden block"}`}>{ exp.year }</p>
                                    </div>
                                </div>
                                <div className="border-l border-[#135bec] pl-4 ml-1 mt-1">
                                    <p className={`${index === 0 ? "bg-[#135bec]/20 text-[#135bec] w-fit rounded-full px-3 py-1 text-sm block md:hidden" : " text-sm text-slate-500 block md:hidden"}`}>{ exp.year }</p>
                                    <h5 className="text-slate-500 font-semibold mt-3">{ exp.company }</h5>

                                    <p className="text-sm mt-1 text-gray-200">{ exp.desc }</p>

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