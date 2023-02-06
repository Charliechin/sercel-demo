// Props
import type { AppProps } from 'next/app'
// Amplify
import { Amplify, Auth } from 'aws-amplify'
import awsExports from '../../aws-exports'
// Styles
import '@aws-amplify/ui-react/styles.css'
import "../styles/globals.css"
import { ChakraProvider } from '@chakra-ui/react'
import Header from '@/components/Header'
import AuthProvider from '@/contexts/Auth'

Amplify.configure({ ...awsExports, ssr: true })

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>

  )
}
