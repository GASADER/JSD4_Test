import express, { json } from "express";
import * as dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/database.js"
import expressSesstion from "express-session";
import routers from "./routers/router.js";

import { mocks } from "./models/mock.js";

const app = express();
const ipAddress = process.env.API_IPADDRESS
const port = process.env.API_PORT


async function run(){

  //อ่านข้อมูลในรูปแบบJSON
  app.use(express.json());
  app.use(express.urlencoded());

  await connectDb()
  routers(app)

  await app.listen(port, ipAddress, () => {
    console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
    console.log(`Address: http://${ipAddress}:${port}`);
  });
}
run()

// app.get("/", (req, res) => {
//   res.send(mocks);
// });

// app.get("/:id", async (req, res) => {
//   const userid = await Number.parseInt(req.params.id, 10);
//   const mock = mocks.find((mock) => mock.id === userid);
//   res.send(mock);
// });

// app.post("/", async (req, res) => {
//   //แตกค่าเข้า obj
//   const newmock = { ...req.body };
//   mocks.push(newmock);
//   res.json(newmock);
// });

// app.put("/:id", async (req, res) => {
//   const userid = await Number.parseInt(req.params.id, 10);
//   const mock = mocks.findIndex((mock) => mock.id === userid);

//   if (mockIndex !== -1) {
//     const mockupdate = {
//       id: userid,
//       ...req.body,
//     };
//     //ยัดค่ากลับเข้าไป
//     mocks[mock] = mockupdate;
//     res.json(mockupdate);
//   } else {
//     res.status(404).json({ error: "Mock not found" });
//   }
// });

// app.delete("/:id", async (req, res) => {
//   //แบบเก่าลบdataทิ้ง
//   // const userid = await Number.parseInt(req.params.id,10)
//   // const mock = mocks.findIndex((mock) => mock.id === userid)
//   // mocks.splice(mock,1)
//   // res.send("delete")

//   const userId = Number.parseInt(req.params.id, 10);
//   const mockIndex = mocks.findIndex((mock) => mock.id === userId);

//   if (mockIndex !== -1) {
//     mocks[mockIndex].post_status = false;
//     res.json(mocks[mockIndex]);
//   } else {
//     res.status(404).json({ error: "Mock not found" });
//   }
// });