import {useSession, singIN, singOut} from 'next-auth/client'

const Login = () => {
  const [session, loading] = useSession();
  if(session){
    return (
      <>
        Sined in 
      </>
    )
  }
}