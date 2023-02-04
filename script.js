let i,j=0,k,p1=0,p2=0,z,t,l=0,m;
let f = [];
for(i=1;i<10;i++)
{
        f[i]=-1;
}
let win = new Audio("Sounds/Winning Sound Effect.mp3");
let click = new Audio("Sounds/Click.mp3");
let draw = new Audio("Sounds/Lose sound effects.mp3");
document.querySelector(".reset").addEventListener("click",function()
{
        for(i=0;i<9;i++)
        {
                img = document.querySelectorAll("img")[i];
                img.src="Images/white.gif";
                f[i+1]=-1;
        }
                j=0;
                document.querySelector(".mode").innerHTML="Vs Com";
                t = document.querySelector(".title");
                t.innerHTML="Click On Any Box To Start!";
                t.style.color="#F8CBA6";
                t.style.textShadow = "1px 2px 2px black";
                p1 = 0;
                p2 = 0;
                z = document.querySelector(".s1");
                z.innerHTML = "Player 1: "+p1;
                z = document.querySelector(".s2");
                z.innerHTML = "Player 2: "+p2;

});
document.querySelector(".mode").addEventListener("click",function()
{
        j = 0;
                for(i=0;i<9;i++)
                {
                img = document.querySelectorAll("img")[i];
                img.src="Images/white.gif";
                f[i+1]=-1;
                }
                t = document.querySelector(".title");
                t.innerHTML="Click On Any Box To Start!";
                t.style.color="#F8CBA6";
                t.style.textShadow = "1px 2px 2px black";
                p1 = 0;
                p2 = 0;
                z = document.querySelector(".s1");
                z.innerHTML = "Player 1: "+p1;

        if(l===0)
        {
                l=1;
                document.querySelector(".mode").innerHTML="Vs P2";
                document.querySelector(".s2").innerHTML="COM: "+p2;
        }
        else if(l===1)
        {
                l=0;
                document.querySelector(".mode").innerHTML="Vs Com";
                document.querySelector(".s2").innerHTML="Player 2: "+p2;
        }
});
for(i=0;i<9;i++)
{
        document.querySelectorAll(".c")[i].addEventListener("click", function(){
               let x = this.classList[1];
               let y = document.querySelector(".title");
                let img = document.querySelectorAll(".img")[x-1];
                if(j===0 && f[x]===-1)
                {
                        click.play();
                        img.src="Images/zero.png";
                        j=1;
                        f[x]=0;
                        k = check();
                        if(k===0)
                        {
                                if(l===0)
                                {
                                y.innerHTML="Player 2's Turn";
                                }
                        y.style.color="#ED3A4E";
                        y.style.textShadow = "1px 2px 2px black";
                        if(l===1)
                        {
                                y.innerHTML="COM's Turn";
                                complay(x);
                        }
                        }
                        else if(k===1)
                        {
                                j=0;
                                win.play();
                                p1=p1+1;
                                y.innerHTML="Player 1 Wins!";
                                y.style.color="#4A66F6";
                                y.style.textShadow = "1px 2px 2px black"
                                z = document.querySelector(".s1");
                                z.innerHTML = "Player 1: "+p1;
                                setTimeout(function(){
                                        for(i=0;i<9;i++)
                                        {
                                                img = document.querySelectorAll("img")[i];
                                                img.src="Images/white.gif";
                                                f[i+1]=-1;
                                                t = document.querySelector(".title");
                                                t.innerHTML="Click On Any Box To Start!";
                                                t.style.color="#F8CBA6";
                                                t.style.textShadow = "1px 2px 2px black"
                                        }
                                },"4000");
                        }
                        else if(k===3)
                        {
                                j = 0;
                                draw.play();
                                y.innerHTML="DRAW!";
                                y.style.color="#F8CBA6";
                                y.style.textShadow = "1px 2px 2px black"
                                setTimeout(function(){
                                        for(i=0;i<9;i++)
                                        {
                                                img = document.querySelectorAll("img")[i];
                                                img.src="Images/white.gif";
                                                f[i+1]=-1;
                                                t = document.querySelector(".title");
                                                t.innerHTML="Click On Any Box To Start!";
                                                t.style.color="#F8CBA6";
                                                t.style.textShadow = "1px 2px 2px black"
                                        }
                                },"4000");
                        }

                }
                else if(j===1 && f[x]===-1 && l===0)
                {
                        click.play();
                        img.src="Images/cross.png";
                        f[x]=1;
                        j=0;
                        k = check();
                        console.log(k);
                        if(k===0)
                        {
                        y.innerHTML="Player 1's Turn";
                        y.style.color="#4A66F6";
                        y.style.textShadow = "1px 2px 2px black"
                        }
                     else if(k===2)
                        {
                                j = 0;
                                win.play();
                                p2=p2+1;
                                y.innerHTML="Player 2 Wins!";
                                y.style.color="#ED3A4E";
                                y.style.textShadow = "1px 2px 2px black";
                                z = document.querySelector(".s2");
                                z.innerHTML = "Player 2: "+p2;
                                setTimeout(function(){
                                        for(i=0;i<9;i++)
                                        {
                                                img = document.querySelectorAll("img")[i];
                                                img.src="Images/white.gif";
                                                f[i+1]=-1;
                                                t = document.querySelector(".title");
                                                t.innerHTML="Click On Any Box To Start!";
                                                t.style.color="#F8CBA6";
                                                t.style.textShadow = "1px 2px 2px black"
                                        }
                                },"4000");
                        }
                        else if(k===3)
                        {
                                j = 0;
                                draw.play();
                                y.innerHTML="DRAW!";
                                y.style.color="#F8CBA6";
                                y.style.textShadow = "1px 2px 2px black";
                                setTimeout(function(){
                                        for(i=0;i<9;i++)
                                        {
                                                img = document.querySelectorAll("img")[i];
                                                img.src="Images/white.gif";
                                                f[i+1]=-1;
                                                t = document.querySelector(".title");
                                                t.innerHTML="Click On Any Box To Start!";
                                                t.style.color="#F8CBA6";
                                                t.style.textShadow = "1px 2px 2px black"
                                        }
                                },"4000");
                        }
                }
                
        });
}
function check()
{         
        if((f[1]===0&&f[2]===0&&f[3]===0)||(f[4]===0&&f[5]===0&&f[6]===0)||(f[7]===0&&f[8]===0&&f[9]===0)||
        (f[1]===0&&f[4]===0&&f[7]===0)||(f[2]===0&&f[5]===0&&f[8]===0)||(f[3]===0&&f[6]===0&&f[9]===0)||
        (f[1]===0&&f[5]===0&&f[9]===0||(f[3]===0&&f[5]===0&&f[7]===0))
        )
        {
                fillboxes();
                return 1;
        }
        else if((f[1]===1&&f[2]===1&&f[3]===1)||(f[4]===1&&f[5]===1&&f[6]===1)||(f[7]===1&&f[8]===1&&f[9]===1)||
        (f[1]===1&&f[4]===1&&f[7]===1)||(f[2]===1&&f[5]===1&&f[8]===1)||(f[3]===1&&f[6]===1&&f[9]===1)||
        (f[1]===1&&f[5]===1&&f[9]===1||(f[3]===1&&f[5]===1&&f[7]===1))
        )
        {
                fillboxes();
                return 2;
        }
        else
        {
                for(i=0;i<10;i++)
                {
                        if(f[i]===-1)
                        {
                                return 0;
                        }
                }
                return 3;
        }

}

function fillboxes()
{
        for(i=1;i<10;i++)
        {
                f[i]=2;
        } 
}
function complay(m)
{
        while(f[m]!==-1)
        {
                m = Math.floor(Math.random()*9)+1;
        }
                y = document.querySelector(".title");
                let img1 = document.querySelectorAll(".img")[m-1];
                        click.play();
                        img1.src="Images/cross.png";
                        f[m]=1;
                        j=0;
                        k = check();
                        if(k===0)
                        {
                        y.innerHTML="Player 1's Turn";
                        y.style.color="#4A66F6";
                        y.style.textShadow = "1px 2px 2px black"
                        }
                     else if(k===2)
                        {
                                j = 0;
                                win.play();
                                p2=p2+1;
                                y.innerHTML="COM Wins!";
                                y.style.color="#ED3A4E";
                                y.style.textShadow = "1px 2px 2px black";
                                z = document.querySelector(".s2");
                                z.innerHTML = "COM: "+p2;
                                setTimeout(function(){
                                        for(i=0;i<9;i++)
                                        {
                                                img = document.querySelectorAll("img")[i];
                                                img.src="Images/white.gif";
                                                f[i+1]=-1;
                                                t = document.querySelector(".title");
                                                t.innerHTML="Click On Any Box To Start!";
                                                t.style.color="#F8CBA6";
                                                t.style.textShadow = "1px 2px 2px black"
                                        }
                                },"4000");
                        }
                        else if(k===3)
                        {
                                j = 0;
                                draw.play();
                                y.innerHTML="DRAW!";
                                y.style.color="#F8CBA6";
                                y.style.textShadow = "1px 2px 2px black";
                                setTimeout(function(){
                                        for(i=0;i<9;i++)
                                        {
                                                img = document.querySelectorAll("img")[i];
                                                img.src="Images/white.gif";
                                                f[i+1]=-1;
                                                t = document.querySelector(".title");
                                                t.innerHTML="Click On Any Box To Start!";
                                                t.style.color="#F8CBA6";
                                                t.style.textShadow = "1px 2px 2px black"
                                        }
                                },"4000");
                        }
                }