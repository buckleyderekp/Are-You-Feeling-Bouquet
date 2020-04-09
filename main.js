import { renderFlowerList } from "./Flowers/flowerList.js";
import { getFlowers } from "./Flowers/FlowerDataProvider.js";
import { getRetailers } from "./flowerRetailers/RetailerDataProvider.js";
import { renderRetailerList } from "./flowerRetailers/retailerList.js";



getFlowers()
  .then(renderFlowerList)
getRetailers()
  .then(renderRetailerList)