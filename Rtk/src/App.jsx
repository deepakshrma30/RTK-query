import * as React from 'react'
import { useGetPokemonByNameQuery } from "./services/pokemon"



function App() {
  const {data,error,isLoading}=useGetPokemonByNameQuery('pikachu')

  return (
    <>
     {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      
    </>
  )
}

export default App
