const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const name = document.querySelector('.js-name');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function paintName(text) {
  form.classList.remove(SHOWING_CN);
  name.classList.add(SHOWING_CN);
  name.innerText = `Hello ${text}`;
}

function saveName(text) {
  localStorage.setItem(USER_LS,text);
}

function handleSubmit(event) {
  const currentValue = input.value; 

  event.preventDefault(); //submit 이벤트가 발생할때 default한다
  paintName(currentValue); //submit 이벤트 발생 하였을때 input.value를 paint한다
  saveName(currentValue); //localStorage에 저장한다 input.value를
} //submit 관리

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit',handleSubmit);

} //스토로지에서 currentUser가 없을때 SHOWING_CN 추가 하여 물어보기


function niceMeet() {
  const currentUser = localStorage.getItem(USER_LS);

  if(currentUser === null) {
    askForName(); //없을때
  }else {
    paintName(currentUser); //있을때
  }
} // 로컬 스트로지에서 값을 받아오기

function init() {
  niceMeet();
}
init();