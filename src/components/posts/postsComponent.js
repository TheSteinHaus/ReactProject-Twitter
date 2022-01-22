import React, { Component } from 'react';
import axios from 'axios';
import User from './posts';
import background from '../hat/background.jpg';

const api = axios.create({
  baseURL: `http://localhost:5000`
})

class PostsComponent extends Component {

    constructor(props) {
      super(props);
      this.state = {
        posts: [],
      }
    }

    componentDidMount() {
      this.getPosts()
    }

    getPosts = async () => {
      let data
      console.log(this.props.searchPosts)
      window.location.pathname != '/explore' ? data = await api.get('/post').then(({data}) => data) : data = this.props.searchPosts
      this.setState({ posts: data })
    }

    likePost = async (id, val) => {
      let data = await api.patch(`/post/${id}`, { likes: !val })
      this.getPosts()
    }

    render () { return (
        <div>
         { this.state.posts.map((post) =>  
            <User key={post.id}
                date={post.date} 
                text={post.text}
                media={post.media === true ? background : null }
                img_true={post.media}
                author={post.author}
                // class_name={ JSON.parse(localStorage.getItem('posts'))[post.id].likes ? "images img3 svg_active" : "images img3 " }
                class_name={post.likes ? "images img3 svg_active" : "images img3"}
                // post_class_name={ (this.props.post_state === 3 && JSON.parse(localStorage.getItem('posts'))[post.id].likes === false) || (this.props.post_state === 2 && post.media === false)  ? "post likes_on" : "post" }
                post_class_name={ (this.props.post_state === 3 && post.likes === false) || (this.props.post_state === 2 && post.media === false) ? "post likes_on" : "post" }
                on_click={ () => this.likePost(post.id, post.likes) }
            />) }
        </div>
        )}
}

export default PostsComponent;