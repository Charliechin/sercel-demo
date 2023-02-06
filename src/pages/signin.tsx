import useAuth from '@/hooks/useAuth'
import { CognitoUser } from '@aws-amplify/auth'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'



const SignIn = () => {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) router.push('/')
  }, [])


  return (
    <p>Signin route</p>
  )
}

export default withAuthenticator(SignIn, {
  signUpAttributes: ['name', 'family_name']
})

