"use strict";
let space = " ";
let mLetter = "M";
let dLetter = "D";
let aLetter = "A";
console.log(mLetter + space.repeat(3) + mLetter + space.repeat(2) + dLetter.repeat(4) + space.repeat(5) + aLetter);
console.log(mLetter.repeat(2) + space + mLetter.repeat(2) + space.repeat(2) + dLetter + space.repeat(3) + dLetter + space.repeat(3) + aLetter + space + aLetter);
console.log(mLetter.repeat(2) + space + mLetter.repeat(2) + space.repeat(2) + dLetter + space.repeat(3) + dLetter + space.repeat(2) + aLetter + space.repeat(3) + aLetter);
console.log(mLetter + space + mLetter + space + mLetter + space.repeat(2) + dLetter + space.repeat(3) + dLetter + space.repeat(2) + aLetter.repeat(5));
for (let i = 0; i < 2; i++) {
    console.log(mLetter + space.repeat(3) + mLetter + space.repeat(2) + dLetter + space.repeat(3) + dLetter + space.repeat(2) + aLetter + space.repeat(3) + aLetter);
}
console.log(mLetter + space.repeat(3) + mLetter + space.repeat(2) + dLetter.repeat(4) + space.repeat(3) + aLetter + space.repeat(3) + aLetter);
