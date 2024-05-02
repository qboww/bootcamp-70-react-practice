import { useState } from 'react';
import { toast } from 'react-toastify';

export const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const handleChange = event => {
    setText(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (!text) {
      return toast.info('Enter some text', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
    onSubmit(text);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button>Create to do</button>
    </form>
  );
};
