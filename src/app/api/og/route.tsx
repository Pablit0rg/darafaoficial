// src/app/api/og/route.tsx
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

// Força a execução desta rota na infraestrutura de Edge (baixa latência e alta performance)
export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Captura parâmetros dinâmicos da URL ou utiliza fallbacks da marca
    const title = searchParams.get('title') || 'Darafa | Joias Artesanais';
    const subtitle = searchParams.get('subtitle') || 'Onde a arte encontra os metais';

    // O Next.js compila esta estrutura JSX em uma imagem PNG estática em tempo de execução
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            borderTop: '8px solid #D4AF37',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: 80,
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: 'sans-serif',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 32,
                color: '#a1a1aa',
                fontFamily: 'sans-serif',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {subtitle}
            </p>
          </div>
          
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              display: 'flex',
              fontSize: 24,
              color: '#52525b',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            darafa.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response('Falha ao gerar imagem Open Graph', { status: 500 });
  }
}
