var AngularMaterial = require("nativescript-angular-material").AngularMaterial;
var angularMaterial = new AngularMaterial();

describe("greet function", function() {
    it("exists", function() {
        expect(angularMaterial.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(angularMaterial.greet()).toEqual("Hello, NS");
    });
});