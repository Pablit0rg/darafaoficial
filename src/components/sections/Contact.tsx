'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <section id="contato" className="py-24 bg-black text-white border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-2xl">
        <header className="text-center mb-16">
          <h2 className="text-2xl font-light tracking-[0.2em] uppercase mb-4 text-zinc-100">
            Atendimento Exclusivo
          </h2>
          <p className="text-zinc-500 text-sm font-light">
            Preencha os dados abaixo para iniciarmos seu projeto.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs uppercase tracking-widest text-zinc-500">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-transparent border-b border-zinc-800 focus:border-zinc-300 transition-colors py-3 outline-none text-sm font-light text-zinc-200 w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-500">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-transparent border-b border-zinc-800 focus:border-zinc-300 transition-colors py-3 outline-none text-sm font-light text-zinc-200 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-widest text-zinc-500">
                WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="bg-transparent border-b border-zinc-800 focus:border-zinc-300 transition-colors py-3 outline-none text-sm font-light text-zinc-200 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-zinc-500">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="bg-transparent border-b border-zinc-800 focus:border-zinc-300 transition-colors py-3 outline-none text-sm font-light text-zinc-200 w-full resize-none"
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-zinc-100 text-black py-4 text-xs font-medium uppercase tracking-[0.2em] hover:bg-white transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Processando...' : 'Solicitar Contato'}
            </button>
          </div>

          {status === 'success' && (
            <p className="text-zinc-300 text-xs text-center mt-4 tracking-wide">
              Solicitacao recebida. Entraremos em contato em breve.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-900 text-xs text-center mt-4 tracking-wide">
              Falha na comunicacao. Tente novamente mais tarde.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
