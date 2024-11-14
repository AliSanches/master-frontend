import { ModalCreateCategory } from "./Categories/Modal-Create-Category";
import { TableCategory } from "./Table-Categories/Table-Categories";
import { ModalSearch } from "./Categories/Modal-Search";
import { ModalJogos } from "./GamesSection/ModalListaGamesFull";

export const Main = () => {
  return (
    <>
      <div className="container d-flex gap-5">
        <div className="container d-flex gap-3">
          <ModalCreateCategory />
          <ModalSearch />
        </div>
        <ModalJogos />
      </div>
      <TableCategory />
    </>
  );
};
