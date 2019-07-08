import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const PostList = styled.ul `
    flex: 0 1 25%;
    list-style-type: none;
    text-align: left;
    margin: 0;

    li{
        margin: 40px 0;
        padding: 4px 0;
        width: 100%
    }
`;

class listLayout extends Component {
    state = {
        posts: [],
    };

    componentDidMount(){
        const { posts } = this.props;
        
        this.setState({
            posts: posts.default
        });
    };

    render() {
        const { posts } = this.state
        return (
        
            <PostList>
                {posts.map((post, index)=>{
                    return( 
                    <li key={index}>
                        <Link to={`/post/${post.id}`}>{post.post_title}</Link>
                    </li>
                    )
                })
                };
            </PostList>
        );
    };
};

export default listLayout;

listLayout.propTypes = {
    posts: PropTypes.object
};