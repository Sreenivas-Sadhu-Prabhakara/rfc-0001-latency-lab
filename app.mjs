import {estimate} from './core.mjs';
import './share.mjs';
const $=id=>document.getElementById(id);
const pending=new Set();
function update(clear=false){
  if(clear){for(const id of pending)clearTimeout(id);pending.clear();$('remote').textContent='';}
  try {
    const text=$('message').value, rtt=Number($('rtt').value), r=estimate(text,rtt);
    $('error').textContent='';$('rtt-label').textContent=rtt;$('local').textContent=text;
    const timer=setTimeout(()=>{$('remote').textContent=text;pending.delete(timer);},rtt);pending.add(timer);
    $('remote-budget').textContent=r.remoteMs.toLocaleString();$('local-budget').textContent=r.localMs.toLocaleString();
    $('status').textContent=`${r.characters} code points · ${r.remoteTrips} per-character requests vs ${r.localTrips} batch. ${r.savedTrips} fewer requests in this simplified comparison.`;
  }catch(e){$('error').textContent=e.message;}
}
$('message').addEventListener('input',()=>update());
$('rtt').addEventListener('input',()=>update(true));
$('reset').addEventListener('click',()=>{$('message').value='Hello, world.';$('rtt').value='500';update(true);});
update();
