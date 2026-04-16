import React, { useState, memo } from 'react';

const StaticChild = memo(() => {
  console.log("StaticChild: Render bo'ldi (bu faqat bir marta chiqishi kerak)");
  return <div style={{ padding: '10px', border: '1px solid green' }}>Men statik komponentman.</div>;
});

const UserChild = memo(({ name }) => {
  console.log("UserChild: Render bo'ldi");
  return <div style={{ padding: '10px', border: '1px solid blue' }}>Salom, {name}!</div>;
});

const CustomCompareChild = memo(({ user }) => {
  console.log("CustomCompareChild: Render bo'ldi");
  return (
    <div style={{ padding: '10px', border: '1px solid orange' }}>
      Foydalanuvchi ID: {user.id}, Ma'lumot: {user.data}
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id;
});

const MemoPage = () => {
  console.log("Parent (MemoPage) render bo'ldi");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Laziz");
  const [user, setUser] = useState({ id: 1, data: "Boshlang'ich ma'lumot" });

  return (
    <div>
      <h1>1. React.memo bo'yicha topshiriqlar</h1>
      <div style={{ marginBottom: '20px' }}>
        <p>Parent Count: {count}</p>
        <button onClick={() => setCount(c => c + 1)}>Countni oshirish</button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setName(name === "Laziz" ? "Abror" : "Laziz")}>Ismni o'zgartirish</button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setUser({ ...user, data: "O'zgargan data" })}>
          User datani yangilash (ID bir xil qoladi - CustomCompareChild render bo'lmaydi)
        </button>
        <button onClick={() => setUser({ id: user.id + 1, data: "Yangi foydalanuvchi" })}>
          User IDni yangilash (Render bo'ladi)
        </button>
      </div>

      <hr />
      <StaticChild />
      <UserChild name={name} />
      <CustomCompareChild user={user} />
    </div>
  );
};

export default MemoPage;