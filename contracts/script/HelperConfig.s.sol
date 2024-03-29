// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {Script} from "forge-std/Script.sol";
import {DevOpsTools} from "foundry-devops/src/DevOpsTools.sol";

contract HelperConfig is Script {
    struct CrossChainDetails {
        address _router;
        uint64 _chainSelector;
        address _usdc;
        address _linkToken;
    }

    mapping(uint256 _chainId => CrossChainDetails) public chainIdToCrossChainDetails;

    constructor() {
        if (block.chainid == 11155111) {
            setSepoliaConfigs();
        } else if (block.chainid == 80001) {
            setMumbaiConfigs();
        } else if (block.chainid == 43113) {
            setFujiConfigs();
        } else {
            setAnvilConfigs();
        }
    }

    function getChainDetails(uint256 _chainId)
        external
        pure
        returns (address _router, uint64 _chainSelector, address _linkToken)
    {
        if (_chainId == 43113) {
            _router = 0xF694E193200268f9a4868e4Aa017A0118C9a8177;
            _chainSelector = 14767482510784806043;
            _linkToken = 0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846;
        } else if (_chainId == 80001) {
            _router = 0x1035CabC275068e0F4b745A29CEDf38E13aF41b1;
            _chainSelector = 12532609583862916517;
            _linkToken = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
        } else if (_chainId == 11155111) {
            _router = 0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59;
            _chainSelector = 16015286601757825753;
            _linkToken = 0x779877A7B0D9E8603169DdbD7836e478b4624789;
        } else {
            revert("Chain not supported");
        }
    }

    function setSepoliaConfigs() internal {
        chainIdToCrossChainDetails[11155111] = CrossChainDetails({
            _router: 0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59,
            _chainSelector: 16015286601757825753,
            _usdc: getUSDCAddress(block.chainid),
            _linkToken: 0x779877A7B0D9E8603169DdbD7836e478b4624789
        });
    }

    function setMumbaiConfigs() internal {
        chainIdToCrossChainDetails[80001] = CrossChainDetails({
            _router: 0x1035CabC275068e0F4b745A29CEDf38E13aF41b1,
            _chainSelector: 12532609583862916517,
            _usdc: getUSDCAddress(block.chainid),
            _linkToken: 0x326C977E6efc84E512bB9C30f76E30c160eD06FB
        });
    }

    function setFujiConfigs() internal {
        chainIdToCrossChainDetails[43113] = CrossChainDetails({
            _router: 0xF694E193200268f9a4868e4Aa017A0118C9a8177,
            _chainSelector: 14767482510784806043,
            _usdc: getUSDCAddress(block.chainid),
            _linkToken: 0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846
        });
    }

    function setAnvilConfigs() internal {
        chainIdToCrossChainDetails[31337] = CrossChainDetails({
            _router: 0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59,
            _chainSelector: 16015286601757825753,
            _usdc: getUSDCAddress(block.chainid),
            _linkToken: 0x779877A7B0D9E8603169DdbD7836e478b4624789
        });
    }

    function getUSDCAddress(uint256 _chainId) public view returns (address _usdc) {
        _usdc = DevOpsTools.get_most_recent_deployment("BasicUSDC", _chainId);
    }

    function getTreasuryAddress(uint256 _chainId) public view returns (address _treasury) {
        _treasury = DevOpsTools.get_most_recent_deployment("Treasury", _chainId);
    }

    function getUtilsAddress(uint256 _chainId) public view returns (address _utils) {
        _utils = DevOpsTools.get_most_recent_deployment("Utils", _chainId);
    }

    function getTreasuryCrossChainAddress(uint256 _chainId) public view returns (address _treasuryCrossChain) {
        _treasuryCrossChain = DevOpsTools.get_most_recent_deployment("TreasuryCrossChain", _chainId);
    }

    function getMainContractAddress(uint256 _chainId) public view returns (address _mainContract) {
        _mainContract = DevOpsTools.get_most_recent_deployment("MainContract", _chainId);
    }
}
