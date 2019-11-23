import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './imageList';


class App extends React.Component{
    state ={ images: [] };

 submitted=  term =>{
   axios.get('https://api.unsplash.com/search/photos',{
        params: {query:term},
        headers:{
        Authorization: 'Client-ID bee3e2d4594b497430749e4592a775f0cd9dc60cb4130865818b6420fbfdc2e1'
        }
    }).then(response => {
        this.setState({images:response.data.results});
       });
 
};
render(){
    return(
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit={this.submitted} />
        <ImageList image={this.state.images}/>
        </div>
            );
}
}
export default App;
