import VideoText from './VideoText';
// Importare per poter utilizzare lo state:
import { useState } from 'react';
// Importare per poter impostare l'id:
import { v4 as uuidv4 } from 'uuid';
// Importare stili CSS
import style from './style/App.module.css';

function App() {
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [views, setViews] = useState("");
  const [published, setPublished] = useState("");
  const [artist, setArtist] = useState("");
  const [videoList, setVideoList] = useState([]);

  const handleColor = (e) => {
    setColor(e.target.value)
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleViews = (e) => {
    setViews(e.target.value)
  }

  const handlePublished = (e) => {
    setPublished(e.target.value)
  }

  const handleArtist = (e) => {
    setArtist(e.target.value)
  }

  const createVideoHandler = () => {
    setVideoList([...videoList, { color: color, title: title, views: views, published: published, artist: artist, id: uuidv4() }]);
    setColor("");
    setTitle("");
    setViews("");
    setPublished("");
    setArtist("");
  }

  const deleteVideo = (id) => {
    setVideoList(videoList.filter(function (video) {
      return video.id !== id
    }))
  }

  // Contatore numeri
  const [number, setNumber] = useState(0);
  // Input testo
  const [text, setText] = useState("");
  const [textList, setTextList] = useState([]);

  const changeNumber = () => {
    setNumber(number + 1)
  }

  const onChangeHandler = (e) => {
    setText(e.target.value)
  }

  const addTextHandler = () => {
    setTextList([...textList, text]);
    // 1 ...textList copia l'array attuale
    // 2 text aggiunge text a textList

    setText("")
    // Azzera il testo all'interno dell'input
  }

  return (
    <div className="App">
      <h1 className={style.title}>Fake Youtube</h1>
      {/* Video */}
      <h3>Inserisci colore</h3>
      <input type="text" onChange={handleColor} value={color} />
      <h3>Inserisci titolo</h3>
      <input type="text" onChange={handleTitle} value={title} />
      <h3>Inserisci Views</h3>
      <input type="text" onChange={handleViews} value={views} />
      <h3>Inserisci quando è stato pubblicato</h3>
      <input type="text" onChange={handlePublished} value={published} />
      <h3>Inserisci artista</h3>
      <input type="text" onChange={handleArtist} value={artist} />
      <button onClick={createVideoHandler}>Inserisci un nuovo video</button>
      {videoList.map(function (video) {
        return <VideoText
          key={video.id}
          deleteVideo={() => deleteVideo(video.id)}
          color={video.color}
          title={video.title}
          views={video.views}
          published={video.published}
          artist={video.artist}
        />
      })}
      <hr />
      {/* Bottone incrementa numeri */}
      <div>
        <button onClick={changeNumber}>Aumenta numeri</button>
        <h3>Hai cliccato {number} volte</h3>
      </div>
      <hr />
      {/* Input testo */}
      <div>
        <input type="text" onChange={onChangeHandler} value={text} />
        <button onClick={addTextHandler}>Aggiungi testo</button> <br />
        <h1>Hai digitato {text}</h1>
        <ul>
          {textList.map(function (text) {
            return <li>{text}</li>
          })}
        </ul>
      </div>

    </div>
  );
}

export default App;
