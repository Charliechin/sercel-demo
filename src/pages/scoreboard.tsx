import { withSSRContext } from "aws-amplify"

// TODO: types
const ScoreBoard = ({ authenticated, username }: any) => {
  // if (!authenticated) return <h1>Not Authenticated</h1>
  // return <h1>Hello {username} from SSR route</h1>
  return (
    <h1>{authenticated ? `Hello ${username} from SSR route` : 'Not auth'}</h1>
  )
}

// TODO: types
export const getServerSideProps = async (ctx: any) => {
  const { Auth } = withSSRContext(ctx)
  try {
    const user = await Auth.currentAuthenticatedUser()
    return {
      props: {
        authenticated: true,
        username: user.username
      }
    }

  } catch (error) {
    console.log(error)
    return {
      props: {
        authenticated: false
      }
    }

  }
}


export default ScoreBoard