export type IconName = "drop" | "drain" | "tap" | "toilet" | "pipe" | "pump" | "shower" | "valve";
export type Service = { slug: string; title: string; desc: string; icon: IconName };

export const services: Service[] = [
  { slug: "su-kacagi-tespiti", title: "Su kaçağı tespiti", desc: "Duvarda, zeminde, tavanda: kaçağın yeri ve nedeni, kırıp dökmeden önce anlaşılır.", icon: "drop" },
  { slug: "tikali-gider-acma", title: "Tıkalı gider açma", desc: "Lavabo, mutfak, duş ve ana hat tıkanıklıkları. Doğru yöntem, doğru ekipman.", icon: "drain" },
  { slug: "musluk-batarya-tamiri", title: "Musluk ve batarya tamiri", desc: "Damlayan, sızdıran, zor dönen ya da kireçlenen muslukta tamir mi değişim mi?", icon: "tap" },
  { slug: "klozet-rezervuar-tamiri", title: "Klozet ve rezervuar", desc: "Sürekli su akıtan, dolmayan ya da çekmeyen rezervuar ve klozet sorunları.", icon: "toilet" },
  { slug: "su-tesisati-yenileme", title: "Su tesisatı yenileme", desc: "Eski boruların değişimi, ek hat ve yeni tesisat. Başlamadan bilinmesi gerekenler.", icon: "pipe" },
  { slug: "hidrofor-tamiri", title: "Hidrofor tamiri", desc: "Sürekli çalışan, basınç yapmayan ya da su basmayan hidrofor sistemleri.", icon: "pump" },
  { slug: "banyo-mutfak-tesisati", title: "Banyo ve mutfak tesisatı", desc: "Yenileme sırasında su ve gider hatlarının planlanması, taşınması ve bağlantısı.", icon: "shower" },
  { slug: "vana-ve-sayac", title: "Vana ve sayaç işleri", desc: "Ana vana, daire vanası ve sayaç çevresi: kapanmayan vana, sızdıran bağlantı.", icon: "valve" },
];
