import React, { useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../firebaseconfig';

const AddBlog = () => {
  const [createdby, setCreatedby] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [createdat] = useState(Timestamp.now().toDate().toString());

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "Blogs"), {
      title,
      createdby,
      createdat,
      description,
      imgurl
    }).then(() => {
      alert("Success!!");
      setTitle("");
      setDescription("");
      setImgurl("");
      setCreatedby("");
    }).catch(err => alert(err.message));
  };

  return (
    <div className='addblog-form'>
      <p>Add a new blog</p>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name='username' placeholder='Enter your name' type='text' onChange={(e) => setCreatedby(e.target.value)} value={createdby} />
        <br />
        <label>Blog Title:</label>
        <input name='title' placeholder='Enter Blog Title' type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
        <br />
        <label>Blog Description</label>
        <textarea onChange={(e) => setDescription(e.target.value)} placeholder='Write your Article' value={description} />
        <br />
        <label>Paste Image Link</label>
        <input name='image' placeholder='Paste image url' type='text' onChange={(e) => setImgurl(e.target.value)} value={imgurl} />
        <div className='btn-container'>
          <button type='submit'>Submit</button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default AddBlog;