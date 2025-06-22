// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Staff = require('./models/Staff');
// const Order = require('./models/Order');
// const connectDB = require('./config/db');

// // Load env variables
// dotenv.config();

// // Connect to database
// connectDB();

// // Sample Staffs
// const staffs = [
//   {
//     name: 'John Doe',
//     email: 'john@example.com',
//     phone: '1234567890',
//     department: 'Kitchen',
//     position: 'Chef',
//     salary: 30000,
//   },
//   {
//     name: 'Jane Smith',
//     email: 'jane@example.com',
//     phone: '0987654321',
//     department: 'Housekeeping',
//     position: 'Cleaner',
//     salary: 25000,
//   },
//   {
//     name: 'Mike Johnson',
//     email: 'mike@example.com',
//     phone: '1122334455',
//     department: 'Maintenance',
//     position: 'Technician',
//     salary: 28000,
//   },
// ];

// // Sample Orders
// const orders = [
//   {
//     customerName: 'Alice Brown',
//     roomNumber: '101',
//     items: [
//       { name: 'Chicken Sandwich', quantity: 2, price: 1500 },
//       { name: 'Orange Juice', quantity: 1, price: 500 },
//     ],
//     totalAmount: 3500,
//     department: 'Kitchen',
//     status: 'Pending',
//   },
//   {
//     customerName: 'Bob Green',
//     roomNumber: '202',
//     items: [
//       { name: 'Extra Pillow', quantity: 1, price: 0 },
//     ],
//     totalAmount: 0,
//     department: 'Housekeeping',
//     status: 'Pending',
//   },
// ];

// const importData = async () => {
//   try {
//     // Clear old data
//     await Staff.deleteMany();
//     await Order.deleteMany();

//     // Insert Staff
//     const createdStaffs = await Staff.insertMany(staffs);

//     // Assign staff IDs to orders randomly
//     const sampleOrders = orders.map((order, index) => ({
//       ...order,
//       assignedStaff: createdStaffs[index % createdStaffs.length]._id,
//     }));

//     // Insert Orders
//     await Order.insertMany(sampleOrders);

//     console.log('Data Imported Successfully!');
//     process.exit();
//   } catch (error) {
//     console.error(`Error importing data: ${error}`);
//     process.exit(1);
//   }
// };

// importData();
