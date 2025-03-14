'use client';

import { useFormState } from 'react-dom';
import FormSubmit from './form-submit';

// this is a form
export default function PostForm({ action }) {
  const [state, formAction] = useFormState(action, {});

  const content_err = state?.errors?.includes('content is required');
  const title_err = state?.errors?.includes('title is required');

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
          {title_err && <div>Title is required</div>}
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input type="file" accept="image/png, image/jpeg" id="image" name="image" />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
          {content_err && <div>Content is required</div>}
        </p>
        <div className="form-actions">
          <FormSubmit />
        </div>
      </form>
    </>
  );
}
