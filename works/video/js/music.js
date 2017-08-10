/**
 * Created by 马松 on 2017/3/21.
 */


window.onload=function () {
    let database=[
        {id:'song1',name:'阴天',src:'music/阴天.mp3',icon:'CWFdanyePC-img/1.jpg',bigimg:'bigimg/big1.jpg',author:'莫文蔚',zhuanji:'莫文蔚精选',lyrics:[
            {time:"0:02",lyric:"阴天"},
            {time:"0:04",lyric:"莫文蔚"},
            {time:"0:06",lyric:"作品李"},
            {time:"0:08",lyric:"Amin"},
            {time:"0:10",lyric:"李宗盛"},
            {time:"0:12",lyric:"李宗盛"},
            {time:"0:19",lyric:"阴天在不开灯的房间"},
            {time:"0:23",lyric:"当所有思绪都一点一点沉淀"},
            {time:"0:26",lyric:"爱情究竟是精神鸦片"},
            {time:"0:29",lyric:"还是世纪末的无聊消遣"},
            {time:"0:34",lyric:"香烟氲成一摊光圈"},
            {time:"0:37",lyric:"和他的照片就摆在手边"},
            {time:"0:41",lyric:"傻傻两个人笑得多甜"},
            {time:"0:47",lyric:"开始总是分分钟都妙不可言"},
            {time:"0:51",lyric:"谁都认为热情它永不会减"},
            {time:"0:54",lyric:"除了激情褪去后的那一点点倦"},
            {time:"1:01",lyric:"也许像谁说过的贪得无厌"},
            {time:"1:05",lyric:"活该应了谁说过的不知检点"},
            {time:"1:09",lyric:"总之那几年感性赢了理性那一面"},
            {time:"1:31",lyric:"阴天在不开灯的房间"},
            {time:"1:34",lyric:"当所有思绪都一点一点沉淀"},
            {time:"1:38",lyric:"爱恨情欲里的疑点盲点"},
            {time:"1:41",lyric:"呼之欲出那么明显"},
            {time:"1:45",lyric:"女孩通通让到一边"},
            {time:"1:48",lyric:"这歌里的细微末节就算都体验"},
            {time:"1:52",lyric:"若想真明白真要好几年"},
            {time:"2:27",lyric:"回想那一天喧闹的喜宴"},
            {time:"2:35",lyric:"耳边想起的究竟是序曲或完结篇?"},
            {time:"2:42",lyric:"感情不就是你情我愿"},
            {time:"2:45",lyric:"最好爱狠扯平俩不相欠"},
            {time:"2:49",lyric:"感情说穿了一人挣脱的一人去捡"},
            {time:"2:55",lyric:"男人大可不必百口莫辨"},
            {time:"3:00",lyric:"女人实在无须楚楚可怜"},
            {time:"3:03",lyric:"总之那几年你们俩个没有缘"},
            {time:"3:13",lyric:"阴天在不开灯的房间"},
            {time:"3:16",lyric:"当所有思绪都一点一点沉淀"},
            {time:"3:20",lyric:"爱情究竟是精神鸦"},
            {time:"3:23",lyric:"还是世纪末的无聊消遣"},
            {time:"3:27",lyric:"香烟氲成一摊光圈"},
            {time:"3:31",lyric:"和他的照片就摆在手边"},
            {time:"3:34",lyric:"傻傻两个人笑得多甜"},
            {time:"3:41",lyric:"傻傻两个人笑得多甜"}]},
        {id:'song2',name:'背影',src:'music/背影.mp3',icon:'CWFdanyePC-img/2.jpg',bigimg:'bigimg/big2.jpg',author:'马松',zhuanji:'马松精选',lyrics:[
            {time:"0:02",lyric:"背影"},
            {time:"0:13",lyric:"林宥嘉"},
            {time:"0:30",lyric:""},
            {time:"0:31",lyric:"三公分阳光 三公分空气"},
            {time:"0:39",lyric:"堵在眼前像一面 玻璃"},
            {time:"0:46",lyric:"挡住了你表情 剩下 只有脚印"},
            {time:"1:02",lyric:"一直向前走 走不完距离"},
            {time:"1:10",lyric:"一直想后退不出回忆"},
            {time:"1:17",lyric:"很高兴有心事 帮我困住自己"},
            {time:"1:28",lyric:""},
            {time:"1:33",lyric:"你头发上淡淡青草香气"},
            {time:"1:40",lyric:"变成了风才能和我相遇"},
            {time:"1:48",lyric:"你的目光 蒸发成云"},
            {time:"1:56",lyric:"再下成雨我才能够靠近"},
            {time:"2:02",lyric:""},
            {time:"2:02",lyric:"感谢我不可以 住进你的眼睛"},
            {time:"2:10",lyric:"所以才能 拥抱你的背影"},
            {time:"2:18",lyric:"有再多的遗憾 用来牢牢记住"},
            {time:"2:26",lyric:"不完美 的所有美丽"},
            {time:"2:33",lyric:"感谢我不可以 拥抱你的背影"},
            {time:"2:41",lyric:"所以才能 变成你的背影"},
            {time:"2:49",lyric:"躲在安静角落 不用你回头看"},
            {time:"2:59",lyric:"不用珍惜"},
            {time:"3:05",lyric:""},
            {time:"3:33",lyric:"我怀里所有温暖的空气"},
            {time:"3:41",lyric:"变成风也不敢和你相遇"},
            {time:"3:48",lyric:"我的心事 蒸发成云"},
            {time:"3:56",lyric:"再下成雨却舍不得淋湿你"},
            {time:"4:02",lyric:""},
            {time:"4:03",lyric:"感谢我不可以 住进你的眼睛"},
            {time:"4:10",lyric:"所以才能 拥抱你背影"},
            {time:"4:18",lyric:"有再多的遗憾 用来牢牢记住"},
            {time:"4:27",lyric:"不完美 的所有美丽"},
            {time:"4:34",lyric:"感谢我不可以 拥抱你的背影"},
            {time:"4:41",lyric:"所以才能 变成你的背影"},
            {time:"4:49",lyric:"躲在安静角落 不用你回头看"},
            {time:"4:59",lyric:"不用珍惜"},
            {time:"5:04",lyric:""},
            {time:"5:05",lyric:"感谢我不可以 拥抱你的背影"},
            {time:"5:12",lyric:"所以才能 变成你的背影"},
            {time:"5:20",lyric:"躲在安静角落 如果你回头看"},
            {time:"5:30",lyric:"不用在意"},
            {time:"5:35",lyric:""},
            {time:"5:41",lyric:"背影"}
        ]},
        {id:'song3',name:'初爱',src:'music/初爱.mp3',icon:'CWFdanyePC-img/3.jpg',bigimg:'bigimg/big3.jpg',author:'莫文蔚',zhuanji:'莫文蔚精选'},
        {id:'song4',name:'红玫瑰',src:'music/红玫瑰.mp3',icon:'CWFdanyePC-img/4.jpg',bigimg:'bigimg/big4.jpg',author:'马松',zhuanji:'马松精选'},
        {id:'song5',name:'幸福的错觉',src:'music/幸福的错觉.mp3',icon:'CWFdanyePC-img/5.jpg',bigimg:'bigimg/big5.jpg',author:'马松',zhuanji:'马松精选'},
    ];

    let list=document.querySelector('.caidan ul:nth-of-type(2)');
    let audio=document.querySelector('audio');


    // 处理歌曲列表
    database.forEach((obj,index)=>{
        let li=document.createElement('li');
        if(index==0){
            li.classList.add('active');
        }
        li.id=obj.id;
        li.innerHTML=`
 <span class="iconfont"></span>
                        <span>${obj.name}</span>
                        <span>${obj.author}</span>
                        <span>${obj.zhuanji}</span>
                        <span class="iconfont icon-shanchu"></span>

`;
        list.appendChild(li);
    })


    audio.oncanplay=function () {
        let load=document.querySelector('.load');
        load.style.width='100%';
    }

    let current=0;
    let ly=document.querySelector('.lyrics');
    database[current].lyrics.forEach((val)=>{
        let li=document.createElement('li');
        li.innerHTML=val.lyric;
        ly.appendChild(li);
    });



    let play=document.querySelector('.play span');

    let listlis=list.querySelectorAll('li');


    play.onclick=function () {
        let span=listlis[current].children[0];
        if(audio.paused){
            audio.play();
            this.classList.remove('icon-bofang');
            this.classList.add('icon-weibiaoti1');
            span.classList.add('icon-yinle');
        }else{
            audio.pause();
            span.classList.remove('icon-yinle');
            this.classList.add('icon-bofang');
            this.classList.remove('icon-weibiaoti1');
        }
    };

    let circle=document.querySelector('.circle');
    let played=document.querySelector('.played');
    let jindu=document.querySelector('.jindu');
    audio.ontimeupdate=function () {
       let newtime=getTime(audio.currentTime);
       let totletime=getTime(audio.duration);
       let time=document.querySelector('.time');
       time.children[0].innerHTML=newtime;
       time.children[2].innerHTML=totletime;
       circle.style.left=audio.currentTime/audio.duration*jindu.offsetWidth-10+'px';
       played.style.width=audio.currentTime/audio.duration*jindu.offsetWidth+'px';
       database[current].lyrics.forEach((val,index)=>{
           console.log(getTime(audio.currentTime))
            if(val.time==getTime(audio.currentTime)){

                let i=index;
                ly.innerHTML='';
                if(index<=8){
                    index=0;
                }else{
                    index=index-8;
                }
                let li;
                for(let j=index;j<database[current].lyrics.length;j++){
                    li=document.createElement('li');
                    li.id='c'+j;
                    li.innerHTML=database[current].lyrics[j].lyric;
                    ly.appendChild(li);
                }
                document.querySelector('#c'+i).classList.add('active');
            }
       });
    };


    audio.oncanplaythrough=function () {
            jindu.onclick=function (e) {
                audio.currentTime=e.offsetX/jindu.offsetWidth*audio.duration;
            };
    };


    
    function getTime(time) {
        let m=Math.trunc(time/60);
        let s=Math.trunc(time)%60 >=10? Math.trunc(time)%60:"0"+Math.trunc(time)%60;
        return m+':'+s;
    }

    let volume=document.querySelector('.volume-icon span');
    // 0.8
    let currentvolume=1;
    volume.onclick=function () {
        if(audio.volume){
            currentvolume=audio.volume;
            audio.volume=0;
            this.classList.remove('icon-yinliang');
            this.classList.add('icon-jingyin');
        }else{
            audio.volume=currentvolume;
            this.classList.add('icon-yinliang');
            this.classList.remove('icon-jingyin');
        }
    }

    let volumeplayed=document.querySelector('.rel .jindu .played');
    let volumecircle=document.querySelector('.rel .jindu .circle');
    let volumejindu=document.querySelector('.rel .jindu');

    audio.onvolumechange=function () {
        let current=audio.volume;
        volumeplayed.style.width=current*volumejindu.offsetWidth+'px';
        volumecircle.style.left=current*volumejindu.offsetWidth-10+'px';
    }

    volumejindu.onclick=function (e) {
        audio.volume=e.offsetX/volumejindu.offsetWidth;
    };
    
    
    list.ondblclick=function (e) {
        let obj=e.target;
        if(obj.nodeName=='SPAN'){
            let id=obj.parentNode.id;
            let num=database.findIndex((obj)=>{
                return obj.id==id;
            });
            current=num;
            document.body.style.backgroundImage=`url(${database[num].bigimg})`;
            audio.src=database[num].src;
            document.querySelectorAll('.author span')[0].innerHTML=database[num].name;
            document.querySelectorAll('.author span')[2].innerHTML=database[num].author;
            document.querySelector('.icon').style.backgroundImage=`url(${database[num].icon})`;
            play.classList.remove('icon-bofang');
            play.classList.add('icon-weibiaoti1');


            [...obj.parentNode.parentNode.children].forEach((val)=>{
                val.classList.remove('active');
                val.children[0].classList.remove('icon-yinle');
            });
            obj.parentNode.children[0].classList.add('icon-yinle');
            obj.parentNode.classList.add('active');
            ly.innerHTML='';
            database[current].lyrics.forEach((val)=>{
                let li=document.createElement('li');
                li.innerHTML=val.lyric;
                ly.appendChild(li);
            });
            audio.play();
        }
    }


    let next=document.querySelector('.next span');
    let previous=document.querySelector('.previous span');
    next.onclick=function () {
        current++;
        if(current>=database.length){
            current=0;
        }
        document.body.style.backgroundImage=`url(${database[current].bigimg})`;
        audio.src=database[current].src;
        document.querySelectorAll('.author span')[0].innerHTML=database[current].name;
        document.querySelectorAll('.author span')[2].innerHTML=database[current].author;
        document.querySelector('.icon').style.backgroundImage=`url(${database[current].icon})`;
        play.classList.remove('icon-bofang');
        play.classList.add('icon-weibiaoti1');


        [...list.children].forEach((val)=>{
            val.classList.remove('active');
            val.children[0].classList.remove('icon-yinle');
        });
        list.children[current].children[0].classList.add('icon-yinle');
        list.children[current].classList.add('active');
        ly.innerHTML='';
        database[current].lyrics.forEach((val)=>{
            let li=document.createElement('li');
            li.innerHTML=val.lyric;
            ly.appendChild(li);
        });
        audio.play();

    }
    previous.onclick=function () {
        current--;
        if(current<0){
            current=database.length-1;
        }
        document.body.style.backgroundImage=`url(${database[current].bigimg})`;
        audio.src=database[current].src;
        document.querySelectorAll('.author span')[0].innerHTML=database[current].name;
        document.querySelectorAll('.author span')[2].innerHTML=database[current].author;
        document.querySelector('.icon').style.backgroundImage=`url(${database[current].icon})`;
        play.classList.remove('icon-bofang');
        play.classList.add('icon-weibiaoti1');
        [...list.children].forEach((val)=>{
            val.classList.remove('active');
            val.children[0].classList.remove('icon-yinle');
        });
        list.children[current].children[0].classList.add('icon-yinle');
        list.children[current].classList.add('active');
        ly.innerHTML='';
        database[current].lyrics.forEach((val)=>{
            let li=document.createElement('li');
            li.innerHTML=val.lyric;
            ly.appendChild(li);
        });
        audio.play();
    };

    
    document.querySelector('.menu span').onclick=function () {
        document.querySelector('.list').classList.toggle('active');
    };

    audio.onended=function () {
        next.onclick();
    }



};
// 0:，添加所有的列表，存储id
// 1: 从播放入手，点击判断，如果是暂停，那么播放，如果是播放，那么暂停。同时相对应的图标也应该去变化，current的状态也应该去变化
// 2：canplay  的时候，让加载的滚动条进行变化
// 3： 当播放的当前位置改变的时候，ontimeupdate里面，去获取当前的播放时间和总时间。并且经时间进行格式化，同时就可以获取圆圈和已经played的，width和left。
// 4：点击进度条，获取offsetX和width的比值。这个比值*总时间就是当前的播放时间，设置当前的播放时间就行。
// canplaythrough
// 5: 点击音量按钮，如果不为零，赋值0;记录当前的音量值，如果为0，设置已经保存的音量值
// 6：当音量发生改变的时候，onvolumechange,获取当前的音量值，可以去设置音量的原点的位置和音量的played的width
// 7：音量点击，获取offsetX，以此来设置音量是多少
// 当前的音量值/总音量=offsetX/offsetWidth
// 8:列表的双击事件，用事件委派。，如果点击的是span,
// 获取父元素的id，和数据库的进行比较，得到索引值，更改所有的相关数据，CWFdanyePC-img，src，name，更改播放的状态，更改当前的li显示active，显示播放图标。
//  9，10：下一个和上一个，current进行更改，依照current，进行上述第八步中的所有的内容的更改

