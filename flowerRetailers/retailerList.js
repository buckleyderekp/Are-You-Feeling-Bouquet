import { useRetailers } from "./RetailerDataProvider.js"
import { retailerHTML } from "./retailer.js"






const contentTarget = document.querySelector('.retailerContainer')

export const renderRetailerList = () => {
    const retailers = useRetailers()
    contentTarget.innerHTML  = retailers.map(singleRetailer => {
        return retailerHTML(singleRetailer)
    }).join("")

    
}