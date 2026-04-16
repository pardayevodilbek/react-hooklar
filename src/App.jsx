import React, { useState } from 'react';
import MemoPage from './MemoPage';
import CallbackPage from './CallbackPage';
import UseMemoPage from './UseMemoPage';
import ActionStatePage from './ActionStatePage';

function App() {
  const [activePage, setActivePage] = useState('memo');

  const renderPage = () => {
    switch (activePage) {
      case 'memo': return <MemoPage />;
      case 'callback': return <CallbackPage />;
      case 'useMemo': return <UseMemoPage />;
      case 'actionState': return <ActionStatePage />;
      default: return <MemoPage />;
    }
  };

  const navStyle = {
    display: 'flex',
    gap: '10px',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    marginBottom: '20px'
  };

  const btnStyle = (page) => ({
    padding: '10px 20px',
    backgroundColor: activePage === page ? '#007bff' : '#fff',
    color: activePage === page ? '#fff' : '#000',
    border: '1px solid #ccc',
    cursor: 'pointer',
    borderRadius: '5px'
  });

  return (
    <div>
      <nav style={navStyle}>
        <button style={btnStyle('memo')} onClick={() => setActivePage('memo')}>React.memo</button>
        <button style={btnStyle('callback')} onClick={() => setActivePage('callback')}>useCallback</button>
        <button style={btnStyle('useMemo')} onClick={() => setActivePage('useMemo')}>useMemo</button>
        <button style={btnStyle('actionState')} onClick={() => setActivePage('actionState')}>useActionState</button>
      </nav>
      <div style={{ padding: '0 20px' }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;