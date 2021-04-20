import React, { useState, useEffect } from "react";
import api from "./services/api";
import "./styles.css";

function App() {
  const [respositories, setRepositories] = useState([]);

  async function handleAddRepository() {
    const newStaticRepository = {
      title: "Desafio 03 - React JS",
      url: "https://github.com/brunodesde1987",
      techs: ["Angular 2+", "NodeJS", "ReactJS"],
    };

    const response = await api.post("/repositories", newStaticRepository);

    setRepositories([...respositories, response.data]);
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`/repositories/${id}`);
    const updatedRepositories = respositories.filter(
      (repository) => repository.id !== id
    );

    if (response.status === 204) {
      setRepositories(updatedRepositories);
      return;
    }
  }

  useEffect(() => {
    api.get("/repositories").then((response) => setRepositories(response.data));
  }, []);

  return (
    <div>
      <button onClick={handleAddRepository}>Adicionar</button>
      <h3>Lista de repositórios:</h3>
      {!respositories.length && <p>Nenhum repositório encontrado.</p>}
      <ul data-testid="repository-list">
        {respositories.map((repository) => (
          <li key={repository.id}>
            {repository.title}
            <button
              title="Excluir"
              onClick={() => handleRemoveRepository(repository.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
