import getId from '../utils/idGenerator.js'

export default  class Player {

    constructor(name, id) {

        this.id = id;
        this.name = name;
        this.times = [];
        this.lowestTime = null;
    }

    static async createPlayer(name) {

        const id = await getId();

        return new Player(name, id);
    }
}

// const player1 = await Player.create('Oryan');


