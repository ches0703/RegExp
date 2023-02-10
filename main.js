const str = `
010-1234-5678
ches0703@naver.com
https://github.com/ches0703
The brightest star in the sky.
aabbccdddd
`

// "@" 앞에 위치한 임의의 문자로 시작하는 1자 이상의 문자열
console.log(str.match(/.{1,}(?=@)/))


// "@" 뒤에 위치한 임의의 문자로 시작하는 1자 이상의 문자열
console.log(str.match(/(?<=@).{1,}/))


