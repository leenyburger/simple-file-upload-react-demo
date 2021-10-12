import { useState } from 'react';
import './App.css';
import SimpleFileUpload from 'react-simple-file-upload';

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);

  function handleUpload(url) {
    setUploadedImages([...uploadedImages, url]);
  }

  function handleOnDrop(url) {
    console.log("drop started")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple File Upload Demo</h1>
        <a className="btn" href="https://simplefileupload.com">
          Try it now!
        </a>
      </header>
      <main>
        <div className="upload-wrapper">
          <SimpleFileUpload
            apiKey="2e7792d9a1cfd35dbef192d26f5ed176"
            onSuccess={handleUpload}
            onDrop={handleOnDrop}
            preview="false"
          />
        </div>

        <ul className="image-grid">
          {uploadedImages.length ? (
            uploadedImages.map((image) => (
              <li>
                <img src={image} alt="Fun images" />
              </li>
            ))
          ) : (
            <p>Your uploaded images will appear here!</p>
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;
