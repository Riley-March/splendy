const colors = [
    "blue",
    "yellow",
    "pink",
    "green",
    "orange"
]

export const get_color = (index: number) => {
    return colors[index];
}

export const random_color = () => {
    const randint = Math.floor(Math.random() * (colors.length));
    return colors[randint];
}
