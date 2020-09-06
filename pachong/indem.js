const request=require('request');
const cheerio=require('cheerio');
const fs=require('fs');
const path=require('path');
//1.获取目标的html结构
const url='https://m.vancl.com/channel/index/838#nav_Tshirt';
request(url,(err,res,body)=>{
    // console.log(body);
    //执行load方法获取到html的结构
    let $=cheerio.load(body);
    const goodslist=[];
    //$('')获取里面的某个模块
    $('.topiclist-1').find(".topic").each((idx,el)=>{
        const $el=$(el);
        // const name=$el.find('.y').text();
        // const name1=$el.find('.z').text();
        // const name2=$el.find('.x').text();
        const phone=$el.find('a img').attr('src');
        const goods={
            // name,
            // name1,
            // name2,
            phone,
    
        }
        goodslist.push(goods);
        //把爬取的图片保存
        const fliename=path.basename(phone);
        const fileStream=fs.createWriteStream('/img'+fliename);
        request(phone).pipe(fileStream);
    })
    console.log(goodslist);
})
