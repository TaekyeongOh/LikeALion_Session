const num = 100;

if(num == 100) {
    document.write("실행되었습니다.(true)");
}

if(num == 100) document.write("실행되었습니다.(true)");

if(num == 100) document.write("실행되었습니다.(true)");
else document.write("실행되었습니다.(false)");

//삼항 연산자(조건식 연산자)

(num == 100) ? document.write("true"): document.write(false);