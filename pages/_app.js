import Layout from '@/layout/Layout'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import NProgress from 'nprogress';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)

  Router.events.on("routeChangeStart",(url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete",(url) =>{
    setLoading(false);
  });

  Router.events.on("routeChangeError",(url) =>{
    setLoading(false);
  });
  return (
    <SSRProvider>
      <Layout>
        {loading && <Loader/>}
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}
