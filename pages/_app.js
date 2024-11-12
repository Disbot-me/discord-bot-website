// pages/_app.js
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
   return (
      <SessionProvider session={session}>
         <MaintenanceWrapper>
            <Component {...pageProps} />
         </MaintenanceWrapper>
      </SessionProvider>
   );
}

function MaintenanceWrapper({ children }) {
   const { data: session, status } = useSession();
   const router = useRouter();
   const isMaintenance = process.env.IS_MAINTENANCE === 'true';
   const [isStaff, setIsStaff] = useState(false);

   // Initial logging for the values on component mount
   console.log("MaintenanceWrapper mounted");
   console.log("isMaintenance:", isMaintenance);
   console.log("Session status:", status);

   useEffect(() => {
      console.log("useEffect triggered. Checking session and maintenance status...");
      
      const checkStaffStatus = async () => {
         if (status === 'authenticated' && session?.user?.id) {
            console.log("User is authenticated. Checking staff status for user:", session.user.id);

            try {
               // Replace this fetch call with your actual API endpoint
               const response = await fetch(`/api/check-staff?userId=${session.user.id}`);
               if (!response.ok) {
                  console.error("Failed to fetch staff status:", response.statusText);
                  return;
               }

               const { isStaff } = await response.json();
               console.log("Staff status fetched:", isStaff);
               setIsStaff(isStaff);
            } catch (error) {
               console.error("Error fetching staff status:", error);
            }
         } else {
            console.log("User not authenticated or session is loading.");
         }
      };

      checkStaffStatus();

      console.log("isMaintenance:", isMaintenance, "isStaff:", isStaff, "Current path:", router.pathname);

      if (isMaintenance && !isStaff && router.pathname !== '/maintenance') {
         console.log("Maintenance mode active. Redirecting to /maintenance...");
         router.push('/maintenance');
      } else {
         console.log("No redirect required.");
      }
   }, [session, status, isMaintenance, router.pathname, isStaff]);

   // Logging for loading state
   if (status === 'loading') {
      console.log("Session status loading, rendering nothing...");
      return null;
   }

   console.log("Rendering children...");
   return children;
}

export default MyApp;
