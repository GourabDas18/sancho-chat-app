

import ChatBox from "./ChatBox"


const Right=(props)=>{

    return (
        <div className={`w-[65%] md:w-screen md:absolute bg-slate-900 bg-cover bg-blend-multiply`} style={{backgroundImage:"url(./bg.png)"}}>
            <ChatBox setShow={props.setShow}/>
        </div>
    )
}

export default Right;