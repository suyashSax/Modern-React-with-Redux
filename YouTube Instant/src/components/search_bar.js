import React, {Component} from 'react'

class SearchBar extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {term : ''}
    }
    
    onInputChange(term){
        this.setState({term})
        this.props.onTermChange(term)
    }
    render()
    {
        return (
            <div className='search-bar'>
                <input 
                    value = {this.state.term}
                    onChange = {(event) => this.onInputChange(event.target.value)}></input>
            </div>
        );
    }
}

export default SearchBar