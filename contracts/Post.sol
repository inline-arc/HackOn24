// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NewsApp {
    // Mapping to store content
    mapping(address => string) public content;

    // Mint function that accepts content
    function mint(string memory _content) public {
        content[msg.sender] = _content;
    }
}
