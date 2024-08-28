module.exports = (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[3];
  const regexV4 = new RegExp(
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  );
  if (req.url === "/api/movies") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.movies));
    res.end();
  } else if (!regexV4.test(id)) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ title: "Not Valid!", message: "UUID invalid !" }));
  } else if (baseUrl === "/api/movies/" && regexV4.test(id)) {
    let movie = req.movies.filter((movie) => movie.id === id);
    res.setHeader("Content-Type", "application/json");
    if (movie.length > 0) {
      res.statusCode = 200;
      res.write(JSON.stringify(movie));
    } else {
      res.statusCode = 404;
      res.end(
        JSON.stringify({ title: "Invalid !", message: "Movie not found." })
      );
    }

    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ title: "Not found !", message: "Route not found." })
    );
  }
};
