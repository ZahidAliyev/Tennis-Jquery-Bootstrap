(()=>{"use strict";const t=document.querySelector("#tennis"),e=t.getContext("2d"),i=document.querySelector(".game_container");let o=i.offsetWidth,h=i.offsetHeight;t.width=o,t.height=h;let n=t.width,s=t.height;const c={x:n/2,y:s/2,radius:10,color:"red",speed:5,xDirection:Math.random()<.5?1:-1,yDirection:Math.random()<.5?1:-1,velocityX:5,velocityY:5,setSpeed:function(t){this.speed=t},setBallDirectionToRandom:function(){this.velocityX*=this.xDirection,this.velocityY*=this.yDirection},resetBallXPosition:function(){this.x=n/2},resetBallYPosition:function(){this.y=s/2},changeBallXDirection:function(){this.velocityX=-this.velocityX},makeBallRandomSpeed:function(t,e){var i,o;this.speed=(i=t,o=e,i=Math.ceil(i),o=Math.floor(o),Math.floor(Math.random()*(o-i))+i)},angleChangeFromHit:function(t,e){this.velocityX=this.speed*Math.cos(t)*e,this.velocityY=this.speed*Math.sin(t)},speedAddAfterHit:function(t){this.speed+=t},Move:function(){this.x+=this.velocityX,this.y+=this.velocityY,(this.y-this.radius<0||this.y+this.radius>s)&&(this.velocityY=-this.velocityY)}},l={height:100,x:0,y:s/2-50,width:10,color:"white",score:0,setScore:function(t){this.score=t},addScore:function(t){this.score+=t},mouseMove:function(e){let i=t.getBoundingClientRect();this.y=e.clientY-i.top-this.height/2},keyMove:function(){this.y<0?this.y=0:this.y+this.height>s?this.y=s-this.height:(W&&(this.y-=15),H&&(this.y+=15))}},r={height:100,x:n-10,y:s/2-50,width:10,color:"white",score:0,setScore:function(t){this.score=t},addScore:function(t){this.score+=t},keyMove:function(){this.y<0?this.y=0:this.y+this.height>s?this.y=s-this.height:(T&&(this.y-=15),R&&(this.y+=15))}},d={height:100,x:n-10,y:s/2-50,width:10,color:"white",score:0,computerLevel:.05,setComputerLevel:function(t){this.computerLevel=t},setScore:function(t){this.score=t},addScore:function(t){this.score+=t},move:function(){this.y<0?this.y=0:this.y+this.height>s?this.y=s-this.height:this.y+=(c.y-(this.y+this.height/2))*this.computerLevel}};let a=!1,u=!1,f=!1,y=!1,w=!1,g=!0,p=!1,m=!1;function v(){d.setScore(0),l.setScore(0),g?d.setComputerLevel(.05):p?d.setComputerLevel(.25):m&&d.setComputerLevel(.5)}function x(){console.log("resetState"),f=!1,p=!1,m=!1,a=!1,u=!1,y=!1,arguments[0].setScore(0),arguments[1].setScore(0),arguments[2].setScore(0),d.setComputerLevel(.05),c.setSpeed(5)}const S=new Audio("../src/tennis/sounds/hit.mp3"),M=new Audio("../src/tennis/sounds/tennisMusic.mp3"),k=()=>S.play();let P="Off";M.volume=.1;let L=!0,C="Off";function B(t,e,i){i.x-i.radius<0?(e.addScore(1),b()):i.x+i.radius>n&&(t.addScore(1),b())}function X(t,e){return e.top=e.y,e.bottom=e.y+e.height,e.left=e.x,e.right=e.x+e.width,t.top=t.y-t.radius,t.bottom=t.y+t.radius,t.left=t.x-t.radius,t.right=t.x+t.radius,t.right>e.left&&t.top<e.bottom&&t.left<e.right&&t.bottom>e.top}function b(){c.resetBallXPosition(),c.resetBallYPosition(),c.changeBallXDirection(),c.setSpeed(5)}let Y=!0,A=!1,O=!1,D=!1,W=!1,H=!1,T=!1,R=!1,E=!1,F=!1;const K=()=>O=!1;function q(t,e,i,o,h,n){t.code===e&&(W=n),t.code===i&&(H=n),t.code===o&&(T=n),t.code===h&&(R=n)}function N(t,e,i,o,h,c,l){return t.offsetX>=n/e*o&&t.offsetX<=n/e*h&&t.offsetY>=s/i*c&&t.offsetY<=s/i*l}function I(t){O&&l.mouseMove(t)}function _(t){D&&q(t,"KeyW","KeyS","Numpad8","Numpad2",!0)}function G(t){D&&q(t,"KeyW","KeyS","Numpad8","Numpad2",!1)}function j(t){"KeyP"===t.code&&(A=!A)}function z(t){Y&&(N(t,10,12,4,6,3,4)&&(O=!0,Y=!1),N(t,10,12,4,6,4,5)&&(D=!0,Y=!1,console.log("menuClick -> localTwoPlayers",D)),N(t,10,12,4,6,6.5,7)&&(Y=!1,E=!0)),w&&N(t,10,12,3.8,6,5,6)&&(Y=!0,x(r,l,d),w=!1),E&&(N(t,10,12,3.8,6,5.5,6.5)&&(Y=!0,E=!1),N(t,10,12,3.8,6,3,4.2)&&(console.log("music"),F?(F=!1,console.log("menuClick -> musicTurnOn",F)):(F=!0,console.log("menuClick -> musicTurnOn",F))),N(t,10,12,3.8,6,4.2,5)&&(console.log("sounds"),L=!L)),A&&N(t,10,12,3.8,8,6,7)&&(Y=!0,A=!1,O=!1,D=!1,x(r,l,d),b())}function J(){if(O){if(A)return;!function(){c.Move(),d.move();let t=c.x<n/2?l:d;if(X(c,t)){k(),console.log(S);let e=(c.y-(t.y+t.height/2))/(t.height/2)*Math.PI/4,i=c.x<n/2?1:-1;c.angleChangeFromHit(e,i),c.speedAddAfterHit(.4)}B(l,d,c)}(),3!==l.score&&3!==d.score||(3===l.score?g?(g=!1,p=!0,v()):p?(p=!1,m=!0,v()):m&&(g=!0,v(),y=!0,f=!1,K(),w=!0):(g=!0,f=!0,y=!1,K(),w=!0),v())}if(D){if(A)return;!function(){c.Move(),l.keyMove(),r.keyMove();let t=c.x<n/2?l:r;if(X(c,t)){k();let e=(c.y-(t.y+t.height/2))/(t.height/2)*Math.PI/4,i=c.x<n/2?1:-1;c.angleChangeFromHit(e,i),c.speedAddAfterHit(.4)}B(l,r,c)}(),3!==l.score&&3!==r.score||(3===l.score?(a=!0,u=!1):(u=!0,a=!1),l.setScore(0),r.setScore(0),D=!1,w=!0)}F?(M.play(),P="Off"):(M.pause(),P="On"),L?(S.volume=.2,C="Off"):(S.volume=0,C="On")}function Q(t,i,o,h,n){e.beginPath(),e.fillStyle=n,e.fillRect(t,i,o,h),e.fill(),e.closePath()}function U(t,i,o,h){e.beginPath(),e.arc(t,i,o,0,2*Math.PI,!0),e.fillStyle=h,e.fill(),e.closePath()}function V(t,i,o,h){e.fillStyle=h,e.fillText(t,i,o)}c.setBallDirectionToRandom(),window.onload=function(){requestAnimationFrame((function i(){J(),O&&(e.font="60px fantasy",Q(0,0,t.width,t.height,"black"),Q(l.x,l.y,l.width,l.height,l.color),Q(d.x,d.y,d.width,d.height,d.color),V(l.score,t.width/4,t.height/6,"white"),V(d.score,3*t.width/4,t.height/6,"white"),e.font="30px fantasy",g?V("Lvl 1",2*t.width/4,t.height/6,"white"):p?V("Lvl_2",2*t.width/4,t.height/6,"white"):m&&V("Lvl_3",2*t.width/4,t.height/6,"white"),U(c.x,c.y,c.radius,c.color),A&&(e.font="40px fantasy",V("Pause",t.width/10*4,t.height/12*6,"white"),V("Back to Menu",t.width/10*4,t.height/12*7,"white"))),D&&(console.log("2 player Draw"),e.font="60px fantasy",Q(0,0,t.width,t.height,"black"),Q(l.x,l.y,l.width,l.height,l.color),Q(r.x,r.y,r.width,r.height,r.color),V(l.score,t.width/4,t.height/6,"white"),V(r.score,3*t.width/4,t.height/6,"white"),U(c.x,c.y,c.radius,c.color),A&&(e.font="40px fantasy",V("Pause",t.width/10*4,t.height/12*6,"white"),V("Back to Menu",t.width/10*4,t.height/12*7,"white"))),E&&(e.font="30px fantasy",Q(0,0,t.width,t.height,"black"),V("Music "+P,t.width/10*4,t.height/12*4,"white"),V("Sound "+C,t.width/10*4,t.height/12*5,"white"),V("Back to menu",t.width/10*4,t.height/12*6,"white"),V("1 player control : Mouse",t.width/10*4,t.height/12*7,"white"),V("2 player control : W(up) | S(down) ",t.width/10*4,t.height/12*8,"white"),V("8(up) | 2(down)",t.width/10*6.6,t.height/12*9,"white"),V("P for pause",t.width/10*4,t.height/12*10,"white")),Y&&(e.font="30px fantasy",Q(0,0,t.width,t.height,"black"),V("One player",t.width/10*4,t.height/12*4,"white"),V("Two players local",t.width/10*4,t.height/12*5,"white"),V("Multiplayer",t.width/10*4,t.height/12*6,"white"),V("Options",t.width/10*4,t.height/12*7,"white")),w&&(e.font="30px fantasy",Q(0,0,t.width,t.height,"black"),V("Go to menu",t.width/10*4,t.height/12*6,"white"),f&&V("Computer Won",t.width/10*4,t.height/12*5,"white"),y&&V("Player Won",t.width/10*4,t.height/12*5,"white"),a&&V("Left Player Won",t.width/10*4,t.height/12*5,"white"),u&&V("Right Player Won",t.width/10*4,t.height/12*5,"white")),requestAnimationFrame(i)})),t.addEventListener("mousemove",I),t.addEventListener("mousedown",z),window.addEventListener("keydown",_),window.addEventListener("keyup",G),window.addEventListener("keydown",j)}})();