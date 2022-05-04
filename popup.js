const fs = require('fs');
const request = require('request');

const clientId = '0qt2lgz4e2';
const clientSecret = 'TPUEQWWRcydii4r7SZ3ELiXW8YcrYGlokFVyrHSy';



stt('Kor', 'demo.mp3)');

// 페이지가 완전히 로딩된 후 함수 실행
//window.onload = sayHello;




// language => 언어 코드 ( Kor, Jpn, Eng, Chn )
function stt(language, filePath) {
    const url = `https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=Kor`;
    const requestConfig = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/octet-stream',
            'X-NCP-APIGW-API-KEY-ID': clientId,
            'X-NCP-APIGW-API-KEY': clientSecret
        },
        body: fs.createReadStream(filePath)
    };

    request(requestConfig, (err, response, body) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(response.statusCode);
        console.log(body);
    });
}


//getData.js
function getValueInText() {
    let inputData = document.getElementById("data1").value;
    alert(inputData);
}


function sayHello() {
    document.body.innerText = "Hello, World!";
}
