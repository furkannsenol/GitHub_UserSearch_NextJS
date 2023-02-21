import Layout from '@/layout/Layout'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';

export default function App({ Component, pageProps }) {
  /*const router = useRouter();
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() => { setLoading(false) }, 500);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
    }
  })*/

  return (
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
  )
}
