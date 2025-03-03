'use client';
import { useFormStatus } from 'react-dom';

export default function FormSubmit() {
  // need to be in form element tag !
  const status = useFormStatus();

  if (status.pending) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
