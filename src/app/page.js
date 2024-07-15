'use client'
import React, { useState } from 'react';

import CommentForm from '@/components/CommentForm';
import CommentList from '@/components/CommentList';

export default function Home() {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, { ...comment, id: Date.now() }]);
  };

  const deleteComment = (idToDelete) => {
    setComments(comments.filter((comment) => comment.id !== idToDelete));
  };

  return (
    <div>
      <CommentForm onAddComment={addComment} />
      <CommentList comments={comments} onDeleteComment={deleteComment} />
    </div>
  );
}