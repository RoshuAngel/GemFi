// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/*
GemFi
*/

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

interface IRandomNumberGenerator {
    function getRandomNumber() external view returns (uint256);
}

struct Epoch {
    uint128 randomness;
    uint64 revealBlock;
    bool commited;
    bool revealed;
}

struct gemProperty {
    uint256 level;
    uint256 balance;
    address owner;
}

contract test is ERC721Enumerable {
    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private supply;
    address public owner;
    address public RANDOM = 0x54F3f10f95363c8CBa51c7f6f6b70FaFF9e79Eb4;

    //Once gems are upgraded, low lvl gems will be transfered to dead address
    uint256 public activeSupply;
    uint256 public highestGemLevel;
    uint256 public gamePot;
    uint256 public collectedFee;
    uint256 public lastDraw = block.timestamp;
    uint256 public lastWinner;
    uint256 public winnerPickDuration = 24;

    uint256[] public highestLevelGems;
    mapping(uint256 => uint256) private highestLevelGemsIndex;
    mapping(uint256 => mapping(uint256 => bool)) private gemIsHighestLevel;

    uint256 private mintChance;

    mapping(uint256 => gemProperty) private gem;

    uint256 public epochIndex = 1;
    mapping(uint256 => Epoch) private epochs;
    uint256 private randomIndexEpoch;

    event GemUpgraded(bool trueOrFalse, uint256 gemId);
    event WinnerPicked(uint256 gemId);

    constructor() ERC721("test", "ttt") {
        owner = msg.sender;
        resolveEpochIfNeeded();
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not a contract owner");
        _;
    }

    //** Read Functions **

    function tokenURI(uint256 _gemId)
        public
        view
        override
        returns (string memory)
    {
        require(
            _exists(_gemId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        string memory output;
        string[8] memory item;

        item[
            0
        ] = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 600 800" width="300" height="400">';

        item[
            1
        ] = '<defs><linearGradient id = "gradient" x1 = "0%" y1 = "0%" x2 = "100%" y2 = "80%" ><stop offset="0%" style="stop-color:rgb(0,38,249);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(10,36,114);stop-opacity:0.7" /></linearGradient ><linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="80%"><stop offset="0%" style="stop-color:rgb(143,217,248);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(10,36,114);stop-opacity:0.9" /></linearGradient><linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:rgb(146, 165, 247);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(0,38,249);stop-opacity:0.5" /></linearGradient></defs >';

        item[
            2
        ] = '<ellipse cx="150" cy="200" rx="150" ry="200" style="fill:rgb(0, 5, 107);opacity:1" /> <ellipse cx="150" cy="200" rx="150" ry="200" style="fill:url(#gradient);opacity:0.5;stroke:white;stroke-width:2;stroke-opacity:1" />';

        item[
            3
        ] = '<polygon points="3,170 80,150 17,110 52,50 60,100 " style="fill:rgb(0,38,249);opacity:0.5" /><polygon points="52,350 80,300 7,250 60,200 3,170" style="fill:rgb(0,38,249);opacity:0.5" /><polygon points="297,170 220,150 283,110 248,50 240,100 " style="fill:rgb(0,38,249);opacity:0.5" /><polygon points="248,350 220,300 293,250 240,200 297,170" style="fill:rgb(0,38,249);opacity:0.5" /><polygon points="52,50 100,15 150,50 100,70" style="fill:rgb(0, 5, 107);opacity:1" /><polygon points="150,50 200,15 248,50 200,70" style="fill:rgb(0, 5, 107);opacity:1" /><polygon points="52,350 100,385 150,350 100,330" style="fill:rgb(0,28,85);opacity:1" /><polygon points="150,350 200,385 248,350 200,330" style="fill:rgb(0,28,85);opacity:1" /><polygon points="80,25 90,100 150,0 210,100 220,25" style="fill:rgb(0,38,249);opacity:0.7" /><polygon points="80,375 90,300 150,400 210,300 220,375" style="fill:rgb(0,38,249);opacity:0.5" /><polygon points="150,50 60,100 60,300 150,350 240,300 240,100" style="fill:rgb(0,38,249);opacity:1;stroke:white;stroke-width:2;stroke-opacity:0.5" />';

        item[
            4
        ] = '<polygon points="90,50 60,100 240,100 210,50 150,50" style="fill:url(#gradient1);opacity:0.9;stroke:white;stroke-width:2;stroke-opacity:0.3" /><polygon points="90,350 60,300 240,300 210,350 150,350" style="fill:url(#gradient1);opacity:0.8;stroke:white;stroke-width:2;stroke-opacity:0.3" /><polygon points="60,100 30,150 60,200 30,250 60,300" style="fill:rgb(143,217,248);opacity:0.7;stroke:white;stroke-width:2;stroke-opacity:0.5" /><polygon points="240,100 270,150 240,200 270,250 240,300" style="fill:rgb(143,217,248);opacity:0.5;stroke:white;stroke-width:2;stroke-opacity:0.5" /><polygon points="100,50 80,140 25,200 80,260 100,350 275,200" style="fill:rgb(10,36,114);opacity:0.5" /><polygon points="180,100 150,50 120,100 60,100 80,150 60,200 80,250 60,300 120,300 150,350 180,300 240,300 220,250 240,200 220,150 240,100" style="fill:url(#gradient1);opacity:0.6" /><polygon points="90,50 60,100 20,100 90,50 100,13 150,50" style="fill:rgb(143,217,248);opacity:0.7" /><polygon points="50,115 60,165 7,140 0,200" style="fill:rgb(179, 213, 255);opacity:0.5" /><polygon points="0,200 30,250 20,300" style="fill:rgb(179, 213, 255);opacity:0.5" /><polygon points="90,350 60,300 20,300 90,350 100,387 150,350" style="fill:url(#gradient2);opacity:0.8" /><polygon points="210,50 240,100 280,100 210,50 200,13 150,50" style="fill:url(#gradient1);opacity:0.7" /><polygon points="250,115 240,165 293,140 300,200" style="fill:rgb(179, 213, 255);opacity:0.5" /><polygon points="300,200 270,250 280,300" style="fill:rgb(179, 213, 255);opacity:0.5" /><polygon points="210,350 240,300 280,300 210,350 200,387 150,350" style="fill:url(#gradient1);opacity:0.7" /><polygon points="150,0 100,15 150,50" style="fill:rgb(143,217,248);opacity:0.7" /><polygon points="180,100 120,100 80,150 80,250 120,300 180,300 220,250 220,150" style="fill:url(#gradient);opacity:1" /><polygon points="150,50 60,100 60,300 150,350 240,300 240,100" style="fill:url(#gradient1);opacity:0" /><ellipse cx="150" cy="200" rx="150" ry="200" style="fill:rgb(0,38,249);opacity:0.2" /><polygon points="150,50 60,100 150,150 240,100" style="fill:rgb(143,217,248);opacity:0.5;stroke:white;stroke-width:2;stroke-opacity:0.5" /><polygon points="150,150 60,200 150,250" style="fill:rgb(143,217,248);opacity:0.5;stroke:white;stroke-width:2;stroke-opacity:0.5" /><polygon points="150,150 150,250 240,200" style="fill:rgb(143,217,248);opacity:0.5;stroke:white;stroke-width:2;stroke-opacity:0.5" /><polygon points="60,300 150,350 240,300 240,200 150,250 60,200" style="fill:rgb(143,217,248);opacity:0.5;stroke:white;stroke-width:2;stroke-opacity:0.5" /><polygon points="60,100 150,150 60,200" style="fill:rgb(143,217,248);opacity:0.5;stroke:white;stroke-width:2;stroke-opacity:0.5" /><polygon points="240,100 150,150 240,200" style="fill:rgb(143,217,248);opacity:0.5;stroke:white;stroke-width:2;stroke-opacity:0.5" />';

        item[5] = string(
            abi.encodePacked(
                '<text x="150" y="95" style="fill:white;opacity:0.6;font-size:20px" text-anchor="middle">GemFi<tspan x="150" y="270" text-anchor="middle">Level:</tspan><tspan text-anchor="middle">',
                toString(gem[_gemId].level),
                "</tspan>"
            )
        );

        item[6] = string(
            abi.encodePacked(
                '<tspan x="150" y="295" text-anchor="middle">Balance:</tspan><tspan text-anchor="middle">',
                toString(gem[_gemId].balance / 1000000000000000000),
                "</tspan>"
            )
        );

        item[7] = "</text></svg>";

        output = string(
            abi.encodePacked(
                item[0],
                item[1],
                item[2],
                item[3],
                item[4],
                item[5],
                item[6],
                item[7]
            )
        );

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "GemFi #',
                        toString(_gemId),
                        '", "description": "GemFi is a fun minting game.", "image": "data:image/svg+xml;base64,',
                        Base64.encode(bytes(output)),
                        '"}'
                    )
                )
            )
        );
        output = string(
            abi.encodePacked("data:application/json;base64,", json)
        );
        return output;
    }

    function getTotalHighLevelGems()
        public
        view
        returns (uint256 totalHighLevelGems)
    {
        return highestLevelGems.length;
    }

    function gemStatus(uint256 _gemId)
        public
        view
        returns (uint256 level, uint256 balance)
    {
        require(
            _exists(_gemId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        return (gem[_gemId].level, gem[_gemId].balance);
    }

    //** Write Functions **

    function mint(uint8 _mintAmount) public payable {
        require(_mintAmount > 0, "Need more than 0");
        require(msg.value >= 1 ether * _mintAmount, "Not enough FTM");
        for (uint256 i = 1; i <= _mintAmount; i++) {
            supply.increment();
            _safeMint(msg.sender, supply.current());
            gem[supply.current()].level = 1;
            gem[supply.current()].balance = 1 ether;
            activeSupply += 1;
        }
    }

    function upgradeGems(
        uint256 _gemOne,
        uint256 _gemTwo,
        uint256 _gemThree
    ) public {
        require(
            msg.sender == ownerOf(_gemOne) &&
                msg.sender == ownerOf(_gemTwo) &&
                msg.sender == ownerOf(_gemThree),
            "Not owner of Gems"
        );
        require(
            gem[_gemOne].level == gem[_gemTwo].level,
            "Need same level gems"
        );
        require(
            gem[_gemOne].level == gem[_gemThree].level,
            "Need same level gems"
        );
        supply.increment();
        uint256 _newTokenId = supply.current();
        //Find mint chance based on the Gem level
        if (gem[_gemOne].level <= 10) {
            mintChance = 100 - 10 * (gem[_gemOne].level - 1);
        } else {
            mintChance = 1;
        }
        resolveEpochIfNeeded();
        uint256 _randomNumber = getRandomNumber();
        _randomNumber = (_randomNumber & 0x64);
        if (_randomNumber <= mintChance) {
            //if upgrade is successfull
            //Burn all three gems and mint a new Gem with +1 level and combined balance of three gems
            gem[_newTokenId].level = gem[_gemOne].level + 1;
            gem[_newTokenId].balance = gem[_gemOne].balance * 3;
            if (gem[_newTokenId].level > highestGemLevel) {
                highestGemLevel = gem[_newTokenId].level;
                //Start a new winner list
                delete highestLevelGems;
                highestLevelGems.push(_newTokenId);
                gemIsHighestLevel[highestGemLevel][_newTokenId] = true;
                highestLevelGemsIndex[_newTokenId] = 0;
            } else if (gem[_newTokenId].level == highestGemLevel) {
                highestLevelGems.push(_newTokenId);
                gemIsHighestLevel[highestGemLevel][_newTokenId] = true;
                highestLevelGemsIndex[_newTokenId] =
                    highestLevelGems.length -
                    1;
            }
            emit GemUpgraded(true, _newTokenId);
        } else {
            //If upgrade is unsuccessfull
            //Burn three gems, create a new Gem with same balance and level
            //Send back one Gem's balance to user, and one Gem's balance to GemPot (Winner takes all)
            gem[_newTokenId].level = gem[_gemOne].level;
            gem[_newTokenId].balance = gem[_gemOne].balance;
            if (gemIsHighestLevel[highestGemLevel][_gemOne] == true) {
                highestLevelGems.push(_newTokenId);
                gemIsHighestLevel[highestGemLevel][_newTokenId] = true;
                highestLevelGemsIndex[_newTokenId] =
                    highestLevelGems.length -
                    1;
            }
            gamePot += gem[_newTokenId].balance;
            require(payable(msg.sender).send(gem[_newTokenId].balance));
            emit GemUpgraded(false, _newTokenId);
        }
        _safeMint(msg.sender, _newTokenId);
        activeSupply += 1;
        burnGem(_gemOne);
        burnGem(_gemTwo);
        burnGem(_gemThree);
    }

    function withdrawBalance(uint256 _gemId) public {
        require(msg.sender == ownerOf(_gemId), "Not owner of Gem");
        require(gem[_gemId].balance > 0, "No balance");
        require(payable(msg.sender).send(gem[_gemId].balance));
        burnGem(_gemId);
    }

    function pickWinner(uint256 _gemId) public {
        require(
            block.timestamp > (lastDraw + (winnerPickDuration * 3600)) &&
                highestLevelGems.length > 0,
            "Not ready yet"
        );
        require(
            msg.sender == ownerOf(_gemId) &&
                gemIsHighestLevel[highestGemLevel][_gemId] == true,
            "Not in qualified list"
        );
        uint256 _randomNumber = getRandomNumber();
        lastDraw = block.timestamp;
        uint256 winnerIndex = _randomNumber % highestLevelGems.length;
        lastWinner = highestLevelGems[winnerIndex];
        require(payable(gem[winnerIndex].owner).send((gamePot * 90) / 100));
        collectedFee += (gamePot * 10) / 100;
        gamePot = 0;
        emit WinnerPicked(lastWinner);
    }

    //** Only owner **

    function withdrawCollectedFee() public onlyOwner {
        (bool success, ) = payable(msg.sender).call{value: collectedFee}("");
        require(success);
        collectedFee = 0;
    }

    function changeWinnerPickDuration(uint256 _durationInHours)
        public
        onlyOwner
    {
        winnerPickDuration = _durationInHours;
    }

    //** Supporting fucntions *

    function burnGem(uint256 _gemId) private {
        gem[_gemId].level = 0;
        gem[_gemId].balance = 0 ether;
        safeTransferFrom(
            msg.sender,
            address(0x000000000000000000000000000000000000dEaD),
            _gemId
        );
        if (gemIsHighestLevel[highestGemLevel][_gemId] == true) {
            uint256 indexRemovedGem = highestLevelGemsIndex[_gemId];
            uint256 lastIndex = highestLevelGems.length - 1;
            highestLevelGems[indexRemovedGem] = highestLevelGems[lastIndex];
            highestLevelGemsIndex[
                highestLevelGems[lastIndex]
            ] = indexRemovedGem;
            highestLevelGems.pop();
            delete highestLevelGemsIndex[_gemId];
        }
        activeSupply -= 1;
    }

    function getRandomNumber() private view returns (uint256 _randomNumber) {
        _randomNumber = uint256(
            keccak256(
                abi.encodePacked(
                    epochs[randomIndexEpoch].randomness
                    // IRandomNumberGenerator(RANDOM).getRandomNumber()
                )
            )
        );
    }

    //Thanks to @_MouseDev
    function resolveEpochIfNeeded() private {
        Epoch storage currentEpoch = epochs[epochIndex];
        if (
            //If epoch has been commited
            currentEpoch.commited == false ||
            //If epoch has not been revealed, but the block is too far away (256 blocks)
            (currentEpoch.revealed == false &&
                currentEpoch.revealBlock < block.number - 256)
        ) {
            //This means the epoch has not been commited, OR the epoch has commited but has expired
            //Set commited to true  and record the reveal block
            currentEpoch.revealBlock = uint64(block.number + 5);
            currentEpoch.commited = true;
        } else if (block.number > currentEpoch.revealBlock) {
            //Epoch has been commited and is within range to be revealed
            //Set its randomness to the target block
            currentEpoch.randomness = uint128(
                uint256(blockhash(currentEpoch.revealBlock)) % (2**128 - 1)
            );
            currentEpoch.revealed = true;
            randomIndexEpoch = epochIndex;
            epochIndex++;
            return resolveEpochIfNeeded();
        }
    }

    function toString(uint256 value) private pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}
