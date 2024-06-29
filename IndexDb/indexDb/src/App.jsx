import { useEffect } from "react"


const idb=window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

const createCollectioninIndexDb=()=>{
  if(!idb){
    console.log("IndexedDB not supported")
     return ;
  }
  console.log("IndexedDB supported")
  const request=idb.open("test-db",2)
  request.onerror=(event)=>{
    console.log("Error",event);
    console.log("Error", event.target.error);
  };
  request.onsuccess=(event)=>{
    console.log("Success", event);
  };
  request.onupgradeneeded=(event)=>{
    /// create object store
    console.log("Upgrade", event);
    //
    const db=request.result;
    if(db.objectStoreNames.contains("users")){
      db.createObjectStore("users", {keyPath: "id"});
    }
  }

  request.onsuccess=(event)=>{ 
    console.log("Database open succcessfully", event);
  
   
    };
  };
const App = () => {
  useEffect(()=>{
    createCollectioninIndexDb()
    
  
  })
  return (
    <div>App</div>
  )
}

export default App