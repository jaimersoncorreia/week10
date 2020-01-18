const { Router } = require("express");
const axios = require("axios");
const Dev = require("./models/Dev");

const routes = Router();

routes.post("/devs", async (request, response) => {
  const { github_username, techs } = request.body;

  const apiResponse = await axios.get(
    `https://api.github.com/users/${github_username}`
  );

  let { name = login, avatar_url, bio } = apiResponse.data;

  const techsArray = techs.split(",").map(tech => tech.trim());

  console.log(avatar_url, name);

  const dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray
  });

  console.log([1, 2, 3, 4, 5, 6].map(pot => pot * pot));

  return response.json(dev);
});

module.exports = routes;
