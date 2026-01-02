export default function FooterSection() {
    const getThisYear = () => {
        return new Date().getFullYear()
    }

    return (
        <div className="bg-[#101622]">
            <div className="py-5 text-center">
                <p className="text-sm text-gray-400">&copy; {getThisYear()} Winsten Coellins. All rights reserved.</p>
            </div>
        </div>
    )
}