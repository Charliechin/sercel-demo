import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Amplify } from 'aws-amplify'
import awsconfig from '../../aws-exports'

Amplify.configure({ ...awsconfig, ssr: true })

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
}
