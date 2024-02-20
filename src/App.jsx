
import Maps from "./components/Maps/Maps";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <Card/>
      </header>
      <main>
        <section>
          <Maps />
        </section>
      </main>
    </>
  )
}

export default App;
