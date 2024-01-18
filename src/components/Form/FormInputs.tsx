import React, {
  useState,
  type ChangeEvent,
  type HTMLInputTypeAttribute,
} from 'react';
import './FormInputs.css';

type Props = {
  placeholder: string;
  name: HTMLInputTypeAttribute;
  label: string;
  id: number;
  value: string;
  errorMessage: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormInputs: React.FC<Props> = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };
  
  return (
    <div className='form-inputs'>
      <label className='form-label' htmlFor='name'>{label}</label>
      <input
        className='form-input'
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className='form-span'>{errorMessage}</span>
    </div>
  );
};

export default FormInputs;
