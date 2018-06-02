let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function imperativeMap(states) {
    let urlStates = [];
    states.forEach(function(state) {
        urlStates.push(state.toLowerCase().split(/\s+/).join("-"));
    });
    return urlStates;
}
console.log(imperativeMap(states));


let a = ["fun", "sun", 66.666, "little", "bitch"];

let func = function(a) {
    console.log(a);
};

a.forEach(function(x) {
    console.log(x);
});

let str = 'string between';
let array = str.split("");
console.log(array);

console.log(array.join(""));

let reverse = string => {
    return string.split("").reverse().join("");

}
console.log(reverse("have fun"));
