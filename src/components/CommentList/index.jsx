'use client'
import React from 'react';
import CommentItem from '../CommentItem';
import '@/components/CommentList/style.css';

const CommentList = ({ comments, onDeleteComment }) => {
  return (
    <section className="comment__list">
      {comments.length > 0 && (
        <>
          <h5>Feed</h5>
          <section className='container__list'>
            {comments.map((comment) => (
              <CommentItem key={comment.id} {...comment} onDeleteComment={onDeleteComment} />
            ))}
          </section>
        </>
      )}
    </section>
  );
};

export default CommentList;