import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './components/HomePage';
import { UseExample1 } from './components/useExample1/Joke';
import { UseExample2 } from './components/useExample2/Posts';
import { UseExample3 } from './components/useExample3/Message';
import { UseExampleContext } from './components/useExampleContext/Theme';
import { ActionExample1 } from './components/actionExample1/Posts';
import { ActionExample2 } from './components/actionExample2/ShoppingCart';
import { UseFormStatusExample } from './components/useFormStatusExample/Posts';
import AddToCartForm from './components/useFormStateExample/AddToCartForm';
import { UseOptimisticExample } from './components/useOptimisticExample/Message';
import { UseTransitionExample } from './components/useTransitionExample/Tabs';
import MainLayout from './layouts/MainLayout';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='use-example-1' element={<UseExample1 />} />
        <Route path='use-example-2' element={<UseExample2 />} />
        <Route path='use-example-3' element={<UseExample3 />} />
        <Route path='use-example-context' element={<UseExampleContext />} />
        <Route path='action-example-1' element={<ActionExample1 />} />
        <Route path='action-example-2' element={<ActionExample2 />} />
        <Route
          path='useformstatus-example'
          element={<UseFormStatusExample />}
        />
        <Route
          path='useformstate-example'
          element={
            <>
              <AddToCartForm
                itemID='1'
                itemTitle='JavaScript: The Definitive Guide'
              />
              <AddToCartForm
                itemID='2'
                itemTitle='JavaScript: The Good Parts'
              />
            </>
          }
        />
        <Route
          path='useoptimistic-example'
          element={<UseOptimisticExample />}
        />
        <Route
          path='usetransition-example'
          element={<UseTransitionExample />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

// Uncomment the component to see the example
// const App = () => {
//   return (
//     <>
//       <Header />
//       <div className='max-w-4xl mx-auto p-4'>
//         <UseExample1 />
//         {/* <Posts /> */}
//         {/* <Message /> */}
//         {/* <Theme /> */}
//         {/* <ShoppingCart /> */}
//         {/* <Tabs /> */}

//         {/* <AddToCartForm itemID='1' itemTitle='JavaScript: The Definitive Guide' />
//       <AddToCartForm itemID='2' itemTitle='JavaScript: The Good Parts' />
//       */}
//       </div>
//     </>
//   );
// };
export default App;
