// ================== EDIT THESE ==================
const birthdayName = "Buggu";
const yourName = "Guggu";
const birthdayMessage = `Happy Birthday,Vijju. ❤️

Every moment with you feels like a little piece of magic. Thank you for every smile, every memory, every conversation and every little thing that makes you, you.

I hope this new chapter brings you everything your heart wishes for. I hope you laugh more, dream bigger, and always remember how deeply loved you are.

Today is your day — but honestly, I feel lucky every day simply because you are in my life. Happy Birthday, Handsome Buggu. ❤️`;
// ===============================================

document.querySelectorAll(".name").forEach(x=>x.textContent=birthdayName);
document.getElementById("sender").textContent=yourName;
document.getElementById("message").textContent=birthdayMessage;

function openEnvelope(){
  document.getElementById("opening").classList.add("hidden");
  document.getElementById("intro").classList.remove("hidden");
  document.getElementById("intro").scrollIntoView({behavior:"smooth"});
  burst(20);
}
function go(id){document.getElementById(id).scrollIntoView({behavior:"smooth"});burst(8)}
function blowCandle(){
  document.getElementById("flame").style.display="none";
  document.getElementById("wish").classList.remove("hidden");
  burst(35);
}
const audio=document.getElementById("audio"), btn=document.getElementById("musicBtn");
async function music(){
  try{if(audio.paused){await audio.play();btn.textContent="⏸ Pause Our Song"}else{audio.pause();btn.textContent="🎵 Play Our Song"}}
  catch(e){alert("Add your MP3 as music/birthday-song.mp3 first.");}
}
function burst(n){
  for(let i=0;i<n;i++)setTimeout(()=>{
    const x=document.createElement("span");x.className="float";x.textContent=Math.random()>.45?"♥":"♡";
    x.style.left=Math.random()*100+"vw";x.style.fontSize=(14+Math.random()*30)+"px";x.style.animationDuration=(4+Math.random()*4)+"s";
    document.body.appendChild(x);setTimeout(()=>x.remove(),8500)
  },i*40)
}
function celebrate(){burst(80);document.getElementById("opening").classList.remove("hidden");document.getElementById("intro").classList.add("hidden");document.getElementById("opening").scrollIntoView({behavior:"smooth"})}
setInterval(()=>burst(1),1500);
