import { TestSinglePokemon, TestSinglePokemonElements } from "./SinglePokemon.constants";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";


function buildElement() {
    return render(
        <BrowserRouter>
            <TestSinglePokemon />
        </BrowserRouter>
    );
}

describe("Visibility tests", () => {
    beforeEach(() => {
        buildElement();
    });

    test('Card is rendered and visible', () => {
        expect(TestSinglePokemonElements.card()).toBeVisible();
    });

    test("Species descriptor is rendered and visible", () => {
        expect(TestSinglePokemonElements.speciesDescriptor()).toBeVisible();
    });

    test("Weight descriptor is rendered and visible", () => {
        expect(TestSinglePokemonElements.weightDescriptor()).toBeVisible();
    });

    test("Height descriptor is rendered and visible", () => {
        expect(TestSinglePokemonElements.heightDescriptor()).toBeVisible();
    });

    test("Type descriptor is rendered and visible", () => {
        expect(TestSinglePokemonElements.typeDescriptor()).toBeVisible();
    });

    test("Abilities descriptor is rendered and visible", () => {
        expect(TestSinglePokemonElements.abilitiesDescriptor()).toBeVisible();
    });

    test("Image descriptor is rendered and visible", () => {
        expect(TestSinglePokemonElements.imageDescriptor()).toBeVisible();
    });

    test("Stats descriptors are rendered and visible", () => {
        TestSinglePokemonElements.statsDescriptor().forEach(stat => {
            expect(stat).toBeVisible();
        });
    });
});
