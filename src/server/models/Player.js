import { colors } from '../utils/generalUtils.js';

export default class Player {
    constructor(id = null, name, best_time = 0) {
        this.id = id;
        this.name = name;
        this.times = [];
        this.totalTime = 0;
        this.currentRiddleAvgTime = 0;
        this.best_time = best_time;
    }

    #calcTotalTime() {
        this.totalTime = this.times.reduce((sum, time) => sum + time, 0);
    }


    #calcCurrentRiddleAvgTime() {
        if (this.times.length > 0) {
            this.currentRiddleAvgTime = this.totalTime / this.times.length;
        } else {
            this.currentRiddleAvgTime = 0;
        }
    }

    #updateBestTime() {
        if (this.times.length > 0) {
            if (this.best_time === 0 || this.currentRiddleAvgTime < this.best_time) {
                this.best_time = this.currentRiddleAvgTime;
            }
        }
    }


    updateStat() {
        this.#calcTotalTime(); 
        this.#calcCurrentRiddleAvgTime(); 
        this.#updateBestTime(); 
    }

    showStat() {
        console.log(`Total time: ${colors.cyan(this.totalTime)} sec.`);
        console.log(`Average Time Per riddle: ${colors.cyan(this.currentRiddleAvgTime)} sec.`);
        console.log(`The best time ever: ${colors.cyan(this.best_time)} sec.`);
    }
}
         












