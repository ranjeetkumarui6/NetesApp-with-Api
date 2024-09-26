
import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Card from './Components/Card/Index'
import Form from './Components/Form/Index'
import axios from 'axios'
function App() {


  // let person=[
  //   {
  //     id:1,
  //     title:"Ranjeet",
  //     desc:"i am ranjeet",
  //   },
  //   {
  //     id:2,
  //     title:"Vijay",
  //     desc:"i am Vijay",
  //   },
  //   {
  //     id:3,
  //     title:"kaif",
  //     desc:"i am kaif",
  //   }
  // ]

  let [alldata,setalldata]=useState([])

  useEffect(()=>{
    let dataapi;
 axios.get('https://fakestoreapi.com/products').then((res)=>{
  setalldata(res.data)
    }).catch(()=>{
      console.log("fail")
    })
    console.log(dataapi)
  },[])
  

  let [title,settitle]=useState("")
  let [description,setdesc]=useState("")
  let [Utitle,setUtitle]=useState("")
  let [Udesc,setUdesc]=useState("")
  const [selectedid,setselectedid]=useState()


  const titledata=(e)=>{
    settitle(e.target.value)
  }
  const descdata=(e)=>{
    setdesc(e.target.value)


  }
  const Utitledata=(e)=>{
    setUtitle(e.target.value)
  }
  const Udescdata=(e)=>{
    setUdesc(e.target.value)
  }
  




 const savedata=()=>{
  let id=Math.floor((Math.random())*100000);
  if(title===""){
    alert("Please Enter The Title")
  }else if(description===""){
    alert("Please Enter The Description")
  }else{
    setalldata(()=>[...alldata,{id,title,description}])
    console.log(alldata)

  }
  settitle("")
  setdesc("")
 }




// console.log(alldata)
const deletefun=(e)=>{
 
 let filterdata= alldata.filter((item)=>{
  
     return (item.id!==e)

  })
  setalldata(filterdata)
 
  }
  const editfun=(id,title,description)=>{
   setselectedid(id)
   setUtitle(title)
   setUdesc(description)
  }
  const updatedata = (id) => {
    const data=alldata.filter((item)=>item.id===id);

  setalldata([...alldata,data[0].title=Utitle,data[0].description=Udesc])
  console.log(data[0].title)
  setselectedid(null)

  const d=alldata.filter((item)=>item.id!==undefined)
  setalldata(d)
  }


  return (
    <>
   <Form title={title} titledata={titledata} savenote="Save Note" desc={description} descdata={descdata} savedata={savedata}/>
     <div className={styles.cards}></div>
    <div className={styles.cardContainer}>
     {
      alldata.map((item)=>{
      return (
        item.id===selectedid ?
   <Form title={Utitle}  titledata={Utitledata} savenote="Update Note" desc={Udesc} descdata={Udescdata} savedata={()=>updatedata(item.id)}/>
           :
    <Card title={item.title} image={item.image} desc={item.description}  ids={item.id} deletefun={deletefun} editfun={(i)=>editfun(i,item.title,item.description)}/>
        
  )
      })
     }
</div>

      {alldata.length>0 ?"" :<p className={styles.para}>Not Result !</p>}
    </>
  )
}

export default App
