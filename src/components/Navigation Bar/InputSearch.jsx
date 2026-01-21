"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import {useRef} from "react"

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()

  const handleSearch = (event) => {
    event.preventDefault()
    const keyword = searchRef.current.value
    if  (!keyword || keyword.trim() === "") return
    router.push(`/search/${keyword}`)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const keyword = searchRef.current.value
      if (!keyword || keyword.trim() === "") return
      router.push(`/search/${keyword}`)
    }
  }

  return (
    <div className="relative w-full sm:w-72 md:w-96 group">
      <input 
        placeholder="Search anime..." 
        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-cyberpunk-primary border-2 border-cyberpunk-accent/20 text-cyberpunk-main placeholder-cyberpunk-secondary/40 focus:outline-none focus:border-cyberpunk-accent text-sm sm:text-base transition-all duration-300 group-hover:border-cyberpunk-accent/40"
        ref={searchRef}
        onKeyDown={handleKeyDown}
        required
      />
      <button className="absolute top-2.5 sm:top-3 end-2 sm:end-3 text-cyberpunk-accent/50 hover:text-cyberpunk-accent transition-colors duration-300 group-hover:scale-110 transform" onClick={handleSearch}>
        <MagnifyingGlass size={20} weight="bold" className="sm:w-6 sm:h-6" />
      </button>
    </div>
  )
}

export default InputSearch