import { AuthProvider } from "../contexts/AuthContext"
import { GlobalStyle } from "../styles/global"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AuthProvider>
  )
}

export default MyApp
