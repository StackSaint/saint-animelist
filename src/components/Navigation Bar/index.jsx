import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-cyberpunk-third via-cyberpunk-primary to-cyberpunk-third sticky top-0 z-50 backdrop-blur-sm border-b border-cyberpunk-accent/10 shadow-md">
        <div className="mx-auto flex md:flex-row flex-col justify-between md:items-center p-4 gap-4 max-w-7xl px-4 sm:px-6">
            <Link href="/" className="font-black text-white text-2xl md:text-3xl text-cyberpunk-accent hover:opacity-80 transition-opacity duration-300">
              SaintAnime
            </Link>
            <InputSearch/>
            <UserActionButton/>
        </div>
    </header>
    )
}

export default Navbar