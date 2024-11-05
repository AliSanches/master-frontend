import { useState } from "react";

export const ModalConsultarJogos = ({ jogos }) => {
  const [isOpen, setIsopen] = useState(false);

  const handleOpen = () => {
    setIsopen(true);
  };

  const handleClose = () => {
    setIsopen(false);
  };

  return (
    <>
      <button className="btn btn-outline-light my-3" onClick={handleOpen}>
        Consultar Jogos
      </button>

      {isOpen && (
        <>
          <div className="modal show" style={{ display: "block" }}>
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">Jogos</h1>
                  <button className="btn-close" onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                  {jogos &&
                    jogos.map((jogo) => (
                      <div
                        key={jogo.id}
                        className="container rounded-3 h-auto bg-light-subtle shadow-lg d-flex justify-content-between align-items-center text-black my-3"
                      >
                        <div
                          style={{ height: "30px", width: "150px" }}
                          className=" rounded-2 d-flex align-items-center justify-content-center p-2"
                        >
                          {jogo.name}
                        </div>
                        <div
                          style={{ width: "500px" }}
                          className=" rounded-2 h-auto d-flex align-items-center justify-content-center p-2 my-4"
                        >
                          {jogo.description}
                        </div>
                        <div
                          style={{ height: "30px", width: "150px" }}
                          className=" rounded-2 d-flex align-items-center justify-content-center p-2"
                        >
                          <div
                            style={{ height: "30px", width: "150px" }}
                            className=" rounded-2 d-flex align-items-center justify-content-center p-2"
                          >
                            R$ {jogo.price}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClose}
                  >
                    Voltar
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
