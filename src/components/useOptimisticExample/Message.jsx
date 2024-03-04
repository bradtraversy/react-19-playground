import { useOptimistic, useState, useRef } from 'react';

function Thread({ messages, sendMessage }) {
  // Create a reference to the form
  const formRef = useRef();

  // This function is called when the form is submitted
  async function formAction(formData) {
    addOptimisticMessage(formData.get('message'));

    // Clear the form
    formRef.current.reset();

    await sendMessage(formData);
  }

  // The useOptimistic hook is used to add an optimistic message to the list of messages
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <div>
      <form
        action={formAction}
        ref={formRef}
        className='flex items-center mb-5'
      >
        <input
          type='text'
          name='message'
          placeholder='Hello!'
          className='border border-gray-300 rounded py-1 px-2 mr-2 focus:outline-none focus:border-blue-500'
        />
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Send
        </button>
      </form>
      {optimisticMessages.map((message, index) => (
        <div key={index} className='flex items-center'>
          <span>{message.text}</span>
          {message.sending && (
            <small className='ml-1 text-gray-500'>(Sending...)</small>
          )}
        </div>
      ))}
    </div>
  );
}

const deliverMessage = async (message) => {
  // Simulate a delay
  await new Promise((res) => setTimeout(res, 1000));
  return message;
};

const Message = () => {
  const [messages, setMessages] = useState([]);

  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get('message'));

    setMessages((messages) => [...messages, { text: sentMessage }]);
  }

  return <Thread messages={messages} sendMessage={sendMessage} />;
};

export { Message as UseOptimisticExample };
