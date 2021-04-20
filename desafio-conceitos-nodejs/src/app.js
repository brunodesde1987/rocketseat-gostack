const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function logger(request, response, next) {
  const { method, url } = request;

  console.log(`${method}: ${url}`);
  return next();
}

function validateRepositoryID(request, response, next) {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: "Repository ID not found." });
  }

  return next();
}

app.use(logger);
app.use("/repositories/:id", validateRepositoryID);

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const newProject = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(newProject);

  return response.json(newProject);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  const currentRepository = repositories[repositoryIndex];
  const updatedRepository = { ...currentRepository, title, url, techs };

  repositories[repositoryIndex] = updatedRepository;

  return response.json(updatedRepository);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const currentRepository = repositories.find(
    (repository) => repository.id === id
  );

  const updatedRepository = {
    ...currentRepository,
    likes: ++currentRepository.likes,
  };

  return response.json(updatedRepository);
});

module.exports = app;
