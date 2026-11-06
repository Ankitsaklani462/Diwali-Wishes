import { hi, en } from './messages/hindi-en.js'
import { gw, km } from './messages/pahadi.js'
import { pa, gu, mr } from './messages/north-west.js'
import { bn, or } from './messages/east.js'
import { ta, te, kn, ml } from './messages/south.js'

const DEV = "'Noto Sans Devanagari', 'Poppins', sans-serif"
const DEV_TITLE = "'Yatra One', 'Noto Sans Devanagari', serif"

// Har language: label (chip par dikhne wala naam), UI ke text, aur 20 wishes
export const LANGUAGES = [
  {
    code: 'hi', label: 'हिन्दी', font: DEV, titleFont: DEV_TITLE, messages: hi,
    ui: {
      title: 'शुभ दीपावली',
      subtitle: 'अपना नाम लिखें और पाएँ अपने नाम की दीवाली शुभकामना',
      nameLabel: 'आपका नाम', namePlaceholder: 'यहाँ अपना नाम लिखें',
      langLabel: 'भाषा चुनें', cta: 'शुभकामना देखें 🪔', next: 'नई शुभकामना ✨',
      whatsapp: 'WhatsApp पर भेजें', copy: 'कॉपी करें', copied: 'कॉपी हो गया!',
      change: 'नाम बदलें', err: 'कृपया पहले अपना नाम लिखें',
    },
  },
  {
    code: 'en', label: 'English', font: "'Poppins', sans-serif", titleFont: "'Yatra One', 'Poppins', serif", messages: en,
    ui: {
      title: 'Happy Diwali',
      subtitle: 'Enter your name and get a Diwali wish made just for you',
      nameLabel: 'Your name', namePlaceholder: 'Type your name here',
      langLabel: 'Choose language', cta: 'Show my wish 🪔', next: 'Another wish ✨',
      whatsapp: 'Send on WhatsApp', copy: 'Copy', copied: 'Copied!',
      change: 'Change name', err: 'Please enter your name first',
    },
  },
  {
    code: 'gw', label: 'गढ़वळी', font: DEV, titleFont: DEV_TITLE, messages: gw,
    ui: {
      title: 'शुभ बग्वाल',
      subtitle: 'अपणू नाम लिखा अर पावा अपणा नाम की बग्वाल की बधै',
      nameLabel: 'तुमारू नाम', namePlaceholder: 'यख अपणू नाम लिखा',
      langLabel: 'भाषा चुना', cta: 'बधै देखा 🪔', next: 'नई बधै ✨',
      whatsapp: 'WhatsApp पर भेजा', copy: 'कॉपी कारा', copied: 'कॉपी ह्वे ग्ये!',
      change: 'नाम बदळा', err: 'पैलि अपणू नाम लिखा',
    },
  },
  {
    code: 'km', label: 'कुमाऊँनी', font: DEV, titleFont: DEV_TITLE, messages: km,
    ui: {
      title: 'शुभ बग्वाल',
      subtitle: 'आपुण नाम लेखो और पाओ आपुण नाम कि बग्वाल कि शुभकामना',
      nameLabel: 'तुमर नाम', namePlaceholder: 'यां आपुण नाम लेखो',
      langLabel: 'भाषा छांटो', cta: 'शुभकामना देखो 🪔', next: 'नई शुभकामना ✨',
      whatsapp: 'WhatsApp में भेजो', copy: 'कॉपी करो', copied: 'कॉपी है गो!',
      change: 'नाम बदलो', err: 'पैली आपुण नाम लेखो',
    },
  },
  {
    code: 'pa', label: 'ਪੰਜਾਬੀ', font: "'Noto Sans Gurmukhi', 'Poppins', sans-serif", titleFont: "'Noto Sans Gurmukhi', serif", messages: pa,
    ui: {
      title: 'ਦੀਵਾਲੀ ਮੁਬਾਰਕ',
      subtitle: 'ਆਪਣਾ ਨਾਂ ਲਿਖੋ ਤੇ ਆਪਣੇ ਨਾਂ ਦੀ ਦੀਵਾਲੀ ਦੀ ਵਧਾਈ ਪਾਓ',
      nameLabel: 'ਤੁਹਾਡਾ ਨਾਂ', namePlaceholder: 'ਇੱਥੇ ਆਪਣਾ ਨਾਂ ਲਿਖੋ',
      langLabel: 'ਭਾਸ਼ਾ ਚੁਣੋ', cta: 'ਵਧਾਈ ਵੇਖੋ 🪔', next: 'ਨਵੀਂ ਵਧਾਈ ✨',
      whatsapp: 'WhatsApp ’ਤੇ ਭੇਜੋ', copy: 'ਕਾਪੀ ਕਰੋ', copied: 'ਕਾਪੀ ਹੋ ਗਿਆ!',
      change: 'ਨਾਂ ਬਦਲੋ', err: 'ਪਹਿਲਾਂ ਆਪਣਾ ਨਾਂ ਲਿਖੋ ਜੀ',
    },
  },
  {
    code: 'bn', label: 'বাংলা', font: "'Noto Sans Bengali', 'Poppins', sans-serif", titleFont: "'Noto Sans Bengali', serif", messages: bn,
    ui: {
      title: 'শুভ দীপাবলি',
      subtitle: 'আপনার নাম লিখুন আর পান আপনার নামে দীপাবলির শুভেচ্ছা',
      nameLabel: 'আপনার নাম', namePlaceholder: 'এখানে আপনার নাম লিখুন',
      langLabel: 'ভাষা বেছে নিন', cta: 'শুভেচ্ছা দেখুন 🪔', next: 'নতুন শুভেচ্ছা ✨',
      whatsapp: 'WhatsApp-এ পাঠান', copy: 'কপি করুন', copied: 'কপি হয়েছে!',
      change: 'নাম বদলান', err: 'আগে আপনার নাম লিখুন',
    },
  },
  {
    code: 'gu', label: 'ગુજરાતી', font: "'Noto Sans Gujarati', 'Poppins', sans-serif", titleFont: "'Noto Sans Gujarati', serif", messages: gu,
    ui: {
      title: 'શુભ દિવાળી',
      subtitle: 'તમારું નામ લખો અને તમારા નામની દિવાળીની શુભકામના મેળવો',
      nameLabel: 'તમારું નામ', namePlaceholder: 'અહીં તમારું નામ લખો',
      langLabel: 'ભાષા પસંદ કરો', cta: 'શુભકામના જુઓ 🪔', next: 'નવી શુભકામના ✨',
      whatsapp: 'WhatsApp પર મોકલો', copy: 'કૉપિ કરો', copied: 'કૉપિ થઈ ગયું!',
      change: 'નામ બદલો', err: 'પહેલાં તમારું નામ લખો',
    },
  },
  {
    code: 'mr', label: 'मराठी', font: DEV, titleFont: DEV_TITLE, messages: mr,
    ui: {
      title: 'शुभ दीपावली',
      subtitle: 'तुमचे नाव लिहा आणि मिळवा तुमच्या नावाने दिवाळीच्या शुभेच्छा',
      nameLabel: 'तुमचे नाव', namePlaceholder: 'इथे तुमचे नाव लिहा',
      langLabel: 'भाषा निवडा', cta: 'शुभेच्छा पहा 🪔', next: 'नवीन शुभेच्छा ✨',
      whatsapp: 'WhatsApp वर पाठवा', copy: 'कॉपी करा', copied: 'कॉपी झाले!',
      change: 'नाव बदला', err: 'आधी तुमचे नाव लिहा',
    },
  },
  {
    code: 'ta', label: 'தமிழ்', font: "'Noto Sans Tamil', 'Poppins', sans-serif", titleFont: "'Noto Sans Tamil', serif", messages: ta,
    ui: {
      title: 'இனிய தீபாவளி',
      subtitle: 'உங்கள் பெயரை எழுதி, உங்களுக்கான தீபாவளி வாழ்த்தைப் பெறுங்கள்',
      nameLabel: 'உங்கள் பெயர்', namePlaceholder: 'உங்கள் பெயரை இங்கே எழுதுங்கள்',
      langLabel: 'மொழியைத் தேர்ந்தெடுக்கவும்', cta: 'வாழ்த்தைப் பார்க்க 🪔', next: 'புதிய வாழ்த்து ✨',
      whatsapp: 'WhatsApp-ல் அனுப்பு', copy: 'நகலெடு', copied: 'நகலெடுக்கப்பட்டது!',
      change: 'பெயரை மாற்று', err: 'முதலில் உங்கள் பெயரை எழுதுங்கள்',
    },
  },
  {
    code: 'te', label: 'తెలుగు', font: "'Noto Sans Telugu', 'Poppins', sans-serif", titleFont: "'Noto Sans Telugu', serif", messages: te,
    ui: {
      title: 'శుభ దీపావళి',
      subtitle: 'మీ పేరు రాసి, మీ పేరుతో దీపావళి శుభాకాంక్షలు పొందండి',
      nameLabel: 'మీ పేరు', namePlaceholder: 'ఇక్కడ మీ పేరు రాయండి',
      langLabel: 'భాషను ఎంచుకోండి', cta: 'శుభాకాంక్షలు చూడండి 🪔', next: 'కొత్త శుభాకాంక్షలు ✨',
      whatsapp: 'WhatsApp లో పంపండి', copy: 'కాపీ', copied: 'కాపీ అయింది!',
      change: 'పేరు మార్చండి', err: 'ముందు మీ పేరు రాయండి',
    },
  },
  {
    code: 'kn', label: 'ಕನ್ನಡ', font: "'Noto Sans Kannada', 'Poppins', sans-serif", titleFont: "'Noto Sans Kannada', serif", messages: kn,
    ui: {
      title: 'ಶುಭ ದೀಪಾವಳಿ',
      subtitle: 'ನಿಮ್ಮ ಹೆಸರು ಬರೆಯಿರಿ, ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿ ದೀಪಾವಳಿ ಶುಭಾಶಯ ಪಡೆಯಿರಿ',
      nameLabel: 'ನಿಮ್ಮ ಹೆಸರು', namePlaceholder: 'ಇಲ್ಲಿ ನಿಮ್ಮ ಹೆಸರು ಬರೆಯಿರಿ',
      langLabel: 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ', cta: 'ಶುಭಾಶಯ ನೋಡಿ 🪔', next: 'ಹೊಸ ಶುಭಾಶಯ ✨',
      whatsapp: 'WhatsApp ನಲ್ಲಿ ಕಳುಹಿಸಿ', copy: 'ನಕಲಿಸಿ', copied: 'ನಕಲಾಯಿತು!',
      change: 'ಹೆಸರು ಬದಲಿಸಿ', err: 'ಮೊದಲು ನಿಮ್ಮ ಹೆಸರು ಬರೆಯಿರಿ',
    },
  },
  {
    code: 'ml', label: 'മലയാളം', font: "'Noto Sans Malayalam', 'Poppins', sans-serif", titleFont: "'Noto Sans Malayalam', serif", messages: ml,
    ui: {
      title: 'ശുഭ ദീപാവലി',
      subtitle: 'നിങ്ങളുടെ പേര് എഴുതൂ, നിങ്ങളുടെ പേരിൽ ദീപാവലി ആശംസ നേടൂ',
      nameLabel: 'നിങ്ങളുടെ പേര്', namePlaceholder: 'ഇവിടെ നിങ്ങളുടെ പേര് എഴുതൂ',
      langLabel: 'ഭാഷ തിരഞ്ഞെടുക്കൂ', cta: 'ആശംസ കാണൂ 🪔', next: 'പുതിയ ആശംസ ✨',
      whatsapp: 'WhatsApp-ൽ അയയ്ക്കൂ', copy: 'പകർത്തൂ', copied: 'പകർത്തി!',
      change: 'പേര് മാറ്റൂ', err: 'ആദ്യം നിങ്ങളുടെ പേര് എഴുതൂ',
    },
  },
  {
    code: 'or', label: 'ଓଡ଼ିଆ', font: "'Noto Sans Oriya', 'Poppins', sans-serif", titleFont: "'Noto Sans Oriya', serif", messages: or,
    ui: {
      title: 'ଶୁଭ ଦୀପାବଳି',
      subtitle: 'ଆପଣଙ୍କ ନାମ ଲେଖନ୍ତୁ ଓ ନିଜ ନାମରେ ଦୀପାବଳିର ଶୁଭେଚ୍ଛା ପାଆନ୍ତୁ',
      nameLabel: 'ଆପଣଙ୍କ ନାମ', namePlaceholder: 'ଏଠାରେ ଆପଣଙ୍କ ନାମ ଲେଖନ୍ତୁ',
      langLabel: 'ଭାଷା ବାଛନ୍ତୁ', cta: 'ଶୁଭେଚ୍ଛା ଦେଖନ୍ତୁ 🪔', next: 'ନୂଆ ଶୁଭେଚ୍ଛା ✨',
      whatsapp: 'WhatsApp ରେ ପଠାନ୍ତୁ', copy: 'କପି କରନ୍ତୁ', copied: 'କପି ହୋଇଗଲା!',
      change: 'ନାମ ବଦଳାନ୍ତୁ', err: 'ପ୍ରଥମେ ଆପଣଙ୍କ ନାମ ଲେଖନ୍ତୁ',
    },
  },
]

export const getLang = (code) => LANGUAGES.find((l) => l.code === code) || LANGUAGES[0]
