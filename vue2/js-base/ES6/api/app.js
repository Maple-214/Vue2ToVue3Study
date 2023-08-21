import express from "express";
import userRouter from './routers/user_router.js'
const app = express();
app.use('/api',userRouter)

app.listen(8989, () => {
  console.log("----server start----");
});
