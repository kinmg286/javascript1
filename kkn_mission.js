<변수와 자료형>
아래 1번부터 10번까지 문제에 대한 답을 적으시오.

  1번.변수 선언하기(declaration)
변수(Variable)는 이름이 붙은 저장소를 의미합니다.자바스크립트(그리고 다른 컴퓨터 언어에서도) 변수는 컴퓨터 메모리에 자리를 잡게 되고, 여러 값을 넣을 수 있습니다.이렇게 하나의 변수가 자리 잡는 동작을 "변수를 선언(Declaration)한다." 라고 합니다.
변수를 선언하기 위해서는 let 키워드를 사용합니다.예를 들어, 이름이 word라는 변수를 선언하는 방법은 아래와 같습니다.
  let word;
선언은 이제 여기는 내 땅이야! 라고 "선언"하는 동작입니다.즉, word라는 저장소를 만드는 작업을 배운겁니다.이번에는 course라는 변수를 선언해봅시다!

문제: 키워드 let을 사용하여 변수 course를 선언하세요.

let course; 



  2번.변수에 값 할당하기(Assignment)
우리는 이제 막 변수를 선언했습니다.어떤 값(value)를 넣을 수 있는 자리를 컴퓨터 메모리에 미리 잡아두었다는 의미입니다.그렇다면 어떤 값을 넣는 것은 어떻게 할까요 ? 잡아놓은 word이라는 빈 자리에 무언가를 넣는 작업을 변수에 값을 할당한다 라고 합니다.변수 뒤에 = 연산자를 쓰고, = 뒤에 할당하고자 하는 값을 넣으실 수 있습니다.
let word; // word 변수 선언 ← 핵심임
word = 'Branden'; // word 변수에 문자열 'Branden' 할당
워낙 자주 사용되는 코드라서, 선언과 할당을 한 줄에 작성할 수도 있습니다. (let word = "Branden";) 그렇다면 선언을 하지 않고 할당을 시도하면 어떻게 될까요 ? 당연히 Javascript World에 아무것도 없기 때문에 할당을 할 수 없어서 에러가 나게 됩니다.새 창을 열고 F12나 cmd + option + i를 눌러서 크롬 개발자 콘솔에서 한번 연습해보기를 권합니다.

  문제 : 선언되어 있는 변수 course에 문자열 'code states'를 할당하세요.

let course = 'code states';
course




  3번.값의 표현(expression)
표현식(expression)은 하나의 값으로 표현되는 코드를 의미합니다.우리는 수학에서 1 + 1이 무엇을 의미하는지 굳이 확인하지 않아도 잘 알고 있습니다. 2를 표현 하고 있습니다.자바스크립트도 이러한 글자, 숫자, 기호를 한 글자씩 "독해"하여 하나의 값으로 컴파일(compile)합니다.크롬 콘솔창에서 1 + 1을 입력해보시면 어떤 값으로 컴파일 되는지 알 수 있습니다.
표현식은 변수로 구성되기도 합니다.중학교 수학 시간에 배운 거속시라는 말이 기억이 나실지 모르겠습니다. (저만..?) 우리가 speed와 distance를 알고 있다면, time을 구할 수 있습니다.한시간에 5km를 달리는 Runcat이 10km를 가기 위해서는 ? 2시간이 걸릴 것입니다.다만 자연어를 이해하지 못하는 자바스크립트가 이를 계산하기 위해서는 아래와 같은 코드가 필요합니다.
let speed, distance, time;
speed = 5;
distance = 10;
time = distance / speed; // JS : speed와 distance의 값을 조회하여, `/` 연산자와 함께 컴파일 한다!

문제: 변수 num1에 숫자 5를 할당하고, 변수 num2에 숫자 7을 할당한 후, 변수 result에 숫자 num1과 숫자 num2의 곱을 할당합니다.

let num1, num2, result;
num1 = 5;
num2 = 7;
result = num1 * num2;


  4번.함수(function)
조금 더 좁게 이야기 하자면, 함수는 입력(input)을 받아 출력(output)을 하는 하나의 작은 기능 단위입니다.
가장 단순한 덧셈 문제를 풀어보겠습니다.두 개의 숫자를 더하는 함수는 다음과 같습니다.
function sum(num1, num2) {
  let result;
  result = num1 + num2;
  return result;
}
let output = sum(1, 2);   // 3 (값을 구하거나 문제푸는도중 생각나는것을 적을땐 //를 사용함!)

문제: 속력 speed, 시간 time 이 숫자로 주어졌을 때, 이동한 거리를 변수 distance에 할당하여 리턴하는 getRunCatDistance 함수를 작성하세요.

function getRunDogDistance(speed, time) {
    let distance = speed * time;
    return distance;
}
getRunDogDistance(1,2)

