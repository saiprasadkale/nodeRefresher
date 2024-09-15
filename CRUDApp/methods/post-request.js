const requestBodyParser = require("../util/body-parser");
const crypto = require("crypto");

module.exports = async (req, res) => {
  if (req.url === "/api/movies") {
    try {
      let body = await requestBodyParser(req);
      body.id = crypto.randomUUID();
      req.movies.push(body);
      console.log("Request body: ", body);
    } catch (err) {}
  }
};
