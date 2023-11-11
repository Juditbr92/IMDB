import { Professional } from "./professional";

let professional1 = new Professional("Brendan Fraser", 54, 80, 1.91, false, "American", 3, "Actor");
let professional2 = new Professional("Nicole Kidman", 56, 60, 1.80, false, "Australian", 0, "Actress");
let professional3 = new Professional("Maryl Streep", 74, 58, 1.70, false, "American", 3, "Actress")
let professional4 = new Professional("Christopher Nolan", 53, 85, 1.80, false, "English", 0, "Film director")
let professional5 = new Professional("Tim Burton", 65, 90, 1.86, false, "American", 0, "Film director")
let professional6 = new Professional("Burce Willis", 68, 95, 1.83, true, "American", 0, "Actor")

console.log(professional1.showToString());
console.log(professional2.showToString());
console.log(professional3.showToString());
console.log(professional4.showToString());
console.log(professional5.showToString());
console.log(professional6.showToString());