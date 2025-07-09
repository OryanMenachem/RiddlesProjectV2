import getId from '../../utils/idGenerator.js'

export default  class Player {

    constructor(name) {

        this.id = getId();
        this.name = name;
        this.times = [];   // Array of times per riddle
        this.totalTime = null; // Total game time in seconds
        this.lowestTime = null; // Lowest average game time
    }

    initializeTotalTime() {this.totalTime = this.times.reduce((total, time) => total += time, 0)}
   
    initializeLowestTime() {this.lowestTime = this.times.reduce((total, time) => total += time, 0) / this.times.length}
    
}
        


// const player1 = new Player('Oryan');











