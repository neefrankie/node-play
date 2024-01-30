import React, { useState } from 'react'
import { CheckOrRadio, TextControl } from '../form/Controls';

export function LoginPage() {
  return (
    <>
      <h4 className="text-center">Login</h4>
      <LoginForm/>
    </>
  )
}

type AuthParams = {
  email: string;
  password: string;
}

function LoginForm() {
  const [auth, setAuth] = useState<AuthParams>({
    email: '',
    password: '',
  });

  const [checked, setChecked] = useState(true);

  return (
    <form method="POST">
      <TextControl
        name='email'
        value={auth.email}
        type='email'
        label='Email'
        desc="We'll never share your email with anyone else"
        required={true}
        onChange={(e) => {
          setAuth({
            ...auth,
            email: e.target.value,
          })
        }}
      />
      <TextControl
        name='password'
        value={auth.password}
        type='password'
        label='Password'
        required={true}
        onChange={(e) => {
          setAuth({
            ...auth,
            password: e.target.value,
          })
        }}
      />

      <CheckOrRadio
        name='exampleCheck'
        type='checkbox'
        label='Check me out'
        checked={checked}
        onChange={setChecked}
      />
      <div className='d-grid'>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>    
  );
}