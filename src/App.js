import TabComponent from './components/TabComponent';
import React, { useState } from 'react';
import './App.css';

function App() {

  const tabContent = [
    { title: 'tab1', content: 'content1' },
    { title: 'tab2', content: 'content2' },
    { title: 'tab3', content: 'content3' }
  ]
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="App">
      <TabComponent
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        allTabs={tabContent}
      />
    </div>
  );
}

export default App;
