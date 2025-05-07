import { React, useState } from 'react'

function SubmitEvent() {
    const [name, setName] = useState('')


    const handleFormSubmit = (e) => {
      e.preventDefault();
      alert(`Name submitted: ${name}`);
    }

    const handleChange = (e) => {
        const newData = e.target.value;
        setName(newData);
    }

  return (
    <form onSubmit={handleFormSubmit}>
        <input value={name} onChange={handleChange} />
        <button type='submit'>Submit</button>
    </form>
  );
}

export default SubmitEvent;
