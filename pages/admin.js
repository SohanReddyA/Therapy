import Admin from '@/src/pages/admin/template';
import { getCurrentEnvironment } from '@/src/utils';
import { useRouter } from 'next/router';
const AdminPage = () => {
  const currentEnvironment = getCurrentEnvironment();
  const router = useRouter();
  if (currentEnvironment != 'development') {
    router.push('/');
    return null;
  }
  return <Admin />;
};

export default AdminPage;
