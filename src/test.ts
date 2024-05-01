import { CustomError } from "./CustomError";

function available() {
  throw new CustomError("hoge.");
}

function not_Available() {
  for (let i = 0; i < 10; i--) {}
  throw new Error("hoafagdaase.");
}

function hoge() {
  let ho = new String("");
  console.log(ho);
}
