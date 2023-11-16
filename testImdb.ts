import { Imdb } from "./Imdb"
import { Movie } from "./movie"
import { Professional } from "./professional";

let professional1 = new Professional("Brendan Fraser", 54, 80, 1.91, false, "American", 3, "Actor");
let professional2 = new Professional("Nicole Kidman", 56, 60, 1.80, false, "Australian", 0, "Actress");
let professional3 = new Professional("Maryl Streep", 74, 58, 1.70, false, "American", 3, "Actress")
let professional4 = new Professional("Christopher Nolan", 53, 85, 1.80, false, "English", 0, "Film director")
let professional5 = new Professional("Tim Burton", 65, 90, 1.86, false, "American", 0, "Film director")
let professional6 = new Professional("Bruce Willis", 68, 95, 1.83, true, "American", 0, "Actor")

let movie1 = new Movie("Mamma Mia", 2008, "American", "Musical")
movie1.addActors(professional3);
movie1.addActors(professional1);
movie1.addDirector(professional4);
movie1.addWriter(professional4);
movie1.addLanguage("English");
movie1.addPlatform("Netflix");
movie1.addIsMCU(true);
movie1.addMainCharacterName("Donna");
movie1.addProducer("Movies.SL")
movie1.addDistributor("Universal")

let movie2 = new Movie("Moulin Rouge", 2001, "American", "Musical")
movie2.addActors(professional2);
movie2.addDirector(professional5);
movie2.addWriter(professional4);
movie2.addLanguage("English");
movie2.addPlatform("Amazon Prime");
movie2.addIsMCU(false);
movie2.addProducer("20th Century Studios");
movie2.addDistributor("20th Century Studios");

let dataBase1 = new Imdb([movie1, movie2]);
console.log(dataBase1);
