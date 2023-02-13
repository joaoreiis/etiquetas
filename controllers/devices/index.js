const { json } = require("sequelize");
const { Devices } = require("../../database/models");


module.exports = {
    get: async (req, res) => {
        const result = await Devices.findAll();
        res.send(result);
    },
    post: async (req, res) => {
        const add = await Devices.create(req.body);
        res.send(add);
    },
    patch: async (req, res) => {
        const { _id } = req.params;
        const result = await Devices.findByPk(_id);
        const data = req.body;

        if (result) {
            await result.update(data)
            res.send(await result.save());
        } else {
            res.send({ 'success':false, 'error': 'Alerta não encontrado' });
        }

    }
}
