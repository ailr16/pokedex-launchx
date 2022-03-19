const fetchPokemon = () => {
    const nameInput = document.getElementById("nombre");
    let name = nameInput.value;
    name = name.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokeball.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let imageP = data.sprites.front_default;
            pokeImage(imageP);
            console.log(imageP);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("imageP");
    pokePhoto.src = url;
}