const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

/*EXPLICACIÓN DE LOS RETURNS DE LOS FETCHES
return fetch(CAT_ENDPOINT_RANDOM_FACT)  // --> Retorna un Promise
.then((res) => res.json())              // --> Retorna un Promise
.then((data) => {
const { fact } = data
return fact
})
  



*/
