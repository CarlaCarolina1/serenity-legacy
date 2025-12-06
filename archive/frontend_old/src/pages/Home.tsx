import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <div className="container">
          <h1>Carla's Real Estate</h1>
          <p>Your Dream Home in Central Florida</p>
        </div>
      </header>
      <main className="home-main">
        <div className="container">
          <section className="hero">
            <h2>Welcome to Orlando Real Estate</h2>
            <p>Find your perfect home in Central Florida</p>
            <Link to="/calculator" className="cta-button">
              Calculate Your Home Ownership Costs
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home

