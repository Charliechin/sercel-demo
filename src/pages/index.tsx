import { withAuthenticator } from '@aws-amplify/ui-react'

// TODO: types
const Home = ({ signOut, user }: any) => {

  console.log('user:', user)
  console.log('signOut:', signOut)

  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  )

}

export default withAuthenticator(Home)
