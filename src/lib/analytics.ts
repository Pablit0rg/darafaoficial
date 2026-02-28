type EventName = 'click_whatsapp' | 'click_instagram' | 'submit_lead' | 'view_showcase';

interface EventPayload {
  [key: string]: string | number | boolean | undefined;
}

export const trackEvent = (eventName: EventName, payload?: EventPayload) => {
  try {
    if (typeof window !== 'undefined') {
      // Infraestrutura preparada para injecao futura do Meta Pixel ou GTM
      // Exemplo: window.dataLayer?.push({ event: eventName, ...payload });
      
      console.log(`[Analytics Layer] Evento disparado: ${eventName}`, payload || {});
    }
  } catch (error) {
    console.error('[Analytics Layer] Falha ao registrar evento:', error);
  }
};