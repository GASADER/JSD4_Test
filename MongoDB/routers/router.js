import UserRouter from "./user.router.js";

function routers(app) {
  app.get("/", (req, res) => {
    res.send("GET")
  });
  app.use("/user", UserRouter)
//   app.use("/post", PostRouter)

  return app
}

export default routers;