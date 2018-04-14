function getFirstSelector(selector){
  var query = document.querySelector(selector)
  return query
}

function nestedTarget(){
  var query = document.getElementById('nested').querySelector('.target')
  return query
}

function increaseRankBy(n){
  var query = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(var i = 0; i < query.length; i++){
    query[i].innerHTML = parseInt(i + n ) 
  }
}