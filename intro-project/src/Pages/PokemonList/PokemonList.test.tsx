import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from "@testing-library/react";
import TestPokemonListElements, { TestPokemonList } from "./PokemonList.constant";
import { vi } from "vitest";

vi.mock("../../api/hooks/SinglePokemon", () => ({
    __esModule: true,
    default: () => ({
        data: {
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            }
        },
        status: "success",
        error: null
    })
}));

const queryClient = new QueryClient();

function buildElement() {
    return render(
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <TestPokemonList/>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

describe("Visibility test for pokemon list", () => {
    beforeEach(() => {
        buildElement()
    })

    test("Pokemon container for pokemon list is being rendered and visible", () => {
        expect(TestPokemonListElements.testPokemonContainer()).toBeVisible();
        expect(screen.getByText('bulbasaur')).toBeVisible()
    })
})