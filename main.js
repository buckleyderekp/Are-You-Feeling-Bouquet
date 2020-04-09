import { renderFlowerList } from "./Flowers/flowerList.js";
import { getFlowers } from "./Flowers/FlowerDataProvider.js";
import { getRetailers } from "./flowerRetailers/RetailerDataProvider.js";
import { renderRetailerList } from "./flowerRetailers/retailerList.js";
import { getDistributors } from "./flowerDistributors/DistributorDataProvider.js";



getFlowers()
  .then(renderFlowerList)
getRetailers()
  .then(getDistributors)
  .then(renderRetailerList)