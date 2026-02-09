import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            // Cria um arquivo 404.html para redirecionar rotas inexistentes
            // Isso permite que o roteamento via JavaScript (SPA) funcione
            fallback: '404.html' 
        }),
        
        // Opcional: Se for usar GitHub Pages COM subpasta (ex: thomika1.github.io/portfolio),
        // você precisaria configurar o 'paths' aqui. 
        // Se for Vercel ou Netlify, não precisa mexer em nada abaixo.
    }
};

export default config;