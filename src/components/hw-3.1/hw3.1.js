import React, {Component} from 'react';
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";


class Hw31 extends Component {
    state = {
        searchQuery: '',

    };
   handleFormSubmit=(searchQuery)=>{
       this.setState({searchQuery})
   }
    render() {
       return(
           <div>
               <Searchbar onSubmit={this.handleFormSubmit} />
               <ImageGallery searchQuery={this.state.searchQuery} />
           </div>
       )
    }
}

export default Hw31;