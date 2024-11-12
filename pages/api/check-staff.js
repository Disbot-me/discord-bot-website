// pages/api/check-staff.js
import { getSession } from 'next-auth/react';

export default async (req, res) => {
   const session = await getSession({ req });
   const { userId } = req.query;

   // Mock staff list check. Replace with actual database check.
   const staffList = ['staff_user_id_1', 'staff_user_id_2']; // Example IDs of staff members

   const isStaff = staffList.includes(userId);

   res.status(200).json({ isStaff });
};
