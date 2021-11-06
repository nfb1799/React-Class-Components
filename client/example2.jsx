//React event handlers get camelCase
class HelloUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          username: props.username,  
        };

        // For this function, make 'this' equal the entire class
        this.handleNameChange = this.handleNameChange.bind(this); 
    }

    handleNameChange(e) {
        this.setState({ username: e.target.value });
    }

    render() {
        return (
            <div>
                Hello {this.state.username}
                <p>Change Name:</p>
                <input type="text" value={this.state.username} onChange={this.handleNameChange} />
            </div>
        );
    };
}

const init = () => {
    ReactDOM.render(
        <HelloUser username='Nik' />,
        document.getElementById('app')
    );
};

window.onload = init;