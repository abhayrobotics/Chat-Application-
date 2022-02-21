import {ChatEngine} from 'react-chat-engine';

// *Importing CSS
import './App.css'

// * Importing new components
import ChatFeed from './components/ChatFeed';



const App = () =>{
    return (
        <ChatEngine
            height="100vh"
            projectID="157ecb4e-3a1a-4160-8a40-3afd7f0a2625"
            userName ="javascript"
            userSecret="123123"

            renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps}/>
                            }
            />
          )
}

export default App;