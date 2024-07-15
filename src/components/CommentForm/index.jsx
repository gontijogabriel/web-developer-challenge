'use client'
import React, { useState, useRef, useEffect } from 'react';
import '../CommentForm/style.css'
import { CiImageOn, CiTrash } from "react-icons/ci";

const CommentForm = ({ onAddComment }) => {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setIsFormValid(photo && name && message);
  }, [photo, name, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment({ photo, name, message });
    setPhoto('');
    setName('');
    setMessage('');
  };

  const handleDiscard = () => {
    setPhoto('');
    setName('');
    setMessage('');
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='section__form'>
      <div
        className="container__image"
        onClick={handleImageClick}
        style={{ backgroundImage: `url(${photo})` }}
      >
        {!photo && <CiImageOn size={30} />}
        {photo && <span><CiTrash size={25} color='red' /></span>}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />

      <div className="container__inputs">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />
      </div>

      <div className="container__btns">
        <button type="button" className='btns__button' onClick={handleDiscard}>Descartar</button>
        <button
          type="submit"
          className={`btns__button ${isFormValid ? 'ready' : ''}`}
          disabled={!isFormValid}
        >
          Publicar
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
