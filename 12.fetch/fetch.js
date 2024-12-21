
//https://fakestoreapi.com/products

let fetcheddata = fetch("https://fakestoreapi.com/products")

// console.log(fetcheddata);

fetcheddata.then((data)=>{
    // console.log(data);

    let jsondata = data.json()
    // console.log(jsondata);
    
    jsondata.then((finaldata)=>{
        console.log(finaldata);
        
    }).catch((err)=>{
        console.log(err);
        
    })

}).catch((err)=>{
    console.log(err);
    
})




