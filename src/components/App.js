import React, { Component } from "react";

import Unsplash from "../Api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

export default class App extends Component {
  state = { image: [] };

  onSubmitSearch = async term => {
    const response = await Unsplash.get(`/search/photos`, {
      params: { query: term }
    });

    this.setState({ image: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSubmitSearch} />
        <ImageList images={this.state.image} />
      </div>
    );
  }
}
