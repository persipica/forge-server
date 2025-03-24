const bcrypt = require('bcrypt')

const saltRounds = 10
const myPassword = 'ldksjfs;kjdflkgjkfjgklsdjfklfg'
const myPassword1 = myPassword + 'y'

// Technique 1
// 1.사용자 등록
bcrypt.genSalt(saltRounds, function (err, salt) {
  console.log('Salt : ', salt)
  bcrypt.hash(myPassword, salt, function (err, hash) {
    console.log('Password Hash : ', hash)
    // 사용자 등록시 hash값을 DB에 저장

    // 2. 사용자 로그인
    bcrypt.compare(myPassword, hash, function (err, result) {
      if (result == true) {
        ans1 = '로그인 성공'
      } else {
        ans1 = '로그인 실패'
      }
      console.log('로그인 결과1 : ', ans1)
    })
    bcrypt.compare(myPassword1, hash, function (err, result) {
      if (result == true) {
        ans2 = '로그인 성공'
      } else {
        ans2 = '로그인 실패'
      }
      console.log('로그인 결과2 : ', ans2)
    })
  })
})

// Technique 2
// 1. 사용자 등록
bcrypt.hash(myPassword, saltRounds, function (err, hash) {
  console.log('Password Hash : ', hash)
  // 사용자 등록시 hash값을 DB에 저장

  // 2. 사용자 로그인
  bcrypt.compare(myPassword, hash, function (err, result) {
    if (result == true) {
      ans1 = '로그인 성공'
    } else {
      ans1 = '로그인 실패'
    }
    console.log('로그인 결과1 : ', ans1)
  })
  bcrypt.compare(myPassword1, hash, function (err, result) {
    if (result == true) {
      ans2 = '로그인 성공'
    } else {
      ans2 = '로그인 실패'
    }
    console.log('로그인 결과2 : ', ans2)
  })
})
