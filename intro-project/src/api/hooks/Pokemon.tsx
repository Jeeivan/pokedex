import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const usePokemon = () => {

    const { data, status, error, hasNextPage, fetchNextPage, isFetchingNextPage } =
        useInfiniteQuery({
            queryKey: ["pokemon"],
            queryFn: async ({ pageParam =  "https://pokeapi.co/api/v2/pokemon/"}) => {
                const response = await axios.get(pageParam);
                return response;
            },
            initialPageParam: "https://pokeapi.co/api/v2/pokemon/",
            getNextPageParam: (lastPage) => lastPage.data.next,
        })

    
    const { ref, inView } = useInView()

    useEffect(() => {
        if (hasNextPage && inView) {
            fetchNextPage()           
        }
    }, [hasNextPage, inView, fetchNextPage, isFetchingNextPage])
    
    return {
        data,
        status,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        ref
    }

};


export default usePokemon