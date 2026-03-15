import { NextResponse } from 'next/server';
import { z } from 'zod';
import { logger } from '@/lib/logger';

// 1. Definição dos Schemas com Zod

export const TimeLimitSchema = z.object({
  has_expiration: z.boolean(),
  expires_at: z.string().datetime().nullable(), // Força ISO 8601 UTC
});

export const PromotionSchema = z.object({
  promo_id: z.string(),
  is_active: z.boolean(),
  type: z.enum(["single_item", "combo_pack"]),
  category: z.string().optional(),
  product_name: z.string().optional(),
  combo_name: z.string().optional(),
  items_included: z.array(z.string()).optional(),
  discount_percent: z.number().min(1).max(100),
  time_limit: TimeLimitSchema,
});

export const ActivePromotionsResponseSchema = z.object({
  active_promotions: z.array(PromotionSchema),
});

export type Promotion = z.infer<typeof PromotionSchema>;

// 2. Mock Data para Simular o Banco de Dados

const getMockPromotions = (): Promotion[] => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    const nextMonth = new Date(now);
    nextMonth.setMonth(now.getMonth() + 1);

    return [
        {
            promo_id: "promo001",
            is_active: true,
            type: "single_item",
            category: "colares",
            product_name: "Colar Elos",
            discount_percent: 15,
            time_limit: {
                has_expiration: true,
                expires_at: tomorrow.toISOString(),
            },
        },
        {
            promo_id: "promo002",
            is_active: true,
            type: "combo_pack",
            combo_name: "Kit Verão",
            items_included: ["Colar Elos", "Pulseira Trama"],
            discount_percent: 20,
            time_limit: {
                has_expiration: true,
                expires_at: nextMonth.toISOString(),
            },
        },
        {
            promo_id: "promo003",
            is_active: false,
            type: "single_item",
            product_name: "Brinco Minimal",
            discount_percent: 10,
            time_limit: {
                has_expiration: false,
                expires_at: null,
            },
        },
         {
            promo_id: "promo004",
            is_active: true,
            type: "single_item",
            category: "brincos",
            product_name: "Brinco Pérolas",
            discount_percent: 25,
            time_limit: {
                has_expiration: false,
                expires_at: null,
            },
        },
    ];
};


/**
 * Rota da API para obter promoções ativas.
 * Retorna uma lista de promoções que estão atualmente ativas.
 */
export async function GET(request: Request) {
  try {
    const allPromotions = getMockPromotions();
    const activePromotions = allPromotions.filter(p => p.is_active);

    // Validar os dados de resposta
    const responsePayload = ActivePromotionsResponseSchema.parse({
        active_promotions: activePromotions
    });

    logger.info('Promoções ativas consultadas com sucesso.');
    return NextResponse.json(responsePayload);

  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.error('Erro de validação Zod ao buscar promoções.', { error: error.issues });
      return NextResponse.json({ message: 'Erro de validação nos dados das promoções.', details: error.flatten() }, { status: 500 });
    }
    logger.error('Erro inesperado ao buscar promoções.', { error });
    return NextResponse.json({ message: 'Ocorreu um erro inesperado.' }, { status: 500 });
  }
}
