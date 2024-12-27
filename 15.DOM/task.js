    let items = document.querySelector(".items"); 

    let fetched = async () => {
        try{
            let fetcheddata = await fetch("https://fakestoreapi.com/products");
            let jsondata = await fetcheddata.json();

            let ol = document.createElement("ol");

            jsondata.map((ele) => {
                let li = document.createElement("li");
                li.innerText = ele.title; 
                ol.append(li); 
            });

            items.append(ol);
        }
        catch(error){
            console.log("error");
            
        }
    }
    
    fetched();
