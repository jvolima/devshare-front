import { createRef, FormEvent } from "react";
import { api } from "../../services/apiClient";
import 'react-toastify/dist/ReactToastify.min.css';
import { toast, ToastContainer } from "react-toastify";
import { Container } from "./styles";

export function CreatePost() {
  const ref = createRef<HTMLTextAreaElement>();

  async function handleSubmitPost(event: FormEvent) {
    event.preventDefault(); 
    
    try {
      await api.post("posts", {
        content: ref.current.value
      });

      toast.success("Publicação compartilhada!");
    } catch(err) {
      toast.error("No mínimo dois caracteres!")
    } finally {
      ref.current.value = '';
    }     
  }

  return (
    <Container>
      <ToastContainer 
        theme="colored" 
        toastClassName="errorAlert"
        autoClose={3000} 
        pauseOnHover={false} 
      />
      <form onSubmit={handleSubmitPost}>
        <div className="containerText">
          <textarea ref={ref} placeholder="O que você está pensando?" />
        </div>
        <div className="containerButton">
          <h3>Interaja com outros devs!</h3>
          <button type="submit">Compartilhe</button>
        </div>
      </form>
    </Container>
  )
}