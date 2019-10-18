function f() {
  try {
    alert('start');
    return "result";
  } catch (e) {
    /// ...
  } finally {
    alert('cleanup!');
  }
}

f(); // cleanup!