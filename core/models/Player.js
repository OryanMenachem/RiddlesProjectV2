import {colors} from "../../utils/generalUtils.js";

export default  class Player {

    constructor(id = null, name, best_time = 0) {

        this.id =  id;
        this.name = name;
        this.times = [];       // Array of times per riddle
        this.best_time = best_time;
    }

    #totalTime() {return this.times.reduce((total, time) => total += time, 0)}
   
    init_best_time() { 

        const totalTime = this.#totalTime();

        if(totalTime > 0) {               
            const currentTimeAverage = totalTime / this.times.length;
            
            if (this.best_time === 0 || currentTimeAverage < this.best_time) {
                this.best_time = currentTimeAverage;
            }
        }
    }

    #averageRiddleTime() {
        const totalTime = this.#totalTime();
        return totalTime / this.times.length 
        }
  

    showStat() {
        console.log(`Total time: ${colors.cyan(this.#totalTime())} sec.`);
        console.log(`Average Time Per riddle: ${colors.cyan(this.#averageRiddleTime())} sec.`);
    }
}
        












