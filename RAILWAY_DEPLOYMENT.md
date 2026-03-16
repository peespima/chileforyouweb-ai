# Despliegue de chileforyou.ai en Railway

## Descripción General

**chileforyou.ai** es una plataforma de viajes de última generación que integra dos ecosistemas principales:

### 🎯 B2C - Marketplace Turístico
- **Avatar IA Multilingüe**: Asistente virtual inteligente en 5 idiomas (Español, Inglés, Portugués, Francés, Alemán)
- **Motor de Reservas Integrado**: Búsqueda y reserva de tours y alojamiento en una sola plataforma
- **Carrito de Compra**: Sistema completo con cálculo de comisiones internas (20%)
- **Selector de Fecha y Punto de Recogida**: Para tours con máxima flexibilidad
- **Zona Lacustre de Araucanía**: Tours en Pucón, Villarrica y alrededores

### 🏨 B2B - PMS para Hoteles/Agencias/TTOO
- **Dashboard de Gestión**: Panel completo para hoteles, agencias y tour operadores
- **Gestión de Reservas**: Sistema de reservas en tiempo real
- **Analytics & Reportes**: Métricas de ocupación, ingresos y desempeño
- **Gestión de Inventario**: Control de habitaciones y disponibilidad
- **Widget Embebible**: Integración en sitios web existentes

---

## Requisitos Previos

- Cuenta en [Railway.app](https://railway.app)
- Cuenta en [GitHub](https://github.com) (para conectar el repositorio)
- Base de datos MySQL (Railway proporciona una)
- API Key de OpenAI (para el avatar IA)
- Credenciales de Manus OAuth

---

## Guía de Despliegue en Railway

### Paso 1: Preparar el Repositorio

1. **Clonar o crear repositorio en GitHub**
   ```bash
   git clone https://github.com/tu-usuario/chileforyou-ai.git
   cd chileforyou-ai
   ```

2. **Instalar dependencias localmente (opcional, para testing)**
   ```bash
   pnpm install
   ```

3. **Hacer push a GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: chileforyou.ai"
   git push origin main
   ```

### Paso 2: Crear Proyecto en Railway

1. **Ir a [Railway.app](https://railway.app)**
2. **Hacer click en "New Project"**
3. **Seleccionar "Deploy from GitHub repo"**
4. **Conectar tu cuenta de GitHub y seleccionar el repositorio `chileforyou-ai`**
5. **Railway detectará automáticamente que es un proyecto Node.js**

### Paso 3: Configurar Variables de Entorno

En el panel de Railway, ir a **Variables** y agregar:

#### Base de Datos
```
DATABASE_URL=mysql://[user]:[password]@[host]:[port]/[database]
```
*Railway proporciona esto automáticamente si agregas un servicio MySQL*

#### Autenticación
```
JWT_SECRET=tu-super-secret-jwt-key-change-this-in-production
```

#### Manus OAuth
```
VITE_APP_ID=tu-manus-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://oauth.manus.im
OWNER_OPEN_ID=tu-owner-open-id
```

#### Información del Propietario
```
OWNER_EMAIL=info@chileforyou.ai
OWNER_NAME=Chile For You
```

#### Configuración de Negocio
```
COMMISSION_PERCENTAGE=20
```

#### OpenAI (Avatar IA)
```
OPENAI_API_KEY=sk-your-openai-api-key
```

#### Manus APIs
```
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=tu-forge-api-key
VITE_FRONTEND_FORGE_API_KEY=tu-frontend-forge-api-key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
```

#### Analytics (Opcional)
```
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=tu-website-id
```

#### Aplicación
```
VITE_APP_TITLE=Chile For You - Agencia de Viajes Virtual
VITE_APP_LOGO=https://tu-cdn-url/logo.png
NODE_ENV=production
```

### Paso 4: Agregar Base de Datos MySQL

1. **En el panel de Railway, hacer click en "New"**
2. **Seleccionar "Database" → "MySQL"**
3. **Railway automáticamente agregará `DATABASE_URL` a las variables**

### Paso 5: Desplegar

1. **Railway detectará los cambios en GitHub automáticamente**
2. **El build comenzará (pnpm install && pnpm build)**
3. **Después del build, la aplicación se iniciará con `pnpm start`**
4. **Tu aplicación estará disponible en: `https://tu-proyecto.railway.app`**

---

## Estructura del Proyecto

```
chileforyou-ai/
├── client/                    # Frontend React
│   ├── src/
│   │   ├── pages/            # Páginas principales
│   │   ├── components/       # Componentes reutilizables
│   │   ├── contexts/         # Contextos (Idioma, Tema, etc.)
│   │   ├── hooks/            # Hooks personalizados
│   │   ├── App.tsx           # Rutas principales
│   │   └── main.tsx          # Punto de entrada
│   ├── public/               # Archivos estáticos
│   └── index.html
├── server/                   # Backend Express + tRPC
│   ├── routers/              # Procedures tRPC
│   ├── db.ts                 # Funciones de base de datos
│   ├── _core/                # Configuración interna
│   └── index.ts              # Punto de entrada del servidor
├── drizzle/                  # ORM y migraciones
│   ├── schema.ts             # Esquema de base de datos
│   └── migrations/           # Archivos de migración SQL
├── shared/                   # Código compartido
│   ├── types.ts              # Tipos TypeScript
│   └── const.ts              # Constantes
├── package.json              # Dependencias
├── tsconfig.json             # Configuración TypeScript
├── vite.config.ts            # Configuración Vite
├── drizzle.config.ts         # Configuración Drizzle ORM
├── railway.json              # Configuración Railway
├── Procfile                  # Configuración de procesos
├── .env.example              # Variables de entorno ejemplo
└── README.md                 # Este archivo
```

---

## Funcionalidades Principales

### 🏠 Home (Inicio)
- Hero banner con imagen de zona lacustre
- Avatar IA flotante con chat multilingüe
- Motor de reservas integrado (Tours + Hoteles)
- Secciones de características y CTA

### 🎫 Tours
- Catálogo de tours de la zona lacustre
- Detalle de tour con descripción, precio, duración
- Selector de fecha (calendario)
- Selector de punto de recogida
- Agregar al carrito

### 🏨 Hoteles
- Catálogo de hoteles premium
- Detalle de hotel con galería de imágenes
- Tipos de habitaciones con precios
- Selector de check-in/check-out
- Cálculo automático de noches y total
- Reserva de habitaciones

### 🛒 Carrito
- Visualización de tours y hoteles agregados
- Resumen de fechas y puntos de recogida
- Cálculo de totales
- Proceder al checkout

### 💳 Checkout
- Información del cliente
- Resumen del pedido
- Método de pago (preparado para Stripe)
- Confirmación de reserva

### 🤝 Para Hoteles (B2B)
- Página Partner con planes de precios
- Dashboard de gestión de reservas
- Analytics y reportes
- Gestión de inventario
- Configuración de hotel

### 🌍 Multilingüismo
- Soporta 5 idiomas: Español, Inglés, Portugués, Francés, Alemán
- Selector de idioma en header
- Todas las páginas traducidas
- Avatar IA responde en el idioma seleccionado

### 🤖 Avatar IA
- Chat flotante multilingüe
- Integración con GPT-4.1-mini
- Responde sobre tours, hoteles y zona lacustre
- Historial de conversación
- Animaciones suaves

---

## Rutas Principales

| Ruta | Descripción |
|------|-------------|
| `/` | Home - Página principal |
| `/tours` | Catálogo de tours |
| `/tours/:id` | Detalle de tour |
| `/hotels` | Catálogo de hoteles |
| `/hotel/:id` | Detalle de hotel |
| `/cart` | Carrito de compra |
| `/checkout` | Finalizar compra |
| `/partner` | Solución B2B para hoteles |
| `/hotel-dashboard` | Dashboard de gestión (protegido) |
| `/about` | Sobre nosotros |
| `/contact` | Contacto |

---

## Configuración de Base de Datos

### Tablas Principales

1. **users** - Usuarios autenticados
2. **operators** - Operadores de tours (ej: Politur)
3. **tours** - Tours disponibles
4. **hotels** - Hoteles
5. **hotelRooms** - Tipos de habitaciones
6. **bookings** - Reservas de tours
7. **bookingItems** - Items de reserva (tours con fecha y punto de recogida)
8. **hotelBookings** - Reservas de hoteles
9. **commissions** - Registro de comisiones

### Ejecutar Migraciones

Las migraciones se ejecutan automáticamente durante el build. Si necesitas ejecutarlas manualmente:

```bash
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
```

---

## Variables de Entorno Explicadas

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `DATABASE_URL` | Conexión a base de datos MySQL | `mysql://user:pass@host/db` |
| `JWT_SECRET` | Clave para firmar tokens JWT | Cadena aleatoria segura |
| `VITE_APP_ID` | ID de aplicación Manus OAuth | Proporcionado por Manus |
| `OAUTH_SERVER_URL` | URL del servidor OAuth | `https://api.manus.im` |
| `OWNER_EMAIL` | Email del propietario | `info@chileforyou.ai` |
| `COMMISSION_PERCENTAGE` | Porcentaje de comisión | `20` |
| `OPENAI_API_KEY` | API Key de OpenAI | `sk-...` |
| `BUILT_IN_FORGE_API_KEY` | Key para APIs internas | Proporcionado por Manus |
| `NODE_ENV` | Ambiente (production/development) | `production` |

---

## Solución de Problemas

### Error: "DATABASE_URL not set"
- Asegúrate de haber agregado la variable `DATABASE_URL` en Railway
- Si usas MySQL de Railway, la variable se agrega automáticamente

### Error: "Cannot connect to database"
- Verifica que la base de datos MySQL está corriendo en Railway
- Comprueba que `DATABASE_URL` es correcta
- Espera a que Railway termine de crear la base de datos

### Error: "OpenAI API key not found"
- Agrega `OPENAI_API_KEY` a las variables de entorno en Railway
- Asegúrate de que la key es válida

### Error: "OAuth not configured"
- Verifica que `VITE_APP_ID`, `OAUTH_SERVER_URL` y `VITE_OAUTH_PORTAL_URL` están configuradas
- Contacta a Manus para obtener las credenciales correctas

### La aplicación no inicia después del deploy
- Revisa los logs en Railway: **Deployments** → **View logs**
- Verifica que todas las variables de entorno están configuradas
- Asegúrate de que el build fue exitoso

---

## Comandos Útiles

```bash
# Instalar dependencias
pnpm install

# Desarrollo local
pnpm dev

# Build para producción
pnpm build

# Iniciar servidor en producción
pnpm start

# Verificar tipos TypeScript
pnpm check

# Ejecutar tests
pnpm test

# Generar migraciones de base de datos
pnpm drizzle-kit generate

# Ejecutar migraciones
pnpm drizzle-kit migrate
```

---

## Monitoreo y Mantenimiento

### En Railway Dashboard

1. **Logs**: Ver logs en tiempo real de la aplicación
2. **Metrics**: Monitorear CPU, memoria, requests
3. **Environment**: Actualizar variables de entorno
4. **Deployments**: Ver historial de despliegues
5. **Settings**: Configurar dominio personalizado, SSL, etc.

### Actualizar Código

Simplemente hacer push a GitHub y Railway desplegará automáticamente:

```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
```

---

## Próximos Pasos

1. **Integrar Stripe**: Agregar pasarela de pago real
2. **Email Transaccional**: Conectar SendGrid/Mailgun para confirmaciones
3. **Más Hoteles**: Agregar más hoteles de la zona lacustre
4. **Analytics**: Implementar tracking de eventos
5. **SEO**: Optimizar para motores de búsqueda
6. **Dominio Personalizado**: Configurar dominio propio en Railway

---

## Soporte

Para preguntas o problemas:

- **Email**: info@chileforyou.ai
- **Documentación de Railway**: https://docs.railway.app
- **Documentación de Manus**: https://docs.manus.im

---

## Licencia

Proyecto propietario de Chile For You - 2026

---

**¡Listo para desplegar! 🚀**
