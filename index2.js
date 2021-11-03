var password=12345
var input
var entry_count=0
var limit_count=3
var out_of_limit=false
var title=document.getElementById('title')
var content=document.getElementById('content')
var Btn=document.getElementById('Btn')
const list=document.getElementById('article')
const listContent=[]

while (password!=input && !out_of_limit) {
    entry_count++
    if(entry_count<=limit_count){
        input=prompt("請輸入密碼")
    }
    else{
        out_of_limit=true
    }
}

if(out_of_limit){
    alert("超過輸入次數")
}
else{
    alert("success login")
}

function render() {
    let htmlStr=""
    listContent.forEach(function (params) {
        htmlStr=htmlStr+`
        <div class="article" >
        <div>
            <p>標題:${params.title}</p>
            <p>內容:${params.content}</p>
        </div>
   </div>
        `
    })
   
    article.innerHTML = htmlStr
}

Btn.addEventListener('click',function () {
    listContent.push({
        title:title.value,
        content:content.value
        
    })
    render()
    title.value=""
    content.value=""
})