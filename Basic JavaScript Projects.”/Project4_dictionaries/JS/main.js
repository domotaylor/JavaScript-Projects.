function Doms_Dictionary () {
    var Animal = {
        Species:"Dog",
        Color:"Brown",
        Breed:"bulldog",
        Age:2,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}
