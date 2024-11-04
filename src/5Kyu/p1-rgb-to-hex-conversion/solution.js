// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// Problem URL: https://www.codewars.com/kata/513e08acc600c94f01000001/javascript

function rgb(r, g, b) {
    if (r > 255) r = 255
    if (r < 0) r = 0
    if (g > 255) g = 255
    if (g < 0) g = 0
    if (b > 255) b = 255
    if (b < 0) b = 0
    let rHex = r.toString(16).length  < 2 ? '0' + r.toString(16) : r.toString(16) 
    let gHex = g.toString(16).length  < 2 ? '0' + g.toString(16) : g.toString(16)
    let bHex = b.toString(16).length  < 2 ? '0' + b.toString(16) : b.toString(16)
    const hex = rHex + bHex + gHex
    return hex.toUpperCase()
}
