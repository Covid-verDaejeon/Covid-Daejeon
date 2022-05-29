let logo = document.querySelector('.logo')
let gitBtn = document.querySelector('.git')

logo.onclick = function() {
  document.querySelector('.git-card').classList.remove('card-item');
  document.querySelector('.content-wrap').classList.add(' show')

}

gitBtn.onclick = function() {
  document.querySelector('.git-card').classList.add('card-item');
  document.querySelector('.content-wrap').classList.remove('show');
}

