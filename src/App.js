import { useState } from 'react';
import './App.css';
import SimpleFileUpload from 'react-simple-file-upload';

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedImagesFromMultiple, setUploadedImagesFromMultiple] = useState([]);


  function handleUpload(url) {
    setUploadedImages([
      ...uploadedImages,url]);
  }

  function handleMultipleUpload(files) {
    setUploadedImagesFromMultiple([...files]);
  }

  function handleOnDrop(url) {
    console.log("drop started")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple File Upload Demo - Single Uploader</h1>
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
            preview={false}
          />
        </div>

        <ul className="image-grid">
          {uploadedImages.length ? (
            uploadedImages.map((image) => (
              <li key={image}>
                <img src={image} alt="Images from single file uploader" />
              </li>
            ))
          ) : (
            <p>Your uploaded images will appear here!</p>
          )}
        </ul>
      </main>

      <header className="App-header">
        <h1>Simple File Upload Demo - Multiple Uploader</h1>
      </header>
      <main>
        <div className="upload-wrapper">
          <SimpleFileUpload
            apiKey="e8557605f1b5ac9b18c913603d29a8c8"
            onSuccess={handleMultipleUpload}
            onDrop={handleOnDrop}
            preview={false}
            multiple={true}
            maxFiles= {5}
            removeLinks={true}
            buttonClass="upload-button"
          />
        </div>

        <ul className="image-grid" id="image-grid-multiple">
          {uploadedImagesFromMultiple.length ? (
            uploadedImagesFromMultiple.map((file) => (
              <li key={file}>
                <img src={file.cdnUrl} alt="Uploaded via multi-file uploader" />
              </li>
            ))
          ) : (
            <p>Your uploaded images from the multiple file uploader will appear here!</p>
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;
