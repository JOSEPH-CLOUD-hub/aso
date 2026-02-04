import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-950 mt-125 h-20 text-white">
      <div className="mx-auto max-w-5xl relative top-15 left-6">Shipped to united state of America</div>

      <div className="mx-auto max-w-3xl flex justify-around items-center">
        <Link href="/sitemap">Sitemap</Link>
        <Link href="/legalnotice">Legalnotice</Link>
        <Link href="/chainsact">Chainsact</Link>
        <Link href="/accessibility">Accessibility</Link>
        <Link href="/privacypolicy">Privacypolicy</Link>
      </div>
         
         <div>
          <input>
          </input>
         </div>
      
    </div>
  );
};

export default Footer;
