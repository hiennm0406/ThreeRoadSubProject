# Three Remain — Equipment Database Viewer

Web tool tra cứu trang bị cho **Three Remain**. Deploy qua Netlify (cấu hình giữ nguyên — cùng URL host cũ).

## Export data từ Unity

Menu: **`(=^･ω･^=) / Export Item DB to Web (Three Remain)`**

Ghi file: `subProject/src/data/items.generated.json`

## Chạy local

```bash
npm ci
npm run dev
```

## Deploy

`npm ci && vite build` → `dist/` (xem `netlify.toml`)

## Lọc

- Equipment Set: Sentinel / Thornlord / Bloodreaver
- Slot: Hat, Body, Hand, …
- Tìm kiếm text (`|` = OR)
