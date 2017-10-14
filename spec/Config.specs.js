let fakeConfig = require("./fakes/FakeConfig");
let [ fakeConfigFile, defaultConfig, customConfig ] = fakeConfig.make();

let Config = require("../Core/Config/Config");
let config = new Config;

describe("Config unit tests.", function() {

    /** @test */
    it("It gets default config", function() {
        expect(
            config.default
        ).toEqual(
            defaultConfig
        );
    });

    /** @test */
    it("It gets custom config", function() {
        expect(
            config.custom
        ).toEqual(
            customConfig
        );
    });

    /** @test */
    it("It assures that custom config overwrite default config", async function() {
        expect(
            config.get.modules.assertions.module.name
        ).toBe(
            "Module"
        );
    });

});

fakeConfigFile.delete();