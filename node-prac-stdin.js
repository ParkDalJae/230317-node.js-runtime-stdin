// process.stdin.setDefaultEnconding('utf8');
console.log('쓰고싶은 문자를 쓰세요')
//node.js가 지원하는 on()이벤트를 사용하여 데이터를 받아온다.
process.stdin.on('data',function(data){
  console.log("on() 이벤트로 진행된 데이터 :", data.toString())
  // process.stdout.write(data);
  // process.exit();
})

/*
* *본 예제는 마치 '그래픽처리'가 없는 시대의 컴퓨팅 환경에서
* *컴퓨터에게 '명령이 아닌','문자열'을 전달하는 행위,
* *즉, 입력하는 행위를 진행하는 예입니다.
* *다른 방식도 시도해보도록 주석처리로 다른 접근을 함께 소개합니다.
*/