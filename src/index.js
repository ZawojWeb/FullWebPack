import "./style/index.css"


const elevenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}
const elevenGoutle = {
    ...elevenShieldRecipe,
    leather: 1,
    refinedMoonstone: 3
}
console.log(elevenShieldRecipe)
console.log(elevenGoutle)