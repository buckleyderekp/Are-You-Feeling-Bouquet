import { renderFlowerList } from "./Flowers/flowerList.js";
import { getFlowers } from "./Flowers/FlowerDataProvider.js";



getFlowers()
  .then(renderFlowerList)