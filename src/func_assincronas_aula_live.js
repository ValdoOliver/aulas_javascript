function temporizador() {
  return new Promise((resolve, reject)=>{ 
      setTimeout(()=>{
      console.log("3")
      resolve()
      },5000)
  })
  }
  
  async function main(){
  console.log("1")
  
  
  const tempo = await temporizador()
  
  
  console.log("2")
  
  }
  
  
  main()