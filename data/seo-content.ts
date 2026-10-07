export type ServiceContent = {
  title: string; description: string; h1: string; lead: string;
  sections: { h: string; p: string }[];
  faq: { q: string; a: string }[];
  problems: string[]; services: string[];
};

export const serviceContent: Record<string, ServiceContent> = {
  "su-kacagi-tespiti": {
    title: "Eskişehir Su Kaçağı Tespiti: Nasıl Yapılır? | Eskişehir Su Tesisatı",
    description: "Eskişehir'de su kaçağı belirtileri, tespit yöntemleri ve ilk adımlar. Kırmadan önce bilmeniz gerekenler ve bağımsız tesisatçıya yönlendirme.",
    h1: "Su kaçağı tespiti",
    lead: "Kaçak gözle görünmeden aylarca su kaybettirebilir. Belirtileri tanıyın, kırıp dökmeden önce kaynağı daraltın, sonra doğru ustaya ulaşın.",
    sections: [
      { h: "Kaçağın belirtileri", p: "Açıklanamayan fatura artışı, tüm musluklar kapalıyken dönen sayaç, duvarda nem ve boya kabarması, tavan lekeleri, küf kokusu ve zeminde ısınan ya da nemlenen noktalar tipik işaretlerdir." },
      { h: "Tespit nasıl yapılır?", p: "Önce sayaç testiyle kaçağın varlığı doğrulanır. Ardından hatlar vanalarla ayrılarak bölge daraltılır. Gerekirse basınç testi, dinleme cihazı ya da termal kamera gibi yöntemlerle kırılacak alan en aza indirilir." },
      { h: "Neden erken müdahale?", p: "Küçük bir sızıntı yalıtımı, alçıpanı, parkeyi ve komşu daireyi etkileyerek maliyeti hızla büyütebilir. Erken tespit hem suyu hem onarım bedelini korur." },
    ],
    faq: [
      { q: "Kaçak tespiti ücretli midir, fiyatı nasıl belirlenir?", a: "Bu platform fiyat belirlemez. Ücreti hizmeti veren bağımsız tesisatçı, işin kapsamına ve yöntemine göre kendisi belirler; işe başlamadan netleştirmenizi öneririz." },
      { q: "Kaçağı kendim bulabilir miyim?", a: "Sayaç testi ve vana ile hat ayırma kendi başınıza yapılabilir. Duvar ya da zemin içindeki kaçağı bulmak ise ekipman ve deneyim gerektirir." },
    ],
    problems: ["duvardan-su-siziyor", "su-faturasi-yuksek-geldi", "tavandan-su-damliyor"],
    services: ["vana-ve-sayac", "su-tesisati-yenileme", "klozet-rezervuar-tamiri"],
  },
  "tikali-gider-acma": {
    title: "Eskişehir Tıkalı Gider Açma Rehberi | Eskişehir Su Tesisatı",
    description: "Lavabo, mutfak, duş ve klozet tıkanıklığında ne yapılır? Güvenli ilk adımlar, kimyasal uyarıları ve tesisatçıya yönlendirme.",
    h1: "Tıkalı gider açma",
    lead: "Her tıkanıklık aynı değildir. Sifon, yağ, saç ya da ana hat: önce nerede olduğunu anlayın, sonra yöntemi seçin.",
    sections: [
      { h: "Hangi tıkanıklık, hangi çözüm?", p: "Tek lavabodaki tıkanıklık genellikle sifondadır ve söküp temizlemekle çözülür. Birden çok giderde geri su ya da kötü koku ise ana hatta sorun olduğunu gösterir ve ekipmanlı müdahale gerektirir." },
      { h: "Kimyasalda dikkat", p: "Güçlü kimyasallar eski borulara zarar verebilir ve karıştırılırsa tehlikelidir. Kullanıyorsanız talimatı izleyin, eldiven ve havalandırma kullanın, sonuç yoksa tekrarlamayın." },
      { h: "Tekrarlayan tıkanıklık", p: "Aynı giderde sık sık tıkanıklık yaşıyorsanız sorun yalnızca birikim değil, eğim, kırık boru ya da kök girişi olabilir. Kamera ile hat kontrolü kalıcı çözümü gösterir." },
    ],
    faq: [
      { q: "Tıkanıklığı açmadan önce ne yapmalıyım?", a: "Giderin kullanımını durdurun, taşma ihtimaline karşı eşyaları uzaklaştırın, sifonu ve vantuzu deneyin. Birden çok giderde sorun varsa doğrudan yardım isteyin." },
      { q: "Gider açma işi ne kadar sürer?", a: "Basit sifon tıkanıklığı kısa sürer; ana hat tıkanıklığı ise konuma ve yönteme göre değişir. Süreyi tesisatçı yerinde değerlendirir." },
    ],
    problems: ["lavabo-gider-tikali", "gider-kokusu", "klozet-surekli-su-akitiyor"],
    services: ["banyo-mutfak-tesisati", "su-tesisati-yenileme", "su-kacagi-tespiti"],
  },
  "musluk-batarya-tamiri": {
    title: "Eskişehir Musluk ve Batarya Tamiri | Eskişehir Su Tesisatı",
    description: "Damlayan, sızdıran ya da zor dönen musluk ve bataryada tamir mi değişim mi? Nedenler, ilk kontroller ve tesisatçıya yönlendirme.",
    h1: "Musluk ve batarya tamiri",
    lead: "Damlayan bir musluk küçük bir sorun gibi görünür ama sessizce su kaybettirir. Çoğu zaman tek bir parça yeter.",
    sections: [
      { h: "Tamir mi, değişim mi?", p: "Conta ya da kartuş yıprandıysa tamir yeterlidir. Gövde kireçlenmiş, çatlamış ya da parçası bulunmuyorsa değişim daha ekonomik ve kalıcıdır." },
      { h: "Kireç ve bakım", p: "Kireçli sular musluk başlıklarını ve kartuşları zamanla yıpratabilir. Başlıkları belirli aralıklarla temizlemek ömrü uzatır." },
      { h: "Değişim sırasında", p: "Batarya değişiminde ara vanalar, bağlantı hortumları ve yüzey uyumu da kontrol edilir; yenisini almadan önce delik aralığı ve bağlantı tipine bakılmalıdır." },
    ],
    faq: [
      { q: "Batarya değişiminde kendim ne yapabilirim?", a: "Önce köşe vanasını kapatın. Bağlantı ölçüleri ve yüzey uyumunu bilmiyorsanız sızıntı riskine karşı işi bir tesisatçıya bırakın." },
      { q: "Musluk neden sürekli gevşiyor?", a: "Montaj somunu, sabitleme ya da yüzey yıpranması neden olabilir. Zorla sıkmak yerine parça kontrolü yapılmalıdır." },
    ],
    problems: ["musluk-damliyor", "su-basinci-dusuk", "su-faturasi-yuksek-geldi"],
    services: ["su-kacagi-tespiti", "banyo-mutfak-tesisati", "vana-ve-sayac"],
  },
  "klozet-rezervuar-tamiri": {
    title: "Eskişehir Klozet ve Rezervuar Tamiri | Eskişehir Su Tesisatı",
    description: "Sürekli su akıtan, dolmayan ya da çekmeyen klozet ve rezervuar sorunları: nedenler, kontroller, gömme rezervuar notları.",
    h1: "Klozet ve rezervuar tamiri",
    lead: "Sessiz akan bir rezervuar, evdeki en pahalı görünmez kaçaklardan biri olabilir. Şamandıra, conta ve sübap genelde sebeptir.",
    sections: [
      { h: "Sık görülen sorunlar", p: "Sürekli su akması, rezervuarın dolmaması, zayıf çekme, çekince kapanmayan sübap, dışa sızıntı ve gürültülü dolum. Çoğu, iç mekanizmadaki aşınmış parçalardan kaynaklanır." },
      { h: "Gömme rezervuar", p: "Gömme sistemlerde parçalara panel ya da düğme üzerinden ulaşılır. Marka ve modele göre parça değişir; yanlış parça ve zorlama sızıntıya yol açabilir." },
      { h: "Klozet bağlantısı", p: "Klozet tabanında sızıntı, sallanma ya da koku varsa bağlantı contası ve zemin bağlantısı kontrol edilmelidir; ihmal edilirse zemin zarar görür." },
    ],
    faq: [
      { q: "Rezervuar sızdırıyor mu, nasıl test ederim?", a: "Gıda boyası damlatıp 15-20 dakika bekleyin. Kâsede renk görünüyorsa sübap sızdırıyor demektir." },
      { q: "Rezervuar parçaları evrensel mi?", a: "Hayır. Modele göre şamandıra ve sübap farklılaşır. Eskisini ustaya göstermek doğru parçayı almayı kolaylaştırır." },
    ],
    problems: ["klozet-surekli-su-akitiyor", "su-faturasi-yuksek-geldi", "gider-kokusu"],
    services: ["su-kacagi-tespiti", "banyo-mutfak-tesisati", "vana-ve-sayac"],
  },
  "su-tesisati-yenileme": {
    title: "Eskişehir Su Tesisatı Yenileme | Eskişehir Su Tesisatı",
    description: "Eski boruların yenilenmesi, ek hat ve yeni tesisat için planlama, malzeme ve süreç notları. Başlamadan önce bilmeniz gerekenler.",
    h1: "Su tesisatı yenileme",
    lead: "Eskiyen borular kaçak, pas ve basınç kaybı demektir. Yenileme işi ne kadar iyi planlanırsa, o kadar az kırım ve o kadar kısa sürer.",
    sections: [
      { h: "Ne zaman yenileme gerekir?", p: "Sık tekrar eden kaçaklar, paslı ya da bulanık su, ciddi basınç düşüşü ve çok eski galvaniz borular yenileme zamanının geldiğini gösterir." },
      { h: "Malzeme seçimi", p: "Günümüzde sıcak ve soğuk su hatlarında yaygın olarak kullanılan malzemeler vardır; hangisinin uygun olduğu bina, hat uzunluğu ve kullanım koşullarına göre ustayla birlikte kararlaştırılmalıdır." },
      { h: "Süreç ve planlama", p: "Keşif, hat planı, kırım alanı, su kesintisi süresi, basınç testi ve kapatma aşamaları iş başlamadan konuşulmalıdır. Yazılı bir iş kapsamı, ileride yaşanabilecek anlaşmazlıkları azaltır." },
    ],
    faq: [
      { q: "Tesisat yenileme sırasında su kesilir mi?", a: "Evet, işin kapsamına göre belli süreler su kesilebilir. Programı tesisatçıyla önceden planlayın." },
      { q: "Tüm tesisatı yenilemek zorunda mıyım?", a: "Her zaman değil. Hasar yerel ise parça değişimi yeterli olabilir. Hangi bölümün yenileneceğine tesisatçının yerinde yapacağı keşif sonrasında karar verilir." },
    ],
    problems: ["boru-patladi", "su-basinci-dusuk", "duvardan-su-siziyor"],
    services: ["su-kacagi-tespiti", "banyo-mutfak-tesisati", "vana-ve-sayac"],
  },
  "hidrofor-tamiri": {
    title: "Eskişehir Hidrofor Tamiri ve Arıza Rehberi | Eskişehir Su Tesisatı",
    description: "Sürekli çalışan, basınç yapmayan ya da su basmayan hidrofor sistemlerinde nedenler ve ilk kontroller. Bağımsız tesisatçıya yönlendirme.",
    h1: "Hidrofor tamiri",
    lead: "Hidrofor, evin suyunun kalbidir. Sık çalışması, ses yapması ya da basınç dalgalanması genellikle erken uyarı işaretidir.",
    sections: [
      { h: "Sistemin parçaları", p: "Pompa, hava (genleşme) tankı, basınç şalteri, çek valf ve manometre birlikte çalışır. Arızanın hangi parçadan kaynaklandığını anlamak gereksiz parça değişimini önler." },
      { h: "Kısa çevrim", p: "Kısa aralıklarla açılıp kapanan hidrofor çoğu zaman hava tankı ya da kaçak sorunudur. Pompanın ömrünü kısalttığı için ertelenmemelidir." },
      { h: "Bakım", p: "Tank hava basıncı, filtre ve bağlantılar düzenli aralıklarla kontrol edilirse beklenmedik arızalar azalır." },
    ],
    faq: [
      { q: "Hidrofor gürültü yapıyorsa ne olabilir?", a: "Yatak aşınması, havasız çalışma ya da pompa içi kirlilik olabilir. Ses artıyorsa sistemi uzun süre çalıştırmadan kontrol ettirin." },
      { q: "Hidrofor su basmıyorsa nereye bakmalıyım?", a: "Giriş vanası, depo seviyesi, emiş hattı ve pompa açma-kapama durumuna bakın. Hava çekiyorsa emiş hattında kaçak olabilir." },
    ],
    problems: ["hidrofor-surekli-calisiyor", "su-basinci-dusuk", "musluktan-su-gelmiyor"],
    services: ["su-kacagi-tespiti", "su-tesisati-yenileme", "vana-ve-sayac"],
  },
  "banyo-mutfak-tesisati": {
    title: "Eskişehir Banyo ve Mutfak Tesisatı | Eskişehir Su Tesisatı",
    description: "Banyo ve mutfak yenilemesinde su ve gider hatlarının planlanması, taşınması ve bağlantısı. Başlamadan önce kontrol listesi.",
    h1: "Banyo ve mutfak tesisatı",
    lead: "Yenileme planı çizilmeden önce tesisat planlanmalıdır. Sonradan duvar açmak, baştan düşünmekten çok daha pahalıdır.",
    sections: [
      { h: "Planlama sırası", p: "Tesisat hatları, gider eğimleri ve cihaz konumları fayans ve dolap işinden önce belirlenmelidir. Cihaz taşınacaksa gider mesafesi ve eğim kritik olur." },
      { h: "Su yalıtımı", p: "Banyo zemininde ve ıslak hacimlerde su yalıtımı, komşu dairelere ve alt kata sızıntıyı önlemenin en önemli parçasıdır." },
      { h: "Bağlantılar", p: "Batarya, sifon, evye, çamaşır ve bulaşık makinesi bağlantıları servis edilebilir yerlerde bırakılmalı, ara vanalarla izole edilmelidir." },
    ],
    faq: [
      { q: "Banyo yenilemede önce ne yapılır?", a: "Keşif, kırım, tesisat hatları, su yalıtımı, basınç testi, ardından seramik ve montaj. Sıra bozulursa maliyet artar." },
      { q: "Eski tesisat yenilemeye dahil olmalı mı?", a: "Duvar zaten açılıyorsa eski boruların da gözden geçirilmesi mantıklıdır. Bu, sonradan ikinci kırım ihtiyacını azaltır." },
    ],
    problems: ["lavabo-gider-tikali", "duvardan-su-siziyor", "gider-kokusu"],
    services: ["su-tesisati-yenileme", "tikali-gider-acma", "musluk-batarya-tamiri"],
  },
  "vana-ve-sayac": {
    title: "Eskişehir Vana ve Sayaç İşleri | Eskişehir Su Tesisatı",
    description: "Ana vana, daire vanası ve sayaç çevresi: kapanmayan vana, sızdıran bağlantı ve sayaç ile ilgili ilk kontroller.",
    h1: "Vana ve sayaç işleri",
    lead: "Acil durumda suyu kesebildiğiniz bir vana evin sigortasıdır. Çalıştığından emin olmak için en iyi zaman, sorun çıkmadan önce.",
    sections: [
      { h: "Vanayı tanıyın", p: "Ana vananın yerini, hangi yöne kapandığını ve rahat çevrilip çevrilmediğini bilin. Uzun süre dokunulmayan vanalar kireç ve pas nedeniyle sıkışabilir." },
      { h: "Sızdıran bağlantılar", p: "Sayaç ve vana çevresindeki damlamalar, genellikle conta ya da bağlantı gevşemesinden kaynaklanır. Zorlamak sıkışmayı artırabilir." },
      { h: "Sayaç hakkında", p: "Sayaç ve mühürlü bağlantılar su idaresinin sorumluluğundadır. Sayaç arızası, mühür ya da okuma sorunlarında bağlı olduğunuz su idaresiyle görüşmeniz gerekir." },
    ],
    faq: [
      { q: "Vana kapanmıyorsa ne yapmalıyım?", a: "Zorlamayın. Kırılabilir. Apartman girişindeki ya da üst hattaki vanayı kullanın ve ustaya yönlendirme isteyin." },
      { q: "Sayaca müdahale edebilir miyim?", a: "Hayır. Sayaç ve mühür su idaresine aittir. Sorun olduğunda idareye bildirin." },
    ],
    problems: ["boru-patladi", "su-faturasi-yuksek-geldi", "duvardan-su-siziyor"],
    services: ["su-kacagi-tespiti", "su-tesisati-yenileme", "klozet-rezervuar-tamiri"],
  },
};
