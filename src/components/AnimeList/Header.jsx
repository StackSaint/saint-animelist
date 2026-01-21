import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return(
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 p-4 sm:p-6 fade-in-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-cyberpunk-main transition-all duration-600">
                {title}
            </h1>
            {
                linkHref && linkTitle 
                ?
                <Link href={linkHref} className="text-sm sm:text-base md:text-lg font-semibold
                hover:text-cyberpunk-accent transition-all duration-600 text-cyberpunk-secondary
                relative group overflow-hidden px-3 sm:px-4 py-2 whitespace-nowrap"
                >
                    <span className="relative z-10 block transition-all duration-600">{linkTitle}</span>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-cyberpunk-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left"></div>
                </Link> 
                : 
                null
            }
        </div>
    
    )
}

export default Header;