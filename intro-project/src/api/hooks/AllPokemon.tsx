import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useAllPokemon = () => {

    return useQuery({
        queryKey: ["allpokemon"],
        queryFn: async () => {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
            return response.data.results
        }
    })
    
    
};

export default useAllPokemon;