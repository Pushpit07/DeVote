var Election = artifacts.require('./Election.sol');

contract("Election", function (accounts) {
    var electionInstance;

    it("initializes with 4 candidates", function () {
        return Election.deployed().then(function (instance) {
            return instance.candidatesCount();
        }).then(function (count) {
            assert.equal(count, 4);
        })
    });

    it("initializes with the correct candidates", function () {
        return Election.deployed().then(function (instance) {
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function (candidate) {
            assert.equal(candidate[0], 1, "contains incorrect id");
            assert.equal(candidate[1], "BJP", "contains incorrect name");
            assert.equal(candidate[2], 0, "contains incorrect votes count");
            return electionInstance.candidates(2);
        }).then(function (candidate) {
            assert.equal(candidate[0], 2, "contains incorrect id");
            assert.equal(candidate[1], "Congress", "contains incorrect name");
            assert.equal(candidate[2], 0, "contains incorrect votes count");
            return electionInstance.candidates(3);
        }).then(function (candidate) {
            assert.equal(candidate[0], 3, "contains incorrect id");
            assert.equal(candidate[1], "AAP", "contains incorrect name");
            assert.equal(candidate[2], 0, "contains incorrect votes count");
            return electionInstance.candidates(4);
        }).then(function (candidate) {
            assert.equal(candidate[0], 4, "contains incorrect id");
            assert.equal(candidate[1], "BSP", "contains incorrect name");
            assert.equal(candidate[2], 0, "contains incorrect votes count");
        });
    });
});