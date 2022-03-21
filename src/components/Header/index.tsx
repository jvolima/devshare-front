import Link from "next/link";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>devshare<span>.</span></h1>
      <ul>
        <li>
          <Link href="/home"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/perfil"><a>Meu perfil</a></Link>
        </li>
      </ul>
    </Container>
  )
}