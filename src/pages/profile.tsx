import { GetServerSideProps } from "next";
import { useState } from "react";
import { EditProfileModal } from "../components/EditProfileModal";
import { Header } from "../components/Header";
import { UserInfos } from "../components/UserInfos";
import { Container } from "../styles/profile";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <Header />
      <UserInfos onOpenModal={handleOpenModal}/>
      <EditProfileModal isOpen={isModalOpen} onRequestClose={handleCloseModal}/>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {}
  }
})