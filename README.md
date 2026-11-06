# 🪔 Diwali Wishes (React + Vite)

Naam likho → bhasha chuno → apne naam ki Diwali shubhkamna pao.

## Features
- 13 languages: हिन्दी, English, गढ़वळी, कुमाऊँनी, ਪੰਜਾਬੀ, বাংলা, ગુજરાતી, मराठी, தமிழ், తెలుగు, ಕನ್ನಡ, മലയാളം, ଓଡ଼ିଆ
- Har language mein 20 alag wishes (`src/data/messages/`), `{name}` ki jagah user ka naam
- "Nayi shubhkamna" dabane par naya wish (20 ke 20 dikhne tak repeat nahi) + **8 themes me se naya theme** (`src/themes.js`)
- Fireworks (screen par tap karo to bhi phootte hain), udte diye, jhoolti kandeel, ghoomti rangoli
- WhatsApp share + copy

## Chalane ke liye
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ folder -> Netlify / Vercel / GitHub Pages par daal do
```

Phone par check karne ke liye computer aur phone ko same Wi-Fi par rakho, phir terminal mein dikhne wala Network URL phone ke browser mein kholo.

## GitHub Pages par publish karna
- Repository ke **Settings → Pages → Build and deployment → Source** mein **GitHub Actions** select karo.
- `main` branch par push karne ke baad **Actions** tab mein “Deploy to GitHub Pages” workflow complete hone do.
- Published URL repository ke **Settings → Pages** mein milega.

## Customise
- Naya wish: us language ki file mein line add karo (`{name}` likhna mat bhoolna)
- Nayi theme: `src/themes.js` mein ek object add karo
- Garhwali / Kumaoni wishes kisi native speaker se ek baar check karwa lena achha rahega.
