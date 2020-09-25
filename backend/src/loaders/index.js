const serverLoader = require("./server");
const dbLoader = require("./db");
require("./events");

export default async ({ expressApp }) => {
  const dbConn = await mongooseLoader();
  await expressLoader({ expressApp });
};
