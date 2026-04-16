import React, { useState, useCallback, memo } from 'react';

const MemoButton = memo(({ onClick, children }) => {
  console.log(`${children} tugmasi render bo'ldi`);
  return (
    <button onClick={onClick} style={{ margin: '5px', padding: '10px' }}>
      {children}
    </button>
  );
});

const CallbackPage = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);  

  const handleReset = useCallback(() => {
    setText("");
  }, []); 

  return (
    <div>
      <h1>2. useCallback bo'yicha topshiriqlar</h1>
      <p>Parent Count: {count}</p>
      
      <div style={{ margin: '20px 0' }}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Matn yozing..."
          style={{ padding: '10px', width: '300px' }}
        />
      </div>

      <MemoButton onClick={handleIncrement}>Count +1</MemoButton>
      <MemoButton onClick={handleReset}>Tozalash (Reset)</MemoButton>
      <p><i>Izoh: Konsolni tekshiring. Inputga yozganda tugmalar qayta render bo'lmayapti.</i></p>
    </div>
  );
};

export default CallbackPage;