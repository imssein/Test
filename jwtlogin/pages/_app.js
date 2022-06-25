import '../styles/globals.css'
import { useSession } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>
  }

  return <a href="/api/auth/signin">Sign in</a>

  
  return <Component {...pageProps} />
}

export default MyApp
