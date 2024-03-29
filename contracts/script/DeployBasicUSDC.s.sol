// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {BasicUSDC} from "../src/BasicUSDC.sol";

contract DeployBasicUSDC is Script {
    bytes32 public constant SALT = bytes32("BasicUSDC");

    function run() public {
        vm.startBroadcast();
        BasicUSDC usdc = new BasicUSDC{salt:SALT}();
        vm.stopBroadcast();
        console.log(address(usdc));
    }
}
