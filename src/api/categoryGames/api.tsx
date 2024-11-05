import axios from "axios";

export class DAO {
  async create(name: string, description: string) {
    return await axios.post(`${import.meta.env.VITE_API_URL}/app/categoria`, {
      name,
      description,
    });
  }

  async listAll() {
    return await axios
      .get(`${import.meta.env.VITE_API_URL}/app/categoria`, {})
      .then((response) => {
        return response.data.response;
      });
  }

  async listAllGames(id: number) {
    return await axios
      .get(`${import.meta.env.VITE_API_URL}/app/categoria/${id}`, {})
      .then((response) => {
        return response.data.response;
      });
  }

  async delete(id: number) {
    return await axios
      .delete(`${import.meta.env.VITE_API_URL}/app/categoria/${id}`, {})
      .then((response) => {
        return response.data;
      });
  }

  async update(id: number, name: string, description: string) {
    return await axios.put(
      `${import.meta.env.VITE_API_URL}/app/categoria/${id}`,
      {
        name,
        description,
      }
    );
  }
}
