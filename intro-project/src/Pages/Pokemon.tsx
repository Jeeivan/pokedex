import usePokemon from "../api/hooks/Pokemon.tsx";

interface Pokemon {
    name: string,
    url: string
}

const Pokemon = () => {
    const { data, status, error, hasNextPage, isFetchingNextPage, ref } = usePokemon()

    return status === "pending" ?
    <div>Loading...</div> : 
    status  === "error" ?
    <div>{error?.message}</div> : (
        <div className="container">
        <h3>Fetch Pokemon</h3>
        <div>
            {data?.pages.map((page) => {
                return page.data.results.map((pokemon: Pokemon) => (
                    <div key={pokemon?.name}>{pokemon?.name}</div>
                ))
            })}
        </div>

        <div ref={ref}>
            <br />
                {isFetchingNextPage ? "Loading more pokemon..." : ""}
            <br />
        </div>
        {!hasNextPage && (
            <div>No more pokemon left!</div>
        )}
        </div>
    )
};

export default Pokemon
