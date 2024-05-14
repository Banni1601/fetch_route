import { Component } from "react";
import { DataItems } from "/src/components/DataItems/index";
export class Home extends Component {
  state = { list: [] };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const response = await fetch("https://apis.ccbp.in/blogs");
    const responseData = await response.json();
    const Data = responseData.map((i) => ({
      id: i.id,
      title: i.title,
      imageUrl: i.image_url,
      avatarUrl: i.avatar_url,
      author: i.author,
      topic: i.topic
    }));
    this.setState({ list: Data });
  };
  render() {
    const { list } = this.state;
    return (
      <div>
        <h1>Home</h1>
        {list.map((i) => (
          <DataItems key={i.id} data={i} />
        ))}
      </div>
    );
  }
}
