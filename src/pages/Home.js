import CocktailsList from "../components/CocktailsList"
const Home = () => {
  return (
    <>
      <section className="home section">
        <form>
          <p className="title">Search Your Favorite Cocktail</p>
          <input className="search"></input>
        </form>
      </section>

      <CocktailsList />
    </>
  )
}

export default Home
