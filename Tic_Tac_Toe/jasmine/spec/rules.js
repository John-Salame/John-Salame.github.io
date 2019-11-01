describe("rules", function() {
  var input;

  describe("checking isEmpty function", function() {

    it("should return false for non-empty string 'John'", function() {
      input = "John";
      expect(isEmpty(input)).toBeFalsy();
    });

    it("should return true for empty string", function() {
      input = "";
      expect(isEmpty(input)).toBeTruthy();
    });

      // demonstrates use of spies to intercept and test method calls
    it("should return true for undefined input", function() {
      input = undefined;
      expect(isEmpty(input)).toBeTruthy();
    });
  });

});
