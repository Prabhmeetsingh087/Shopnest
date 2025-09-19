import express from 'express';

import { usersignup ,userlogin} from "../controller/usercontroller.js";
import { getproducts ,getproductbyid} from '../controller/productcontroller.js';
import { addPaymentGateway, paymentResponse } from '../controller/paymentcontroller.js';

const router = express.Router();


router.post('/signup', usersignup);
router.post('/login', userlogin);
//In an Express.js application, you do not have to manually pass parameters to the userlogin function. 
//Instead, Express automatically fills the request and response arguments for you when the function is called as a route handler.

router.get('/products', getproducts);
router.get('/product/:id', getproductbyid);

router.post('payment', addPaymentGateway);
router.post('/callback', paymentResponse)



export default router;