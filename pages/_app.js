import { useEffect } from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import '@styles/globals.scss'
import '@styles/header.scss'
import '@styles/projects.scss'
import '@styles/home.scss'
import 'bootstrap/dist/css/bootstrap.css'


function Application({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				></meta>
			</Head>
			<Header></Header>
			<main className="container p-0 mt-4">
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default Application
