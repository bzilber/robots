import React, {Component} from 'react'
import CardList from './CardList'
import {robots} from './robots'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './App.css';

class App extends Component {
  
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchField: '',
        }        
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }
    
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>Robots</h1>
                <SearchBox searchChange = {this.onSearchChange} /> {/*use 'this.' cause we're using App object from its class and not a func.*/}
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;