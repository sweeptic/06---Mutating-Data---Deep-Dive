'use server';

import { storePost, updatePostLikeStatus } from '@/lib/posts';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(prevState, formData) {
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

  if (!image && image.size === 0) {
    errors.push('image is required');
  }

  if (errors.length > 0) {
    return { errors };
  }

  storePost({
    imageUrl: '',
    title,
    content,
    userId: 1,
  });
  revalidatePath('/', 'layout');
  redirect('/feed');
}

export default async function togglePostLikeStatus(postId, formData) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath('/', 'layout');
}
