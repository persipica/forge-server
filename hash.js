const forge = require('node-forge')

let message1 = 'message1'
let message2 = message1 + '1'

console.log('입력 메시지1', message1)
//console.log('입력 메시지2', message2)

let md1 = forge.md.md5.create()
md1.update(message1)
let result1 = md1.digest().toHex()
console.log('MD5 hash: ', result1, result1.length)

let md2 = forge.md.sha1.create()
md2.update(message1)
let result2 = md2.digest().toHex()
console.log('SHA1 hash: ', result2, result2.length)

let md3 = forge.md.sha256.create()
md3.update(message1)
let result3 = md3.digest().toHex()
console.log('SHA256 hash: ', result3, result3.length)

let md4 = forge.md.sha384.create()
md4.update(message1)
let result4 = md4.digest().toHex()
console.log('SHA384 hash: ', result4, result4.length)

let md5 = forge.md.sha512.create()
md5.update(message1)
let result5 = md5.digest().toHex()
console.log('SHA512 hash: ', result5, result5.length)
