

export default class Player {

    constructor(name, id) {

        this.id = id;
        this.name = name;
        this.times = [];
        this.lowestTime = null;
    }
}