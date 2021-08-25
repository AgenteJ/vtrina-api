const { ViaCEP } = require('viacep');

exports.find = (req, res) => {
    const { cep } = req.params;
    const viacep = new ViaCEP()
        ; (async () => {
            try {
                const data = await viacep.cep(cep)
                return res.status(200).send(data)
            } catch (error) {
                return res.status(400).send(error)
            }
        })()
};