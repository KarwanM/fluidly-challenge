function assertEquals(expect, actual) {
  // If expect and actual are equal
  if (expect === actual) {
    console.log("_No Error_");
  }
}

function assertNotEquals(expect, actual) {
  // If type of expect and actual is the same
  if (typeof expect === typeof actual) {
    // If type of both expect and actual is Array
    if (Array.isArray(expect)) {
      // If the length of both array expect and array actual not the same
      if (expect.length !== actual.length) {
        console.log(
          `Expected array length ${expect.length} but found ${actual.length}`
        );
        throw new Error(
          `Expected array length ${expect.length} but found ${actual.length}`
        );
      }
      // If the length of both array expect and array actual the same
      else {
        // If the elements in expect are the same as elements in actual
        if (
          expect.every((element, index) => {
            return element === actual[index];
          })
        ) {
          console.log("_No Error_");
        }
        // If the elements in expect are not the same as elements in actual
        else {
          expect.forEach((element, index) => {
            if (element !== actual[index]) {
              console.log(`Expected "${element}" but found "${actual[index]}"`);
              throw new Error(
                `Expected  "${element}" but found "${actual[index]}"`
              );
            }
          });
        }
      }
    }
    // If type of both expect and actual is not Array and expect and actual are not the same
    else {
      console.log(`Expected ${expect} but found ${actual}`);
      throw new Error(`Expected ${expect} but found ${actual}`);
    }
  }
  // If type of expect and actual are not the same
  else {
    console.log(
      `Expected type ${typeof expect} but found type ${typeof actual}`
    );
    throw new Error(
      `Expected type ${typeof expect} but found type ${typeof actual}`
    );
  }
}

module.exports = { assertEquals, assertNotEquals };
