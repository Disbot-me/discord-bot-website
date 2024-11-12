import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
   return (
      <div className="min-h-screen flex flex-col">
         <Navbar />
         <main className="flex flex-col items-center py-12 flex-grow">
            <h1 className="text-4xl font-bold text-white mb-6">Welcome to Discord Bot Hub</h1>
            <p className="text-lg text-gray-300 mb-6 text-center max-w-2xl">
               Add powerful bots or join amazing servers on Discord.
            </p>
            <div className="space-x-4">
               <Link href="/bot/add" legacyBehavior>
                  <a className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-200">
                     Add a Bot
                  </a>
               </Link>
               <Link href="/server/add" legacyBehavior>
                  <a className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors duration-200">
                     Add a Server
                  </a>
               </Link>
            </div>
         </main>
         <Footer />
      </div>
   );
}
