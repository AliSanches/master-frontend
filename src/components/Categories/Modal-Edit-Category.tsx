import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { MdEditSquare } from "react-icons/md";

import { DAO } from "../../api/categoryGames/api";

export const ModalEditCategory = ({ categoria }) => {
  const [isOpen, setIsopen] = useState(false);

  const handleOpen = () => {
    setIsopen(true);
  };

  const handleClose = () => {
    setIsopen(false);
  };

  const [name, setName] = useState(categoria.name);
  const [description, setDescription] = useState(categoria.description);

  const queryClient = useQueryClient();
  const dao = new DAO();

  const { mutate } = useMutation({
    mutationFn: () => dao.update(categoria.id, name, description),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listAll-Categories"] });
      handleClose();
    },
  });

  return (
    <>
      <button className="btn btn-info my-3 fs-5" onClick={handleOpen}>
        <MdEditSquare />
      </button>
      {isOpen && (
        <>
          <div className="modal show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">Editar Categoria</h1>
                  <button className="btn-close" onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Categoria:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Descrição:</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClose}
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => mutate()}
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" />{" "}
        </>
      )}
    </>
  );
};
