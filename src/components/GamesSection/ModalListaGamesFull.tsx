import { useNavigate } from "react-router-dom";

export const ModalJogos = () => {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate("/jogos");
  };

  return (
    <>
      <button className="btn btn-primary my-3" onClick={handleOpen}>
        Jogos
      </button>
    </>
  );
};
