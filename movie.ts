import { Professional } from "./professional"

export class Movie {
    public title: string
    public releaseYear: number
    public actors: Professional[]
    public nationality: string
    public director: Professional
    public writer: Professional
    public language: string
    public platform: string
    public isMCU: boolean
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public genre: string

    constructor(title: string, releaseYear: number, nationality: string, genre: string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.actors = []
    }

    public addActors(actorName: Professional): void{
        this.actors.push(actorName);
    } 

    public addDirector(directorName: Professional){
        this.director = directorName;
    }

    public addWriter(writerName: Professional){
        this.writer = writerName;
    }

    public addLanguage(language: string){
        this.language = language
    }

    public addPlatform(platformName: string){
        this.platform = platformName;
    }

    public addIsMCU(answer: boolean){
        this.isMCU = answer;
    }

    public addMainCharacterName(mainCharacterName: string){
        this.mainCharacterName = mainCharacterName
    }

    public addProducer(producerName: string){
        this.producer = producerName;
    }

    public addDistributor(distributorName){
        this.distributor = distributorName;
    }

    public showInfoMovie(){
        return (
            `Title - ${this.title}\n
            Release year - ${this.releaseYear}\n
            Actors - ${this.actors.map(actor => actor.name)}\n
            Nationality - ${this.nationality}\n
            Director - ${this.director.name}\n
            Writer - ${this.writer.name}\n
            Language - ${this.language}\n
            Platform - ${this.platform}\n
            is MCU - ${this.isMCU}\n
            Main character name - ${this.mainCharacterName}\n
            Producer - ${this.producer}\n
            Distributor - ${this.distributor}\n
            Genre - ${this.genre}\n`
        )
    }
}

