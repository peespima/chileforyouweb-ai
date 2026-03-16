# chileforyou.ai - Despliegue Rápido en Railway

## ¿Qué es chileforyou.ai?

Una plataforma de viajes de última generación con:
- 🤖 **Avatar IA Multilingüe**: Asistente inteligente en 5 idiomas
- 🎫 **Marketplace de Tours**: Reserva tours en la zona lacustre de Araucanía
- 🏨 **Catálogo de Hoteles**: Reserva alojamiento premium
- 🛒 **Carrito Unificado**: Compra tours y hoteles en una sola plataforma
- 🏢 **PMS para Hoteles**: Dashboard de gestión para operadores

## Despliegue en Railway (3 Pasos)

### Paso 1: Subir a GitHub

```bash
# Clonar o crear repositorio
git clone https://github.com/tu-usuario/chileforyou-ai.git
cd chileforyou-ai

# Hacer commit y push
git add .
git commit -m "Initial commit: chileforyou.ai"
git push origin main
```

### Paso 2: Conectar en Railway

1. Ir a [railway.app](https://railway.app)
2. Hacer click en **"New Project"**
3. Seleccionar **"Deploy from GitHub repo"**
4. Conectar tu cuenta de GitHub
5. Seleccionar el repositorio `chileforyou-ai`
6. Railway detectará automáticamente que es Node.js y comenzará el build

### Paso 3: ¡Listo!

Railway desplegará automáticamente tu aplicación. Tu sitio estará disponible en:
```
https://tu-proyecto.railway.app
```

**¡No necesitas configurar nada más!** La aplicación funciona con valores por defecto:
- ✅ Base de datos SQLite (archivo local)
- ✅ Avatar IA (sin OpenAI key, pero funcional)
- ✅ Todas las funcionalidades básicas activas

---

## Paso 4 (Opcional): Agregar OpenAI para Avatar IA Completo

Si quieres que el avatar IA responda preguntas reales sobre tours:

1. En Railway, ir a **Variables**
2. Agregar: `OPENAI_API_KEY=sk-your-openai-api-key`
3. Railway redesplegará automáticamente

---

## Características Funcionales

### B2C - Marketplace Turístico
- ✅ Home con hero banner y buscador
- ✅ Catálogo de tours con filtros
- ✅ Detalle de tour con selector de fecha y punto de recogida
- ✅ Catálogo de hoteles con disponibilidad
- ✅ Carrito de compra unificado
- ✅ Checkout con resumen de pedido
- ✅ Avatar IA flotante con chat multilingüe
- ✅ Multilingüismo: Español, Inglés, Portugués, Francés, Alemán

### B2B - Gestión para Hoteles
- ✅ Página Partner con planes de precios
- ✅ Dashboard de reservas (protegido)
- ✅ Analytics de ocupación
- ✅ Gestión de inventario
- ✅ Configuración de hotel

---

## Estructura del Proyecto

```
chileforyou-ai/
├── client/              # Frontend React
├── server/              # Backend Express + tRPC
├── drizzle/             # Base de datos (SQLite)
├── package.json         # Dependencias
├── railway.json         # Configuración Railway
├── Procfile             # Comandos de inicio
└── README.md            # Este archivo
```

---

## Rutas Principales

| Ruta | Descripción |
|------|-------------|
| `/` | Home - Página principal |
| `/tours` | Catálogo de tours |
| `/hotels` | Catálogo de hoteles |
| `/cart` | Carrito de compra |
| `/checkout` | Finalizar compra |
| `/partner` | Solución B2B para hoteles |
| `/hotel-dashboard` | Dashboard de gestión |
| `/about` | Sobre nosotros |
| `/contact` | Contacto |

---

## Solución de Problemas

### El build falla
- Railway muestra los logs de error. Verifica que tienes Node.js 18+ configurado.
- Si ves errores de base de datos, ignóralos - SQLite se crea automáticamente.

### La aplicación no carga
- Espera 2-3 minutos después del deploy para que Railway termine de inicializar.
- Revisa los logs en Railway: **Deployments** → **View logs**

### Avatar IA no responde
- Es normal si no configuraste `OPENAI_API_KEY`. Agrega la key en Variables para activarlo.

### Necesito cambiar la base de datos a PostgreSQL
- En Railway, agregar servicio PostgreSQL
- Copiar `DATABASE_URL` a Variables
- Railway redesplegará automáticamente

---

## Variables de Entorno Disponibles

| Variable | Valor por Defecto | Descripción |
|----------|-------------------|-------------|
| `DATABASE_URL` | `./data.db` | Ruta de base de datos SQLite |
| `PORT` | `3000` | Puerto del servidor |
| `NODE_ENV` | `production` | Ambiente (production/development) |
| `OWNER_EMAIL` | `info@chileforyou.ai` | Email del propietario |
| `COMMISSION_PERCENTAGE` | `20` | Porcentaje de comisión |
| `OPENAI_API_KEY` | `` | (Opcional) Key de OpenAI para avatar IA |

---

## Comandos Locales (Desarrollo)

```bash
# Instalar dependencias
pnpm install

# Desarrollo local (http://localhost:5173)
pnpm dev

# Build para producción
pnpm build

# Iniciar servidor en producción
pnpm start

# Verificar tipos TypeScript
pnpm check
```

---

## Próximos Pasos

1. **Integrar Stripe**: Agregar pagos reales
2. **Email Transaccional**: Confirmaciones automáticas
3. **Más Hoteles**: Agregar más alojamientos
4. **Dominio Personalizado**: Configurar tu propio dominio en Railway
5. **Analytics**: Trackear eventos de usuarios

---

## Soporte

- **Email**: info@chileforyou.ai
- **Documentación Railway**: https://docs.railway.app
- **Documentación Manus**: https://docs.manus.im

---

**¡Listo para despegar! 🚀**

Hecho con ❤️ para la zona lacustre de Chile
