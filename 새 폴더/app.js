let mainBtn = document.querySelector('.logo');
let mainBtnBox = document.querySelector('.content-wrap')
let gitBtn = document.querySelector('.git');
let gitCard = document.querySelector('.git-card'); 


mainBtn.onclick =  function(){
  gitCard.style.display = "none" ;
  mainBtn.style.display = 'block';
}

gitBtn.onclick = function() {
  gitCard.style.display = "block" ;
  mainBtnBox.style.display = "none" ;
}