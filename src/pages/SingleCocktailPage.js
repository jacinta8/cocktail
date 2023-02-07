import { useParams, Link } from "react-router-dom"
// import { useGlobalContext } from "../context"
import Loading from "../components/Loading"
import { useState, useEffect } from "react"

const SingleCocktailPage = () => {
  const param = useParams()
  const [loading, setLoading] = useState(true)
  const [drink, setDrink] = useState(null)
  useEffect(() => {
    async function fetchedSingleItem() {
      try {
        setLoading(true)
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${param.id}`
        )
        if (!response.ok) {
          throw new Error("Failed to fetch Cocktail!")
        }
        const data = await response.json()
        const newItem = data.drinks[0]
        setDrink(newItem)
      } catch (err) {
        console.log(err.message)
      }
      setLoading(false)
    }
    fetchedSingleItem()
  }, [param.id])

  if (loading) {
    return <Loading />
  }

  if (!loading) {
    const {
      strDrink,
      strCategory,
      strAlcoholic,
      strGlass,
      strInstructions,
      strDrinkThumb,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    } = drink
    const ingredients = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    ]

    const updatedIngredients = ingredients.map((ingredient) => {
      return ingredient ? ingredient : ""
    })
    return (
      <div className="section single-cocktail">
        <Link to={"/"} className="btn">
          Back home
        </Link>
        <h2>{strDrink}</h2>
        <div className="drink">
          <img src={strDrinkThumb} alt={strDrink} />
          <div className="info-container">
            <p>
              <span> name:</span> {strDrink}
            </p>
            <p>
              <span> Category:</span>
              {strCategory}
            </p>
            <p>
              <span> info: </span>
              {strAlcoholic}
            </p>
            <p>
              <span> glass:</span> {strGlass}
            </p>
            <p>
              <span> Instructions: </span>
              {strInstructions}
            </p>
            <p>
              <span> Ingredients: </span>
              {updatedIngredients}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default SingleCocktailPage
