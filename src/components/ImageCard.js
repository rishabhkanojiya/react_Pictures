import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }
  //using the load cause the image takes time to load and the
  //output shown by clientHeight is 0
  componentDidMount() {
    this.imageRef.current.addEventListener("load", () => {
      const height = this.imageRef.current.clientHeight;

      const spans = Math.ceil(height / 10);

      this.setState({ spans });
    });
  }
  render() {
    const { description, urls } = this.props.img;
    return (
      // replace - by camelcase
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* this.imageRef is nothing but dom.qs.img */}
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}
