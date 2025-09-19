import express from "express";
import Connection from "./database/db.js";
import { configDotenv } from "dotenv";
import defaultData from "./default.js";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";

const app = express();
//const app: This declares a constant variable app that stores 
//the newly created Express application.
// You will use app to define routes (like app.get(), app.post()), attach middleware (like app.use()), and start the server (using app.listen()).

configDotenv();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, '0.0.0.0', () => console.log(`server is running on port ${PORT}`));



const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);


defaultData();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
(paytmParams["MID"] = process.env.PAYTM_MID),
  (paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE),
  (paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID),
  (paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID),
  (paytmParams["ORDER_ID"] = uuid());
(paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID),
  (paytmParams["TXN_AMOUNT"] = "100"),
  (paytmParams["CALLBACK_URL"] = "http://ec2-13-48-46-186.eu-north-1.compute.amazonaws.com/callback");
paytmParams["EMAIL"] = "singh.prabhmeet2001@gmail.com";
paytmParams["MOBILE_NO"] = "8800861051";
