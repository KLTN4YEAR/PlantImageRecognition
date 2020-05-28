class Plant {
    constructor(db, data) {
        this.db = db;
        this.data = data;
    }

    async searchPlant() {
        let result=await this.db.Plant.find({ name: { '$regex': this.data.filter, '$options': "i" } })
        .limit(5)
        return result;
    }

    async addPlant() {
        const plant = this.data;
        return await this.db.Plant.create(plant)
    }
}

module.exports = {
    Plant
};
