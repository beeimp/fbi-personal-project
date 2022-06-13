import { NextPage } from 'next';
import { Header } from '../layout/header';

interface DMPageProps {
}
 
const DMPage: NextPage<DMPageProps> = () => {
  return (
    <div>
      <Header title='DeSogram'></Header>
    </div>
  );
}
 
export default DMPage;