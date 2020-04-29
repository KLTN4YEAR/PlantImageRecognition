const db = require('../db');
const PlantService = require('../services/plant.service').Plant;

const searchPlant = async (req, res) => {
    let formatData = {
        filter: req.query.filter
    }

    let plantService = new PlantService(db, formatData);
    let plants = await plantService.searchPlant();

    return res.status(200).json({
        result: {
            plants
        }
    })

}

module.exports = {
    searchPlant
};
