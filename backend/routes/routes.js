const {Router} = require("express")
const router = Router()

router.post('/send', (req, res) => {
    console.log(req.body)
})

module.exports = router