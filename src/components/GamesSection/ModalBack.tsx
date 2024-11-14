import { useNavigate } from "react-router-dom";

export const ModalBack = () => {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate("/");
  };

  return (
    <>
      <button className="btn btn-light my-3" onClick={handleOpen}>
        Voltar
      </button>
    </>
  );
};
