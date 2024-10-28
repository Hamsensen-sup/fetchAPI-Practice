const fetchTransformations= async function () {
    try{
            for(page = 1; page < 100; page++){
                const response = await fetch(`https://dragonball-api.com/api/characters/${page}`)
                const json = await response.json()

                const allForms = json.transformations
                
                for(forms = 0; forms < allForms.length; forms++){

                    const image = document.createElement('img')
                    image.classList.add("char-img")
                    image.src = json.transformations[forms].image

                    const charImage = document.createElement('img')
                    charImage.classList.add("char-img")

                    document.getElementById("transform").appendChild(image)
                    document.getElementById("transform").appendChild(charImage)
                }
                
            }   
    }
    catch(error){
        console.log(error);
    }
}

fetchTransformations()