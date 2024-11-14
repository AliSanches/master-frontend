import axios from "axios";

export class DAO {
  async create(
    categoriaId: number,
    name: string,
    description: string,
    price: number
  ) {
    return await axios.post(`${import.meta.env.VITE_API_URL}/app/jogo`, {
      categoriaId,
      name,
      description,
      price,
    });
  }

  async listAll() {
    return await axios
      .get(`${import.meta.env.VITE_API_URL}/app/jogo`, {})
      .then((response) => {
        return response.data.response;
      });
  }

  async listAllGames(id: number) {
    return await axios
      .get(`${import.meta.env.VITE_API_URL}/app/jogo/${id}`, {})
      .then((response) => {
        return response.data.response;
      });
  }

  async delete(id: number) {
    return await axios
      .delete(`${import.meta.env.VITE_API_URL}/app/jogo/${id}`, {})
      .then((response) => {
        return response.data;
      });
  }

  async update(id: number, name: string, description: string) {
    return await axios.put(`${import.meta.env.VITE_API_URL}/app/jogo/${id}`, {
      name,
      description,
    });
  }
}
