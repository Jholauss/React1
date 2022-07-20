
const products = [
  {id:'1', name:'AIR FORCE 1', description:"Lorem ipsum dolor", img:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1100&q=60', stock:5 , category:'nike',price:600},
  {id:'2', name:'AIR MAX 90', description:"Lorem ipsum dolor", img:'https://images.unsplash.com/photo-1596122787821-95c4255bb936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60', stock:15 , category:'nike',price:2337},
  {id:'3', name:'JORDAN 1 HIGH', description:"Lorem ipsum dolor", img:'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60', stock:7, category:'nike',price:2060},
  {id:'4', name:'AIR FORCE', description:"Lorem ipsum dolor", img:'https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60', stock:3, category:'nike',price:2050},
  {id:'5', name:'BLAZER', description:"Lorem ipsum dolor", img:'https://images.unsplash.com/photo-1571216332002-282dce467b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60', stock:10, category:'nike',price:200},
  {id:'6', name:'AIR MAX 270', description:"Lorem ipsum dolor", img:'https://images.unsplash.com/photo-1572969565371-acc5b2b3496a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60', stock:4, category:'nike',price:1300},
  {id:'7', name:'FORUM 94', description:"Lorem ipsum dolor", img:'https://images.unsplash.com/photo-1624020709086-88c0760b7936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', stock:4, category:'adidas',price:200},
  {id:'8', name:'FORUM 94', description:"Lorem ipsum dolor", img:'https://images.unsplash.com/photo-1620794341491-76be6eeb6946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80', stock:8, category:'adidas',price:250},
  {id:'9', name:'NITE JOGGER', description:"Lorem ipsum dolor", img:'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', stock:4, category:'adidas',price:230},

]

export const data = new Promise ((resolve, reject) =>{
  let condition = true
  setTimeout(()=>{
    if(condition){
      resolve(products)
    }else{
      reject('salio mal :(')
    }
  },3000)
})



