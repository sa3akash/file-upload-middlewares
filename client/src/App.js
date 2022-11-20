import { useState } from 'react';
import './App.css';
import {sendDataToServer} from "./config";

function App() {

  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)


  const handleClick = (e) => {
    e.preventDefault()

    const CallToServer = async (data) => {
      try{
        const res = await sendDataToServer(data)
        console.log(res.data);
      }catch(err){
        console.log(err)
      }
    }

    if(file !== null){
      const formData = new FormData();
      formData.append("image", file)
      formData.append("title", title)
      CallToServer(formData)
    }
  }
  // encType="multipart/form-data"
  return (
    <div className="App">
      <form >
        <input type="text" name='title' placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
        <input type="file" name='file' onChange={(e)=>setFile(e.target.files[0])}/>
        <input type="submit" onClick={handleClick}/>
      </form>
    </div>
  );
}

export default App;
