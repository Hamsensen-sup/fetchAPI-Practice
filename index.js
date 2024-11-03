const fetchData = async () => {
    try{
        for(let page = 1; page < 10; page++){
            const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}`);
            const json = await response.json();
    
            const characters = json.items;
            
    
            characters.forEach(element => {
                const container = document.createElement('div');
                container.classList.add("container");

                const textContainer = document.createElement('div')
                textContainer.classList.add("text-container")

                const imageContainer = document.createElement('div')
                imageContainer.classList.add("image-container")

                const name = document.createElement('h2');
                name.classList.add("character-name");
                name.textContent = element.name;

                const charKi = document.createElement('p');
                charKi.textContent = `Ki: ${element.ki}`

                const charMaxKi = document.createElement('p');
                charMaxKi.textContent = `Affiliation: ${element.affiliation}`

                const charImage = document.createElement('img');
                charImage.classList.add("char-img");
                charImage.src = element.image;

                document.getElementById("root").appendChild(container)
                container.appendChild(imageContainer)
                imageContainer.appendChild(charImage);
                container.appendChild(textContainer)
                textContainer.appendChild(name);
                textContainer.appendChild(charKi);
                textContainer.appendChild(charMaxKi);

                if(element.affiliation === "Army of Frieza"){
                    container.style.backgroundImage = "url('images/assistant.png')";
                    container.style.backgroundSize = "cover"
                    container.style.backgroundAttachment = "fixed"
                    name.style.color = "violet"
                }
                else if(element.affiliation === "Assistant of Beerus"){
                    container.style.backgroundImage = "url('images/assistant.png')";
                    container.style.backgroundSize = "cover"
                    container.style.backgroundAttachment = "fixed"
                    name.style.color = "blue"
                }
                else if(element.affiliation === "Assistant of Vermoud"){
                    container.style.backgroundImage = "url('images/assistant.png')";
                    container.style.backgroundSize = "cover"
                    container.style.backgroundAttachment = "fixed"
                    name.style.color = "blue"
                }
                else if(element.affiliation === "Freelancer"){
                    container.style.backgroundImage = "url('images/assistant.png')";
                    container.style.backgroundSize = "cover"
                    container.style.backgroundAttachment = "fixed"
                    name.style.color = "lightGreen"
                }
                else if(element.affiliation === "Pride Troopers"){
                    container.style.backgroundImage = "url('images/assistant.png')";
                    container.style.backgroundSize = "cover"
                    container.style.backgroundAttachment = "fixed"
                    name.style.color = "yellow"
                }
                else if(element.affiliation === "Villain"){
                    container.style.backgroundImage = "url('images/villains.jpg')";
                    container.style.backgroundSize = "cover"
                    container.style.backgroundAttachment = "fixed"
                    name.style.color = "red"
                }
                else if(element.affiliation === "Z Fighter"){
                    container.style.backgroundImage = "url('images/zFighters.png')";
                    container.style.backgroundSize = "cover"
                    container.style.backgroundAttachment = "fixed"
                    name.style.color = "orange"
                }
                else{
                    container.style.backgroundImage = "url('images/assistant.png')";
                    container.style.backgroundSize = "cover"
                    container.style.backgroundAttachment = "fixed"
                    name.style.color = "lightBlue"
                }

                imageContainer.addEventListener("mouseover", function(){

                    charImage.style.transform = "scale(1.5)"
                    imageContainer.style.backgroundImage = "url('images/dragonBalls.png')"

                    if(element.affiliation === "Army of Frieza"){
                        imageContainer.style.backgroundColor = "violet";
                    }
                    else if(element.affiliation === "Assistant of Beerus"){
                        imageContainer.style.backgroundColor = "blue";
                    }
                    else if(element.affiliation === "Assistant of Vermoud"){
                        imageContainer.style.backgroundColor = "blue";
                    }
                    else if(element.affiliation === "Freelancer"){
                        imageContainer.style.backgroundColor = "lightGreen";
                    }
                    else if(element.affiliation === "Pride Troopers"){
                        imageContainer.style.backgroundColor = "yellow";
                    }
                    else if(element.affiliation === "Villain"){
                        imageContainer.style.backgroundColor = "brown";
                    }
                    else if(element.affiliation === "Z Fighter"){
                        imageContainer.style.backgroundColor = "orange";
                    }
                    else{
                        imageContainer.style.backgroundColor = "lightBlue";
                    }
                })
                imageContainer.addEventListener("mouseout", function(){
                    imageContainer.style.backgroundColor = "";
                    charImage.style.transform = ""
                    imageContainer.style.backgroundImage = ""
                })

            });

        }

    }
    catch(error){
        console.log(error);
    }
}
fetchData();