import { AppProps } from 'next/app'
import { MantineProvider, NormalizeCSS } from '@mantine/core'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider>
      <NormalizeCSS />
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default App
