import { BrowserRouter } from "react-router-dom";
import TestPokemonImgElements, { TestPokemonImg } from "./PokemonImg.constant";
import { render } from "@testing-library/react";


function buildElement() {
    return render(
        <BrowserRouter>
            <TestPokemonImg name="mewtwo"/>
        </BrowserRouter>
    )
}

describe("Visibility test for pokemon image card", () => {
    beforeEach(() => {
        buildElement()
    })

    test("Pokemon name is visible and rendered", () => {
        expect(TestPokemonImgElements.testPokemonName()).toBeVisible()
    })

    test("Pokemon image is visible and rendered", () => {
        expect(TestPokemonImgElements.testPokemonImg()).toBeVisible()
    })


})