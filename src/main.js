const string = `/*你好，接下来我将画一个哆啦A梦的头像*/
.clearfix {
  content: "";
  display: block;
  clear: both;
}

/*先把脸部画出来*/
.face_01 {
  margin: 5px auto;
  position: relative;
  width: 420px;
  height: 400px;
  background-color: #1E90FF;
  border: 2px solid #000;
  border-radius: 47% 47% 45% 45%;
}

.face_02 {
  position: absolute;
  bottom: 0;
  left: 30px;
  width: 360px;
  height: 300px;
  background-color: #FFF;
  border: 2px solid #000;
  border-radius: 50% 50% 45% 45%;

}

/*然后画两个眼睛*/
.eye_box {
  position: absolute;
  top: -45px;
  right: 90px;
  width: 180px;
  height: auto;
}

.big_eye_left,
.big_eye_right {
  width: 90px;
  height: 110px;
  background-color: #FFF;
  border: 2px solid #000;
  border-radius: 46%;
}

.big_eye_left {
  float: left;
}

.big_eye_right {
  float: right;
}

.small_eye_left,
.small_eye_right {
  position: absolute;
  top: 60px;
  width: 20px;
  height: 20px;
  background-color: #000;
  border-radius: 50%;
}

.small_eye_left {
  left: 60px;
}

.small_eye_right {
  right: 60px;
}

/*然后画一个红红的大鼻子*/
.nose_01 {
  position: absolute;
  top: 47px;
  left: 151px;
  width: 50px;
  height: 50px;
  background-color: #FF0000;
  border: 2px solid #000;
  border-radius: 50%;
}

.nose_01_shadow {
  position: absolute;
  top: 10px;
  left: 25px;
  width: 15px;
  height: 15px;
  background-color: #FFF;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, .4);
}

.nose_02 {
  height: 130px;
  width: 2px;
  position: absolute;
  top: 95px;
  left: 176px;
  border-left: 2px solid #000;
}

/*然后画一个嘴巴*/
.mouth {
  position: absolute;
  top: 25px;
  left: 60px;
  height: 200px;
  width: 240px;
  border-bottom: 2px solid #000;
  border-radius: 0 0 45% 45%;
}

/*然后画左右两侧的胡须*/
.whisker_left,
.whisker_right {
  position: absolute;
  top: 60px;
  width: 180px;
  height: 180px;
}

.whisker_left {
  left: 0;
}

.whisker_right {
  right: 0;
}

.whisker_left span:nth-child(1),
.whisker_right span:nth-child(1) {
  position: absolute;
  top: 30px;
  height: 60px;
  width: 100px;
  border-top: 2px solid #000;
}

.whisker_left span:nth-child(1) {
  left: 30px;
  -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
}

.whisker_right span:nth-child(1) {
  right: 30px;
  -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
}

.whisker_left span:nth-child(2),
.whisker_right span:nth-child(2) {
  position: absolute;
  top: 60px;
  height: 60px;
  width: 100px;
  border-top: 2px solid #000;
}

.whisker_left span:nth-child(2) {
  left: 35px;
}

.whisker_right span:nth-child(2) {
  right: 35px;
}

.whisker_left span:nth-child(3),
.whisker_right span:nth-child(3) {
  position: absolute;
  top: 90px;
  height: 60px;
  width: 100px;
  border-top: 2px solid #000;
}

.whisker_left span:nth-child(3) {
  left: 50px;
  -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
}

.whisker_right span:nth-child(3) {
  right: 50px;
  -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
}

/*然后画脖子上的叮当球*/
.collar {
  position: absolute;
  top: 350px;
  left: 50px;
  width: 320px;
  height: 50px;
  background-color: #FF0000;
  border: 2px solid #000;
  border-radius: 30px;
}

.bell_01 {
  position: absolute;
  top: 15px;
  left: 130px;
  width: 60px;
  height: 60px;
  background-color: #FFFF00;
  border: 2px solid #000;
  border-radius: 50%;
}

.bell_02 {
  position: absolute;
  top: 17px;
  left: 1px;
  width: 53px;
  height: 18px;
  border-top: 2px solid #000;
}

.bell_03 {
  position: absolute;
  top: 22px;
  left: 0;
  width: 57px;
  height: 23px;
  border-top: 2px solid #000;
}

.bell_04 {
  position: absolute;
  top: 30px;
  left: 20px;
  width: 15px;
  height: 10px;
  background-color: #000;
  border-radius: 50%;
}

.bell_05 {
  position: absolute;
  top: 37px;
  left: 27px;
  width: 30px;
  height: 20px;
  border-left: 2px solid #000;
}
/*这样一个哆啦A梦的头像就画完了，谢谢观看！*/`

let string2 = ``
let i = 0
let delay = 100
const step=()=>{
  let id = setTimeout(()=>{
    if (string[i]==="\n"){
      string2+="<br>"
    }else if (string[i]===" "){
      string2+="&nbsp"
    }else {
      string2+=string[i]
    }
    i+=1
    html.innerHTML = string2
    style.innerHTML = string.substring(0,i)
    html.scrollTop = 999999
    if (i<string.length){
      step()
    }
  },delay)
  btnPause.onclick = ()=>{
    window.clearTimeout(id)
  }
  btnPlay.onclick = ()=>{
    step()
  }
  btnSlow.onclick = () => {
    delay = 300
  }
  btnNormal.onclick= ()=>{
    delay = 100
  }
  btnFast.onclick=()=>{
    delay = 10
  }
}
step();