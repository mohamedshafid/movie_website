

const ul=document.querySelector('ul');
const runner=document.getElementById("runner");
const bar=document.getElementById('bar');
bar.addEventListener('click',()=>
{
    runner.style.display="none";
     ul.classList.toggle('links');
})
var leocount=0;
var jailercount=0;
var jawancount=0;
const leo=document.getElementById("leosong");
const jailer=document.getElementById("jailersong");
const jawan=document.getElementById("jawansong");
function playsong()
{
    var song=event.target.id;
     if(song=="leo")
     {
         if(leocount==0)
        {
          leocount=1;
          leo.play();
        }
        else{
          leocount=0;
          leo.pause();
        }
     }
     else if(song=="jailer")
     {
         console.log("jailer")
         if(jailercount==0)
         {
          jailercount=1;
          jailer.play();
         }
         else{
          jailercount=0;
          jailer.pause();
         }
     }
     else if(song=="jawan")
     {
         if(jawancount==0)
         {
          jawancount=1;
          jawan.play();
         }
         else{
          jawancount=0;
          jawan.pause();
         }
     }
}
var current=6;
const trending=document.getElementById("trending");
const leftarrow=document.getElementById("left");
const rightarrow=document.getElementById("right");
leftarrow.addEventListener("click",()=>
{
    if(current==0)
    {
      current=6;
    }
     trending.style.background=`linear-gradient(to top, rgba(41, 35, 35, 0.8) , rgba(0, 0, 0, 0.4) , rgba(0, 0, 0, 0.8)  ),url('./Assets/movie image/${current}.jpeg')`;
     trending.style.backgroundSize="cover";
     trending.style.backgroundPosition="top";
     trending.style.backgroundRepeat="no-repeat";
     current--;
})
rightarrow.addEventListener("click",()=>
{
  if(current==7)
  {
    current=1;
  }
  trending.style.background=`linear-gradient(to top, rgba(41, 35, 35, 0.8) , rgba(0, 0, 0, 0.4) , rgba(0, 0, 0, 0.8)  ),url('./Assets/movie image/${current}.jpeg')`;
  trending.style.backgroundSize="cover";
  trending.style.backgroundPosition="top";
  trending.style.backgroundRepeat="no-repeat";
  current++;
})

// login
const login=document.getElementById("login");
const loginbtn=document.getElementById("loginbutton");
loginbtn.addEventListener("click",()=>{
  login.classList.add("logindown");
})

const xmark=document.getElementById("xmark");
xmark.addEventListener("click",()=>{
  login.classList.remove("logindown");
}
)


