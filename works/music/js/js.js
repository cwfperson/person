/**
 * Created by afei on 2017/3/21.
 */
window.onload=function(){

    let audio=document.querySelector('audio');  //获取audio标签
    let jindu=document.querySelector('.jindu');
    let jinducircle=document.querySelector('.jindu .circle');
    let played=document.querySelector('.jindu .played');
    let load=document.querySelector('.load');
    let img=document.querySelector('.img');

    //库中的音乐放到列表中
    let database=[
        {id:'_1',name:'南山南',src:'datebase/南山南%20-%20马頔.mp3',img:'1.jpg',author:'马頔'},
        {id:'_2',name:'孤独患者',src:'datebase/孤独患者%20-%20陈奕迅.mp3',img:'2.jpg',author:'陈奕迅'},
        {id:'_3',name:'陪你度过漫长岁月',src:'datebase/陪你度过漫长岁月%20-%20陈奕迅.mp3',img:'3.jpg',author:'陈奕迅'},
        {id:'_4',name:'南山南',src:'datebase/南山南%20-%20马頔.mp3',img:'1.jpg',author:'马頔'},
        {id:'_5',name:'孤独患者',src:'datebase/孤独患者%20-%20陈奕迅.mp3',img:'2.jpg',author:'陈奕迅'},
        {id:'_6',name:'陪你度过漫长岁月',src:'datebase/陪你度过漫长岁月%20-%20陈奕迅.mp3',img:'3.jpg',author:'陈奕迅'},
    ];

//列表中添加歌的信息
    let list=document.querySelector('.list .main ul'); //获取歌曲列表的那个ul
    let current=0;
    database.forEach((obj,index)=>{
        let li=document.createElement('li');
        li.innerHTML=`<a href="javascript:" id="${obj.id}">
						<span>${obj.name}</span>
						<span>${obj.author}</span>
					</a>
                    <span class="del">
                    <img src="img/delete.png" alt="">
</span>`;
        list.appendChild(li);
    });

    audio.oncanplay=function () {//音乐能够播放触发函数
        load.style.width='100%';
    };

//播放按钮
    let playbtn=document.querySelector('.playbtn');
    let play=document.querySelector('.play');
    let pause=document.querySelector('.pause');
    playbtn.onclick=function () {
        if (audio.paused){//判断播放状态
            audio.play();
            play.style.display='none';
            pause.style.display='block';
            img.style.animation='xz 15s linear 0s infinite'

        }else{
            audio.pause();
            play.style.display='block';
            pause.style.display='none';
            img.style.animationPlayState='paused'

        }
    };

//音乐播放
    let time=document.querySelectorAll('.jindu span');
    audio.ontimeupdate=function () {//播放时间改变触发函数
        let newtime=gettime(audio.currentTime);//音乐播放的时间
        let totletime=gettime(audio.duration);//音乐总时间
        time[0].innerHTML=newtime;
        time[1].innerHTML=totletime;
        jinducircle.style.left=audio.currentTime/audio.duration*100+'%';
        played.style.width=audio.currentTime/audio.duration*100+'%';
    };

    audio.oncanplaythrough=function () {//无缓冲进行播放
        jindu.onclick=(e)=> {
            audio.currentTime=e.offsetX/jindu.offsetWidth*audio.duration;
        }
    };

//格式化时间
    function gettime(time) {
        let m=Math.trunc(time/60)>=10? Math.trunc(time/60):'0'+Math.trunc(time/60);
        let s=Math.trunc(time)%60>=10? Math.trunc(time)%60:'0'+Math.trunc(time)%60;
        return m+':'+s;
    }

//音量
    let volume=document.querySelector('.volume' );
    let currentvolume=1;
    volume.onclick=function () {
        if(audio.volume){//如果有声音
            currentvolume=audio.volume;//保存当前音量
            audio.volume=0;//音量设为0
            this.classList.remove('icon-yinliang');//移除音量icon
            this.classList.add('icon-jingyin');//添加静音icon
        }else{
            audio.volume=currentvolume;//恢复当前音量
            this.classList.remove('icon-jingyin');//移除音量icon
            this.classList.add('icon-yinliang');//添加静音icon
        }
    };

    let volumeplayed=document.querySelector('.voice .played');//获取音量长度
    let volumecircle=document.querySelector('.voice .circle');//获取音量小圈
    let volumejindu=document.querySelector('.voice .tiao');//获取音量条
    audio.onvolumechange=function (){//音量改变触发函数
        let current=audio.volume;
        volumeplayed.style.width=current*volumejindu.offsetWidth+'px';
        volumecircle.style.left=current*volumejindu.offsetWidth+'px';

    };
    volumejindu.onclick=function (e) {
        audio.volume=e.offsetX/volumejindu.offsetWidth;
       /* audio.play();*/
        volume.classList.remove('icon-jingyin');
        volume.classList.add('icon-yinliang');
    };

    let lis=list.querySelectorAll('li');
    lis[0].classList.add('choose');

//双击切换歌
    list.onclick=function (e) {
        let obj=e.target;
        if(obj.nodeName=='SPAN'){
            let id=obj.parentNode.id;
            let num=database.findIndex((obj)=>{
                return obj.id==id;
            });
            current=num;
            img.style.backgroundImage=`url(img/${database[num].img})`;
            audio.src=database[num].src;
            document.querySelector('h1').innerHTML=database[num].name;
            document.querySelector('h2').innerHTML=database[num].author;
            play.style.display='none';
            pause.style.display='block';

            lis.forEach((li)=>{
                li.classList.remove('choose')
            });
            lis[num].classList.add('choose');
            img.style.animation='xz 15s linear 0s infinite';
            audio.play();
        }
    };


//隐藏的播放列表显示
    let bflb=document.querySelector('.bflb');
    let hidden=document.querySelector('.list');
    let back=document.querySelector('.back');

    bflb.onclick=function () {
        hidden.style.display='block'
    };
    back.onclick=function () {
        hidden.style.display='none'
    };

//隐藏的删除按钮显示
    let navdel=document.querySelector('.nav-del');
    let del=document.querySelectorAll('.del');
    let n=true;
    navdel.onclick=function () {
        if(n){
            del.forEach((value)=>{
                value.style.display='block'
            })
        }else{
            del.forEach((value)=>{
                value.style.display='none'
            })
        }
        n=!n;
    };


//删除功能
    del.forEach((val)=>{
        val.onclick=function () {
            if(this.parentNode.className=='choose'){
                return;
            }
            list.removeChild(this.parentNode);
            let id=this.parentNode.children[0].id;
            database.forEach((val,index,arr)=>{
                if(val.id===id){
                    arr.splice(index,1);
                }
                if(index<current){
                    current--;
                };
                img.style.backgroundImage=`url(img/${database[num].img})`;
                audio.src=database[num].src;
                document.querySelector('h1').innerHTML=database[num].name;
                document.querySelector('h2').innerHTML=database[num].author;
                play.style.display='none';
                pause.style.display='block';

                lis.forEach((li)=>{
                    li.classList.remove('choose')
                });
                lis[num].classList.add('choose');
            })
        };
    })




//上一首下一首
    let last=document.querySelector('.last');
    let next=document.querySelector('.next');
    next.onclick=function () {
        current++;
        if(current>=database.length){
            current=0;
        }
        img.style.backgroundImage=`url(img/${database[current].img})`;
        audio.src=database[current].src;
        document.querySelector('h1').innerHTML=database[current].name;
        document.querySelector('h2').innerHTML=database[current].author;
        play.style.display='none';
        pause.style.display='block';
        lis.forEach((li)=>{
            li.classList.remove('choose')
        });
        lis[current].classList.add('choose');
        img.style.animation='xz 15s linear 0s infinite'
        audio.play();
    };

    last.onclick=function () {
        current--;
        if(current<0){
            current=database.length-1;
        }
        img.style.backgroundImage=`url(img/${database[current].img})`;
        audio.src=database[current].src;
        document.querySelector('h1').innerHTML=database[current].name;
        document.querySelector('h2').innerHTML=database[current].author;
        play.style.display='none';
        pause.style.display='block';
        lis.forEach((li)=>{
            li.classList.remove('choose')
        });
        lis[current].classList.add('choose');
        img.style.animation='xz 15s linear 0s infinite';
        audio.play();
    };

//音乐结束
    audio.onended=function () {
        next.onclick();
    };

//删除音乐




};