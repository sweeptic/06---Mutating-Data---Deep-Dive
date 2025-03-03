import { createPost } from '@/actions/posts';
import PostForm from '@/components/post-form';

export default function NewPostPage() {
  // this is server action

  return <PostForm action={createPost} />;
}
