//creamos la primera clase
import axios from "axios";
// no olvidar al inicio el import
import { PokeAPIResponse } from "../interfaces/pokeapi-response.interfaces"

export class Pokemon {
    //creamos el constructor y sus atributos
    constructor(public readonly id: number, public name: string) { }

    public gritar() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    //tambien pasa a ser publico si no se especifica
    hablar() {
        console.log(`${this.name} ${this.name}`)
    }

    // se especifica la promesa dentro del metodo
    async getMoves(): Promise<PokeAPIResponse>{
        let { data } = await axios.get<PokeAPIResponse>("https://pokeapi.co/api/v2/pokemon/4");
        console.log(data);
        return data;

    }
}

export const charmander = new Pokemon(1, "charmander");

charmander.gritar();
charmander.hablar();
charmander.getMoves();