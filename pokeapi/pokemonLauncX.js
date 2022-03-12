const fetchPokemon =() => {
    const pokeName= document.getElementById("pokeName");
    let pokeInput =pokeName.value.toLowerCase();
    const url =`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=>{
        if(res.status !="200"){
            console.log(res);
            pokeImage("/imagenes/pikachu.png");
        }
        else{
            return res.json();
        }
         
    }).then((data)=>{
        console.log(data);
        let pokeimg = data.sprites.front_default;
        console.log(pokeimg);
        pokeImage(pokeimg);

    })
}

fetchPokemon();

const pokeImage= (url) =>{
    const pokeImage = document.getElementById("pokeImg");
    pokeImage.src= url;

}

pokeimage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")


