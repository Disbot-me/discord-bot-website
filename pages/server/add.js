import Navbar from '../../components/Navbar';

export default function AddServer() {
   return (
      <div className="min-h-screen bg-[#182133]">
         <Navbar />
         <main className="max-w-lg mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Add a New Server</h1>
            <form>
               <label className="block mb-4">
                  <span className="text-gray-700">Server Name</span>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300" placeholder="Server name" />
               </label>
               <label className="block mb-4">
                  <span className="text-gray-700">Description</span>
                  <textarea className="mt-1 block w-full rounded-md border-gray-300" placeholder="Describe your server"></textarea>
               </label>
               <label className="block mb-4">
                  <span className="text-gray-700">Invite Link</span>
                  <input type="url" className="mt-1 block w-full rounded-md border-gray-300" placeholder="Server invite link" />
               </label>
               <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">Submit</button>
            </form>
         </main>
      </div>
   );
}
