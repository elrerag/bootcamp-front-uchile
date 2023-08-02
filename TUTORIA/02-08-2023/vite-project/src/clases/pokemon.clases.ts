//creamos la primera clase
import axios from "axios";
// no olvidar al inicio el import
import { Users } from "../interfaces/pokeapi-response.interfaces"

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
    async getMoves(): Promise<Users>{
        let { data } = await axios.get<Users>("https://jsonplaceholder.typicode.com/users");
        console.log(data);
        debugger;
        return data;

    }
}

export const charmander = new Pokemon(1, "charmander");

charmander.gritar();
charmander.hablar();
charmander.getMoves();