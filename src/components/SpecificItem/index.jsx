import { Component } from "react";

export class SpecificItem extends Component {
  state = { lists: {} };
  componentDidMount() {
    this.getSpecificItem();
  }
  getSpecificItem = async () => {
    console.log(this.props);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
    const responseData = await response.json();
    const data = {
      id: responseData.id,
      title: responseData.title,
      imageUrl: responseData.image_url,
      avatarUrl: responseData.avatar_url,
      author: responseData.author,
      topic: responseData.topic
    };
    this.setState({ lists: data });
    console.log(data);
  };

  render() {
    const { lists } = this.state;
    const { id, topic, title, author, avatarUrl, imageUrl } = lists;
    return (
      <div>
        <p>{id}</p>
        <h1>{topic}</h1>
        <h1>{title}</h1>
        <h1>{author}</h1>
        <img src={avatarUrl} alt={title} />
        <img src={imageUrl} alt={title} />
      </div>
    );
  }
}
