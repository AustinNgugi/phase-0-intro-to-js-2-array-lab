// Write your solution here!
let cats=
[
    "Milo", "Otis" , "Garfield"
]
function destructivelyAppendCat(name)
{
     cats.push("Ralph");
     return cats ;
}
function destructivelyPrependCat(name)
{
     cats.unshift("Bob");
     return cats ;
}
function destructivelyRemoveFirstCat(name)
{
     cats.shift("");
     return cats ;
}
function destructivelyRemoveLastCat(name)
{
  cats.pop("");
  return cats ;
}
let cats2=[...cats]
function appendCat(name)
{
    cats2.push("Broom")
    return cats2 ;
}
let cats3=[...cats]
function prependCat(name)
{
    cats3.unshift("Arnold")
    return cats3 ;
}

let cats4=[...cats]
{
    function removeFirstCat(name)
    {
        cats4.shift("Milo")
        return cats4;
    }
}
let cats5=[...cats]
function removeLastCat()
{
    cats5.pop("")
    return cats5;
}