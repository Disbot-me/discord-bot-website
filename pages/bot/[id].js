import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

export default function BotDetails() {
   const router = useRouter();
   const { id } = router.query;

   return (
      <div className="min-h-screen bg-[#182133]-100">
         <Navbar />
         <main className="max-w-lg mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Bot Details - ID: {id}</h1>
            {/* Render bot details based on ID */}
            <p className="text-gray-700">Here you can display details about the bot with ID: {id}</p>
         </main>
      </div>
   );
}
