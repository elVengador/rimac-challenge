export interface Coverage {
    icon: string,
    title: string,
    content: string,
    accepted: boolean,
    showContent: boolean,
    amount: number
}

export const coverageCar: Coverage[] = [
    {
        icon: '/stolen-wheel.svg',
        title: 'Llanta robada',
        content: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',
        accepted: false,
        showContent: true,
        amount: 15
    },
    {
        icon: '/shock.svg',
        title: 'Choque y/o pasarte la luz roja',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dui faucibus, venenatis nunc vitae, pellentesque leo. Nulla sed dui purus.',
        accepted: false,
        showContent: false,
        amount: 20
    },
    {
        icon: '/run-over.svg',
        title: 'Atropello en la vía Evitamiento ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dui faucibus, venenatis nunc vitae, pellentesque leo. Nulla sed dui purus.',
        accepted: false,
        showContent: false,
        amount: 50
    },
]