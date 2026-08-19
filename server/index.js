import Fastify from 'fastify'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fastifyStatic from '@fastify/static'
import logo from './data/logo.js'
import languages from './data/languages.js'
import banners from './data/banners.js'
import sections from './data/sections.js'
import collection from './data/collection.js'
import featureCard from './data/feature-card.js'
import inputSection from './data/input-section.js'

const PUBLIC_ORIGIN = 'http://127.0.0.1:3000';
const IMAGE_KEYS = new Set(['src', 'backgroundText', 'backgroundSrcs', 'media']);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function isPath(key, nested) {
    return IMAGE_KEYS.has(key) && typeof nested === 'string' && nested.startsWith('/');
}

function updateObjectWithPublicOrigin(value) {
    const newObject = {};
    for (const [key, nested] of Object.entries(value))
      newObject[key] = isPath(key, nested) ? PUBLIC_ORIGIN + nested : withPublicOrigin(nested);
    return newObject;
}

function withPublicOrigin(value) {
  if (Array.isArray(value))
    return value.map(withPublicOrigin);
  else if (value && typeof value === 'object')
    return updateObjectWithPublicOrigin(value);
  else
    return value;
}

const app = Fastify({ logger: true })

await app.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),
});

app.get('/api/logo', async () => withPublicOrigin(logo));
app.get('/api/languages', async () => withPublicOrigin(languages)); 
app.get('/api/banners', async () => withPublicOrigin(banners));
app.get('/api/sections', async () => withPublicOrigin(sections))
app.get('/api/collection', async () => withPublicOrigin(collection));
app.get('/api/feature-card', async () => withPublicOrigin(featureCard));
app.get('/api/input-section', async () => withPublicOrigin(inputSection));

app.listen({ port: 3000, host: '127.0.0.1' });
