import Input from './Input';
import { useState } from 'react';
import JsonViewer from './JsonViewer';
import Sidebar from './Sidebar';
import Recents from './Recents';
import Activity from './Activity';
import './App.css';

function App() {
  const [json, setJson] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recents, setRecents] = useState([
    'https://jsonplaceholder.typicode.com/posts',
    'https://dummyjson.com/products',
    'https://dummyjson.com/products/1'
  ]);

  const handleOnEnter = async url => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setJson(data);
    setRecents(recents => recents.includes(url) ? [...recents] : [...recents, url]);
    setLoading(false);
  };

  const handleRecentClick = item => {
    handleOnEnter(item)
  }

  const [jsonSearch, setJsonSearch] = useState('');
  const handleOnSearch = search => {
    setJsonSearch(search);
  };

  return (
    <div className='app'>
      <Sidebar copyright={`by Hari Mohan Thakur, emailharimohan@gmail.com`}>
        <Input onEnter={handleOnEnter} />
        <Recents recents={recents} onRecentClick={handleRecentClick} />
      </Sidebar>
      <main className='main'>
        <Activity onSearch={handleOnSearch} />
        <JsonViewer search={jsonSearch} json={json || {}} loading={loading} />
      </main>
    </div>
  );
}

export default App;
