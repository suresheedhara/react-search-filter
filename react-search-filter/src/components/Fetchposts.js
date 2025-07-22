const Fetchposts = (()=>{
    let cache = null;

     // loading from localStorage
    const LoadFromStorag=()=>{
        const cached = localStorage.getItem('recipesCache')
        if(cached){
            return JSON.parse(cached)
        }else{
            return null
        }
    }
    // Save to localStorage
  const saveToStorage = (data) => {
    localStorage.setItem('recipesCache', JSON.stringify(data));
  };

    const FetchData= async ()=>{        

        if(cache) {return cache}

        let loadStorage = LoadFromStorag()
        if(loadStorage){
            cache = loadStorage; 
            return loadStorage 
        }
        
        const response = await fetch('https://dummyjson.com/recipes')
        const data = await response.json();
        const posts=data.recipes
        cache=posts;
        saveToStorage(posts)
        // console.log('After fetch',posts) 
        return posts    
    }
    

   return {
    FetchData,
    clearCache: () => {
      cache = null;
      localStorage.removeItem('recipesCache');
    }
   } 
    
  })()


export default Fetchposts