// Tipagens originais, não devem ser alteradas.
type EventName = 'click_whatsapp' | 'click_instagram' | 'submit_lead' | 'view_showcase';

interface EventPayload {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Função para rastrear eventos no client-side e enviá-los para o back-end.
 *
 * @param eventName O nome do evento a ser rastreado.
 * @param payload Um objeto opcional com dados adicionais sobre o evento.
 */
export const trackEvent = (eventName: EventName, payload?: EventPayload) => {
  // 1. Lógica Original (Client-Side) - Mantida Intacta
  // Esta parte continua a funcionar como antes, permitindo a integração com
  // ferramentas de analytics client-side como o Google Tag Manager (GTM).
  try {
    if (typeof window !== 'undefined') {
      // A camada `window.dataLayer` é uma prática comum para GTM.
      // Ex: window.dataLayer?.push({ event: eventName, ...payload });
      
      console.log(`[Analytics Client-Side] Evento: ${eventName}`, payload || {});
    }
  } catch (error) {
    // Falha silenciosa para não impactar a experiência do usuário.
    console.error('[Analytics Client-Side] Falha ao registrar evento no dataLayer:', error);
  }

  // 2. Nova Lógica (Server-Side Tracking) - Adicionada
  // Dispara uma requisição para o nosso próprio back-end, de forma assíncrona.
  // Isso permite o rastreamento server-side, que é mais robusto e não é
  // bloqueado por ad-blockers.
  try {
    // O `fetch` é o mecanismo para enviar os dados.
    fetch('/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // 3. Corpo da Requisição
      // Enviamos o nome do evento e o payload como um JSON.
      body: JSON.stringify({ eventName, payload }),
      // 4. Regra de Ouro: keepalive
      // Essencial para analytics. Garante que a requisição continue mesmo que o
      // usuário navegue para outra página imediatamente após o evento ser disparado.
      // Sem isso, muitos eventos seriam perdidos.
      keepalive: true,
    });
  } catch (error) {
    // 5. Falha Silenciosa
    // O rastreamento de eventos não deve quebrar a aplicação.
    // Se a requisição falhar (ex: rede offline), apenas registramos no console
    // do desenvolvedor, sem interromper a experiência do usuário.
    console.error('[Analytics Server-Side] Falha ao enviar evento para o servidor:', error);
  }
};
