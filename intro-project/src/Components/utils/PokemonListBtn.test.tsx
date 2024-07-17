import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import PokemonListBtn from "./PokemonListBtn"

describe("Header Component", () => {
    it("navigates to /pokemon page when link is clicked", async () => {
        render(
            <BrowserRouter>
                <PokemonListBtn />
            </BrowserRouter>
        )
        const linkElement = screen.getByTestId('pokemon-list-link')
        await userEvent.click(linkElement)
        expect(window.location.pathname).toBe('/pokemonlist')
    })
})