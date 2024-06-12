// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

/**
 * @title Upload
 * @dev This contract allows users to upload URLs and manage access permissions for other users.
 */
contract Upload {
    struct Access {
        address user;
        bool access; // true if access is granted, false otherwise
    }

    // Mapping from user address to an array of URLs
    mapping(address => string[]) private value;

    // Mapping from owner address to user address to access status
    mapping(address => mapping(address => bool)) private ownership;

    // Mapping from owner address to an array of Access structs
    mapping(address => Access[]) private accessList;

    // Mapping to track if a user was previously granted access
    mapping(address => mapping(address => bool)) private previousData;

    /**
     * @notice Adds a URL to a specified user's list.
     * @param _user The address of the user whose list the URL will be added to.
     * @param url The URL to be added.
     */
    function add(address _user, string memory url) external {
        value[_user].push(url);
    }

    /**
     * @notice Grants access to a specific user.
     * @param user The address of the user to be granted access.
     */
    function allow(address user) external {
        ownership[msg.sender][user] = true;

        if (previousData[msg.sender][user]) {
            for (uint256 i = 0; i < accessList[msg.sender].length; i++) {
                if (accessList[msg.sender][i].user == user) {
                    accessList[msg.sender][i].access = true;
                }
            }
        } else {
            accessList[msg.sender].push(Access(user, true));
            previousData[msg.sender][user] = true;
        }
    }

    /**
     * @notice Revokes access from a specific user.
     * @param user The address of the user to be revoked access.
     */
    function disallow(address user) external {
        ownership[msg.sender][user] = false;
        for (uint256 i = 0; i < accessList[msg.sender].length; i++) {
            if (accessList[msg.sender][i].user == user) {
                accessList[msg.sender][i].access = false;
            }
        }
    }

    /**
     * @notice Returns the list of URLs for a specific user.
     * @param _user The address of the user whose URLs are to be returned.
     * @return The list of URLs.
     */
    function display(address _user) external view returns (string[] memory) {
        require(_user == msg.sender || ownership[_user][msg.sender], "You don't have access");
        return value[_user];
    }

    /**
     * @notice Returns the list of users with access permissions for the calling user.
     * @return The list of Access structs.
     */
    function shareAccess() external view returns (Access[] memory) {
        return accessList[msg.sender];
    }
}
