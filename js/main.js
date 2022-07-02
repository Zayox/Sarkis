let count = 2;


function leftCarroussel(){
  let leftArt1 = document.getElementById("art1").style.left;
  let leftArt2 = document.getElementById("art2").style.left;
  let leftArt3 = document.getElementById("art3").style.left;
  document.getElementById(`round${count-1}`).style.backgroundColor = "black";
  document.getElementById(`round${count}`).style.backgroundColor = "transparent";
  document.getElementById(`round${count}`).style.border = "solid black 1px";

  document.getElementById("art1").style.left = parseInt(leftArt1)-130 + "vw";
  document.getElementById("art2").style.left = parseInt(leftArt2)-85 + "vw";
  document.getElementById("art3").style.left = parseInt(leftArt3)-65 + "vw";

  document.getElementById("art2").style.transitionDuration = 2.5 + "s";

  count--;
}

function rightCarroussel(){
  let leftArt1 = document.getElementById("art1").style.left;
  let leftArt2 = document.getElementById("art2").style.left;
  let leftArt3 = document.getElementById("art3").style.left;
  document.getElementById(`round${count+1}`).style.backgroundColor = "black";
  document.getElementById(`round${count}`).style.backgroundColor = "transparent";
  document.getElementById(`round${count}`).style.border = "solid black 1px";

  document.getElementById("art1").style.left = parseInt(leftArt1)+130 + "vw";
  document.getElementById("art2").style.left = parseInt(leftArt2)+85 + "vw";
  document.getElementById("art3").style.left = parseInt(leftArt3)+65 + "vw";

  document.getElementById("art2").style.transitionDuration = 1.5 + "s";
  count++;
}
