import { useState, useCallback, useRef } from 'react';

export const usePagination = (initialPage = 1, lastPage = 10) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const lastPageRef = useRef(lastPage);

    const handleNextPage = useCallback(() => {
        const nextPage = currentPage + 1;
        if(nextPage > lastPageRef.current) return 
        setCurrentPage(nextPage)
    }, [currentPage])

    const handlePreviusPage = useCallback(() => {
        if(currentPage === 1) return
        setCurrentPage(currentPage - 1)
    }, [currentPage])

    const setLastPage = useCallback((newLasPage) => {
        lastPageRef.current = newLasPage
    }, [])

    return {
        currentPage,
        handleNextPage,
        handlePreviusPage,
        setLastPage,
    }
}