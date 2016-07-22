import React from 'react';
import Photo from './Photo';

// Import comments
import Comments from './Comments';

const Single = React.createClass({

  render() {
    const postId = this.props.params.postId;
    // Index of the post
    const i = this.props.posts.findIndex((post) => post.code === postId);
    console.log(i);
    // get us the post
    const post = this.props.posts[i];
    console.log(post);
    const postComments = this.props.comments[postId] || []; // important because otherwise there will be an error if the comments array is empty (so you pass it an empty array in this case)

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props}/>
        <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }

});

export default Single;