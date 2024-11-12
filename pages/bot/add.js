import Navbar from '../../components/Navbar';

export default function AddBot() {
   return (
      <div className="min-h-screen bg-[#182133]">
         <Navbar />
         <main className="max-w-lg mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Add a New Bot</h1>
            <form>
               <label className="block mb-4">
                  <span className="text-gray-700">Bot Name</span>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300" placeholder="Bot name" />
               </label>
               <label className="block mb-4">
                  <span className="text-gray-700">Description</span>
                  <textarea className="mt-1 block w-full rounded-md border-gray-300" placeholder="Describe your bot"></textarea>
               </label>
               <label className="block mb-4">
                  <span className="text-gray-700">Invite Link</span>
                  <input type="url" className="mt-1 block w-full rounded-md border-gray-300" placeholder="Bot invite link" />
               </label>
               <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">Submit</button>
            </form>
         </main>
      </div>
   );
}
