function showIfTheyAreSimilar() {
  var isSimilar = true;

  let words1 = document.getElementById('wordsOne').value.split(',');
  let words2 = document.getElementById('wordsTwo').value.split(',');

  for (let i in words1) {
      if (words1[i] !== words2[i]) {
        isSimilar = false;
        break;
    }
  }

  isSimilar
    ? (resultSimilarArrays.innerText = '"' + words1 + '"' + ' and ' + '"' + words2 + '"' + ' are similar')
    : (resultSimilarArrays.innerText = '"' + words1 + '"' + ' and ' + '"' + words2 + '"' + ' are different');

    wordsOne.value = '';
    wordsTwo.value = '';
    
}
