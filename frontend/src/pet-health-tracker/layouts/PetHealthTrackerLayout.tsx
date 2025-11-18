import { Outlet } from 'react-router';

const PetHealthTrackerLayout = () => {
  return (
    <>
      <h1 className='text-2xl font-bold'>Pet Health Tracker</h1>
      <Outlet />
    </>
  );
};

export default PetHealthTrackerLayout;
