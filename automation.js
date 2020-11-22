const d=document;
export function display(inputValue,list,container){
    inputValue.addEventListener('change',displayMatches);
    inputValue.addEventListener('keyup',displayMatches);

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
        <p class="hero-info" id="${hero.name}">
        <span class="name info">${heroName}</span>
        <span class="faction info">${heroFaction}</span>
        </p>
        `
      }).join("")
      this.value===''? container.innerHTML="":container.innerHTML=html;
  }
}