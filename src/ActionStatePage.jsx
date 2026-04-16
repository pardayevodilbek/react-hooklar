import React, { useActionState } from 'react';

async function formActionHandler(prevState, formData) {
  await new Promise(res => setTimeout(res, 2000));

  const name = formData.get('userName');
  const password = formData.get('password');

  if (password !== "123") {
    return { 
      error: "Xato parol! (To'g'ri parol: 123)", 
      name: null 
    };
  }

  return { 
    error: null, 
    name: name 
  };
}

const ActionStatePage = () => {
  const [state, formAction, isPending] = useActionState(formActionHandler, {
    error: null,
    name: null
  });

  return (
    <div>
      <h1>4. useActionState (React 19)</h1>
      
      <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '350px' }}>
        <input 
          name="userName" 
          placeholder="Ismingizni kiriting" 
          required 
          style={{ padding: '10px' }}
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Parol" 
          required 
          style={{ padding: '10px' }}
        />
        
        <button type="submit" disabled={isPending} style={{ padding: '10px', cursor: isPending ? 'not-allowed' : 'pointer' }}>
          {isPending ? "Yuborilmoqda..." : "Yuborish"}
        </button>

        {state.error && <p style={{ color: 'red', margin: '5px 0' }}>{state.error}</p>}
      </form>

      {state.name && <h2 style={{ color: 'green' }}>Muvaffaqiyatli! Salom, {state.name}</h2>}
    </div>
  );
};

export default ActionStatePage;