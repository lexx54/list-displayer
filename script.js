import { display } from "./automation.js";
import blankFiller from "./filler.js";

const d=document,
  input=d.getElementById('test'),
  suggestValue=d.getElementById('show'),
  heroList=[
    {name:'lucius',faction:"lightbearer"},
    {name:'belinda', faction:'lightbearer'},
    {name:'shemira',faction:'graveborn'},
    {name:'ferael',faction:"graveborn"},
    {name:'eiroon',faction:'wilder'},
    {name:'lyca',faction:'wilder'},
    {name:'tidus',faction:'mauler'},
    {name:'brutus',faction:'mauler'},
    {name:'talene',faction:'celestial'},
    {name:'twins',faction:'celestial'},
    {name:'ezizh',faction:'hypogean'},
    {name:'mezoth',faction:'hypogean'}
  ];
  

  d.addEventListener('DOMContentLoaded',e=>{
    display(input,heroList,suggestValue);
    
  })
  d.addEventListener("click",e=>{
    blankFiller(e,input)
  })