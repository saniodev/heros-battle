import HomePage from "./pages/home/page";
import { AppProps } from 'next/app';
import { AppProvider } from './contex/Contex';

export default function Home({ pageProps }: AppProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-600 to-red-950">
      <AppProvider>
      <HomePage {...pageProps}/>
      </AppProvider>
    </main>
  );
}
