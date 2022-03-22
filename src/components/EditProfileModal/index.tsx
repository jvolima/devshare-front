import { Container } from "./styles";
import 'react-toastify/dist/ReactToastify.min.css';
import Modal from "react-modal";
import Image from "next/image";
import closeImg from "../../../public/close.svg"
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/apiClient";
import { toast, ToastContainer } from "react-toastify";

interface EditProfileModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function EditProfileModal({ isOpen, onRequestClose }: EditProfileModalProps) {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user.name)
  const [bio, setBio] = useState(user.bio)

  async function handleEditProfile(event: FormEvent) {
    event.preventDefault();
  
    onRequestClose();
  }

  return (
    <>
      <ToastContainer 
        theme="colored" 
        toastClassName="errorAlert"
        autoClose={3000} 
        pauseOnHover={false} 
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container onSubmit={handleEditProfile}>
          <div>
            <h2>Editar perfil</h2>

            <button 
              type="button" 
              onClick={onRequestClose}
            >
              <Image width="14" height="14" src={closeImg} alt="Fechar modal"/>
            </button>
          </div>

          <div className="fakeInput">
            <label htmlFor="nome">Nome</label>
            <input 
              type="text" 
              name="nome" 
              onChange={data => setName(data.target.value)} 
              value={name} 
            />
          </div>

          <div className="fakeInput">
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" onChange={data => setBio(data.target.value)}  value={bio}/>
          </div>

          <div className="containerSalvar">
            <button type="submit">Salvar</button>
          </div>
        </Container>
      </Modal>
    </>
  )
}