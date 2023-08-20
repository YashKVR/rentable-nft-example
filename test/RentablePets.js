const {
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("RentablePets", function () {
    async function deployRentablePets() {

        // Contracts are deployed using the first signer/account by default
        const [owner, user, other] = await ethers.getSigners();

        const RentablePets = await ethers.getContractFactory("RentablePets");
        const rentablePets = await RentablePets.deploy();

        return { rentablePets, owner, user, other }
    }

    describe('Deployment', () => {
        it('should set the correct owner', async () => {
            const { rentablePets, owner } = await loadFixture(deployRentablePets);
            expect(await rentablePets.owner()).to.equal(owner.address);
        });
    });

})