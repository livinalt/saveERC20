import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

// import { ethers, BigNumber } from "ethers";


describe("SaveERC20", function () {
  
  async function deploySaveERC20Fixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    
    const SaveERC20 = await ethers.getContractFactory("SaveERC20");
    const saveERC20 = await SaveERC20.deploy(owner.address); // Pass owner's address as the saving token

    return { owner, otherAccount, saveERC20 };
  }

  describe("Deposit", function () {
    it("user should be able to successfully make a deposit greater than 0", async function () {
      const { saveERC20 } = await loadFixture(deploySaveERC20Fixture);
      const deposit = ethers.parseEther("1"); // testing with a deposit of 1 ETH
      await expect(() => saveERC20.deposit(deposit))
        .to.changeEtherBalance(saveERC20, deposit);
    });

    it("user should not be able to make a deposit of 0", async function () {
      const { saveERC20 } = await loadFixture(deploySaveERC20Fixture);
      const deposit = ethers.parseEther("0"); // testing with a deposit of 0 ETH
      await expect(saveERC20.deposit(deposit)).to.be.revertedWith(
        "can't save zero value");
    });
  });

  describe("Withdrawal", function () {
    it("should be able to withdraw if the balance is greater than 0", async function () {
      const { saveERC20, otherAccount } = await loadFixture(deploySaveERC20Fixture);
      const deposit = ethers.parseEther("1"); // Testing with a deposit of 1 ETH
      await saveERC20.deposit(deposit);
      await expect(() => saveERC20.connect(otherAccount).withdraw(deposit))
        .to.changeEtherBalance(otherAccount, deposit);
    });

    // it("should not be able to withdraw if the balance is 0", async function () {
    //   const { saveERC20 } = await loadFixture(deploySaveERC20Fixture);
    //   await expect(saveERC20.withdraw()).to.be.revertedWith(
    //     "insufficient funds");
    // });

    it("should not be able to withdraw if the balance is less than the withdrawal amount", async () => {
      const { saveERC20 } = await loadFixture(deploySaveERC20Fixture);
      const amountToWithdraw = ethers.parseEther("1");
      await expect(saveERC20.withdraw(amountToWithdraw))
        .to.be.revertedWith("insufficient funds");
    });
  });

  describe("Check User Balance", function () {
    it("user should be able to check their savings balance", async function () {
      const { saveERC20, otherAccount } = await loadFixture(deploySaveERC20Fixture);
      const deposit = ethers.parseEther("1");
      await saveERC20.deposit(deposit);
      const balance = await saveERC20.checkUserBalance(otherAccount.address);
      expect(balance).to.equal(deposit);
    });
  });
});
