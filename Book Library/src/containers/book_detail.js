import React, {Component} from 'react'
import {connect} from 'react-redux'

import {bindActionCreators} from 'redux'

class BookDetail extends Component{
    render(){
        
        if (!this.props.selectedBook){
            return (<div>Select a Book to get Started</div>)
        }
        return(
            <div>
                <h3>Details For:</h3>
                <div>{this.props.selectedBook.title}</div>
                <div>{this.props.selectedBook.pages}</div>
            </div>
        )
    } 
}

function mapStateToProps(state){
    return {
        selectedBook: state.activeBook
    }
}

////Return to props of book_list
//function mapDispatchToProps(dispatch){ 
//    return bindActionCreators({selectBook: selectBook}, dispatch)
//    //Dispatch result of action creator (selectBook) to reducers
//}

export default connect(mapStateToProps)(BookDetail)