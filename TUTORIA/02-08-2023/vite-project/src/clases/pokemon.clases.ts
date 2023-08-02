//creamos la primera clase

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

    // se especifica la promesa
    getMoves(): number {
        const moves = 10;
        return moves;
    }
}

export const charmander = new Pokemon(1, "charmander");

charmander.gritar();
charmander.hablar();
charmander.getMoves();