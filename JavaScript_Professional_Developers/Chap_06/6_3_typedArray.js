/**
 * Typed Array
 */

// arraybuffer
const buffer = new ArrayBuffer(10);
console.log(buffer.byteLength); // 10

// slice arraybuffer
const buffer2 = buffer.slice(2, 6);
console.log(buffer2.byteLength); // 4

//DateView
// first arrarbuffer second start index, thrid end idnex
// if igore three parameter ,it should start  two paramenter to end
const fullDataView = new DataView(buffer, 0, 8);

// elementType
const buf = new ArrayBuffer(2);
const view = new DataView(buf);
view.setUint8(0, 255);
console.log(view.getInt16(0));

// byte list
