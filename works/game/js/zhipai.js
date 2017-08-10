/**
 * Created by chen on 2017/4/10.
 */

$(document).ready(function () {
    let arr=[];         //设置一个空数组用来存储一个一个的数字和花色（让其作为对象来存储）
    let sign={};        //用来存放数字与花色
    let num,color;
    let colorArr=['c','d','h','s'];     //定义四种花色  ：黑 红 梅花 方块
    //循环52次将得到的数字和花色存入数组
    while(arr.length<52){
         num=Math.ceil(Math.random()*13);
         color=colorArr[Math.floor(Math.random()*colorArr.length)];
        if(!sign[num+'_'+color]){
            sign[num+'_'+color]=true;
            arr.push({num,color});
        }
    }

    //循环将52张扑克牌放入页面
    let n=0;
    for(let i=0;i<7;i++){
        for(let j=0;j<i+1;j++){
            $('<li>').attr('id',i+'_'+j).attr('value',arr[n].num).css('background-image',`url(img/${arr[n].num}${arr[n].color}.png)`).appendTo('ul').delay(n*50).animate({
                left:300-50*i+100*j,
                top:50*i,
                opacity:1,
            },400)
            n++;
        }
    }

    for(;n<52;n++){
        $('<li class="zuo">').attr('id',7+'_'+n).attr('value',arr[n].num).css('background-image',`url(img/${arr[n].num}${arr[n].color}.png)`).appendTo('ul').delay(n*50).animate({
            left:100,
            top:470,
            opacity:1,
        },400)
    }

    let currentobj=null;
    //给每张扑克牌一个点击事件（我用的事件委派）
    $('ul.card').on('click','li',function () {
        let x=$(this).attr('id').split('_')[0];         //获取行的数值
        let y=$(this).attr('id').split('_')[1];         //获取列的数值
        //如果行小于6的时候，并且它的上面只要有压住的扑克牌就不能进行点击，需要return
        if(x<6){
            if($(`#${parseInt(x)+1}_${parseInt(y)}`).length==1||$(`#${parseInt(x)+1}_${parseInt(y)+1}`).length==1){
                return;
            }
        }
            // 给每张可以被点击的扑克牌点击后一个样式
            $(this).toggleClass('active');
            if(!currentobj){
                //给扑克牌为k的移出
                if($(this).attr('value')==13){
                    $('.active').animate({
                        left:600,
                        top:0,
                        opacity:0,
                    }, ()=> {
                        // $('.active').removeClass();
                        currentobj=null;
                        $('li.active').remove();
                    })
                }else{
                    currentobj=$(this);
                }
            }else{
                //判断两张扑克牌之和是否等于13
                if((parseInt(currentobj.attr('value'))+parseInt($(this).attr('value')))===13){
                    $('.active').animate({
                        left:600,
                        top:0,
                        opacity:0,
                    },() =>{
                        // $('.active').removeClass();
                        currentobj=null;
                        $('li.active').remove();
                    })
                }else{
                    //给被点击的第二张设置延时
                    setTimeout(function () {
                        $('.active').removeClass('active');
                        currentobj=null;
                    },400)
                }
            }



    })


    //右边点击
    let index=1;
    $('.right').click(function () {
       $('.zuo').last().addClass('you').removeClass('zuo').css('z-index',index++).animate({
           left:500,
       },400)
    })
    
    // 左点击
    $('.left').click(function () {
        $('.you').addClass('zuo').removeClass('you').css('z-index',index++).each(function (index) {
            $(this).delay(50*index).animate({
                left:100,
            },400)
        })
    })


})