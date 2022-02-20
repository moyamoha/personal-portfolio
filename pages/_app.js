import { useEffect } from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import '@styles/globals.scss'
import '@styles/header.scss'
import '@styles/projects.scss'
import '@styles/home.scss'
import '@styles/work.scss'
import 'bootstrap/dist/css/bootstrap.css'
import '@styles/contact.scss'

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
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin>
				</link>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto&family=Shizuru&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<Header></Header>
			<main className="container p-0 mt-4">
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default Application
