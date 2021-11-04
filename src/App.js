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
            apiKey="e8557605f1b5ac9b18c913603d29a8c8"
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
