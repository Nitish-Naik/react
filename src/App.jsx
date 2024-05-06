import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);

  const getImages = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <button onClick={getImages} className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Images
      </button>
      <div className='gallery mt-10'>
        {images.map((element, i) => (
          <div className='image-container' key={i}>
            <img src={element.download_url} alt={`Image ${i}`} />
            <div className='author'>{element.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
