import React from 'react'
import reactDom from 'react-dom'
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed';


const App = () => {
    return (
      <ChatEngine
        height="100vh"
        projectID="ca1083f2-c7c3-43e3-98a8-717b99003518"
        userName="jeezy"
        userSecret="1870"
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    );
}

export default App
