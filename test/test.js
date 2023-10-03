var request = require("request"),
    assert = require('assert'),
    greetings = require("../app.js"),
    base_url = "http://localhost:5000";

describe("Welcome to the CI/CD Server", function() {
    describe("GET /", function() {
        it("returns status code 200", function(done){
            request.get(base_url, function(error, response, body) {
                assert.equal(200, response.statusCode);
                greetings.close();
                done();
            });
        });
    });

    describe("greetingMessage", function() {
        it("validate Greeting", function(){
            var res = greetings.greetingMessage();
            var message = "Welcome to my CI/CD using CircleCI!";
            assert.equal(res, message);
        });
    });
})