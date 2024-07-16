import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type SinglePokemonProps = {
    name: string
}

const useSinglePokemon = ({name} : SinglePokemonProps) => {

    const { data, status, error } = useQuery({
        queryKey: ["singlepokemon", name],
        queryFn: async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            return response.data;
        }
    })
    
    
    
    return {
        data,
        status,
        error
    }
    
};

export default useSinglePokemon;