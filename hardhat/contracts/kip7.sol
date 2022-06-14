// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@klaytn/contracts/KIP/token/KIP7/KIP7.sol";
import "hardhat/console.sol";

contract DSGToken is KIP7 {
    uint256 postId = 0;
    uint256 commentId = 0;

    struct Post {
        string postText;
        string[] postImagesUrl;
        uint256 upVoting;
        uint256 downVoting;
        uint256 createDate;
    }

    struct Comment {
        address writer;
        string postText;
        uint256 upVoting;
        uint256 downVoting;
        uint256 createDate;
    }

    // 포스트 매핑
    mapping(uint256 => Post) public posts;
    // 작성한 포스트 매핑
    mapping(address => uint256[]) public ownPosts;

    // 댓글 매핑 - commentId -> postId -> comment
    mapping(uint256 => mapping(uint256 => Comment)) public comments;
    mapping(address => uint256[]) public ownComments;

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _amount
    ) KIP7(_name, _symbol) {
        _mint(msg.sender, _amount * 10 ** uint256(decimals())); // ex) 1 Token = 1 * 10^18;
        console.log(
            "minting - name:'%s', symbol:'%s', amount:'%s'",
            _name,
            _symbol,
            _amount
        );
    }

    // 환전
    function exchange() public payable {
        require(msg.value > 0);
        _mint(msg.sender, msg.value * 10);
    }

    // 글조회
    function getPost(uint _postId) public view returns(Post memory) {
        return posts[_postId];
    }
    // 댓글조회
    function getComment(uint _postId, uint _commentId) public view returns(Comment memory){
        return comments[_commentId][_postId];
    }
    
    // 글쓰기
    function writePost(string memory _text, string[] memory _imageUrls) public {
        posts[postId] = Post({
            postText: _text,
            postImagesUrl: _imageUrls,
            upVoting: 0,
            downVoting: 0,
            createDate: block.timestamp
        });
        ownPosts[msg.sender].push(postId);

        if (_imageUrls.length > 0) {
            _burn(msg.sender, 5);
        } else {
            _burn(msg.sender, 3);
        }
        postId++;
    }

    // 댓글 작성
    function writeComment(uint256 _postId, string memory _text) public {
        comments[commentId][_postId] = Comment({
            writer: msg.sender,
            postText: _text,
            upVoting: 0,
            downVoting: 0,
            createDate: block.timestamp
        });
        ownComments[msg.sender].push(commentId);

        _burn(msg.sender, 1);
        commentId++;
    }

    // postUpVoting
    function postUpVoting(
        uint256 _postId,
        address _writer,
        uint256 _amount
    ) public {
        transfer(_writer, _amount);
        posts[_postId].upVoting += _amount;
    }

    // postDownVoting
    function postDownVoting(
        uint256 _postId,
        address _writer,
        uint256 _amount
    ) public {
        transfer(_writer, _amount);
        posts[_postId].downVoting += _amount;
    }

    // commentUpVoting
    function commentUpVoting(
        uint256 _commentId,
        uint256 _postId,
        address _writer,
        uint256 _amount
    ) public {
        transfer(_writer, _amount);
        comments[_commentId][_postId].upVoting += _amount;
    }

    // commentDownVoting
    function commentDownVoting(
        uint256 _commentId,
        uint256 _postId,
        address _writer,
        uint256 _amount
    ) public {
        transfer(_writer, _amount);
        comments[_commentId][_postId].downVoting += _amount;
    }
}