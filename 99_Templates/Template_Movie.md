---
type: movie
director: 
year: 
genre: 
country: 
status: <%* let s = await tp.system.suggester(["Планирую", "Смотрю", "Посмотрен", "Брошен"], ["Планирую", "Смотрю", "Посмотрен", "Брошен"]); tR += s %>
rating: 
date_watched: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

> [!info] О фильме
> **Режиссёр:** `=this.director`
> **Год:** `=this.year`
> **Жанр:** `=this.genre`
> **Страна:** `=this.country`
> **Моя оценка:** `=this.rating`/10

## 📝 О чём (без спойлеров)


## 💭 Мои впечатления


## 🎨 Визуальный стиль и атмосфера


## ⭐ Любимые моменты / цитаты
- 

## 🔞 Спойлеры и разбор
> [!warning] Осторожно, спойлеры!


## 🔗 Похожие фильмы
- 