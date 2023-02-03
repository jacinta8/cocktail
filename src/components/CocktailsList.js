import { useGlobalContext } from "../context"
import SingleCocktail from "./SingleCocktail"
const CocktailsList = () => {
  const { items } = useGlobalContext()
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
