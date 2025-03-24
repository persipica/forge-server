const bcrypt = require('bcrypt')

const saltRounds = 10
const myPassword = 'ldksjfs;kjdflkgjkfjgklsdjfklfg'
const myPassword1 = myPassword + 'y'

// 1.사용자 등록

const salt = bcrypt.genSaltSync(saltRounds)
const hash = bcrypt.hashSync(myPassword, salt)

console.log('Password Hash : ', hash)
// 2. 로그인
const result = bcrypt.compareSync(myPassword, hash)
if (result == true) {
  ans1 = '로그인 성공'
} else {
  ans1 = '로그인 실패'
}
console.log('로그인 결과1 : ', ans1)

const result1 = bcrypt.compareSync(myPassword1, hash)
if (result1 == true) {
  ans2 = '로그인 성공'
} else {
  ans2 = '로그인 실패'
}
console.log('로그인 결과2 : ', ans2)
