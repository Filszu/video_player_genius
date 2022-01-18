var body;
var video_players;  
//detected videoplayers
let videos_no;


window.addEventListener("load", function(){
    body = document.querySelector("body");
    //FIND VIDEO

    try{

        video_players=document.querySelectorAll('video');
    
        //detected videoplayers
        videos_no=video_players.length;
        console.log(video_players);
        console.log(video_players[0]);
    
        if(videos_no<=0){
           
            console.log('%c[⚙vpGenius]', 'color: green; ',`Video hasn't been founded`);
            console.log("to refresh, type 'setup()' in the console");
        }
        else{
            setup();
        }
    }catch(err){
        console.log('%c[⚙vpGenius]', 'color: green; ',`Video hasn't been founded`);
        console.log(err);
        
    }
    
})












function setup(){
    console.log('%c------------⚙vpGenius------------', 'color: green; ');
    //PANEL
    
    const el = document.createElement("div");
    const menu = el;
    menu.innerHTML = `
    <div id="menu-container">
        <div id="menu_icon">⚙vpGenius🎬
        <div class="title_desc">powered by: <a href="https://ciac.me">CIAC.me V-speeder</a></div>
        </div>


        <div id="menuOptions">
            ⏱video speed: <span id="v_speed_info">1</span>
            <input type="range" id="speed_control" name="speed_control"" 
            min="0.1" max="16" value="1" step="0.1" style="width: 100%;">

            <div>🎬Detected: <span class="specialFont">${videos_no}</span> video-players</div>

            

            <div class="controls">
                <div onclick="controls(1)">▶</div>
                
                <div onclick="controls(0)">II</div>
            </div>

            <div class="controls" onclick='show("#operations")'>
                <div>open↗ </div> / <div> download⬇</div>
                
            </div>
            <div id="operations">videos: </div>
            

            
            <!--⬜▶👣⬛💱🔄⏸⏺⏹-->



            

        
        </div>

        

        
        `;


    body.append(menu);

    const menu_icon = document.querySelector("#menu_icon");
    const menu_options = document.querySelector("#menuOptions");
    const v_control = document.querySelector('#speed_control');
    const v_info = document.querySelector('#v_speed_info');
    const operations = document.querySelector('#operations');


    //show
    menu_icon.addEventListener('mouseover', function(){   
    });

    //hide
    menu_options.addEventListener('mouseleave', function(){
    });





    v_control.addEventListener("change", function(){

        const v_speed =v_control.value;
        v_info.innerHTML = v_speed;

        for( let v_num in video_players)
        {
            // video_players[v_num].style.display="none";

            // video_players[v_num].defaultPlaybackRate = 1.0;
            // video_players[v_num].play();
            video_players[v_num].playbackRate = v_speed;
        }

        
    });







    // ADD STYLES
    // Get HTML head element
    const head = document.getElementsByTagName('HEAD')[0]; 
    // Create new link Element
    const link = document.createElement('link');
    // set the attributes for link element 
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    link.href = 'style.css'; 
    // Append link element to HTML head
    head.appendChild(link); 
}

function controls(action){

        
    switch (action){
        case 1:
            for(let i=0; i<videos_no; i++){
                video_players[i].play();
            }
            break;
        case 0:
            video_players.forEach(v_num => {
                v_num.pause();
            });
            break;
    }

}

function show(arg){
    document.querySelector(arg).style.display="block";



    //DOWNLOAD or open
    if(arg=="#operations"){
        
        let nContent='';

        for(let i=0; i<videos_no; i++){
            let file_name = video_players[i].currentSrc;


           
            // nContent+=`<div>video${i} (src="${file_name}")</div>`;
            nContent+=`<div>
            video ${i}: 
         
                <a href="${file_name}" target="blank">open↗</a>`

        }
            
        
        operations.innerHTML=nContent;
    }
    
}

