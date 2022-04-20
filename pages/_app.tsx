import type { AppProps } from 'next/app'
import Head from 'components/Head'
import Header from 'components/Header'
import FloatingFocus from 'components/FloatingFocus'
import Footer from 'components/Footer'
import 'styles/normalize.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import 'styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Head />
		<Header />
		<main className="main">
			<Component {...pageProps} />
			<FloatingFocus />
		</main>
		<Footer />
	</>
)

export default App
