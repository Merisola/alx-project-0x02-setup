import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Meriye", content: "Welcome to your blog!" },
  ]);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl mb-4 font-bold">
        Welcome Home Meriye!
      </h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          Add New Post
        </button>
      </div>

      {/* Render each post using the Card component */}
      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      {/* Conditionally render the PostModal */}
      {modalOpen && (
        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export default HomePage;
