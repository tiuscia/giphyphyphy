import React, {useState, useEffect} from 'react';
import './SearchLayout.scss';

function SearchLayout() {
  const [searchQuery, setSearchQuery] = useState('');
  const [apiSearchQuery, setApiSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    
    async function fetchData(){
        try{
            const fetchedData = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${apiSearchQuery}&limit=25&offset=0&rating=G&lang=en`);
            const jsonData = await fetchedData.json();
            console.log('json', jsonData);
            setResults(
                jsonData.data.map(item=>{
                    return item.images.preview.mp4;
                })
            );
        }
        catch(e){
            console.log(e)
        }
    };

    if(apiSearchQuery !== ''){
        fetchData();
    }
},[apiSearchQuery]);


    return (
        <div className="search-layout">
        <h1>Giphyphy</h1>
        <form onSubmit={e=>{
            e.preventDefault();
            setApiSearchQuery(searchQuery);}
            }>
                <div className="search-layout__swing-wrapper">
                <input 
            className="swing" 
            value={searchQuery} 
            onChange={ e=> setSearchQuery(e.target.value)}
            placeholder="Search c'mon"
            type="text"
            id="search" />
            <label for="search">Search</label>
                </div>
            
            <button type="submit">searchphyphy</button>
        </form>
        {results.length > 0 && <h2>here are your giphyphyphy</h2>}
        <div className="search-layout__videos">
        {results.map(item => (
            <video key={item} autoPlay loop src={item}/>
        ))}
        </div>
        
        </div>
    );
}

export default SearchLayout;