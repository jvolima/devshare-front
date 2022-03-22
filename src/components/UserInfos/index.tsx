import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Container } from "./styles";

interface UserInfosProps {
  onOpenModal: () => void;
}

export function UserInfos({ onOpenModal }: UserInfosProps) {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <div>
        <h2>{user.name}</h2>
        <button onClick={onOpenModal}>Editar perfil</button>
      </div>
      <p>{user.bio}</p>
    </Container>
  )
}