const connectDB = require("../../config/db");
const { port } = require("../js/secret/secret");
const app = require("./app");

// const port =
app.listen(port, async () => {
  console.log("Server is running at http://localhost:" + port);
  await connectDB();
});
