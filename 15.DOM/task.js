
let items = document.querySelector("tems")
let fetched = async()=>{
    
        let fetcheddata = await fetch("https://fakestoreapi.com/products")
        let jsondata = await fetcheddata.json()
        jsondata.map((ele)=>{
            console.log(ele.title);
            
        })

        let li = document.createElement("ul")
        
        
    }
    fetched();
