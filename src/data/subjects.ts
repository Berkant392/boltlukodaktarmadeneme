import { Subject } from '../types';

export const TYT_SUBJECTS: Subject[] = [
  {
    id: 'matematik',
    name: 'Matematik',
    icon: '📐',
    color: 'from-blue-500 to-cyan-500',
    topics: [
      { id: 'temel-kavramlar', name: 'Temel Kavramlar', completed: false },
      { id: 'sayılar', name: 'Sayılar', completed: false },
      { id: 'bölünebilme', name: 'Bölünebilme', completed: false },
      { id: 'üslü-sayılar', name: 'Üslü Sayılar', completed: false },
      { id: 'köklü-sayılar', name: 'Köklü Sayılar', completed: false },
      { id: 'mutlak-değer', name: 'Mutlak Değer', completed: false },
      { id: 'faktöriyel', name: 'Faktöriyel', completed: false },
      { id: 'basit-eşitsizlikler', name: 'Basit Eşitsizlikler', completed: false },
      { id: 'birinci-dereceden-denklemler', name: '1. Dereceden Denklemler', completed: false },
      { id: 'ikinci-dereceden-denklemler', name: '2. Dereceden Denklemler', completed: false },
      { id: 'fonksiyonlar', name: 'Fonksiyonlar', completed: false },
      { id: 'polinomlar', name: 'Polinomlar', completed: false },
      { id: 'permütasyon', name: 'Permütasyon', completed: false },
      { id: 'kombinasyon', name: 'Kombinasyon', completed: false },
      { id: 'olasılık', name: 'Olasılık', completed: false },
      { id: 'geometri-temel', name: 'Geometri Temelleri', completed: false },
      { id: 'üçgenler', name: 'Üçgenler', completed: false },
      { id: 'çokgenler', name: 'Çokgenler', completed: false },
      { id: 'çember-daire', name: 'Çember ve Daire', completed: false },
      { id: 'analitik-geometri', name: 'Analitik Geometri', completed: false },
    ]
  },
  {
    id: 'turkce',
    name: 'Türkçe',
    icon: '📚',
    color: 'from-red-500 to-pink-500',
    topics: [
      { id: 'ses-bilgisi', name: 'Ses Bilgisi', completed: false },
      { id: 'yazım-kuralları', name: 'Yazım Kuralları', completed: false },
      { id: 'noktalama', name: 'Noktalama İşaretleri', completed: false },
      { id: 'kelime-türleri', name: 'Kelime Türleri', completed: false },
      { id: 'kelime-yapısı', name: 'Kelime Yapısı', completed: false },
      { id: 'cümle-bilgisi', name: 'Cümle Bilgisi', completed: false },
      { id: 'anlatım-bozuklukları', name: 'Anlatım Bozuklukları', completed: false },
      { id: 'paragraf', name: 'Paragraf', completed: false },
      { id: 'anlam-bilgisi', name: 'Anlam Bilgisi', completed: false },
      { id: 'edebiyat-bilgisi', name: 'Edebiyat Bilgisi', completed: false }
    ]
  },
  {
    id: 'fen',
    name: 'Fen Bilimleri',
    icon: '🔬',
    color: 'from-green-500 to-emerald-500',
    topics: [
      { id: 'fizik-temel', name: 'Fizik Temelleri', completed: false },
      { id: 'hareket', name: 'Hareket', completed: false },
      { id: 'kuvvet-hareket', name: 'Kuvvet ve Hareket', completed: false },
      { id: 'enerji', name: 'Enerji', completed: false },
      { id: 'isı-sıcaklık', name: 'Isı ve Sıcaklık', completed: false },
      { id: 'elektrik', name: 'Elektrik', completed: false },
      { id: 'kimya-temel', name: 'Kimya Temelleri', completed: false },
      { id: 'atom-modeli', name: 'Atom Modeli', completed: false },
      { id: 'periyodik-sistem', name: 'Periyodik Sistem', completed: false },
      { id: 'kimyasal-bağlar', name: 'Kimyasal Bağlar', completed: false },
      { id: 'asitler-bazlar', name: 'Asitler ve Bazlar', completed: false },
      { id: 'biyoloji-temel', name: 'Biyoloji Temelleri', completed: false },
      { id: 'hücre', name: 'Hücre', completed: false },
      { id: 'ekosistem', name: 'Ekosistem', completed: false },
      { id: 'kalıtım', name: 'Kalıtım', completed: false }
    ]
  },
  {
    id: 'sosyal',
    name: 'Sosyal Bilimler',
    icon: '🏛️',
    color: 'from-purple-500 to-indigo-500',
    topics: [
      { id: 'tarih-ilkçağ', name: 'İlkçağ Tarihi', completed: false },
      { id: 'tarih-ortaçağ', name: 'Ortaçağ Tarihi', completed: false },
      { id: 'tarih-yeniçağ', name: 'Yeniçağ Tarihi', completed: false },
      { id: 'osmanlı-tarihi', name: 'Osmanlı Tarihi', completed: false },
      { id: 'türkiye-cumhuriyeti', name: 'Türkiye Cumhuriyeti Tarihi', completed: false },
      { id: 'coğrafya-fiziki', name: 'Fiziki Coğrafya', completed: false },
      { id: 'coğrafya-beşeri', name: 'Beşeri Coğrafya', completed: false },
      { id: 'türkiye-coğrafyası', name: 'Türkiye Coğrafyası', completed: false },
      { id: 'felsefe', name: 'Felsefe', completed: false },
      { id: 'psikoloji', name: 'Psikoloji', completed: false },
      { id: 'sosyoloji', name: 'Sosyoloji', completed: false }
    ]
  }
];

export const AYT_SUBJECTS: Subject[] = [
  {
    id: 'matematik-ayt',
    name: 'Matematik',
    icon: '🔢',
    color: 'from-blue-600 to-cyan-600',
    topics: [
      { id: 'fonksiyon-kavramı', name: 'Fonksiyon Kavramı', completed: false },
      { id: 'polinomlar-ayt', name: 'Polinomlar', completed: false },
      { id: 'üstel-fonksiyonlar', name: 'Üstel Fonksiyonlar', completed: false },
      { id: 'logaritma-fonksiyonlar', name: 'Logaritma Fonksiyonları', completed: false },
      { id: 'trigonometri', name: 'Trigonometri', completed: false },
      { id: 'diziler', name: 'Diziler', completed: false },
      { id: 'limit', name: 'Limit', completed: false },
      { id: 'türev', name: 'Türev', completed: false },
      { id: 'integral', name: 'İntegral', completed: false }
    ]
  },
  {
    id: 'fizik-ayt',
    name: 'Fizik',
    icon: '⚛️',
    color: 'from-orange-500 to-red-500',
    topics: [
      { id: 'elektrik-alan', name: 'Elektrik Alan', completed: false },
      { id: 'elektrik-potansiyel', name: 'Elektrik Potansiyel', completed: false },
      { id: 'kondansatör', name: 'Kondansatör', completed: false },
      { id: 'elektrik-akımı', name: 'Elektrik Akımı', completed: false },
      { id: 'manyetizma', name: 'Manyetizma', completed: false },
      { id: 'elektromanyetik-indüksiyon', name: 'Elektromanyetik İndüksiyon', completed: false },
      { id: 'alternatif-akım', name: 'Alternatif Akım', completed: false },
      { id: 'dalga-mekaniği', name: 'Dalga Mekaniği', completed: false },
      { id: 'optik', name: 'Optik', completed: false },
      { id: 'modern-fizik', name: 'Modern Fizik', completed: false }
    ]
  },
  {
    id: 'kimya-ayt',
    name: 'Kimya',
    icon: '🧪',
    color: 'from-teal-500 to-green-500',
    topics: [
      { id: 'modern-atom-teorisi', name: 'Modern Atom Teorisi', completed: false },
      { id: 'gazlar', name: 'Gazlar', completed: false },
      { id: 'sıvılar', name: 'Sıvılar', completed: false },
      { id: 'çözeltiler', name: 'Çözeltiler', completed: false },
      { id: 'termodinamik', name: 'Termodinamik', completed: false },
      { id: 'kimyasal-denge', name: 'Kimyasal Denge', completed: false },
      { id: 'elektrokimya', name: 'Elektrokimya', completed: false },
      { id: 'organik-kimya', name: 'Organik Kimya', completed: false }
    ]
  },
  {
    id: 'biyoloji-ayt',
    name: 'Biyoloji',
    icon: '🧬',
    color: 'from-emerald-500 to-teal-500',
    topics: [
      { id: 'protein-sentezi', name: 'Protein Sentezi', completed: false },
      { id: 'mitoz-mayoz', name: 'Mitoz ve Mayoz', completed: false },
      { id: 'mendel-genetiği', name: 'Mendel Genetiği', completed: false },
      { id: 'moleküler-genetik', name: 'Moleküler Genetik', completed: false },
      { id: 'populasyon-genetiği', name: 'Popülasyon Genetiği', completed: false },
      { id: 'evrim', name: 'Evrim', completed: false },
      { id: 'bitki-biyolojisi', name: 'Bitki Biyolojisi', completed: false },
      { id: 'hayvan-biyolojisi', name: 'Hayvan Biyolojisi', completed: false }
    ]
  },
  {
    id: 'edebiyat-ayt',
    name: 'Edebiyat',
    icon: '📖',
    color: 'from-pink-500 to-rose-500',
    topics: [
      { id: 'halk-edebiyatı', name: 'Halk Edebiyatı', completed: false },
      { id: 'divan-edebiyatı', name: 'Divan Edebiyatı', completed: false },
      { id: 'tanzimat-edebiyatı', name: 'Tanzimat Edebiyatı', completed: false },
      { id: 'servet-i-fünun', name: 'Servet-i Fünun', completed: false },
      { id: 'milli-edebiyat', name: 'Milli Edebiyat', completed: false },
      { id: 'cumhuriyet-edebiyatı', name: 'Cumhuriyet Edebiyatı', completed: false },
      { id: 'modern-türk-edebiyatı', name: 'Modern Türk Edebiyatı', completed: false }
    ]
  },
  {
    id: 'tarih-ayt',
    name: 'Tarih',
    icon: '📜',
    color: 'from-amber-500 to-orange-500',
    topics: [
      { id: 'osmanlı-devleti', name: 'Osmanlı Devleti', completed: false },
      { id: 'büyük-devletler', name: 'Büyük Devletler', completed: false },
      { id: 'birinci-dünya-savaşı', name: 'Birinci Dünya Savaşı', completed: false },
      { id: 'kurtuluş-savaşı', name: 'Kurtuluş Savaşı', completed: false },
      { id: 'atatürk-ilkeleri', name: 'Atatürk İlkeleri', completed: false },
      { id: 'ikinci-dünya-savaşı', name: 'İkinci Dünya Savaşı', completed: false },
      { id: 'soğuk-savaş', name: 'Soğuk Savaş', completed: false },
      { id: 'çağdaş-türkiye', name: 'Çağdaş Türkiye', completed: false }
    ]
  },
  {
    id: 'cografya-ayt',
    name: 'Coğrafya',
    icon: '🌍',
    color: 'from-blue-500 to-teal-500',
    topics: [
      { id: 'doğal-sistemler', name: 'Doğal Sistemler', completed: false },
      { id: 'beşeri-sistemler', name: 'Beşeri Sistemler', completed: false },
      { id: 'ekonomik-coğrafya', name: 'Ekonomik Coğrafya', completed: false },
      { id: 'şehir-coğrafyası', name: 'Şehir Coğrafyası', completed: false },
      { id: 'nüfus-coğrafyası', name: 'Nüfus Coğrafyası', completed: false },
      { id: 'çevre-sorunları', name: 'Çevre Sorunları', completed: false },
      { id: 'doğal-afetler', name: 'Doğal Afetler', completed: false }
    ]
  }
];