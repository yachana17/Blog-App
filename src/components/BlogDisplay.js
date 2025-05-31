import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebaseconfig';

const BlogDisplay = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogRef = collection(db, 'Blogs');
    const q = query(blogRef, orderBy('createdat', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allBlogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(allBlogs);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {blogs.length === 0 ? (
        <p>No Blogs Found</p>
      ) : (
        blogs.map((blog) => (
          <div className="blog-cont" key={blog.id}>
            <div className="section1">
              <p className="title">{blog.title}</p>
              <p className="creator">posted by - {blog.createdby}</p>
            </div>
            <hr />
            <div className="section2">
              {blog.imgurl && (
                <img src={blog.imgurl} alt="Blog visual" style={{ maxWidth: '100%' }} />
              )}
              <p>{blog.description}</p>
            </div>
            <div className="section3">
              <p>posted on - {blog.createdat}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogDisplay;