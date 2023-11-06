import { ethers } from "hardhat";
import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("TestableERC721aGovernanceToken Contract", function () {
    async function deployTokenFixture() {
        const TestableTokenFactory = await ethers.getContractFactory("TestableERC721aGovernanceToken");
        const [deployer, addr1, addr2, addr3] = await ethers.getSigners();
        const testableToken = (await TestableTokenFactory.deploy("TestToken", "TTK", "1"));
        return { testableToken, deployer, addr1, addr2, addr3 };
    }

    describe("Interface Support", function () {
        it("Should support ERC721 interface", async function () {
            const { testableToken } = await loadFixture(deployTokenFixture);
            expect(await testableToken.supportsInterface("0x80ac58cd")).to.be.true;
        });

        it("Should support ERC165 interface", async function () {
            const { testableToken } = await loadFixture(deployTokenFixture);
            expect(await testableToken.supportsInterface("0x01ffc9a7")).to.be.true;
        });

        it("Should support Votes interface", async function () {
            const { testableToken } = await loadFixture(deployTokenFixture);
            expect(await testableToken.supportsInterface("0xe90fb3f6")).to.be.true;
        });

        it('does not support random interface', async function () {
            const { testableToken } = await loadFixture(deployTokenFixture);
            expect(await testableToken.supportsInterface('0xdeadbeef')).to.be.false;
          });

        it("Should have ERC721A transfer functionality", async function () {
            const { testableToken } = await loadFixture(deployTokenFixture);
            expect(await testableToken["safeTransferFrom(address,address,uint256)"]).to.exist;
        });
    });

    describe("Minting", function () {
        it("Should mint tokens", async function () {
            const { testableToken, addr1 } = await loadFixture(deployTokenFixture);
            await testableToken.mint(addr1.address, 5);
            expect(await testableToken.balanceOf(addr1.address)).to.equal(5);
        });
    });

    describe("Governance", function () {
        it("Should delegate votes", async function () {
            const { testableToken, addr1 } = await loadFixture(deployTokenFixture);
            await testableToken.mint(addr1.address, 10);

            await testableToken.connect(addr1).delegate(addr1.address);

            expect(await testableToken.getVotes(addr1.address)).to.equal(10);
        });

        it("Should transfer votes when tokens are transferred", async function () {
            const { testableToken, addr1, addr2 } = await loadFixture(deployTokenFixture);
            await testableToken.mint(addr1.address, 10);
            await testableToken.connect(addr1).delegate(addr1.address);

            await testableToken.connect(addr1).transferFrom(addr1.address, addr2.address, 1);
            await testableToken.connect(addr2).delegate(addr2.address);

            expect(await testableToken.getVotes(addr2.address)).to.equal(1);
            expect(await testableToken.getVotes(addr1.address)).to.equal(9);
        });

        it("Should reduce voting power after burning a token", async function () {
            const { testableToken, addr1 } = await loadFixture(deployTokenFixture);
            await testableToken.mint(addr1.address, 10);
            await testableToken.connect(addr1).delegate(addr1.address);
            const initialVotes = await testableToken.getVotes(addr1.address);

            const tokenIdToBurn = 1;
            await testableToken.connect(addr1).burn(tokenIdToBurn);

            const finalVotes = await testableToken.getVotes(addr1.address);
            expect(finalVotes).to.be.equal(initialVotes - 1n);
        });
    });

    describe("Delegation edge cases", function () {
        it("Should accumulate voting power correctly when receiving tokens from multiple addresses", async function () {
            const { testableToken, addr1, addr2, addr3 } = await loadFixture(deployTokenFixture);
            await testableToken.mint(addr1.address, 5);
            await testableToken.mint(addr2.address, 5);
            await testableToken.connect(addr1).delegate(addr3.address);
            await testableToken.connect(addr2).delegate(addr3.address);

            // Transfer tokens from addr1 and addr2 to addr3
            await testableToken.connect(addr1).transferFrom(addr1.address, addr3.address, 1);
            await testableToken.connect(addr2).transferFrom(addr2.address, addr3.address, 6);

            expect(await testableToken.getVotes(addr3.address)).to.equal(8);
        });

        it("Should not transfer voting power in a delegation chain", async function () {
            const { testableToken, addr1, addr2, addr3 } = await loadFixture(deployTokenFixture);
            await testableToken.mint(addr1.address, 10);

            // A delegates to B, and B delegates to C
            await testableToken.connect(addr1).delegate(addr2.address);
            await testableToken.connect(addr2).delegate(addr3.address);

            // The voting power should remain with B, not transfer to C
            expect(await testableToken.getVotes(addr2.address)).to.equal(10);
            expect(await testableToken.getVotes(addr3.address)).to.equal(0);
        });

        it("Should adjust delegatee's voting power correctly when more tokens are received after delegation", async function () {
            const { testableToken, addr1, addr2 } = await loadFixture(deployTokenFixture);
            await testableToken.mint(addr1.address, 5);
            await testableToken.connect(addr1).delegate(addr2.address);

            // Check initial delegated voting power
            expect(await testableToken.getVotes(addr2.address)).to.equal(5);

            // Mint more tokens to addr1 after delegation
            await testableToken.mint(addr1.address, 5);

            // The delegated voting power should update to include the new tokens
            expect(await testableToken.getVotes(addr2.address)).to.equal(10);
        });

        it("Should revoke delegation and return voting power correctly", async function () {
            const { testableToken, addr1, addr2 } = await loadFixture(deployTokenFixture);
            await testableToken.mint(addr1.address, 10);
            await testableToken.connect(addr1).delegate(addr2.address);

            // Check delegated voting power
            expect(await testableToken.getVotes(addr2.address)).to.equal(10);

            // Revoke delegation by delegating to the zero address
            await testableToken.connect(addr1).delegate(addr1.address);

            // Voting power should revert to the original owner
            expect(await testableToken.getVotes(addr1.address)).to.equal(10);
            expect(await testableToken.getVotes(addr2.address)).to.equal(0);
        });
    });

});
