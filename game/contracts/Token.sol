// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC721, Ownable {

    struct Animal {
        uint8 domage;
        uint8 magie;
        uint256 lastMeal;
        uint256 endurance;

    }

    uint256 nextID = 0;

    mapping(uint256 => Animal) private _tokenDetails;

    constructor(string memory name, string memory symbol)ERC721(name, symbol){

    }


/// @dev Cette fonction permet la création d'un nouveau jeton (un nouvel animal)
function create_jeton(uint8 domage, uint8 magie, uint8 endurance)public onlyOwner{
    _safeMint(msg.sender, nextID);
    _tokenDetails[nextID] = Animal(domage, magie,block.timestamp,endurance);
    nextID++;
}

/// @dev Cette fonction permet de gérer le repas de notre animal par exemple si l'animal meure on ne peut plus le nourrir
function repas (uint256 tokenId)public{
    Animal storage animal = _tokenDetails[nextID];
    require(animal.lastMeal + animal.endurance > block.timestamp);
    animal.lastMeal = block.timestamp;
}

}


