import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {

  if(router.pathname.includes('/login') || router.pathname.includes('/signup')){
    return <Component {...pageProps} />
  }

  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
