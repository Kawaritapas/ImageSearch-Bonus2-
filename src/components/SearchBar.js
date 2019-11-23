import React from 'react';

class SearchBar extends React.Component{
state={term:''};

onSubmitInput=(event)=> {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
};
onChangeEvent=(event)=>{
 return this.setState({term:event.target.value});
};

render(){
return(
    <div className="ui segment" >
        <form onSubmit={this.onSubmitInput} className="ui form" >
        <div className="field">
         <label>Image</label>
         <input type='text' placeholder='Search image' value={this.state.term} onChange={this.onChangeEvent}/>
        </div>
        </form>
    </div>
);
}
}
export default SearchBar;