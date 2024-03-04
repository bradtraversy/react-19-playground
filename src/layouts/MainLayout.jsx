import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function MainLayout() {
  return (
    <>
      <Header />
      <div className='max-w-4xl mx-auto p-4'>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
