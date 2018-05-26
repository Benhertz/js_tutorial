const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
If this be error and upon me proved,
I never writ, nor no man ever loved.`;
let uniques = {}
let words = sonnet.match(/[\w']+/g);

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (uniques[word]) {
        uniques[word] += 1;
    }
    else {
        uniques[word] = 1;
    }
}
console.log(uniques);

let square = (num) => {
    num = num * num;
    return num;
}

function dayOfTheWeek(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];
    return daysOfTheWeek[date.getDay()];
}
console.log(dayOfTheWeek(new Date));
console.log("\n");

let array = ["bat", 42, 33.3, "bitch", "help"];
array.forEach(function(element) {
    console.log(element);
});
