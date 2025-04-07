const forge = require('node-forge')

// 1. 송신자의 암호화
const inputText = 'Hello world - 헬로월드'
const someBytes = forge.util.encodeUtf8(inputText)
console.log('AES-128-CBC')
const keySize = 16 // 16 => 128, 24 => 192, 32 => 256
const blockSize = 16 // 128 bit block
const algorithm = 'AES-CBC' // AES-ECB, CBC, CFB, OFB, CTR
const key = forge.random.getBytesSync(keySize)
const iv = forge.random.getBytesSync(blockSize)
console.log('- Key: ' + forge.util.bytesToHex(key))
console.log('- IV: ' + forge.util.bytesToHex(iv))
console.log('- Plaintext: ' + forge.util.decodeUtf8(someBytes))

const cipher = forge.cipher.createCipher(algorithm, key)
cipher.start({ iv: iv })
cipher.update(forge.util.createBuffer(someBytes))
cipher.finish()
const encrypted = cipher.output
console.log('- Encrypted:' + encrypted.toHex())

// 송신자 -> 수신자 : <encrypted, iv>
// 송신자와 수신자가 공유하는 정보 : key

// 2. 수신자 복호화

const decipher = forge.cipher.createDecipher(algorithm, key)
decipher.start({ iv: iv })
decipher.update(encrypted)
decipher.finish()
const recoverd = decipher.output
console.log('- Decrypted: ' + recoverd)
