
// let fetched = async()=>{
//     try{
//     let fetcheddata = await fetch("https://fakestoreapi.com/products")
//     console.log(fetcheddata);

//     let jsondata = await fetcheddata.json()
//     console.log(jsondata);
//     }
//     catch{
//         console.log("error");
        
//     }
    
// }
// fetched();



let fetched = async()=>{
    
    let fetcheddata = await fetch("https://fakestoreapi.com/products")
    console.log(fetcheddata);

    let jsondata = await fetcheddata.json()
    console.log(jsondata);
    
    jsondata.map((ele)=>{
        console.log(ele.title);
        
    })
    
}
fetched();



