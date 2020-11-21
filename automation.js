const d=document;
export function display(inputValue,list,container){
  // const $heroName=d.createElement("li"),
  //   $heroFact=d.createElement("li"),
  //   $list=d.createElement("ul");

    inputValue.addEventListener('change',displayMatches);
    inputValue.addEventListener('keyup',displayMatches);


  // for (let hero of list){
  //   if(hero.inputValue.match(regex)) {
  //     // console.log(list[el][0])
  //     let $item=d.createElement("li");
  //     $item.textContent=hero.inputValue;
  //     container.appendChild($item)
  //   }
  // }
  
  function findMatches(wordToMatch,list){
    return list.filter(hero=>{
      let regex=new RegExp(wordToMatch,'gi');
      return hero.name.match(regex)
    })
    
  }

  function displayMatches(){
    const matchArr= findMatches(this.value,list),
      html=matchArr.map(hero=>{
        const regex =new RegExp(this.value,'gi'),
        heroName=hero.name.replace(regex,`<span class="hl">${this.value}</span>`),
        heroFaction=hero.faction.replace(regex,`<span class="hl">${this.value}</span>`);
        return `
        <p>
        <span class="name">${heroName}</span>
        <span class="population">${heroFaction}</span>
        </p>
        `
      }).join("")
      this.value===''? container.innerHTML="":container.innerHTML=html;
  }
}