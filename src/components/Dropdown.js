import React,{useState} from 'react'

export const Dropdown = (props) => {

    let [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

  return (
  <>
    <div className="">
      <select value={selectedOption} onChange={handleSelectChange } className='outline-none'>
        <option value="" className='text-xs'>{props.size}</option>
        <option value="option1">{props.size1}</option>
        <option value="option2">{props.size2}</option>
        <option value="option3">{props.size3}</option>
        <option value="option4">{props.size4}</option>
      </select>
      {/* {selectedOption && <p>You selected: {selectedOption}</p>} */}
    </div>

  
  </>
  )
}
