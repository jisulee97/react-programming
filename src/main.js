// 함수를 변수에 할당

// 함수를 인수로 전달받을 수 있다
// 함수 자체를 return하는 함수를 커링 함수라고 한다
const greetCurry = (message) => {
  return function greet(name) {
    return `${name} ${message}`;
  };
}

const morningGreet = greetCurry('안녕! 좋은 아침이야!');

// 위 코드는 아래처럼 처리됩니다.
const morningGreet = function greet(name) {
  return `${name} 안녕 좋은 아침이야!`;
};

// 그래서 아래 데이터 타입이 함수인 것입니다.
console.log(typeof morningGreet);

morningGreet('범쌤');

// 위 코드는 아래처럼 처리됩니다.
function greet('범쌤') {
  return `범쌤 안녕 좋은 아침이야!`;
};

// ----------------------------------------------------

greetCurry('안녕! 좋은 아침이야!')('범쌤');

// 위 코드는 아래처럼 처리됩니다.

// [1] 외부함수실행()
// 실행된함수결과 = greetCurry('안녕! 좋은 아침이야!')

// [2] 외부함수실행()이어서내부함수실행()
// 실행된함수결과('안녕! 좋은 아침이야!')