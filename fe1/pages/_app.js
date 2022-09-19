import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'; // Add this line

import { useEffect } from 'react';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <>
    <Head>
        <title>Herbalife</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Meta description for the Home page" />
      </Head>
 
 
  <Component {...pageProps} />
    </>
  
  )
}

export default MyApp
