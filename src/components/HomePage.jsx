const HomePage = () => {
  return (
    <>
      <div className='text-xl text-center'>
        This is a playground for React 19 and React experimental features. This
        is for learning purposes only.
      </div>

      <div className='my-5 text-xl'>
        <h2 className='my-5'>Examples</h2>
        <ul>
          <li className='bg-blue-50 p-4 rounded shadow my-5'>
            <div>
              <h3 className='text-2xl font-bold'>use() Hook Example 1</h3>
              <p className='my-2'>
                Use the `use()` hook to fetch a random joke from the Chuck
                Norris API
              </p>
              <a className='font-bold text-blue-800' href='/use-example-1'>
                View
              </a>
            </div>
          </li>
          <li className='bg-blue-50 p-4 rounded shadow my-5'>
            <div>
              <h3 className='text-2xl font-bold'>use() Hook Example 2</h3>
              <p className='my-2'>
                Use the `use()` hook to fetch some posts from the
                JSONPlaceholder API
              </p>
              <a className='font-bold text-blue-800' href='/use-example-2'>
                View
              </a>
            </div>
          </li>
          <li className='bg-blue-50 p-4 rounded shadow my-5'>
            <div>
              <h3 className='text-2xl font-bold'>use() Hook Example 3</h3>
              <p className='my-2'>
                Use the `use()` hook to resolve a message from a promise and
                show it
              </p>
              <a className='font-bold text-blue-800' href='/use-example-3'>
                View
              </a>
            </div>
          </li>
          <li className='bg-blue-50 p-4 rounded shadow my-5'>
            <div>
              <h3 className='text-2xl font-bold'>use(context) Example</h3>
              <p className='my-2'>
                Use the `use()` hook to apply aa theme context
              </p>
              <a
                className='font-bold text-blue-800'
                href='/use-example-context'
              >
                View
              </a>
            </div>
          </li>
          <li className='bg-blue-50 p-4 rounded shadow my-5'>
            <div>
              <h3 className='text-2xl font-bold'>Action Example 1</h3>
              <p className='my-2'>Use an action to submit a post form</p>
              <a className='font-bold text-blue-800' href='/action-example-1'>
                View
              </a>
            </div>
          </li>
          <li className='bg-blue-50 p-4 rounded shadow my-5'>
            <div>
              <h3 className='text-2xl font-bold'>Action Example 2</h3>
              <p className='my-2'>
                Use an action to add product to cart via form
              </p>
              <a className='font-bold text-blue-800' href='/action-example-2'>
                View
              </a>
            </div>
          </li>
          <li className='bg-blue-50 p-4 rounded shadow my-5'>
            <div>
              <h3 className='text-2xl font-bold'>useFormStatus Example</h3>
              <p className='my-2'>
                Use the useFormStatus hook to get status of post form submission
              </p>
              <a
                className='font-bold text-blue-800'
                href='/useformstatus-example'
              >
                View
              </a>
            </div>
          </li>
          <li className='bg-blue-50 p-4 rounded shadow my-5'>
            <div>
              <h3 className='text-2xl font-bold'>useFormState Example</h3>
              <p className='my-2'>
                Use the useFormState Hook to show specific messages for cart
                items
              </p>
              <a
                className='font-bold text-blue-800'
                href='/useformstate-example'
              >
                View
              </a>
            </div>
          </li>
          <li className='bg-blue-50 p-4 rounded shadow my-5'>
            <div>
              <h3 className='text-2xl font-bold'>useOptimisitc Example</h3>
              <p className='my-2'>
                Use the useOptimistic hook to show a message before the server
                responds
              </p>
              <a
                className='font-bold text-blue-800'
                href='/useoptimistic-example'
              >
                View
              </a>
            </div>
          </li>
          <li className='bg-blue-50 p-4 rounded shadow my-5'>
            <div>
              <h3 className='text-2xl font-bold'>useTransition Example</h3>
              <p className='my-2'>
                Use the useTransition hook to show a message before the server
                responds
              </p>
              <a
                className='font-bold text-blue-800'
                href='/usetransition-example'
              >
                View
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default HomePage;
