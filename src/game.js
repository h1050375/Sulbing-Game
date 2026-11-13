(function(root){
const menus=[
 {id:'pat',name:'팥인절미설빙',price:10900,emoji:'🫘',color:'#ae8255',image:'https://sulbing.com/new/data/product/product_large_nebrzzc.png',source:'https://sulbing.com/menu/menu_view.php?menu=90',recipe:['우유 눈꽃','콩가루','빙수팥','인절미떡']},
 {id:'mango',name:'애플망고치즈설빙',price:14500,emoji:'🥭',color:'#f0b53d',image:'https://sulbing.com/new/data/product/product_large_qccitgt.png',source:'https://sulbing.com/menu/menu_view.php?menu=88',recipe:['우유 눈꽃','큐브치즈케이크','애플망고','요거트 아이스크림']},
 {id:'berry',name:'생딸기설빙',price:13900,emoji:'🍓',color:'#d85665',image:'assets/strawberry-reference.png',source:'https://sulbing.com/data/file/owner/2950102933_VXwOLcq4_EB94B8EAB8B0EC8BA0EBA994EB89B4_EAB3B5ECA780.pdf',recipe:['우유 눈꽃','딸기','찹쌀떡','빙수팥']},
 {id:'choco',name:'허쉬초코크런치설빙',price:15500,emoji:'🍫',color:'#674339',image:'https://sulbing.com/new/data/product/product_large_xjnprcp.png',source:'https://sulbing.com/menu/menu_view.php?menu=166',recipe:['우유 눈꽃','허쉬초코미니칩','허쉬미니쿠키','허쉬초코와플','허쉬초코젤라또']}
];
const roles=['신입 알바생','베테랑 알바생','매니저','부사장','사장'];
// 공개 주소를 기준으로 한 인근 후보의 대략적 직선거리 순서. 전국 전 매장 순위는 미확인.
const branches=['성신여대점','청량리점','월곡역점','동대문점'];
const names=['김민준','이서연','박지호','최하윤','정도윤','강서준','조수빈','윤지우','장예린','임시우','한유진','오지민'];
const money=n=>n.toLocaleString('ko-KR')+'원';
function quantity(r=Math.random()){return r<.95?1:2}
function makeOrder(number,rng=Math.random,specialChance=.25){const pool=[...menus];const count=rng()<.9?1:2;const lines=[];for(let i=0;i<count;i++){const index=Math.floor(rng()*pool.length);lines.push({id:pool.splice(index,1)[0].id,qty:quantity(rng()),done:0})}return {number,name:names[Math.floor(rng()*names.length)],lines,special:rng()<specialChance,remaining:90000}}
const defaults={orderSeconds:7.5,promotionStep:200000,branchStep:800000};
function normalizeSettings(s={}){const number=(value,min,max,step,fallback)=>Number.isFinite(value)?Math.round(Math.max(min,Math.min(max,value))/step)*step:fallback;return {orderSeconds:number(s.orderSeconds,5,15,.5,7.5),promotionStep:number(s.promotionStep,100000,300000,10000,200000),branchStep:number(s.branchStep,400000,1200000,100000,800000)}}
function orderDelay(settings=defaults,r=Math.random()){return (settings.orderSeconds-2.5+r*5)*1000}
function role(revenue,settings=defaults){return roles[Math.min(4,Math.floor(revenue/settings.promotionStep))]}
function milestones(revenue,settings=defaults){const p=settings.promotionStep,b=settings.branchStep,boss=4*p;const list=roles.map((name,i)=>({key:'role'+i,name,at:i*p}));const count=Math.max(0,Math.floor((revenue-boss)/b));for(let i=0;i<count;i++)list.push({key:'branch'+i,name:branches[i]||`확장 ${i+2}호점`,at:boss+(i+1)*b});return list.filter(x=>revenue>=x.at)}
function nextGoal(revenue,settings=defaults){const p=settings.promotionStep,b=settings.branchStep,boss=4*p;if(revenue<boss){const i=Math.floor(revenue/p)+1;return {at:i*p,name:roles[i]}}const i=Math.floor((revenue-boss)/b);return {at:boss+(i+1)*b,name:branches[i]||`확장 ${i+2}호점`}}
function addIngredient(menu,steps,ingredient){return menu.recipe[steps.length]===ingredient?{steps:[...steps,ingredient],error:false}:{steps,error:true}}
const api={menus,roles,branches,money,quantity,makeOrder,role,milestones,nextGoal,addIngredient,defaults,normalizeSettings,orderDelay};root.Game=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
