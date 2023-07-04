import { Register } from '@/src/pages/register';

export default function RegisterPage() {
  // const router = useRouter();
  // const [credentials, setCredentials] = useState({
  //   email: '',
  //   password: '',
  //   rePassword: '',
  // });
  // const handleChange = (e) => {
  //   if (e.target.name == 'email')
  //     setCredentials({ ...credentials, email: e.target.value });
  //   else if (e.target.name == 'password')
  //     setCredentials({ ...credentials, password: e.target.value });
  //   else setCredentials({ ...credentials, rePassword: e.target.value });
  // };

  // async function registerCall() {
  //   if (credentials.password == credentials.rePassword) {
  //     await fetch('https://therapy-mauve.vercel.app/api/users', {
  //       method: 'POST',
  //       mode: 'cors',
  //       body: JSON.stringify(credentials),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.message == 'Already Existing User, Please Login')
  //           toast.error('Already Existing User, Please Login');
  //         else if (data.email&&data.password) {
  //           toast.success('Registration Successful');
  //           router.push('/');
  //         }
  //       });
  //   } else {
  //     toast.error('Passwords do not match');
  //   }
  // }
  return <Register />;
}
