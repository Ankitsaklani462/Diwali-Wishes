import { hi, en } from './messages/hindi-en.js'
import { gw, km } from './messages/pahadi.js'
import { pa, gu, mr } from './messages/north-west.js'
import { bn, or } from './messages/east.js'
import { ta, te, kn, ml } from './messages/south.js'
import { hr, rj } from './messages/haryana-rajasthan.js'

const DEV = "'Noto Sans Devanagari', 'Poppins', sans-serif"
const DEV_TITLE = "'Yatra One', 'Noto Sans Devanagari', serif"

// Har language: label (chip par dikhne wala naam), UI ke text, aur 20 wishes
export const LANGUAGES = [
  {
    code: 'hi', label: 'हिन्दी', font: DEV, titleFont: DEV_TITLE, messages: hi, speechLang: 'hi-IN',
    ui: {
      title: 'शुभ दीपावली',
      subtitle: 'अपना नाम लिखें और पाएँ अपने नाम की दीवाली शुभकामना',
      nameLabel: 'आपका नाम', namePlaceholder: 'यहाँ अपना नाम लिखें',
      langLabel: 'भाषा चुनें', cta: 'शुभकामना देखें 🪔', next: 'नई शुभकामना ✨',
      signature: 'सकलानी परिवार की ओर से आपको और आपके परिवार को दीपावली की हार्दिक शुभकामनाएँ।',
      avatarLabel: 'सकलानी परिवार का एनिमेटेड अवतार',
      voiceSpeaking: '🔊 शुभकामना सुनाई जा रही है…',
      voiceUnavailable: 'इस ब्राउज़र में आवाज़ चलाना उपलब्ध नहीं है।',
      change: 'नाम बदलें', err: 'कृपया पहले अपना नाम लिखें',
    },
  },
  {
    code: 'en', label: 'English', font: "'Poppins', sans-serif", titleFont: "'Yatra One', 'Poppins', serif", messages: en, speechLang: 'en-IN',
    ui: {
      title: 'Happy Diwali',
      subtitle: 'Enter your name and get a Diwali wish made just for you',
      nameLabel: 'Your name', namePlaceholder: 'Type your name here',
      langLabel: 'Choose language', cta: 'Show my wish 🪔', next: 'Another wish ✨',
      signature: 'Warm Diwali wishes to you and your family from the Saklani family.',
      avatarLabel: 'Animated Saklani family avatar',
      voiceSpeaking: '🔊 Reading your Diwali wish…',
      voiceUnavailable: 'Voice playback is not available in this browser.',
      change: 'Change name', err: 'Please enter your name first',
    },
  },
  {
    code: 'hr', label: 'हरियाणवी', font: DEV, titleFont: DEV_TITLE, messages: hr, speechLang: 'hi-IN',
    ui: {
      title: 'दिवाली की राम-राम',
      subtitle: 'अपणा नाम लिखो अर अपने नाम की दिवाली की बधाई पाओ',
      nameLabel: 'थारा नाम', namePlaceholder: 'इब्बै अपणा नाम लिखो',
      langLabel: 'भाषा चुनो', cta: 'बधाई देखो 🪔', next: 'एक और बधाई ✨',
      signature: 'सकलानी परिवार की ओर तै थमने अर थारे परिवार नै दिवाली की घणी-घणी शुभकामनाएं।',
      avatarLabel: 'सकलानी परिवार का एनिमेटेड अवतार',
      voiceSpeaking: '🔊 बधाई सुनाई दे री सै…',
      voiceUnavailable: 'इस ब्राउज़र में आवाज़ चालण की सुविधा नहीं सै।',
      change: 'नाम बदलो', err: 'पहले अपणा नाम लिखो',
    },
  },
  {
    code: 'rj', label: 'राजस्थानी', font: DEV, titleFont: DEV_TITLE, messages: rj, speechLang: 'hi-IN',
    ui: {
      title: 'शुभ दीपावली',
      subtitle: 'आपरो नाम लिखो अर आपरे नाम री दीपावली री बधाई पावो',
      nameLabel: 'आपरो नाम', namePlaceholder: 'इठे आपरो नाम लिखो',
      langLabel: 'भासा चुनो', cta: 'शुभकामना देखो 🪔', next: 'नवी शुभकामना ✨',
      signature: 'सकलानी परिवार री ओर सूं थाने अर थारे परिवार नै दीपावली री घणी-घणी शुभकामनावां।',
      avatarLabel: 'सकलानी परिवार रो एनिमेटेड अवतार',
      voiceSpeaking: '🔊 शुभकामना सुणाई जा री है…',
      voiceUnavailable: 'इण ब्राउज़र में आवाज़ चालण री सुविधा उपलब्ध कोनी है।',
      change: 'नाम बदलो', err: 'पहले आपरो नाम लिखो',
    },
  },
  {
    code: 'gw', label: 'गढ़वळी', font: DEV, titleFont: DEV_TITLE, messages: gw, speechLang: 'hi-IN',
    ui: {
      title: 'शुभ बग्वाल',
      subtitle: 'अपणू नाम लिखा अर पावा अपणा नाम की बग्वाल की बधै',
      nameLabel: 'तुमारू नाम', namePlaceholder: 'यख अपणू नाम लिखा',
      langLabel: 'भाषा चुना', cta: 'बधै देखा 🪔', next: 'नई बधै ✨',
      signature: 'सकलानी परिवार की तरफ बटि तुम तैं अर तुमारा परिवार तैं बग्वाल की भौत-भौत बधै।',
      avatarLabel: 'सकलानी परिवार का एनिमेटेड अवतार',
      voiceSpeaking: '🔊 बधै सुनाई द्यूंणि छ…',
      voiceUnavailable: 'यि ब्राउज़र मा आवाज चलाण की सुविधा उपलब्ध नि छ।',
      change: 'नाम बदळा', err: 'पैलि अपणू नाम लिखा',
    },
  },
  {
    code: 'km', label: 'कुमाऊँनी', font: DEV, titleFont: DEV_TITLE, messages: km, speechLang: 'hi-IN',
    ui: {
      title: 'शुभ बग्वाल',
      subtitle: 'आपुण नाम लेखो और पाओ आपुण नाम कि बग्वाल कि शुभकामना',
      nameLabel: 'तुमर नाम', namePlaceholder: 'यां आपुण नाम लेखो',
      langLabel: 'भाषा छांटो', cta: 'शुभकामना देखो 🪔', next: 'नई शुभकामना ✨',
      signature: 'सकलानी परिवार कि तरफ बै तुमुकैं और तुमार परिवार कैं बग्वालै की भौत-भौत शुभकामना।',
      avatarLabel: 'सकलानी परिवारक एनिमेटेड अवतार',
      voiceSpeaking: '🔊 शुभकामना सुनै रैछ…',
      voiceUnavailable: 'या ब्राउज़र में आवाज चलै की सुविधा उपलब्ध नि छै।',
      change: 'नाम बदलो', err: 'पैली आपुण नाम लेखो',
    },
  },
  {
    code: 'pa', label: 'ਪੰਜਾਬੀ', font: "'Noto Sans Gurmukhi', 'Poppins', sans-serif", titleFont: "'Noto Sans Gurmukhi', serif", messages: pa, speechLang: 'pa-IN',
    ui: {
      title: 'ਦੀਵਾਲੀ ਮੁਬਾਰਕ',
      subtitle: 'ਆਪਣਾ ਨਾਂ ਲਿਖੋ ਤੇ ਆਪਣੇ ਨਾਂ ਦੀ ਦੀਵਾਲੀ ਦੀ ਵਧਾਈ ਪਾਓ',
      nameLabel: 'ਤੁਹਾਡਾ ਨਾਂ', namePlaceholder: 'ਇੱਥੇ ਆਪਣਾ ਨਾਂ ਲਿਖੋ',
      langLabel: 'ਭਾਸ਼ਾ ਚੁਣੋ', cta: 'ਵਧਾਈ ਵੇਖੋ 🪔', next: 'ਨਵੀਂ ਵਧਾਈ ✨',
      signature: 'ਸਕਲਾਨੀ ਪਰਿਵਾਰ ਵੱਲੋਂ ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ।',
      avatarLabel: 'ਸਕਲਾਨੀ ਪਰਿਵਾਰ ਦਾ ਐਨੀਮੇਟਡ ਅਵਤਾਰ',
      voiceSpeaking: '🔊 ਦੀਵਾਲੀ ਦੀਆਂ ਵਧਾਈਆਂ ਸੁਣਾਈਆਂ ਜਾ ਰਹੀਆਂ ਹਨ…',
      voiceUnavailable: 'ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਆਵਾਜ਼ ਦੀ ਸਹੂਲਤ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।',
      change: 'ਨਾਂ ਬਦਲੋ', err: 'ਪਹਿਲਾਂ ਆਪਣਾ ਨਾਂ ਲਿਖੋ ਜੀ',
    },
  },
  {
    code: 'bn', label: 'বাংলা', font: "'Noto Sans Bengali', 'Poppins', sans-serif", titleFont: "'Noto Sans Bengali', serif", messages: bn, speechLang: 'bn-IN',
    ui: {
      title: 'শুভ দীপাবলি',
      subtitle: 'আপনার নাম লিখুন আর পান আপনার নামে দীপাবলির শুভেচ্ছা',
      nameLabel: 'আপনার নাম', namePlaceholder: 'এখানে আপনার নাম লিখুন',
      langLabel: 'ভাষা বেছে নিন', cta: 'শুভেচ্ছা দেখুন 🪔', next: 'নতুন শুভেচ্ছা ✨',
      signature: 'সকলানি পরিবারের পক্ষ থেকে আপনাকে ও আপনার পরিবারকে দীপাবলির আন্তরিক শুভেচ্ছা।',
      avatarLabel: 'সকলানি পরিবারের অ্যানিমেটেড অবতার',
      voiceSpeaking: '🔊 শুভেচ্ছা শোনানো হচ্ছে…',
      voiceUnavailable: 'এই ব্রাউজারে কণ্ঠস্বর চালানোর সুবিধা নেই।',
      change: 'নাম বদলান', err: 'আগে আপনার নাম লিখুন',
    },
  },
  {
    code: 'gu', label: 'ગુજરાતી', font: "'Noto Sans Gujarati', 'Poppins', sans-serif", titleFont: "'Noto Sans Gujarati', serif", messages: gu, speechLang: 'gu-IN',
    ui: {
      title: 'શુભ દિવાળી',
      subtitle: 'તમારું નામ લખો અને તમારા નામની દિવાળીની શુભકામના મેળવો',
      nameLabel: 'તમારું નામ', namePlaceholder: 'અહીં તમારું નામ લખો',
      langLabel: 'ભાષા પસંદ કરો', cta: 'શુભકામના જુઓ 🪔', next: 'નવી શુભકામના ✨',
      signature: 'સકલાની પરિવાર તરફથી તમને અને તમારા પરિવારને દિવાળીની હાર્દિક શુભકામનાઓ.',
      avatarLabel: 'સકલાની પરિવારનો એનિમેટેડ અવતાર',
      voiceSpeaking: '🔊 શુભકામના સંભળાવવામાં આવી રહી છે…',
      voiceUnavailable: 'આ બ્રાઉઝરમાં અવાજ ચલાવવાની સુવિધા ઉપલબ્ધ નથી.',
      change: 'નામ બદલો', err: 'પહેલાં તમારું નામ લખો',
    },
  },
  {
    code: 'mr', label: 'मराठी', font: DEV, titleFont: DEV_TITLE, messages: mr, speechLang: 'mr-IN',
    ui: {
      title: 'शुभ दीपावली',
      subtitle: 'तुमचे नाव लिहा आणि मिळवा तुमच्या नावाने दिवाळीच्या शुभेच्छा',
      nameLabel: 'तुमचे नाव', namePlaceholder: 'इथे तुमचे नाव लिहा',
      langLabel: 'भाषा निवडा', cta: 'शुभेच्छा पहा 🪔', next: 'नवीन शुभेच्छा ✨',
      signature: 'सकलानी परिवाराकडून तुम्हाला आणि तुमच्या कुटुंबाला दिवाळीच्या हार्दिक शुभेच्छा.',
      avatarLabel: 'सकलानी परिवाराचा अॅनिमेटेड अवतार',
      voiceSpeaking: '🔊 शुभेच्छा ऐकवल्या जात आहेत…',
      voiceUnavailable: 'या ब्राउझरमध्ये आवाजाची सुविधा उपलब्ध नाही.',
      change: 'नाव बदला', err: 'आधी तुमचे नाव लिहा',
    },
  },
  {
    code: 'ta', label: 'தமிழ்', font: "'Noto Sans Tamil', 'Poppins', sans-serif", titleFont: "'Noto Sans Tamil', serif", messages: ta, speechLang: 'ta-IN',
    ui: {
      title: 'இனிய தீபாவளி',
      subtitle: 'உங்கள் பெயரை எழுதி, உங்களுக்கான தீபாவளி வாழ்த்தைப் பெறுங்கள்',
      nameLabel: 'உங்கள் பெயர்', namePlaceholder: 'உங்கள் பெயரை இங்கே எழுதுங்கள்',
      langLabel: 'மொழியைத் தேர்ந்தெடுக்கவும்', cta: 'வாழ்த்தைப் பார்க்க 🪔', next: 'புதிய வாழ்த்து ✨',
      signature: 'சக்லானி குடும்பத்தின் சார்பாக உங்களுக்கும் உங்கள் குடும்பத்தினருக்கும் இனிய தீபாவளி நல்வாழ்த்துகள்.',
      avatarLabel: 'சக்லானி குடும்பத்தின் அனிமேஷன் அவதார்',
      voiceSpeaking: '🔊 வாழ்த்து ஒலிக்கிறது…',
      voiceUnavailable: 'இந்த உலாவியில் குரல் வசதி இல்லை.',
      change: 'பெயரை மாற்று', err: 'முதலில் உங்கள் பெயரை எழுதுங்கள்',
    },
  },
  {
    code: 'te', label: 'తెలుగు', font: "'Noto Sans Telugu', 'Poppins', sans-serif", titleFont: "'Noto Sans Telugu', serif", messages: te, speechLang: 'te-IN',
    ui: {
      title: 'శుభ దీపావళి',
      subtitle: 'మీ పేరు రాసి, మీ పేరుతో దీపావళి శుభాకాంక్షలు పొందండి',
      nameLabel: 'మీ పేరు', namePlaceholder: 'ఇక్కడ మీ పేరు రాయండి',
      langLabel: 'భాషను ఎంచుకోండి', cta: 'శుభాకాంక్షలు చూడండి 🪔', next: 'కొత్త శుభాకాంక్షలు ✨',
      signature: 'సక్లానీ కుటుంబం తరఫున మీకు మరియు మీ కుటుంబ సభ్యులకు దీపావళి శుభాకాంక్షలు.',
      avatarLabel: 'సక్లానీ కుటుంబం యానిమేటెడ్ అవతార్',
      voiceSpeaking: '🔊 శుభాకాంక్షలు వినిపిస్తున్నాయి…',
      voiceUnavailable: 'ఈ బ్రౌజర్‌లో వాయిస్ సౌకర్యం అందుబాటులో లేదు.',
      change: 'పేరు మార్చండి', err: 'ముందు మీ పేరు రాయండి',
    },
  },
  {
    code: 'kn', label: 'ಕನ್ನಡ', font: "'Noto Sans Kannada', 'Poppins', sans-serif", titleFont: "'Noto Sans Kannada', serif", messages: kn, speechLang: 'kn-IN',
    ui: {
      title: 'ಶುಭ ದೀಪಾವಳಿ',
      subtitle: 'ನಿಮ್ಮ ಹೆಸರು ಬರೆಯಿರಿ, ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿ ದೀಪಾವಳಿ ಶುಭಾಶಯ ಪಡೆಯಿರಿ',
      nameLabel: 'ನಿಮ್ಮ ಹೆಸರು', namePlaceholder: 'ಇಲ್ಲಿ ನಿಮ್ಮ ಹೆಸರು ಬರೆಯಿರಿ',
      langLabel: 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ', cta: 'ಶುಭಾಶಯ ನೋಡಿ 🪔', next: 'ಹೊಸ ಶುಭಾಶಯ ✨',
      signature: 'ಸಕ್ಲಾನಿ ಕುಟುಂಬದ ವತಿಯಿಂದ ನಿಮಗೆ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ದೀಪಾವಳಿಯ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು.',
      avatarLabel: 'ಸಕ್ಲಾನಿ ಕುಟುಂಬದ ಅನಿಮೇಟೆಡ್ ಅವತಾರ',
      voiceSpeaking: '🔊 ಶುಭಾಶಯಗಳನ್ನು ಕೇಳಿಸಲಾಗುತ್ತಿದೆ…',
      voiceUnavailable: 'ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಸೌಲಭ್ಯ ಲಭ್ಯವಿಲ್ಲ.',
      change: 'ಹೆಸರು ಬದಲಿಸಿ', err: 'ಮೊದಲು ನಿಮ್ಮ ಹೆಸರು ಬರೆಯಿರಿ',
    },
  },
  {
    code: 'ml', label: 'മലയാളം', font: "'Noto Sans Malayalam', 'Poppins', sans-serif", titleFont: "'Noto Sans Malayalam', serif", messages: ml, speechLang: 'ml-IN',
    ui: {
      title: 'ശുഭ ദീപാവലി',
      subtitle: 'നിങ്ങളുടെ പേര് എഴുതൂ, നിങ്ങളുടെ പേരിൽ ദീപാവലി ആശംസ നേടൂ',
      nameLabel: 'നിങ്ങളുടെ പേര്', namePlaceholder: 'ഇവിടെ നിങ്ങളുടെ പേര് എഴുതൂ',
      langLabel: 'ഭാഷ തിരഞ്ഞെടുക്കൂ', cta: 'ആശംസ കാണൂ 🪔', next: 'പുതിയ ആശംസ ✨',
      signature: 'സക്ലാനി കുടുംബത്തിന്റെ പേരിൽ നിങ്ങൾക്കും നിങ്ങളുടെ കുടുംബത്തിനും ദീപാവലി ആശംസകൾ.',
      avatarLabel: 'സക്ലാനി കുടുംബത്തിന്റെ ആനിമേറ്റഡ് അവതാരം',
      voiceSpeaking: '🔊 ആശംസകൾ കേൾപ്പിക്കുന്നു…',
      voiceUnavailable: 'ഈ ബ്രൗസറിൽ ശബ്ദസൗകര്യം ലഭ്യമല്ല.',
      change: 'പേര് മാറ്റൂ', err: 'ആദ്യം നിങ്ങളുടെ പേര് എഴുതൂ',
    },
  },
  {
    code: 'or', label: 'ଓଡ଼ିଆ', font: "'Noto Sans Oriya', 'Poppins', sans-serif", titleFont: "'Noto Sans Oriya', serif", messages: or, speechLang: 'or-IN',
    ui: {
      title: 'ଶୁଭ ଦୀପାବଳି',
      subtitle: 'ଆପଣଙ୍କ ନାମ ଲେଖନ୍ତୁ ଓ ନିଜ ନାମରେ ଦୀପାବଳିର ଶୁଭେଚ୍ଛା ପାଆନ୍ତୁ',
      nameLabel: 'ଆପଣଙ୍କ ନାମ', namePlaceholder: 'ଏଠାରେ ଆପଣଙ୍କ ନାମ ଲେଖନ୍ତୁ',
      langLabel: 'ଭାଷା ବାଛନ୍ତୁ', cta: 'ଶୁଭେଚ୍ଛା ଦେଖନ୍ତୁ 🪔', next: 'ନୂଆ ଶୁଭେଚ୍ଛା ✨',
      signature: 'ସକଲାନୀ ପରିବାର ପକ୍ଷରୁ ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭେଚ୍ଛା।',
      avatarLabel: 'ସକଲାନୀ ପରିବାରର ଆନିମେଟେଡ୍ ଅବତାର',
      voiceSpeaking: '🔊 ଶୁଭେଚ୍ଛା ଶୁଣାଯାଉଛି…',
      voiceUnavailable: 'ଏହି ବ୍ରାଉଜରରେ ଭଏସ୍ ସୁବିଧା ଉପଲବ୍ଧ ନାହିଁ।',
      change: 'ନାମ ବଦଳାନ୍ତୁ', err: 'ପ୍ରଥମେ ଆପଣଙ୍କ ନାମ ଲେଖନ୍ତୁ',
    },
  },
]

export const getLang = (code) => LANGUAGES.find((l) => l.code === code) || LANGUAGES[0]
