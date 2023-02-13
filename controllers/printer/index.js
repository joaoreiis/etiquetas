const { json } = require("sequelize");
const zebra = require('../../services/zebra');
var request = require('request');

module.exports = {

    post: async (req, res) => {

        const txt = zebra.print('');

        request.post('http://api.labelary.com/v1/printers/8dpmm/labels/3.149608x1.574804/0/',{body: txt },
        function (error, response, body) {
                res.send({txt: 'data:image/png;base64, '+new Buffer(body).toString('base64')});
                console.log(new Buffer(body).toString('base64'));
            }
        );


       
    },

}
