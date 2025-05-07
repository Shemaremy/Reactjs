import { React, useState } from 'react'

function ChangeEvent() {

  const [inputData, setInputData] = useState('')


    const ShowChange = (word) => {
      alert(`New word ${word}`)
    }

    const handleChange = (e) => {
      const newData = e.target.value;
      setInputData(newData);
      ShowChange(newData)
    };

    
  return (
    <div>
        <input value={inputData} onChange={handleChange} />
    </div>
  );
}

export default ChangeEvent;
