import PokemonListBtn from "../../Components/utils/PokemonListBtn"
import { Card } from "@streets-heaver/shui2"
import ToggleFav from "../../Components/ToggleFav/ToggleFav"
import { screen } from "@testing-library/react"

type Ability = {
    ability: {
      name: string;
      url: string;
    };
  };
  
  type Stat = {
    base_stat: number;
    stat: {
      name: string;
    };
  };

    const testPokemon = { 
        
        name: "Pika",
        height: "65",
        weight: "87",
        types: [{
            type: {
                name: "electric"
            }
        }],
        abilities: [
            {ability: 
                {
                    name: "thunder",
                    url: "dfsd"
                }
            },
            {ability: 
                {
                    name: "solar",
                    url: "dfsd"
                }
            }
        ],
        sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        },
        stats: [
            {base_stat: 78, stat: {
                name: "hp"
            }},
            {base_stat: 78, stat: {
                name: "attack"
            }},
            {base_stat: 78, stat: {
                name: "defense"
            }},
            {base_stat: 78, stat: {
                name: "special-attack"
            }},
            {base_stat: 78, stat: {
                name: "special-defense"
            }},
            {base_stat: 78, stat: {
                name: "speed"
            }}
        ],
    }

export const TestSinglePokemon = () => {
    return (
        <div>
        <PokemonListBtn />
        {testPokemon && (
          <Card automationId="single-pokemon-card">
            <ToggleFav name={testPokemon?.name} />
            <h4 data-testid={"species-descriptor"}>Species- {testPokemon.name}</h4>
            <p data-testid={"weight-descriptor"}>Weight- {testPokemon.weight}</p>
            <p data-testid={"height-descriptor"}>Height- {testPokemon.height}</p>
            <h5 data-testid={"type-descriptor"}>Type- {testPokemon.types[0].type.name}</h5>
            <div data-testid={"abilties-descriptor"}>
              Abilities-
              {testPokemon.abilities?.map((ability: Ability, index: number) => {
                return <div key={index}>{ability.ability.name}</div>;
              })}
            </div>
            <img data-testid={"image-descriptor"} src={testPokemon.sprites.front_default} alt="pokemon pic" />
            <h6>Stats:</h6>
            {testPokemon?.stats?.map((stat: Stat, index: number) => (
              <div key={index} data-testid={"stats-descriptor"}>
                <div>{stat.stat.name}</div>
                <div>{stat.base_stat}</div>
              </div>
            ))}
          </Card>
        )}
      </div>
    )
}

export const TestSinglePokemonElements = {
    card: () => screen.getByTestId('single-pokemon-card'),

    speciesDescriptor: () => screen.getByTestId('species-descriptor'),

    weightDescriptor: () => screen.getByTestId('weight-descriptor'),

    heightDescriptor: () => screen.getByTestId('height-descriptor'),

    typeDescriptor: () => screen.getByTestId('type-descriptor'),

    abilitiesDescriptor: () => screen.getByTestId('abilties-descriptor'),

    imageDescriptor: () => screen.getByTestId('image-descriptor'),

    statsDescriptor: () => screen.getAllByTestId('stats-descriptor'),
}
