# Задание

## 1. memo
Statik ro'yxat: Shunday komponent yaratingki, unda Parent va Child komponentlari bo'lsin. Parentda count o'zgarishi Childga ta'sir qilmasligi kerak (Child hech qanday prop qabul qilmaydi). Childni memo bilan o'rab, render loglarini tekshiring.

Props orqali tekshirish: Child komponentiga oddiy string (masalan, foydalanuvchi ismi) prop sifatida uzating. Parentda boshqa bir unrelated (bog'liq bo'lmagan) state o'zgarganda Child qayta render bo'lmasligini ta'minlang.

Custom Comparison: memoning ikkinchi argumenti bo'lgan arePropsEqual funksiyasidan foydalaning. Ob'ekt ichidagi faqat bitta property (masalan id) o'zgarmasa, komponentni qayta render qilmaydigan mantiq yozing.

## 2. useCallback bo'yicha topshiriqlar
Funksiyani barqarorlashtirish: Parent komponentda handleClick funksiyasini yarating va uni memo qilingan Child tugmaga uzating. useCallback ishlatilmaganda tugma nima uchun qayta render bo'layotganini va ishlatilganda qanday o'zgarishini kuzating.

Input va Reset: Bitta matn kiritish maydoni (input) va "Tozalash" (reset) tugmasini yarating. Tozalash funksiyasini useCallback bilan o'rang. Inputga har bir harf yozilganda tugma qayta render bo'lmasligi kerak.

## 3.useMemo bo'yicha topshiriqlar
Filtrlash logikasi: Katta massiv (masalan, 1000 ta ism) yarating. Foydalanuvchi qidiruv (search) yozganda massivni filtrlaydigan funksiyani useMemoga oling. Boshqa statelar o'zgarganda filtr qayta ishlamasligini tekshiring.

Faktorial hisoblash: Inputga kiritilgan sonning faktorialini hisoblaydigan komponent yarating. useMemo yordamida faqat son o'zgargandagina hisoblashni amalga oshiring, rang o'zgarishi kabi boshqa amallarda hisob-kitobni to'xtating.

Referential Identity: useMemo yordamida ob'ekt yarating. Ushbu ob'ektni useEffectning dependency array'iga qo'shing. Agar useMemo bo'lmasa, useEffect cheksiz siklga tushib qolishini yoki har renderda ishlashini isbotlang.

## 4. useActionState bo'yicha topshiriqlar
Oddiy Form: Foydalanuvchi ismini yuboradigan forma yarating. useActionState yordamida server "imitatsiya"sini qiling (masalan, 2 sekund kuting) va yuborilgan ismni ekranda ko'rsating.

Xatolar bilan ishlash: Login formasini yarating. Agar parol "123" bo'lmasa, useActionState orqali "Xato parol" degan xabarni qaytaring va uni UI'da ko'rsating.

Loading holati: useActionState qaytaradigan isPending qiymatidan foydalanib, forma yuborilayotgan paytda tugmani "Yuborilmoqda..." holatiga o'tkazing va uni disabled qiling.