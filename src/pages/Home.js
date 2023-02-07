import CocktailsList from "../components/CocktailsList"
import { useEffect, useRef } from "react"
import { useGlobalContext } from "../context"

const Home = () => {
  const inputRef = useRef("")
  const { setSearchTerm } = useGlobalContext()

  const infoChangeHandler = () => {
    setSearchTerm(inputRef.current.value)
  }
  useEffect(() => {
    inputRef.current.focus()
    console.log("inputRef", inputRef)
  }, [])
  const searchHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="home section">
        <form onSubmit={searchHandler}>
          <label htmlFor="name" className="title">
            Search Your Favorite Cocktail
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={infoChangeHandler}
            ref={inputRef}
            className="search"
          ></input>
        </form>
      </section>
      <CocktailsList />
    </>
  )
}

export default Home
