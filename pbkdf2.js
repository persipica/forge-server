const forge = require('node-forge')

let salt
let numIterations = 1000
let password = 'ghfjkhksjdfhgs'
let keySize = 32

// 동기식 키생성 - 송신자
salt = forge.random.getBytesSync(16)
let derivedKey = forge.pkcs5.pbkdf2(password, salt, numIterations, keySize)

console.log('Password: ', password)
console.log('Salt: ', forge.util.bytesToHex(salt))
console.log('Iterations: ', numIterations)
console.log('Derived key(송신자): ', forge.util.bytesToHex(derivedKey))

// 송신자 -> 수신자 : salt, numIterations 전송

// 수신자
let derivedKey1 = forge.pkcs5.pbkdf2(password, salt, numIterations, keySize)
console.log('Derived key(수신자): ', forge.util.bytesToHex(derivedKey1))

// 비동기식 키생성
forge.pkcs5.pbkdf2(
  password,
  salt,
  numIterations,
  keySize,
  function (err, derivedKey) {
    if (err) console.log(err)
    else
      console.log('Derived key 1 (async): ', forge.util.bytesToHex(derivedKey))
  }
)

forge.pkcs5.pbkdf2(
  password,
  salt,
  numIterations,
  keySize,
  function (err, derivedKey) {
    if (err) console.log(err)
    else
      console.log('Derived key 2 (async): ', forge.util.bytesToHex(derivedKey))
  }
)
forge.pkcs5.pbkdf2(
  password,
  salt,
  numIterations,
  keySize,
  function (err, derivedKey) {
    if (err) console.log(err)
    else
      console.log('Derived key 3 (async): ', forge.util.bytesToHex(derivedKey))
  }
)
forge.pkcs5.pbkdf2(
  password,
  salt,
  numIterations,
  keySize,
  function (err, derivedKey) {
    if (err) console.log(err)
    else
      console.log('Derived key 4 (async): ', forge.util.bytesToHex(derivedKey))
  }
)
forge.pkcs5.pbkdf2(
  password,
  salt,
  numIterations,
  keySize,
  function (err, derivedKey) {
    if (err) console.log(err)
    else
      console.log('Derived key 5 (async): ', forge.util.bytesToHex(derivedKey))
  }
)
forge.pkcs5.pbkdf2(
  password,
  salt,
  numIterations,
  keySize,
  function (err, derivedKey) {
    if (err) console.log(err)
    else
      console.log('Derived key 6 (async): ', forge.util.bytesToHex(derivedKey))
  }
)
