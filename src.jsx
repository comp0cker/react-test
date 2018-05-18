const navLinks = ['Home', 'About', 'Contact'];
const renderNavLinks = navLinks.map(link => <li><a href=''>{link}</a></li>);

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {links: props.links}
    }
    render() {
        return (
                <ul class="nav">
                    {this.props.links}
                </ul>
        );
    }
}

class FavoritePoke extends React.Component {
    constructor (props) {
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit() {
        alert(this.state.value);
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Favorite Poke: 
                    <input value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

function ListPokes(props) {
    const pokes = props.pokes;
    const listThem = pokes.map((poke) => <li key={poke}>{poke}</li>);
    return <ul>{listThem}</ul>;
}
                               
const pokes = ['Lucario', 'Luxray', 'Charsard'];
                               
function App() {
    return (
        <div>
            <NavBar links={renderNavLinks}/>
            <ListPokes pokes={pokes} />
            <FavoritePoke />
        </div>
    );
}                             

ReactDOM.render(
  <App />,
  document.getElementById('root')
);