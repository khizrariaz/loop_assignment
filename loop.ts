let flower : string = "thE reD ROse"

function titleCase (text : string) : string {
 
    let flower: string[]= text.split(" ")

    for (let i=0; i < flower.length; i++){
    let word = flower[i]
    
    flower[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }
    
    return flower.join(" ")
}
//call + console together
console.log(titleCase(flower));

//mehod 2 with same code
let personName : string = "khizra rIaz"
let personNameInTitleCase : string = titleCase(personName)
console.log(personNameInTitleCase);
