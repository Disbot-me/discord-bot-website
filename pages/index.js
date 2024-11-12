import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Home() {
   return (

      

      <div className="min-h-screen flex flex-col">
      <Head>
         <title>Testing</title>
      </Head>
         <Navbar />
         <main className="flex flex-col items-center py-12 flex-grow">
            <h1 className="text-4xl font-bold text-white mb-6">Welcome to Discord Bot Hub</h1>
            <p className="text-lg text-gray-300 mb-6 text-center max-w-2xl">
               Add powerful bots or join amazing servers on Discord.
            </p>
            <div className="space-x-4">
               <a href="/bot/add" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-200">
                  Add a Bot
               </a>
               <a href="/server/add" className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors duration-200">
                  Add a Server
               </a>
            </div>
         </main>
         <Footer />
      </div>
   );
}