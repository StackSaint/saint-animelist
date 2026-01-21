const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => {
            if (prevState >= lastPage) return prevState
            return prevState + 1
        })
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => {
            if (prevState <= 1) return prevState
            return prevState - 1
        })
        scrollTop()
    }

    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-cyberpunk-third text-xl">
            {page > 1 && 
            <button onClick={handlePrevPage} className="transition-all hover:text-cyberpunk-accent">Prev</button>
            }
            <p>{page} of {lastPage}</p>
            {page < lastPage &&
            <button onClick={handleNextPage} className="transition-all hover:text-cyberpunk-accent">Next</button>
            }
        </div>
    )
}

export default Pagination