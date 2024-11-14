import { ModalCreateGame } from "./ModalCreateGame";
import { ModalSearch } from "../Categories/Modal-Search";
import { ModalBack } from "./ModalBack";
import { TableGames } from "../Table-Games/Table-Games";

export const TableJogos = () => {
  return (
    <>
      <div className="container d-flex gap-5">
        <div className="container d-flex gap-3">
          <ModalCreateGame />
          <ModalSearch />
        </div>
        <ModalBack />
      </div>

      <TableGames />
    </>
  );
};
