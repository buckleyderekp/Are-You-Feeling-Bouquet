import { useFlowers } from "./FlowerDataProvider.js"
import { flowerHTML } from "./flower.js"


const contentTarget = document.querySelector('.flowerContainer')

export const renderFlowerList = () => {
    const flowers = useFlowers()
    contentTarget.innerHTML  = flowers.map(singleFlower => {
        return flowerHTML(singleFlower)
    }).join("") 
}