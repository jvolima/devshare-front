import { GetServerSideProps } from "next"
import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { withSSRAuth } from "../utils/withSSRAuth"

export default function Home() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <>
      <h1>Bem vindo ao dev share {user?.name}!</h1>
      <button onClick={signOut}>Logout</button>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {}
  }
})