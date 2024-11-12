import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
   return (
      <div className="min-h-screen flex flex-col">
         <Navbar />

         <Head>
            <title>Homepage | Disbot.me</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>

         <main className="flex flex-col items-center py-8 px-4 flex-grow">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 text-center">
               Welcome to Discord Bot Hub
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 text-center max-w-md md:max-w-2xl">
               Add powerful bots or join amazing servers on Discord.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
               <Link href="/bot/add" legacyBehavior>
                  <a className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-200 text-center">
                     Add a Bot
                  </a>
               </Link>
               <Link href="/server/add" legacyBehavior>
                  <a className="px-5 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors duration-200 text-center">
                     Add a Server
                  </a>
               </Link>
            </div>
         </main>

         <Footer />
      </div>
   );
}
