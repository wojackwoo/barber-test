import React from "react";
import {createRoot} from "react-dom/client";
import {Phone,MessageCircle,MapPin,Globe2,Plus,ChevronRight} from "lucide-react";
import "./style.css";

const phone="+212603464303";
const mapUrl="https://maps.app.goo.gl/DmxpTow7scH6HgTZ8";
const siteUrl="https://t7li9a.ma/barber/52-1q9r9p";
const instaUrl="https://www.instagram.com/barbershop_abdell/";
const images=["https://images.unsplash.com/photo-1635273051368-de31ef6a8cc4?auto=format&fit=crop&fm=jpg&q=80&w=1600","https://images.unsplash.com/photo-1759134248487-e8baaf31e33e?auto=format&fit=crop&fm=jpg&q=80&w=1600","https://images.unsplash.com/photo-1781455793310-8427c96454c7?auto=format&fit=crop&fm=jpg&q=80&w=1600"];
const services=["Coupe homme","Keratin","Protéine","Soin visage","Cire visage","Hijama","Massage sportif","Épilation"];

function saveContact(){
 const vcard=["BEGIN:VCARD","VERSION:3.0","FN:Barber men - Abderrahman","ORG:Barber men",`TEL;TYPE=CELL:${phone}`,`URL:${siteUrl}`,"NOTE:Oujda 48 | Instagram: @barbershop_abdell","END:VCARD"].join("\r\n");
 const blob=new Blob([vcard],{type:"text/vcard;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=url;a.download="Barber-men-Abderrahman.vcf";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function InfoRow({Icon,label,value,href}){
 return <a className="info-row" href={href} target={href.startsWith("http")?"_blank":undefined} rel={href.startsWith("http")?"noopener":undefined}>
  <div className="ico"><Icon size={20}/></div><div className="info-main"><div className="info-label">{label}</div><div className="info-value">{value}</div></div><ChevronRight className="chev" size={18}/>
 </a>
}
function Social({type,title,sub,href}){
 return <a className={`social ${type}`} href={href} target="_blank" rel="noopener">
  <span className="brand-icon"><img src={`https://cdn.simpleicons.org/${type}/ffffff`} alt=""/></span><strong>{title}</strong><small>{sub}</small>
 </a>
}
function App(){
 return <div className="page">
  <div className="cover" style={{backgroundImage:`url(${images[0]})`}}><div className="cover-chip">OUJDA 48 · BARBER MEN</div></div>
  <main className="hero">
   <div className="avatar"><div className="logo"><div><div className="big">BA</div><div className="small">ABDERRAHMAN</div></div></div></div>
   <div className="headline"><div className="name">Barber men <span className="ar">عبد الرحمان 💈</span></div><div className="handle">@barbershop_abdell</div></div>
   <div className="badges"><span className="badge red">OUJDA 48</span><span className="badge">BARBER MEN</span><span className="badge">SOINS & BEAUTÉ</span></div>
   <div className="top-actions"><button className="action primary" onClick={saveContact}><Plus size={19}/> Enregistrer</button><a className="action dark" href={`https://wa.me/${phone}?text=Salam%20Abderrahman%2C%20je%20voudrais%20prendre%20rendez-vous.`} target="_blank" rel="noopener">WhatsApp</a></div>
  </main>
  <section className="section"><div className="eyebrow">Réseaux</div><div className="socials">
   <Social type="instagram" title="Instagram" sub="@barbershop_abdell" href={instaUrl}/><Social type="whatsapp" title="WhatsApp" sub="+212 6 03 46 43 03" href={`https://wa.me/${phone}`}/>
  </div></section>
  <section className="section"><div className="eyebrow">À propos</div><div className="about"><b>Barber men · عبد الرحمان</b><br/>Coupe homme, soins et services bien-être à Oujda 48. Une expérience masculine avec un style direct, propre et moderne.</div></section>
  <section className="section"><div className="eyebrow">Services</div><div className="services">{services.map(s=><div className="service" key={s}><i className="dot"></i>{s}</div>)}</div></section>
  <section className="section"><div className="eyebrow">Menu</div><div className="menu-card">
   <div className="menu-head"><div className="menu-title">Tarifs & prestations</div><div className="demo">MENU DÉMO</div></div>
   {[["Coupe Homme","Coupe + finition","40 DH"],["Coupe + Barbe","Style complet","60 DH"],["Coupe Premium","Coupe + styling","80 DH"],["Soin Visage","Nettoyage & soin","50 DH"],["Massage Sportif","Session bien-être","100 DH"],["Keratin / Protéine","Selon longueur","Sur devis"]].map(([name,sub,price])=><div className="price-row" key={name}><div><div className="price-name">{name}</div><span className="price-sub">{sub}</span></div><div className="price">{price}</div></div>)}
  </div></section>
  <section className="section"><div className="eyebrow">Galerie</div><div className="gallery">
   <div className="photo tall" style={{backgroundImage:`url(${images[1]})`}}><div className="photo-label">L'ART DU BARBER</div></div>
   <div className="photo" style={{backgroundImage:`url(${images[2]})`}}><div className="photo-label">L'ESPACE</div></div>
   <div className="photo" style={{backgroundImage:`url(${images[0]})`}}><div className="photo-label">COUPE HOMME</div></div>
   <div className="photo" style={{backgroundImage:`url(${images[1]})`}}><div className="photo-label">FADE & STYLE</div></div>
  </div></section>
  <section className="section"><div className="eyebrow">Contact</div><div className="info">
   <InfoRow Icon={Phone} label="Téléphone" value="+212 6 03 46 43 03" href={`tel:${phone}`}/>
   <InfoRow Icon={MessageCircle} label="WhatsApp" value="+212 6 03 46 43 03" href={`https://wa.me/${phone}`}/>
   <InfoRow Icon={MapPin} label="Localisation" value="Oujda, Maroc · Oujda 48" href={mapUrl}/>
   <InfoRow Icon={Globe2} label="Site web" value="t7li9a.ma" href={siteUrl}/>
  </div></section>
  <section className="section"><div className="eyebrow">Nous trouver</div><a className="map" href={mapUrl} target="_blank" rel="noopener"><div className="map-pin"><MapPin size={22}/></div><div className="map-label">Oujda 48 · Ouvrir l’itinéraire ↗</div></a></section>
  <section className="section"><div className="quicklinks"><a className="quicklink" href={instaUrl} target="_blank" rel="noopener"><span className="qicon">◎</span>Voir Instagram</a><a className="quicklink" href={siteUrl} target="_blank" rel="noopener"><span className="qicon">↗</span>Ouvrir le site</a></div></section>
  <div className="footer"><b>Carteek</b> · profil digital du salon</div>
  <div className="sticky"><div className="sticky-inner"><a className="call" href={`tel:${phone}`}><Phone size={18}/> Appeler</a><a className="wa" href={`https://wa.me/${phone}?text=Salam%20Abderrahman%2C%20je%20voudrais%20prendre%20rendez-vous.`} target="_blank" rel="noopener"><MessageCircle size={18}/> WhatsApp</a></div></div>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
