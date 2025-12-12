import {useState,useEffect} from 'react'
import './chat.css'
import {mainchat} from './mainchat.js'
import Loading from '../Loading.js'

export  function Chat(){

    const [text, setText] = useState('What will be the best gift for the New Year?');
    const [textAnswer, setTextAnswer] = useState('');

    const [loading, setLoading] = useState(false);

    const [textAnswArr, setTextAnswArr] = useState([]);

    const sendMessage = async () => {
      console.log("sendMessage():"+text)

    setLoading(true);
    let answer = "?"
    try {
        const concatenated = textAnswArr
  .slice()
  .reverse()
  .map(text => `${text.ans}\n${text.qst}`)
  .join('\n');

        let query = `
        please answer the QUESTION below in simple sentence,  
        and keep in mind the CONTEXT below.
        be proactive, meaning you should drive the conversation.
        ------------
        QUESTION:` + text + `
        -----------
        CONTEXT:`+concatenated +  `
        `
        answer = await mainchat(query);
        // console.log("sendMessage()1:"+answer)


    } catch (error) {
        console.log(JSON.stringify(error));
        answer = (JSON.stringify(error))
    }
     // setText('');
    //  setTextAnswer(ans);
    // console.log("sendMessage()2:"+answer)

     let chatEntity = {"qst":text,"ans":answer}
     setTextAnswArr(prevArr => [...prevArr, chatEntity]);

     setText("")
      setLoading(false);
    //   console.log("sendMessage():end")

    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    };
    
    return <div>
        Chat
        <hr></hr>

       <div>
  {textAnswArr.slice().map((text, idx) => (
    <div key={idx} >
    <div style={{ backgroundColor: 'darkslategrey' }}>{text.qst}</div>
    <div style={{ backgroundColor: 'grey' }}>{text.ans}</div>
    </div>
  ))}
</div>

<Loading onoff={loading}/>
<hr></hr>
<input
      type="text"
      value={text}
      onChange={e => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Type your message and press Enter"
    />
    </div>
}