import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Card from "./component/Card";
import data from "./data";

import './App.css';

function App() {  
  const cards = data.map(item => {
    return <Card
              key={item.id}
              item={item}
            />
  })

  return (
    <div className="App">
      <Nav />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
