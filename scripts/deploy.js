// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const rentablePets = await hre.ethers.deployContract("RentablePets");

  const RentablePets = await rentablePets.waitForDeployment();

  console.log(
    `Contract deployed to ${RentablePets.target}`
  );

  if (network.config.chainId == 80001) {
    console.log('Waiting 5 Block confirmations');
    setTimeout(() => {
      verify(RentablePets.target);
    }, 120000);
  }
}

async function verify(contractAddress) {
  await hre.run('verify:verify', {
    address: contractAddress,
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
