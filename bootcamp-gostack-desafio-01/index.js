const express = require("express");
const server = express();

server.use(express.json());

function requestLogger(req, res, next) {
  console.time("-> Request duration");
  console.count(`-> Total Requests`);
  console.log(`-> ${req.method} ${req.url}`);
  console.timeEnd("-> Request duration");
  console.log();

  next();
}

server.use(requestLogger);

let projectList = [];

function sortedProjectList(field) {
  return projectList.sort((a, b) => a[field] - b[field]);
}

function validateProjectId(req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      error: "Missing the project ID.",
    });
  }

  const project = projectList.find(
    (currentProject) => currentProject.id === id
  );

  if (project) {
    return next();
  }

  return res.status(400).json({
    error: `Project with ID ${id} not found.`,
  });
}

function validateBodyId(req, res, next) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      error: "Missing the project ID.",
    });
  }

  const project = projectList.find(
    (currentProject) => currentProject.id === id
  );

  if (!project) {
    return next();
  }

  return res
    .status(400)
    .json({ error: `Project width ID ${id} already exists.` });
}

function validateBodyTitle(req, res, next) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: `Please provide a valid title.` });
  }

  return next();
}

/* 

  -> Listar todos os projetos

*/
server.get("/projects", (req, res) => {
  return res.json(sortedProjectList("id"));
});

/* 

  -> Adicionar novo projeto

*/
server.post("/projects", validateBodyId, validateBodyTitle, (req, res) => {
  const { id, title } = req.body;

  projectList.push({ id, title, tasks: [] });

  return res.json(sortedProjectList("id"));
});

/* 

  -> Atualizar projeto existente

*/
server.put(
  "/projects/:id",
  validateProjectId,
  validateBodyTitle,
  (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projectList.find(
      (currentProject) => currentProject.id === id
    );

    project.title = title;

    return res.json(sortedProjectList("id"));
  }
);

/* 

  -> Remover projeto 

*/
server.delete("/projects/:id", validateProjectId, (req, res) => {
  const { id } = req.params;

  projectList = projectList.filter(
    (currentProject) => currentProject.id !== id
  );

  return res.send();
});

/* 

  -> Adicionar tarefa ao projeto 

*/
server.post(
  "/projects/:id/tasks",
  validateProjectId,
  validateBodyTitle,
  (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projectList.find(
      (currentProject) => currentProject.id === id
    );

    project.tasks.push(title);

    return res.json(project);
  }
);

server.listen(3333);
