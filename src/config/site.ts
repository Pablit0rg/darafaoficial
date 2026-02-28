// src/config/site.ts
export const siteConfig = {
  name: "Darafa",
  slogan: "Onde a arte encontra os metais",
  url: "https://www.darafa.com", // <-- Atualizado para o novo domínio de produção
  location: {
    city: "Curitiba",
    state: "PR",
    address: "Curitiba, PR",
    mapLink: "https://www.google.com/maps/place/Coletivo+Brecho+das+Preta/@-25.4282157,-49.2687739,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce5f4c8e3b451:0x9428bd98505e541!8m2!3d-25.4282157!4d-49.2687739!16s%2Fg%2F11wg2j39_p?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
  },
  links: {
    instagram: "https://instagram.com/darafa_cwb",
    whatsappContact: "https://ig.me/m/darafa_cwb?text=Vi%20seu%20site%20e%20gostaria%20de%20ver%20os%20drops%20disponíveis",
  },
  seo: {
    description: "Identidade moldada à mão. Joias exclusivas, drops limitados e atendimento personalizado em Curitiba.",
  }
};

export type SiteConfig = typeof siteConfig;