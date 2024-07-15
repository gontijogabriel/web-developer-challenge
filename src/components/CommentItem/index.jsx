'use client'
import React from 'react';
import '@/components/CommentItem/style.css';
import { IoCloseCircleOutline } from "react-icons/io5";

const CommentItem = ({ id, photo, name, message, onDeleteComment }) => {
  
  return (
    <div className="comment">
      <span onClick={() => onDeleteComment(id)}><IoCloseCircleOutline size={20} color='red' /></span>
      <div className="comment__data">
        <div className="data__img">
          <img src={photo} width={75} />
        </div>
        <div className="data__data">
          <p>{message}</p>
          <div className="data__name">
            <p className='send__by'>Enviado por</p>
            <p className='send__by__name'>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;