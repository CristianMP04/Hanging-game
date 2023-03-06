let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'VEHICULO',
    'INGLES',
    'MOTOCICLETA',
    'HAWAII',
    'MALDIVAS',
    'JAPONES',
    'SUSHI',
    'GYOZAS',
    'INDONESIA',
    'FCBARCELONA',
    'INDEPENDENCIA',
    'ANTIESPAÑOL',
    'ANIMAL',
    'MOONCHITO',
    'BELITA'
]



export function getRandomWord() {

    const randomIndex = Math.floor(Math.random() * words.length);


    return words[randomIndex];
}