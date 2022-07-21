import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import pt from "../lang/pt.json";
import en from "../lang/en.json";

const messages = { pt, en };

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  if (locale == 'pt' || locale == 'en') {
    return (    
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
    )
  }
  return <Component {...pageProps} />;  
}

export default MyApp
