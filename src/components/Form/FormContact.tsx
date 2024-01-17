import React, { useState, useRef } from 'react';
import './FormContact.css';
import FormInputs from './FormInputs';
import emailjs from '@emailjs/browser';

interface FormValues {
  username: string;
  email: string;
  company: string;
  address: string;
  phone: string;
  textareaValue: string;
  [key: string]: string;
}

const FormContact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [values, setValues] = useState<FormValues>({
    username: '',
    email: '',
    company: '',
    address: '',
    phone: '',
    textareaValue: '',
  });

  const clearForm = () => {
    setValues({
      username: '',
      email: '',
      company: '',
      address: '',
      phone: '',
      textareaValue: '',
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_99lpnyc',
          'template_esmkt58',
          form.current,
          '-s7vlTiTNjFo6Rcnk',
        )
        .then(
          (result) => {
            clearForm();
            setIsMessageSent(true);
            setTimeout(() => {
              setIsMessageSent(false);
            }, 3000);
          },
          (error) => {},
        );
    }
  };

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Name',
      errorMessage: 'Please enter your name',
      label: '',
      pattern: '^[A-Za-z0-9]{1,20}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'E-mail',
      errorMessage: 'Please enter your e-mail',
      label: '',
      required: true,
    },
    {
      id: 3,
      name: 'company',
      type: 'text',
      placeholder: 'Company name',
      errorMessage: 'Please enter your company name',
      label: '',
      required: true,
    },
    // {
    //   id: 4,
    //   name: 'address',
    //   type: 'text',
    //   placeholder: 'Adres WWW',
    //   errorMessage: 'Podaj adres swoje strony WWW',
    //   label: '',
    // },
    // {
    //   id: 5,
    //   name: 'phone',
    //   type: 'number',
    //   placeholder: 'Telefon',
    //   errorMessage: 'Podaj swój telefon',
    //   label: '',
    //   pattern: '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
    //   required: true,
    // },
  ];

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      {isMessageSent ? (
        <p className='sent-mail'>Wiadomość została wysłana. Odezwę się!</p>
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className='form-container'
          action=''
          method='POST'
        >
          <div className='form-box'>
            <div className='inputs-box'>
              <h4>Send a message to our customer service</h4>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='3em'
                height='3em'
                viewBox='0 0 20 20'
              >
                <g fill='white'>
                  <path d='M17 4H3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 4M3.5 15V5h13v10z' />
                  <path d='m17.324 4.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 3 4h14a.5.5 0 0 1 .324.88M15.642 5H4.345l5.612 4.841z' />
                </g>
              </svg>
              {inputs.map((input) => (
                <FormInputs
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </div>
            <div className='texts-box'>
              <textarea
                className='text-area'
                name='textareaValue'
                id=''
                placeholder='If you have questions? Write here'
                value={values.textareaValue}
                onChange={handleTextAreaChange}
              ></textarea>
              <button className='form-button' type='submit'>
                Send
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
export default FormContact;
