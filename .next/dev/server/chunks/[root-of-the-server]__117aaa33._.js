module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>proxy
]);
// src/proxy.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
;
function proxy(request) {
    // 1. Extração dos Dados de Geolocalização do Edge
    // Estes cabeçalhos são injetados por plataformas como a Vercel.
    // Em ambiente de desenvolvimento local, eles não existem, então usamos 'Unknown' como fallback.
    const country = request.headers.get('x-vercel-ip-country') ?? 'Unknown';
    const region = request.headers.get('x-vercel-ip-region') ?? 'Unknown';
    const city = request.headers.get('x-vercel-ip-city') ?? 'Unknown';
    // 2. Clone dos Cabeçalhos da Requisição
    // Os cabeçalhos da requisição original são imutáveis. Para modificá-los,
    // precisamos primeiro cloná-los em uma nova instância de Headers.
    const newHeaders = new Headers(request.headers);
    // 3. Injeção do Cabeçalho de Geolocalização Personalizado
    // Criamos um novo cabeçalho 'x-customer-geo' que concatena as informações geográficas.
    // Este cabeçalho padronizado estará disponível em toda a aplicação (API Routes, Server Components).
    newHeaders.set('x-customer-geo', `${country}-${region}-${city}`);
    // 4. Proteção na Fronteira (Edge) contra bots de scraping agressivos
    const userAgent = request.headers.get('user-agent') || '';
    // Lista de crawlers que consomem banda sem gerar valor orgânico
    const badBots = [
        'SemrushBot',
        'AhrefsBot',
        'MJ12bot',
        'DotBot',
        'PetalBot',
        'Bytespider'
    ];
    const isBadBot = badBots.some((bot)=>userAgent.includes(bot));
    if (isBadBot) {
        // Intercepta e rejeita a conexão antes de consumir recursos do servidor
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"]('Acesso negado. Tráfego não autorizado.', {
            status: 403
        });
    }
    // 5. Propagação dos Novos Cabeçalhos para a Aplicação
    // Continuamos o ciclo de vida da requisição, mas com os cabeçalhos modificados.
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request: {
            headers: newHeaders
        }
    });
    // 6. Injeção Dinâmica de Cabeçalhos de Segurança Rigorosos na Resposta
    // Estes cabeçalhos são adicionados à RESPOSTA que vai para o cliente.
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    return response;
}
const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__117aaa33._.js.map