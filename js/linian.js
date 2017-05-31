$(function () {
    const bigTu=$(".slides li");
    const samrtTu=$("ol li");
    // const prev=$(".zy li");
    // console.log(prev)
    // const next=$(".zy .next");
    bigTu[0].style.zIndex=2;
    for(let i=0;i<samrtTu.length;i++){
        samrtTu[i].onmouseover=function(){
            for(let j=0;j<bigTu.length;j++){
                bigTu[j].style.zIndex=1;
            }
            bigTu[i].style.zIndex=2;
        }
    }

    // prev.onclick=function () {
    //
    //     for(let i=0;i<bigTu.length;i++){
    //         for(let j=0;j<bigTu.length;j++){
    //             bigTu[j].style.zIndex=1;
    //         }
    //         bigTu[i].style.zIndex=2;
    //     }
    // }






})