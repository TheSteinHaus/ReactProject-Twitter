import React, { Component } from 'react';
import User from './posts';
import posts from './posts.json';
import background from '../hat/background.jpg';


class PostsComponent extends Component {
    state = {
        postsArr: JSON.parse(localStorage.getItem('posts')) || posts
      };
  
    likePost = id => {
        const tmp = [...this.state.postsArr]
        tmp[id].likes = !tmp[id].likes
  
        this.setState ({
          postsArr: tmp
        })
  
        localStorage.setItem('posts', JSON.stringify(tmp))
      }

    render () { return (
        <div>
        { posts.map((post, id) => 
            <User 
                date={post.date} 
                text={post.text}
                media={post.media === true ? background : null }
                img_true={post.media}
                author={post.author}
                class_name={ JSON.parse(localStorage.getItem('posts'))[id].likes ? "images img3 svg_active" : "images img3 " }
                post_class_name={ (this.props.post_state === 3 && JSON.parse(localStorage.getItem('posts'))[id].likes === false) || (this.props.post_state === 2 && post.media === false)  ? "post likes_on" : "post" }
                on_click={ () => this.likePost(id) }
            />) }
        </div>
        )}
}

export default PostsComponent;