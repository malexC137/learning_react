

function VideoText({ color, title, views, published, artist, deleteVideo }) {
    // DESTRUCTURING:
    // const {color, title, views, published, artist} = props;
    // In aternativa posso incollare le parentesi graffe ed il contenuto ed incollarlo
    // al posto delle props accanto alla funzione
    // Style CSS
    const myStyle = {
        display: "flex",
        alignItems: "center",
        backgroundColor: color
    }
    return (
        <div style={{ display: "flex" }}>
            <div style={myStyle}>
                <h1>Image</h1>
                <button onClick={deleteVideo}>Cancella video</button>
            </div>
            <div>
                <h1>{title}</h1>
                <h4>{views} - {published}</h4>
                <h2>{artist}</h2>
            </div>
        </div>
    )
}

export default VideoText;