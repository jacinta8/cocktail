import { useGlobalContext } from "../context"
import Loading from "./Loading"
import SingleCocktail from "./SingleCocktail"
const CocktailsList = () => {
  const { loading, items } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (!items) {
    console.log("items")
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    )
  }

  return (
    <div className="cocktail section">
      <div className="cocktail-container">
        <h2>Cocktails</h2>
        <ul>
          {items.map((item) => {
            const { strDrink, strAlcoholic, strGlass, idDrink, strDrinkThumb } =
              item
            return (
              <SingleCocktail
                key={idDrink}
                id={idDrink}
                drink={strDrink}
                alcoholic={strAlcoholic}
                glass={strGlass}
                img={strDrinkThumb}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default CocktailsList
