import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function Layout() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  }
]);


export default router;
