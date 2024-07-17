import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Header from "./Header"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"

describe("Header Component", () => {
    it("navigates to /pokemon page when link is clicked", async () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const linkElement = screen.getByTestId('pokemon-link')
        await userEvent.click(linkElement)
        expect(window.location.pathname).toBe('/pokemon')
    })
})