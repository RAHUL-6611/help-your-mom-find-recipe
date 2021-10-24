import React,{useEffect,useState} from 'react'
import './App.css';
import Recipe from './Recipe'
function App() {

  const [recipes,setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("soup");
  const examrep = `https://api.edamam.com/search?q=${query}&app_id=6709054a&app_key=a8560b4fc8e7773552329cc53ae5f824%09`
  
  const resultFinder = async () => {
    const response = await fetch(examrep)
    const data = await response.json();
    setRecipes(data.hits)
  }
  
  const queryadd = e => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }
  
  useEffect(()=>{
    resultFinder()
    console.log(query)
  },[query])

  console.log(recipes)
  return (
    <div className="App">
      <form onSubmit={queryadd} className="searchbox">
          <input type="text" className="searchinput" value={search} onChange={(e)=>setSearch(e.target.value)}/>
          <button type="submit" className="submit">Search</button>
      </form>
      <div className="result">
        {recipes && recipes.map(rec=>(
          <Recipe data={rec} />
          ))}
          </div>
    </div>
  );
}

export default App;
