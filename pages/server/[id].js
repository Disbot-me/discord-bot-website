import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

export default function ServerDetails() {
   const router = useRouter();
   const { id } = router.query;

   return (
      <div className="min-h-screen bg-[#182133]">
         <Navbar />
         <main className="max-w-lg mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Server Details - ID: {id}</h1>
            {/* Render server details based on ID */}
            <p className="text-gray-700">Here you can display details about the server with ID: {id}</p>
         </main>
      </div>
   );
}
