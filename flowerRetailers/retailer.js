export const retailerHTML = (retailerObject, distributorObject) => {
    return `
    <header class = "retailer__name">
    <h4>${retailerObject.businessName}</h4>
    </header>
    <div class ="distributor__name">${distributorObject.distributorName}</div>
    
    `
}