let distributors = []

export const useDistributors = () => {
    return distributors.slice()
}


export const getDistributors = () => {
   return fetch ('http://localhost:3000/distributors')
     .then(response => response.json())
     .then(parsedDistributors => {
         distributors = parsedDistributors
     })
}