import { useRetailers } from "./RetailerDataProvider.js"
import { retailerHTML } from "./retailer.js"
import { useDistributors } from "../flowerDistributors/DistributorDataProvider.js"






const contentTarget = document.querySelector('.retailerContainer')

export const renderRetailerList = () => {
    const distributors = useDistributors()
    const retailers = useRetailers()
    contentTarget.innerHTML  = retailers.map(singleRetailer => {

        const foundDistributor = distributors.find( (distributor)=>{
            return (distributor.id === singleRetailer.distributor)
        })
        return retailerHTML(singleRetailer, foundDistributor)
    }).join("")

    
}