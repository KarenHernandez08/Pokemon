

const fetchPokemon = () => {
    const pokeName= document.getElementById("pokeName");
    let pokeInput =pokeName.value.toLowerCase();
    const url =`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    
    fetch(url).then((res)=>{
        if(res.status !="200"){
            console.log(res);
            pokeImage("/pokeapi/imagenes/pikachu.png");
        }
        else{
            return res.json();
            

        }
         
    }).then((data)=>{
        if(data){
        console.log(data);
        let pokeimg = data.sprites.front_default;
        console.log(pokeimg);
        pokeImage(pokeimg);
        let

        }

    })
}

fetchPokemon();

const pokeImage= (url) =>{
    const pokeImage = document.getElementById("pokeImg");
    pokeImage.src= url;

}
const pokename=()=>{
    const p = document.getElementById("data-poke-name");
    
}







  


