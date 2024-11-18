import { DAO } from "../../api/games/api";

import { ModalDeleteGame } from "../GamesSection/Modal-Delete-Game";
import { ModalEditGame } from "../GamesSection/Modal-Edit-Game";

import { useQuery } from "@tanstack/react-query";

import Spinner from "react-bootstrap/Spinner";

export const TableGames = () => {
  const dao = new DAO();

  const { data } = useQuery({
    queryKey: ["listAll-Games"],
    queryFn: () => dao.listAll(),
  });

  return (
    <>
      <div
        className="container d-flex flex-wrap gap-3 overflow-y-auto"
        style={{ height: "700px" }}
      >
        {data ? (
          data.map((jogo) => (
            <div
              key={jogo.id}
              className="container m-0 rounded-2 d-flex flex-column text-black my-3 shadow "
              style={{ height: "400px", width: "380px", background: "#589bfb" }}
            >
              <div className="d-flex gap-5">
                <div
                  style={{ height: "40px", width: "150px" }}
                  className="bg-white rounded-2 my-2 d-flex align-items-center shadow-sm px-2"
                >
                  {jogo.name}
                </div>
                <div
                  style={{ height: "40px", width: "auto" }}
                  className="bg-white rounded-2 my-2 d-flex align-items-center shadow-sm px-2"
                >
                  R$ {jogo.price}
                </div>
              </div>
              <div
                style={{
                  width: "auto",
                  height: "250px",
                  wordWrap: "break-word",
                }}
                className="bg-white rounded-2 my-2 p-2 shadow-sm overflow-y-auto"
              >
                {jogo.description}
              </div>
              <div className="d-flex gap-3">
                <ModalEditGame jogo={jogo} />
                <ModalDeleteGame jogo={jogo} />
              </div>
            </div>
          ))
        ) : (
          <div className="container d-flex justify-content-center align-content-center">
            <Spinner animation="border" variant="light" />
          </div>
        )}
      </div>
    </>
  );
};
