import { Login } from '@/src/pages/login';

export default function LoginPage() {
  return <Login />;
}

// <>
// <Toaster />
// <div className="flex items-center justify-center min-h-screen bg-gray-100">
//   <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
//     <h3 className="text-2xl font-bold text-center">
//       Login to your account
//     </h3>
//     <form action="">
//       <div className="mt-4">
//         <div>
//           <label className="block" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="text"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
//           />
//           <span className="text-xs tracking-wide text-red-600">
//             Email field is required{' '}
//           </span>
//         </div>
//         <div className="mt-4">
//           <label className="block">Password</label>
//           <input
//             name="password"
//             type="password"
//             onChange={handleChange}
//             placeholder="Password"
//             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
//           />
//         </div>
//         <div className="flex items-baseline justify-between">
//           <button
//             className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
//             onClick={(e) => {
//               e.preventDefault();
//               loginCall();
//             }}>
//             Login
//           </button>
//           <a href="#" className="text-sm text-blue-600 hover:underline">
//             Forgot password?
//           </a>
//         </div>
//       </div>
//     </form>
//   </div>
// </div>
// </>
