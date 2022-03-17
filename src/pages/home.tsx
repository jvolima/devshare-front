import { GetServerSideProps } from "next"

export default function Home() {
  return (
    <h1>Home</h1>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}