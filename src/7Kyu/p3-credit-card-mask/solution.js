// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

// Problem URL: https://www.codewars.com/kata/5412509bd436bd33920011bc/javascript

function maskify(cc) {
    let len = cc.length
    if (len < 4) return cc;
    let ccArr = cc.split("");
    for (let i = 0; i < len - 4; i++) {
      ccArr.splice(i, 1, '#');
    }
    let ccStr = ccArr.join("");
    return ccStr;
}