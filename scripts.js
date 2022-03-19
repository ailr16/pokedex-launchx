const fetchPokemon = () => {
    const nameInput = document.getElementById("nombre");
    let name = nameInput.value;
    name = name.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            //console.log(res);
            pokeImage("./error.webp")
            var el = document.getElementById("tipo");
            el.textContent = "ERROR"
            el = document.getElementById("ability");
            el.textContent = "ERROR"
            el = document.getElementById("hp");
            el.textContent = "ERROR"
            el = document.getElementById("attack");
            el.textContent = "ERROR"
            el = document.getElementById("deffense");
            el.textContent = "ERROR"
            el = document.getElementById("special");
            el.textContent = "ERROR"
            el = document.getElementById("nombreP");
            el.textContent = "ERROR"
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            //console.log(data);
            let imageP = data.sprites.front_default;
            pokeImage(imageP);
            console.log(imageP);
            var el = document.getElementById("tipo");
            el.textContent = data.types[0].type.name;
            el = document.getElementById("ability");
            el.textContent = data.abilities[0].ability.name;
            el = document.getElementById("hp");
            el.textContent = data.stats[0].base_stat;
            el = document.getElementById("attack");
            el.textContent = data.stats[1].base_stat;
            el = document.getElementById("deffense");
            el.textContent = data.stats[2].base_stat;
            el = document.getElementById("special");
            el.textContent = data.stats[3].base_stat;
            el = document.getElementById("nombreP");
            el.textContent = data.forms[0].name;
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("imageP");
    pokePhoto.src = url;
}