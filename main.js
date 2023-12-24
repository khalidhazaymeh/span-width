let section=document.querySelector(".three");
let spans=document.querySelectorAll(".progress span");
// في حال كنت بدي انه قبل ما يصل الموقع المعين بكتب ناقص ومثلا 100  واذا بدي ل
//يدخل القسم وينزل فيه بكتب زائد مثلا 100 وهكذا اما اذا بدي اول ما يصل اله بدون عمليات  الجمع او الطرح
// window.onscroll=function(){
// if(window.scrollY>=section.offsetTop + 100){
//     console.log("true three");
// }
// };


window.onscroll=function(){
    if(window.scrollY>=section.offsetTop){
        console.log("true three");
        spans.forEach(spans => {
            spans.style.width=spans.dataset.width;
        });
    }
    };