import { DAO } from "../../api/categoryGames/api";

import { useQuery } from "@tanstack/react-query";

import { ModalConsultarJogos } from "../Games/Games";
import { ModalDeleteCategory } from "../Categories/Modal-Delete-Category";
import { ModalEditCategory } from "../Categories/Modal-Edit-Category";

import Spinner from "react-bootstrap/Spinner";

export const TableCategory = () => {
  const dao = new DAO();

  const { data, isLoading } = useQuery({
    queryKey: ["listAll-Categories"],
    queryFn: () => dao.listAll(),
  });

  if (isLoading)
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <Spinner animation="grow" />
      </div>
    );
  return (
    <>
      <div
        className="container d-flex flex-wrap gap-3 overflow-y-auto"
        style={{ height: "700px" }}
      >
        {data.map((categoria) => (
          <div
            key={categoria.id}
            className="container m-0 rounded-2 bg-primary d-flex flex-column text-black my-3 shadow "
            style={{ height: "400px", width: "380px" }}
          >
            <div
              style={{ height: "40px", width: "150px" }}
              className="bg-white rounded-2 my-2 d-flex align-items-center shadow-sm px-2"
            >
              {categoria.name}
            </div>
            <div
              style={{
                width: "auto",
                height: "250px",
                wordWrap: "break-word",
              }}
              className="bg-white rounded-2 my-2 p-2 shadow-sm overflow-y-auto"
            >
              {categoria.description}
            </div>
            <div className="d-flex gap-3">
              <ModalEditCategory categoria={categoria} />
              <ModalDeleteCategory categoria={categoria} />
              <ModalConsultarJogos jogos={categoria.game} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
