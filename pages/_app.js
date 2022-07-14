import '../styles/globals.css'
import Header from '../components/events/header'

function MyApp({ Component, pageProps }) {
  return (
    <Header >
      <Component {...pageProps} />
    </Header>
  );
}

export default MyApp
