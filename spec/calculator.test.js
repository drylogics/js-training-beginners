class Calculator {
  add = (a, b) => {
    return a + b;
  }
  subtract = (a, b) => {
    return a - b;
  } 
  multiply = (a, b) => {
    return a * b;
  }
  divide = (a, b) => {
    if(a == 0 && b == 0) return NaN;
    return a / b;
  }
}
describe("Calculator", () => {
  describe("#sum", () => {
    describe("Given 1 and 1", () => {
      test("it should give 2", () => {
        let calculator = new Calculator();
        expect(calculator.add(1, 1)).toEqual(2);
      });
    });
    describe("Given 1 and 2", () => {
      test("it should give 3", () => {
        let calculator = new Calculator();
        expect(calculator.add(1, 2)).toEqual(3);
      });
    });
  });

  describe("#subtract", () => {
    describe("When smaller number is subtracted from larger number", () => {
      test("it should give a positive number", () => {
        let calculator = new Calculator();
        expect(calculator.subtract(20, 5)).toEqual(15);
      });
    });
    describe("When larger number is subtracted from smaller number", () => {
      test("it should give a negative number", () => {
        let calculator = new Calculator();
        expect(calculator.subtract(20, 25)).toEqual(-5);
      });
    });
  });
  describe("#multiply", () => {
    describe("when whole number is mulitplied by whole number", () => {
      test("it should give a postive number", () => {
        let calculator = new Calculator();
        expect(calculator.multiply(2, 3)).toEqual(6);
      });
    });
    describe("when whole number is multiplied by negative number", () => {
      test("it should give a negative number", () => {
        let calculator = new Calculator();
        expect(calculator.multiply(2, -3)).toEqual(-6);
      });
    });
    describe("when whole number is multiplied by zero", () => {
      test("it should give zero", () => {
        let calculator = new Calculator();
        expect(calculator.multiply(2, 0)).toEqual(0);
      });
    });
  });

  describe("#divide", () => {
    describe("when postive number divided by positive number", () => {
      test("it should give a postive number", () => {
        let calculator = new Calculator();
        expect(calculator.divide(10, 5)).toEqual(2);
      });
    });
    describe("when positive number divided by negative number", () => {
      test("it should give a negative number", () => {
        let calculator = new Calculator();
        expect(calculator.divide(10, -5)).toEqual(-2);
      });
    });
    describe("when positive number divided by Zero", () => {
      test("it should give Infinity", () => {
        let calculator = new Calculator();
         expect(calculator.divide(10, 0)).toEqual(Infinity);
      });
    });
    describe("when negative number divided by postive number", () => {
      test("it should give negative number", () => {
        let calculator = new Calculator();
         expect(calculator.divide(-10, 5)).toEqual(-2);
      });
    });
    describe("when negative number divided by negative number", () => {
      test("it should give negative number", () => {
        let calculator = new Calculator();
         expect(calculator.divide(-10, -5)).toEqual(2);
      });
    });
    describe("when negative number divided by Zero", () => {
      test("it should give negative Infinity", () => {
        let calculator = new Calculator();
         expect(calculator.divide(-10, 0)).toEqual(-Infinity);
      });
    });
    describe("when Zero divided by Zero", () => {
      test("it should give Zero", () => {
        let calculator = new Calculator();
         expect(calculator.divide(0, 0)).toBeNaN();
      });
    });
  });
});


  

   
  
  
