// Props
import type { AppProps } from 'next/app'
// Amplify
import { Amplify } from 'aws-amplify'
import awsExports from '../../aws-exports'
// Styles
import '@aws-amplify/ui-react/styles.css'
import "../styles/globals.css"
import { ChakraProvider } from '@chakra-ui/react'

Amplify.configure({ ...awsExports, ssr: true })

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
