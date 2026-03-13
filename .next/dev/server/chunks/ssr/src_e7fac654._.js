module.exports = [
"[project]/src/lib/logger.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logError",
    ()=>logError,
    "logInfo",
    ()=>logInfo,
    "logWarn",
    ()=>logWarn,
    "logger",
    ()=>logger
]);
/**
 * Utilitário de Logging Centralizado (Structured JSON Logging)
 * Foco: Rastreabilidade, LGPD/PII Sanitization, e Telemetria (Datadog/CloudWatch).
 */ const isDev = ("TURBOPACK compile-time value", "development") === "development";
/**
 * Sanitiza dados sensíveis (PII) antes de logar
 */ function sanitizeContext(context) {
    if (!context) return undefined;
    const sanitized = {
        ...context
    };
    // Mascarar e-mail se existir (LGPD)
    if (sanitized.email && typeof sanitized.email === 'string') {
        const [user, domain] = sanitized.email.split('@');
        if (domain) {
            sanitized.email = `${user.charAt(0)}***@${domain}`;
        } else {
            sanitized.email = '***';
        }
    }
    return sanitized;
}
function writeLog(level, message, context) {
    // Em produção, ignoramos INFO e WARN para economizar processamento e não poluir logs.
    // Registramos apenas os ERROS críticos (restaurando sua lógica original).
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const payload = {
        timestamp: new Date().toISOString(),
        level,
        message,
        context: sanitizeContext(context)
    };
    const logString = JSON.stringify(payload);
    if (level === 'ERROR') {
        console.error(logString);
    } else if (level === 'WARN') {
        console.warn(logString);
    } else {
        console.info(logString);
    }
}
function logInfo(message, context) {
    writeLog('INFO', message, context);
}
function logWarn(message, context) {
    writeLog('WARN', message, context);
}
function logError(message, context) {
    writeLog('ERROR', message, context);
}
const logger = {
    info: logInfo,
    warn: logWarn,
    error: logError
};
}),
"[project]/src/app/error.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/logger.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function GlobalError({ error, reset }) {
    // Utiliza a infraestrutura de log que criamos anteriormente para rastreabilidade
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error("Falha capturada no Error Boundary global", error);
    }, [
        error
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "pt-BR",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-brand-black flex flex-col items-center justify-center text-center px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-serif text-3xl md:text-4xl text-white mb-4",
                        children: "Algo não saiu como esperado."
                    }, void 0, false, {
                        fileName: "[project]/src/app/error.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 font-light mb-8 max-w-md",
                        children: "Encontramos uma instabilidade técnica. Nossa arquitetura já registrou a ocorrência."
                    }, void 0, false, {
                        fileName: "[project]/src/app/error.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>reset(),
                        className: "border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black transition-all duration-500",
                        children: "Tentar Novamente"
                    }, void 0, false, {
                        fileName: "[project]/src/app/error.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/error.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/error.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/error.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_e7fac654._.js.map