import { useParams, useNavigate } from "react-router-dom";

export default function Registered() {
  const navigate = useNavigate();

  const { teamID } = useParams();

  const handleBack = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <div>
        <div className="container">El team ID de tu equipo es: {teamID}</div>
        <button type="button" onClick={handleBack}>
          Volver
        </button>
      </div>
    </>
  );
}
