// Fixed-size chunk of memory
// array of integers, byte of data

const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2); // reset memory
const buf3 = Buffer.allocUnsafe(2); // doesn't reset memory. fast
console.log(buf2);
console.log(buf3);
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());
console.log(buf3);
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
