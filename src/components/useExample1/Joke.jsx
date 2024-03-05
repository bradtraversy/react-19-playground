import { use, Suspense } from 'react';

const fetchData = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  return res.json();
};

const JokeItem = () => {
  const joke = use(fetchData());
  return (
    <div className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
      <h2 className='text-xl font-bold'>{joke.value}</h2>
    </div>
  );
};

const Joke = () => {
  return (
    <Suspense
      fallback={
        <h2 className='text-2xl text-center font-bold mt-5'>Loading...</h2>
      }
    >
      <title>Chuck Norris Jokes</title>
      <meta name='description' content='Chuck Norris jokes' />
      <meta name='keywords' content='chuck norris, jokes' />

      <JokeItem />
    </Suspense>
  );
};
export { Joke as UseExample1 };
