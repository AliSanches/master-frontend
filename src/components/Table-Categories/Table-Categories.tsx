import { DAO } from "../../api/categoryGames/api";

import { useSuspenseQuery } from "@tanstack/react-query";

import { ModalConsultarJogos } from "../Games/Games";
import { ModalDeleteCategory } from "../Categories/Modal-Delete-Category";
import { ModalEditCategory } from "../Categories/Modal-Edit-Category";

export const TableCategory = () => {
  const dao = new DAO();

  const { data } = useSuspenseQuery({
    queryKey: ["listAll-Categories"],
    queryFn: () => dao.listAll(),
  });

  return (
    <>
      <div className="container overflow-y-auto" style={{ height: "700px" }}>
        {data.map((categoria) => (
          <div
            key={categoria.id}
            className="container rounded-2 bg-primary d-flex justify-content-between align-items-center text-black my-3 shadow "
            style={{ height: "auto" }}
          >
            <div
              style={{ height: "50px", width: "90px" }}
              className="bg-white rounded-2 d-flex align-items-center justify-content-center shadow-sm"
            >
              {categoria.name}
            </div>
            <div
              style={{ width: "500px" }}
              className="bg-white rounded-2 my-2 p-2 shadow-sm"
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
