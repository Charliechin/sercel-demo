import { withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react'
import { Button, Heading } from '@chakra-ui/react'



const Home = ({ signOut, user }: WithAuthenticatorProps) => {
  console.log('user:', user)
  console.log('signOut:', signOut)

  return (
    <>
      <Heading as={"h2"} mb={3}>Hello {user?.username}</Heading>
      <p>hey</p>
      <Button colorScheme={"blue"} size="sm" onClick={signOut}>Sign out</Button>
    </>
  )
}

export default withAuthenticator(Home)
