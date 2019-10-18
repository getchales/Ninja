class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = "FormatError";
  }
}

let err = new FormatError("formatting error");

alert( err.message ); // formatting error
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof SyntaxError ); // true