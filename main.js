setInterval(() => {
  // 現在時間を取得
  const now = new Date();

  // 時間の数値を取得
  const h = now.getHours(); // 時間(0〜23)
  const m = now.getMinutes(); // 分(0〜59)
  const s = now.getSeconds(); // 秒(0〜59)

  // 針の角度に反映する

  // 短針 (短針は時間だけでなく分も角度に考慮する)
  const degH = h * (360 / 12) + m * (360 / 12 / 60);
  // 分針
  const degM = m * (360 / 60);
  // 秒針
  const degS = s * (360 / 60);

  const elementH = document.querySelector('.lineHour');
  const elementM = document.querySelector('.lineMin');
  const elementS = document.querySelector('.lineSec');

  elementH.style.transform = `rotate(${degH}deg)`;
  elementM.style.transform = `rotate(${degM}deg)`;
  elementS.style.transform = `rotate(${degS}deg)`;
}, 50);

  // 現在時刻を表示
function showClock1() {
   var nowTime = new Date();
   var nowHour = nowTime.getHours();
   var nowMin  = nowTime.getMinutes();
   var nowSec  = nowTime.getSeconds();
   var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
   document.getElementById("RealtimeClockArea").innerHTML = msg;
}
setInterval('showClock1()',1000);


// スクリプト開始時の時間を記録
const oldTime = Date.now();

setInterval(() => {
  const currentTime = Date.now();
  const diff = currentTime - oldTime;
  const sec = Math.floor(diff / 1000);
  document.getElementById("elapsed time").innerHTML = `ページを開いて${sec}秒が経過。`;
}, 1000);
