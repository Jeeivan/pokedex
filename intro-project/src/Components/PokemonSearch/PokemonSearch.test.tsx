import TestPokemonSearchElements, { testFilteredPokemon, TestPokemonSearch } from "./PokemonSearch.constants";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import userEvent from "@testing-library/user-event"
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";



const mockSetShowFavourites = vi.fn();
const mockSetFilteredPokemon = vi.fn();

const queryClient = new QueryClient();
  
  function buildElement() {
    return render(
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <TestPokemonSearch filteredPokemon={testFilteredPokemon} setShowFavourites={mockSetShowFavourites} setFilteredPokemon={mockSetFilteredPokemon}/>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

describe("Visibility tests", () => {
    beforeEach(() => {
        buildElement();
    });

    test('Input is rendered and visible', () => {
        expect(TestPokemonSearchElements.pokemonInput()).toBeVisible()
    })

    test('Search button is rendered and visible', () => {
        expect(TestPokemonSearchElements.pokemonSearchBtn()).toBeVisible()
    })

    test('Filtered pokemon is being rendered and visbile after search button is clicked', () => {
        const searchBtn = TestPokemonSearchElements.pokemonSearchBtn()
        userEvent.click(searchBtn)
        expect(TestPokemonSearchElements.filteredPokemonDetail()).toBeVisible()
    })

});