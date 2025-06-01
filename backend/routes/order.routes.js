const router = require('express').Router();
const orderController = require('../controllers/order.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/', auth, orderController.create);
router.get('/my', auth, orderController.getMyOrders);

module.exports = router;