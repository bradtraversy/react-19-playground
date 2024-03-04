import { useEffect, useState } from 'react';

const JokeItem = ({ joke }) => {
  return (
    <div className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
      <h2 className='text-xl font-bold'>{joke.value}</h2>
    </div>
  );
};

const Joke = () => {
  const [joke, setJoke] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await res.json();
        setJoke(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJoke();
  }, []);

  if (loading) {
    return <h2 className='text-2xl text-center font-bold mt-5'>Loading...</h2>;
  }

  return <JokeItem joke={joke} />;
};
export default Joke;
