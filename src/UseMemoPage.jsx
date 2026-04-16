import React, { useState, useMemo, useEffect } from 'react';

const bigArray = Array.from({ length: 1000 }, (_, i) => `Foydalanuvchi ${i + 1}`);

const UseMemoPage = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);
  const [isDark, setIsDark] = useState(false);

  const filteredNames = useMemo(() => {
    console.log("Qidiruv mantiqi ishga tushdi...");
    return bigArray.filter(name => name.toLowerCase().includes(search.toLowerCase()));
  }, [search]); 

  const factorial = useMemo(() => {
    console.log("Faktorial hisoblanmoqda...");
    if (num < 0) return 0;
    if (num > 20) return "Juda katta son"; 
    
    const calcFactorial = (n) => {
      if (n === 0 || n === 1) return 1;
      return n * calcFactorial(n - 1);
    };
    return calcFactorial(num);
  }, [num]); 

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: isDark ? '#333' : '#fff',
      color: isDark ? '#fff' : '#000',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '10px'
    };
  }, [isDark]);

  useEffect(() => {
    console.log("Referensial Identity: Theme ob'ekti o'zgardi!");
  }, [themeStyles]);

  return (
    <div>
      <h1>3. useMemo</h1>
      
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h3>3.1 & 3.3 Filtrlash va Theme</h3>
        <button onClick={() => setIsDark(!isDark)}>Mavzuni o'zgartirish</button>
        <button onClick={() => setCount(c => c + 1)} style={{ marginLeft: '10px' }}>
          Unrelated State (Count: {count})
        </button>
        <div style={themeStyles}>
          <input 
            type="text" 
            placeholder="Qidiruv" 
            onChange={(e) => setSearch(e.target.value)} 
            style={{ padding: '5px' }}
          />
          <p>Topilganlar soni: {filteredNames.length}</p>
        </div>
      </div>

      <div style={{ padding: '10px', border: '1px solid #ccc' }}>
        <h3>3.2 Faktorial</h3>
        <input 
          type="number" 
          value={num} 
          onChange={(e) => setNum(parseInt(e.target.value) || 0)} 
          style={{ padding: '5px' }}
        />
        <p>{num}! = {factorial}</p>
      </div>
    </div>
  );
};

export default UseMemoPage;