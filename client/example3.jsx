class SongContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: props.songs
        };

        this.loadSongsFromServer = this.loadSongsFromServer.bind(this);
        this.loadSongsFromServer();
    }

    loadSongsFromServer() {
        const xhr = new XMLHttpRequest();

        const setSongs = () => {
            const songResponse = JSON.parse(xhr.response);

            this.setState({ songs: songResponse });
        };

        xhr.onload = setSongs;
        xhr.open('GET', '/getSongs');
        xhr.send();
    }

    render() {
        if(this.state.songs.length === 0) {
            return (
                <div>
                    <h3>No Songs Yet!</h3>
                </div>
            );
        }

        const songList = this.state.songs.map((song) => {
            return(
                <div>
                    <h2>{song.artist} - <i>{song.title}</i></h2>
                </div>
            );
        });

        return (
            <div>
                <h1>My Favorite Songs</h1>
                {songList}
            </div>
        );
    }
}

const init = () => {
    ReactDOM.render(
        <SongContainer songs={[]} />,
        document.getElementById('app')
    );
}

window.onload = init;