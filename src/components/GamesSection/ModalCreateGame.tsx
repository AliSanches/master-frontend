import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DAO } from "../../api/categoryGames/api";

export const ModalCreateGame = () => {
  const [isOpen, setIsopen] = useState(false);

  const handleOpen = () => {
    setIsopen(true);
  };

  const handleClose = () => {
    setIsopen(false);
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const queryClient = useQueryClient();
  const dao = new DAO();

  const { mutate } = useMutation({
    mutationFn: () => dao.create(name, description),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listAll-Categories"] });
      setName("");
      setDescription("");
      handleClose();
    },
  });

  return (
    <>
      <button className="btn btn-primary my-3" onClick={handleOpen}>
        Jogo
      </button>

      {isOpen && (
        <>
          <div className="modal show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">Cadastrar Jogo</h1>
                  <button className="btn-close" onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Categoria:</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Nome:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Descrição:</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      onChange={(e) => setDescription(e.target.value)}
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
                    Cadastrar
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
