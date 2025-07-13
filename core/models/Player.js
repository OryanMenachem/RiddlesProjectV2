import getId from "../../utilsF/idGenerator.js"

export default  class Player {

    // #totalTime;
    // #lowestTime;

    constructor(name, id = getId(), lowestTime = 0) {

        this.name = name;
        this.id = id;
        this.times = [];       // Array of times per riddle
        this.totalTime = null; // Total game time in seconds
        this.lowestTime = lowestTime; // Lowest average game time
    }

    initializeTotalTime() {this.totalTime = this.times.reduce((total, time) => total += time, 0)}
   
    initializeLowestTime() { 

        if(this.lowestTime == 0) {return "\nThis field cannot be initialized yet.\n"}
         
        this.lowestTime = this.times.reduce((total, time) => total += time, 0) / this.times.length
    }
    
}
        














