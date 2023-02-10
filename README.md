# 정규표현식(Regular Expression)

> 문자열을 검색하고 대체하는 데 사용 가능한 일종의 언어 패턴.


## 주요 기능
- 문자 검색(search)
- 문자 대채(replace)
- 문자 추출(extract)


## 정규표현식 테스트 사이트
[https://regexr.com/](https://regexr.com/)


## 참조 사이트 
[https://heropy.blog/2018/10/28/regexp/](https://heropy.blog/2018/10/28/regexp/)


## 예제 문자열
```js
const str = `
010-1234-5678
ches0703@naver.com
https://github.com/ches0703
The brightest star in the sky
aabbccdddd
`
```



# JavaScript 정규식 생성


1. 생성자 함수 방식
    ```js
    //new RegExp("표현", "옵션")
    new RegExp("[a-z]", "gi")
    ```

1. 리터럴 생성 방식
    ```js
    // /표현/옵션(flag)
    /[a-z]/gi
    ```



# JS Method

> JS에서 정규표현식을 다루는 Method

메소드 | 문법 | 설명
--|--|--|
exec | 정규식.exec(문자열) | 일치하는 하나의 정보(Array) 반환
`test` | 정규식.test(문자열) | 일치 여부(Boolean) 반환
`match `| 문자열.match(정규식) | 일치하는 문자의 배열(Array)
search | 문자열.search(정규식) | 일치하는 문자열의 인덱스(Number) 반환
`replace` | 문자열.replace(정규식, 대체문자열) | 일치하는 문자열을 대체하고 대체된 문자열(String) 반환
split | 문자열.split(정규식) | 일치하는 문자열을 분할하여 배열(Array)로 반환
toString | 생성자_정규식.toString() | 생성자 함수 방식의 정규식을 리터럴 방식의 문자열(String)로 반환


- .test()
    ```js
    // 정규식에 대해 문자열에 만족(일치)하는 부분이 존재 하는지
    console.log(/star/.test(str))   // -> true
    ```

- .replace()
    ```js
    // 정규식을 만족하는 문자열의 부분을 대체할 문자열로 대체
    console.log(str.replace(/star/, "light"))   // star -> light
    // 원본 데이터 변경 X
    ```

- .metch()
    ```js
    // /the/gi : "the"라는 문자열 / g : 일치하는 문자열 전부, i : 대소문자 구분 없이
    // 해당 정규식이 만족하는 문자열의 부분을 모두 찾아 배열로 반환
    console.log(str.match(/the/gi))  
    // -> ['The', 'the']
    ```


# flag(옵션)

플래그 | 설명
--|--
`g` | 일치하는 문자열 전부(global)
`i` | 대소문자 구분 없이(ignore case)
`m` | 여러 줄에 대해 일치 하는지(multi line)
u | 유니코드(unicode)
y | lastIndex 속성으로 지정된 인덱스에서만 1회 일치(sticky)

- g, i
    ```js
    // /the/gi : "the"라는 문자열 / g : 일치하는 문자열 전부, i : 대소문자 구분 없이
    // 해당 정규식이 만족하는 문자열의 부분을 모두 찾아 배열로 반환
    console.log(str.match(/the/gi))  
    // -> ['The', 'the']
    ```

- m
    ```js
    // "\" : 정규 표현식에서 기능적인 역할을 하는 특수기호를 일반문자로 취급하도록 함
    // "$" : 앞의 문자 혹은 문자열로 끝나는 부분을 찾아서 일치
    // "."으로 끝나는 부분 / g : 일치하는 문자열 전부, i :대소문자 구분 없이, m : 여러 줄에 대해 일치 하는지
    console.log(str.match(/\.$/gim))
    ```



# 패턴

패턴 | 설명
--|--
^ad | 문자열의 앞에 있는 "ab"와 일치
ad$ | 문자열의 끝에 있는 "ab"와 일치
. | 임의의 한 문자와 일치
a\|b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{} | 
{3} | 3개 연속 일치
{3,}| 3개 이상 연속 일치
{3,5} | 3개이상 5개 이하 일치
[] |
[abc] | a또는 b또는 c
[a-z] | a부터 z사이의 문자 구간에 일치(소문자)
[A-Z] | A부터 Z사이의 문자 구간에 일치(대문자)
[0-9] | 0부터 9사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣사이의 문자 구간에 일치(한글)
\w | 63개의 문자(대소문자 52 + 숫자 10 + "_")에 일치(Word)
\b | 63개의 문자에 일치하지 않는 문자열의 경계(Boundary)
\d | 숫자에 일치(Digit)
\s | 공백(space, tap 등)에 일치(Space)
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)


- ^ab
    ```js
    // "d"라고 끝나는 부분 / g : 일치하는 문자열 전부, m : 여러 줄에 대해 일치 하는지
    console.log(str.match(/d$/gm))
    ```

- ab&
    ```js
    // "t"라고 시작하는 부분 / g : 일치하는 문자열 전부, i:대소문자 구분 없이, m : 여러 줄에 대해 일치 하는지
    console.log(str.match(/^t/gim))
    ```

- .
    ```js
    // c로 시작하고, 이후 임의의 3개의 문자를 가진 부분 / g : 일치하는 문자열 전부
    console.log(str.match(/c.../g)) 
    // -> ['ches', 'com/', 'ches', 'ccdd']
    ```

- \|
    ```js
    // "star" 또는 "sky" / g:일치하는 문자열 전부"
    console.log(str.match(/star|sky/g)) 
    // -> ['star', 'sky']
    ```

- ?
    ```js
    // "ches0703@"라는 문자열, @는 있을 수도 없을 수도 있음
    // g : 일치하는 문자열 전부
    console.log(str.match(/ches0703@?/g))
    // -> ['ches0703@', 'ches0703']
    ```

- {}
    ```js
    // d가 2번 연속되는 문자열 / g:일치하는 문자열 전부"
    console.log(str.match(/d{2}/g))
    // -> ['dd', 'dd']


    // d가 2번 이상 연속되는 문자열 / g:일치하는 문자열 전부"
    console.log(str.match(/d{2,}/g))
    // -> ['dddd']


    // d가 2번 이상 연속되는 문자열 / g:일치하는 문자열 전부"
    console.log(str.match(/d{2,3}/g))
    // -> ['ddd']
    ```
 
 - []
    ```js
    // 0~9사이의 문자가 1번 이상 반복되는 문자열 / g:일치하는 문자열 전부
    console.log(str.match(/[0-9]{1,}/g))
    // -> ['010', '1234', '5678', '0703', '0703']


    // a~z사이의 문자가 1번 이상 반복되는 문자열 / g:일치하는 문자열 전부
    console.log(str.match(/[a-z]{1,}/g))
    // -> ['ches', 'naver', 'com', 'https', ... ]
    ```

- \w, \b, \d, \s
    ```js
    // 63개의 문자와 일치하는 1글자 이상의 문자열 / g : 일치하는 문자열 전부
    console.log(str.match(/\w{1,}/g))
    // -> ['010', '1234', '5678', 'ches0703', ...]


    // /b ... /b 단어의 경계 설정
    // s\w{1,} : s로 시작하며 63개의 글자로 이루어진 1자 이상의 문자열
    // g : 일치하는 문자열 전부
    // -> s로 시작아는 단어 전부
    console.log(str.match(/\bs\w{1,}\b/g))
    // -> ['star', 'sky']


    // 숫자로 이우어진 1자 이상의 문자열 / g : 일치하는 문자열 전부
    console.log(str.match(/\d{1,}/g))
    // -> ['010', '1234', '5678', '0703', '0703']


    const h = "    The     Hello    World     "
    // replace를 활용하여 모든 공백 문자(/\s/g)를 찾아 ""로 바꿈 -> 공백을 지움
    console.log(h.replace(/\s/g, ""))
    ```

- (?=), (?<=)
    ```js
    // "@" 앞에 위치한 임의의 문자로 시작하는 1자 이상의 문자열
    console.log(str.match(/.{1,}(?=@)/))


    // "@" 뒤에 위치한 임의의 문자로 시작하는 1자 이상의 문자열
    console.log(str.match(/(?<=@).{1,}/))
    ```