import { render } from "@testing-library/react";
import "@testing-library/jest-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import userEvent from "@testing-library/user-event"
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import TestFavPokemonElements, { TestFavPokemon } from "./FavPokemon.constants";

const mockSetShowFavourites = vi.fn();
const mockSetFilteredPokemon = vi.fn();

const queryClient = new QueryClient();

function buildElement() {
    return render(
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <TestFavPokemon setShowFavourites={mockSetShowFavourites} setFilteredPokemon={mockSetFilteredPokemon}/>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

describe("Visibility test for favourite pokemon", () => {
    beforeEach(() => {
        buildElement()
    })

    test("Get favourite button is visible and rendered", () => {
        expect(TestFavPokemonElements.getFavouriteBtn()).toBeVisible()
    })

    test("Favourite pokemon are visible and being rendered on the screen", () => {
        const favBtn = TestFavPokemonElements.getFavouriteBtn()
        userEvent.click(favBtn)
        setTimeout(() => {

        }, 10000)
        expect(TestFavPokemonElements.pokemonContainer()).toBeVisible()
    })
})