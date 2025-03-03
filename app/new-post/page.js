import FormSubmit from '@/components/form-submit';
import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';
import { useFormStatus } from 'react-dom';

export default function NewPostPage() {
  async function createPost(formData) {
    'use server';
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    let errors = [];

    if (!title || title.trim().length === 0) {
      errors.push('title is required');
    }

    if (!content || content.trim().length === 0) {
      errors.push('content is required');
    }

    if (!image) {
      errors.push('image is required');
    }

    if (ErrorEvent.length > 0) {
    }

    storePost({
      imageUrl: '',
      title,
      content,
      userId: 1,
    });

    redirect('/feed');
  }

  const [state, formAction] = useFormStatus(createPost, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input type="file" accept="image/png, image/jpeg" id="image" name="image" />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
      </form>
    </>
  );
}
