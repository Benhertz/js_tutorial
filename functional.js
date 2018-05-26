let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function imperativeMap(states) {
    let urlStates = [];
    states.forEach(function(state) {
        urlStates.push(state.toLowerCase().split(/\s+/).join("-"));
    });
    return urlStates;
}
console.log(imperativeMap(states));











let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
    console.log(element);
});
let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(char) {
    console.log(char);
});
a = [44, 33, 12.33, 4];
a.sort(function(a, b) { return b - a; });

a.forEach(function(num) {
    console.log(num);
});

a = ["ant", "bat", "cat", 42];
a.forEach(element => {
    console.log(element);
});
