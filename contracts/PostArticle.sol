// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NewsApp {
    struct Post {
        string title;
        string content;
        address author;
        uint timestamp;
    }

    Post[] public posts;

    event NewPost(uint postId, string title, string content, address author, uint timestamp);

    function createPost(string memory _title, string memory _content) public {
        posts.push(Post({
            title: _title,
            content: _content,
            author: msg.sender,
            timestamp: block.timestamp
        }));
        emit NewPost(posts.length - 1, _title, _content, msg.sender, block.timestamp);
    }

    function getPost(uint _postId) public view returns (string memory, string memory, address, uint) {
        require(_postId < posts.length, "Post does not exist.");
        Post memory post = posts[_postId];
        return (post.title, post.content, post.author, post.timestamp);
    }

    function getPostsCount() public view returns (uint) {
        return posts.length;
    }
}
