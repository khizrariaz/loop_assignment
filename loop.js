var flower = "thE reD ROse";
function titleCase(text) {
    var flower = text.split(" ");
    for (var i = 0; i < flower.length; i++) {
        var word = flower[i];
        flower[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return flower.join(" ");
}
console.log(titleCase(flower));
var personName = "khizra rIaz";
var personNameInTitleCase = titleCase(personName);
console.log(personNameInTitleCase);
