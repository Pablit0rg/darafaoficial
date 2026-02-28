"use client";

import Script from "next/script";

export default function AnalyticsWrapper() {
  // Escudo de performance: Este componente isola a injeção de rastreadores de terceiros.
  // Ao utilizar 'lazyOnload', garantimos que o navegador apenas baixe as métricas
  // após concluir a renderização de toda a interface visual e tipografia.
  
  return (
    <>
      {/* Exemplo estrutural para futura ativação:
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-SEUIDAQUI`}
      />
      <Script id="ga-config" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SEUIDAQUI');
        `}
      </Script>
      */}
    </>
  );
}