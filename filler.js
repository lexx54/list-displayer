const d=document;

export default function blankFiller(e,input){
  
  // if (e.target.matches(".hero-info")||e.target.matches(".info")) console.log(e.srcElement.id);
  if (e.target.matches(".hero-info")) {
    input.value=e.srcElement.innerText;
    console.log(e.srcElement.innerText)
    d.getElementById('show').innerHTML=""
  };
  if (e.target.matches(".info")){
    input.value=e.srcElement.parentElement.innerText;
    console.log(e.srcElement.parentElement.innerText)
    d.getElementById('show').innerHTML=""



    //  console.log(e.srcElement.parentElement.innerText);
  }
}