function focus1(x) {
  // x.style.background = "lightblue";
  x.style.color = "white";
}

function search(x) {
  // 
}

function enterLine(x){
  var event;
  if(window.event){event = window.event;}
  if(event.keyCode == 13){
  	document.getElementById('outcome').style.display = "block";
    document.getElementById('outcome').value = x.value;
    // document.getElementById('id_name').style.display = "block|none";
    document.getElementById('name').style.display = "none";
  }
}

function searchkey(x) {
  var key = x.value;
  if(key == ""){
    document.getElementById('search-default').style.display = "block";
    document.getElementById('search-result').style.display = "none";
    
    document.getElementById("demo").style.display = "none";
  }
  else{
    document.getElementById('search-default').style.display = "none";
    document.getElementById('search-result').style.display = "block";

    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML = "You wrote: " + key;
    document.getElementById("demo").style.color = "white";
  }
  // document.getElementById("demo").innerHTML = "You wrote: " + key;
}