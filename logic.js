/* Pure calculations. No personal data or network calls. */
(function(root){
 const parseDate=s=>{const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d,12)};
 function period(start,month){
  const d=parseDate(start), year=d.getFullYear()-(d.getMonth()+1<month?1:0);
  const first=new Date(d.getFullYear(),d.getMonth()+(d.getDate()===1?0:1),1,12);
  const end=new Date(year+1,month-1,1,12);
  const months=Math.max(0,Math.min(12,(end.getFullYear()-first.getFullYear())*12+end.getMonth()-first.getMonth()));
  return {months,start:new Date(year,month-1,1,12),end:new Date(year+1,month-1,0,12)};
 }
 function curve(k){
  const t=Number(k.target),x=Number(k.actual),hasThreshold=k.threshold!==''&&k.threshold!=null,hasCap=k.cap!==''&&k.cap!=null;
  if(!(t>0)||k.actual===''||k.actual==null)return null;
  const low=Number(k.threshold),cap=Number(k.cap);
  if(hasThreshold&&x<low)return 0;
  if(x<t)return hasThreshold?.5+(x-low)/(t-low)*.5:x/t;
  if(!hasCap)return Math.min(1.5,x/t);
  return x>=cap?1.5:1+(x-t)/(cap-t)*.5;
 }
 function calculate(settings,kpis){
  const p=period(settings.start,Number(settings.fiscalMonth));
  let weight=0,attainment=0,payout=0,active=0;
  kpis.forEach(k=>{weight+=Number(k.weight);const c=curve(k);if(c!==null){active++;payout+=Number(k.weight)/100*c;attainment+=Number(k.weight)/100*Number(k.actual)/Number(k.target)}});
  const target=Number(settings.salary)*Number(settings.bonus)/100*p.months/12;
  const gross=target*payout;
  return {...p,weight,attainment,payout,active,target,gross,net:gross*(1-Number(settings.tax)/100),valid:Math.abs(weight-100)<.01};
 }
 const api={parseDate,period,curve,calculate};root.BonusLogic=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
