import { useState, useCallback, useRef } from 'react';

export const usePagination = (initial = 0, offset = 0, lastPage = 10) => {
    const [currentPage, setCurrentPage] = useState(initial);
    const [viewPage, setViewPage] = useState(1);
    
    const lastPageRef = useRef(lastPage);

    const handleNextPage = useCallback(() => {
        const nextPage = currentPage + offset;
        if (nextPage === lastPageRef.current) return 
        setCurrentPage(nextPage);
        setViewPage(viewPage + 1);
    }, [currentPage])

    const handlePreviusPage = useCallback(() => {
        if(currentPage === 0) return
        setCurrentPage(currentPage - offset);
        setViewPage(viewPage - 1);
    }, [currentPage])

    const setLastPage = useCallback((newLasPage) => {
        lastPageRef.current = newLasPage
    }, [])

    return {
        viewPage,
        currentPage,
        handleNextPage,
        handlePreviusPage,
        setLastPage,
    }
}