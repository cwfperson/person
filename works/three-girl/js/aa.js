/**
 * Created by afei on 2017/3/12.
 */

window.onload=function(){

//banner轮播图

    let box=document.querySelectorAll('header .banner .main .box');               //获取banner盒子
    let img=document.querySelectorAll('header .banner .main .box .img a img');   //获取banner图片
    let a=document.querySelectorAll('header .banner .main .box .circle a');                   //获取小圆点
    let i=document.querySelectorAll('header .banner .main .box .lr a');           //获取左右箭头
    let n=0;
    let flag=true;                                                  //开关
    let t=setInterval(time,5000);                                   //时间函数
    function time(way='right') {
        if(way=='right'){                                           //判断轮播图转动方向
            n++;
            if (n >= img.length) {
                n = 0;
            }
        }else{
            if(way=='left'){
                n--;
                if(n<0){
                    n=img.length-1;
                }
            }
        }
        for (let i = 0; i < img.length; i++) {
            img[i].style.opacity = '0';
            a[i].classList.remove('choose');
        };
        img[n].style.opacity= '1';
        a[n].classList.add('choose');

    }

    //鼠标移入停止时间函数
    box[0].onmouseover=function(){
        clearInterval(t);
    };
    //鼠标移出开始时间函数
    box[0].onmouseout=function(){
        t=setInterval(time,5000);
    };

    //鼠标移入小圆点切换图片
    let m;
    a.forEach(function(obj,index) {
        obj.onmouseover= function () {
            m=setTimeout(function(){
                for (let i = 0; i < img.length; i++) {
                    img[i].style.opacity = '0';
                    a[i].classList.remove('choose');
                };
                img[index].style.opacity= '1';
                n=index;
                obj.classList.add('choose');
            },200);
        } ;
        obj.onmouseout=function(){
            clearInterval(m)
        }
    });

    //左右箭头点击事件（开关思想）
    i[1].onclick=function(){
        if(flag){
            flag=false;
            time();
        }
    };
    i[0].onclick=function(){
        if(flag){
            flag=false;
            time('left');
        }
    };
    //添加事件监听
    img.forEach(function(value){
        value.addEventListener('transitionend',function(){
            flag=true;
        })
    });





//选项卡
    function select(a,section){
        a.forEach(function(obj,index){                          //遍历a
            obj.onmouseover=function(){                         //循环给每个a元素添加鼠标移入事件
                for(let i=0;i<a.length;i++){                    //遍历每个a标签
                    a[i].classList.remove("first");             //移除每个a标签上的first类名
                    section[i].classList.remove("top");         //移除每个section上的top类名
                }
                this.classList.add("first");                    //this当前我添加的事件的元素 鼠标移入a标签添加first类名
                section[index].classList.add("top");            //当前this指向的a标签相对应的section上添加top类名
            };

        })
    }

    let gg=document.querySelectorAll('.banner .main .right .one li a');     //获取a标签
    let uls=document.querySelectorAll('.banner .right .two ul');
    select(gg,uls);

    let aa=document.querySelectorAll('.hot > .third > ul li a');     //获取a标签
    let uls2=document.querySelectorAll('.hot > .third > div > ul');
    select(aa,uls2);
console.log(aa,uls2)
    let floors=document.querySelectorAll('.floor');
    floors.forEach(function (floor) {
        let a=floor.querySelectorAll('.title > .right > a');
        let section=floor.querySelectorAll('.rig section');
        select(a,section)
    });


    let floorb=document.querySelectorAll('.b');
    floorb.forEach((floor)=>{
        let box=floor.querySelector('.banner');               //获取banner盒子
        let img=floor.querySelectorAll('.banner ul li');   //获取banner图片
        let a=floor.querySelectorAll('.banner .circle a');                   //获取小圆点
        let i=floor.querySelectorAll('.banner .lr a');
        banner(box,img,a,i)
    });
    function banner(box,img,a,i){
        let n=0;
        let flag=true;                                                  //开关
        let t=setInterval(time,5000);                                   //时间函数
        function time(way='right') {
            if(way=='right'){                                           //判断轮播图转动方向
                n++;
                if (n >= img.length) {
                    n = 0;
                }
            }else{
                if(way=='left'){
                    n--;
                    if(n<0){
                        n=img.length-1;
                    }
                }
            }
            for (let i = 0; i < img.length; i++) {
                img[i].style.opacity = '0';
                a[i].classList.remove('choose');
            };
            img[n].style.opacity= '1';
            a[n].classList.add('choose');

        }

        //鼠标移入停止时间函数
        box.onmouseover=function(){
            clearInterval(t);
        };
        //鼠标移出开始时间函数
        box.onmouseout=function(){
            t=setInterval(time,5000);
        };

        //鼠标移入小圆点切换图片
        let m;
        a.forEach(function(obj,index) {
            obj.onmouseover= function () {
                m=setTimeout(function(){
                    for (let i = 0; i < img.length; i++) {
                        img[i].style.opacity = '0';
                        a[i].classList.remove('choose');
                    };
                    img[index].style.opacity= '1';
                    n=index;
                    obj.classList.add('choose');
                },200);
            } ;
            obj.onmouseout=function(){
                clearInterval(m)
            }
        });

        //左右箭头点击事件（开关思想）
        i[1].onclick=function(){
            if(flag){
                flag=false;
                time();
            }
        };
        i[0].onclick=function(){
            if(flag){
                flag=false;
                time('left');
            }
        };
        //添加事件监听
        img.forEach(function(value){
            value.addEventListener('transitionend',function(){
                flag=true;
            })
        });
    }


//楼层选择
    let backTop=document.querySelector('.aside ul .backtop');
    backTop.onclick=function(){
        animate(document.body,{scrollTop:0},500);
        animate(document.documentElement,{scrollTop:0},500);
    }


//楼层选择
   /* let floors=document.querySelectorAll('.floor');*/
    let lis=document.querySelectorAll('.aside-left ul li a');
    let ul=document.querySelector('.aside-left');
    let topbox=document.querySelector('.tophid');
    let scrtop=0;
    //map映射到数组arr中,获取每一楼的offsetTop,下标对应楼层
    let arr=[...floors].map(function (value,index) {
        return value.offsetTop;
    });

    if(flag){
        window.onscroll=function(){//页面滚动条改变执行函数
            let obj=document.body.scrollTop==0? document.documentElement:document.body;
            let scrollTop=obj.scrollTop;
            if(scrollTop+900>=floors[0].offsetTop&&scrollTop-100<=floors[11].offsetTop){
                ul.style.display='block';//左侧固定定位出现
            }else {
                ul.style.display='none';
            }

            if(scrollTop>=1350){
                topbox.style.display='block'
            }else{
                topbox.style.display='none'
            }

            //循环判断每楼的高度
            for(let i=0;i<arr.length;i++){
                if(scrollTop+70>=arr[i]){
                    lis.forEach(function (value) {
                        value.classList.remove('active')
                    });
                    lis[i].classList.add('active')
                }
            }

        }
    }

    lis.forEach(function (value,index) {
        value.onclick=function () {
            flag=false;
            let height=floors[index].offsetTop;
            animate(document.body,{scrollTop:height},500,function () {
                flag=true;
            })
        }
    });


    let ul3 = document.querySelector('.activity .ac-box');
    let left3=document.querySelector('.activity div .circle-left');
    let right3=document.querySelector('.activity div .circle-right');
    //向右移动
    let mover = function () {
        animate(ul3, {left: -1190}, 700, function () {
            let first = ul3.firstElementChild;
            ul3.appendChild(first);
            ul3.style.left = '0';
            flag=true;
        })
    };

    //向左移动
    let movel = function () {
        let last=ul3.lastElementChild;
        let first = ul3.firstElementChild;
        ul3.insertBefore(last,first);
        ul3.style.left=-1190+'px';
        animate(ul3, {left: 0}, 700, function () {
            flag=true;
        })
    };

    left3.onclick=function(){
        if(flag){
            flag=false;
            movel();
        }

    };
    right3.onclick=function(){
        if(flag){
            flag=false;
            mover();
        }
    }



}