# chileforyou.ai - Agencia de Viajes Virtual con IA

Plataforma web profesional para reserva de tours en la zona lacustre de Chile (Araucanía).

## 📋 Descripción del Proyecto

**chileforyou.ai** es una agencia de viajes virtual que permite a turistas descubrir y reservar tours en la zona lacustre de Chile, trabajando con operadores como Politur. La plataforma incluye:

- ✅ Catálogo de tours con imágenes de la zona lacustre
- ✅ Carrito de compra funcional
- ✅ Selector de fecha para cada tour
- ✅ Selector de punto de recogida (Municipalidad, Hotel, Politur, Terminal)
- ✅ Sistema de comisiones (20% para chileforyou.ai, 80% para operador)
- ✅ Multilingüismo completo (5 idiomas: ES, EN, PT, FR, DE)
- ✅ Asistente de IA con GPT-4.1-mini
- ✅ Base de datos con gestión de tours, operadores y reservas
- ✅ Preparación para integración de Stripe

## 🛠️ Stack Tecnológico

### Frontend
- **React 19** - Framework UI
- **Tailwind CSS 4** - Estilos
- **TypeScript** - Tipado estático
- **Wouter** - Enrutamiento
- **shadcn/ui** - Componentes UI

### Backend
- **Node.js + Express** - Servidor
- **tRPC 11** - RPC type-safe
- **Drizzle ORM** - Gestión de base de datos
- **MySQL/TiDB** - Base de datos

### Integración
- **OpenAI API** - Asistente de IA
- **Manus OAuth** - Autenticación
- **S3** - Almacenamiento de archivos

## 📁 Estructura del Proyecto

```
chileforyou-ai/
├── client/                    # Frontend React
│   ├── src/
│   │   ├── pages/            # Páginas principales
│   │   ├── components/       # Componentes reutilizables
│   │   ├── contexts/         # Context API (Idioma, Carrito)
│   │   ├── hooks/            # Custom hooks
│   │   ├── lib/              # Utilidades
│   │   └── App.tsx           # Rutas principales
│   ├── public/               # Assets estáticos
│   └── index.html
├── server/                    # Backend Node.js
│   ├── routers/              # tRPC routers (tours, bookings, ai, operators)
│   ├── db.ts                 # Funciones de base de datos
│   ├── storage.ts            # Gestión de S3
│   └── _core/                # Configuración core
├── drizzle/                  # Esquema y migraciones
│   ├── schema.ts             # Definición de tablas
│   └── *.sql                 # Migraciones
├── shared/                   # Código compartido
│   ├── types.ts              # Tipos TypeScript
│   └── const.ts              # Constantes
├── package.json              # Dependencias
├── tsconfig.json             # Configuración TypeScript
├── vite.config.ts            # Configuración Vite
└── drizzle.config.ts         # Configuración Drizzle
```

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone <tu-repo-url>
cd chileforyou-ai
```

### 2. Instalar dependencias
```bash
pnpm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Base de datos
DATABASE_URL=mysql://usuario:contraseña@host:puerto/chileforyou_ai

# OAuth Manus
VITE_APP_ID=tu_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://oauth.manus.im

# OpenAI
OPENAI_API_KEY=sk-...

# Configuración de la aplicación
OWNER_EMAIL=info@chileforyou.ai
OWNER_NAME=Chile For You
COMMISSION_PERCENTAGE=20

# JWT
JWT_SECRET=tu_jwt_secret_aqui

# Manus APIs
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=tu_api_key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
VITE_FRONTEND_FORGE_API_KEY=tu_frontend_key

# Analytics (opcional)
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=tu_website_id
```

### 4. Ejecutar migraciones de base de datos
```bash
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
```

### 5. Iniciar servidor de desarrollo
```bash
pnpm dev
```

El servidor estará disponible en `http://localhost:3000`

## 📦 Scripts Disponibles

```bash
# Desarrollo
pnpm dev              # Inicia servidor de desarrollo

# Construcción
pnpm build            # Compila frontend y backend
pnpm start            # Inicia servidor en producción

# Base de datos
pnpm drizzle-kit generate    # Genera migraciones
pnpm drizzle-kit migrate     # Ejecuta migraciones

# Testing
pnpm test             # Ejecuta tests con Vitest
pnpm check            # Verifica tipos TypeScript

# Utilidades
pnpm format           # Formatea código con Prettier
```

## 🎨 Páginas Principales

1. **Home** (`/`) - Landing page con hero banner
2. **Tours** (`/tours`) - Catálogo de tours disponibles
3. **Detalle de Tour** (`/tours/:id`) - Información completa, selector de fecha y recogida
4. **Carrito** (`/cart`) - Resumen de tours seleccionados
5. **Checkout** (`/checkout`) - Formulario de reserva
6. **Sobre Nosotros** (`/about`) - Información de la empresa
7. **Contacto** (`/contact`) - Formulario de contacto

## 🌐 Multilingüismo

La plataforma soporta 5 idiomas:
- 🇪🇸 Español (es)
- 🇬🇧 Inglés (en)
- 🇵🇹 Portugués (pt)
- 🇫🇷 Francés (fr)
- 🇩🇪 Alemán (de)

El selector de idioma está en el header. Las preferencias se guardan en localStorage.

## 💳 Sistema de Comisiones

- El turista paga el **100% del precio** del tour
- chileforyou.ai recibe el pago completo
- Se calcula automáticamente el **20% de comisión**
- Se transfiere el **80% al operador** del tour
- El desglose es completamente interno (no visible para el turista)

## 🤖 Asistente de IA

El chatbot usa GPT-4.1-mini para:
- Responder preguntas sobre tours
- Dar recomendaciones sobre la zona lacustre
- Proporcionar información en múltiples idiomas
- Ayudar con reservas

## 📧 Sistema de Notificaciones (Próximo)

Cuando se completa una reserva:
1. Email al turista con confirmación
2. Email al dueño de chileforyou.ai con detalles
3. Email al operador del tour con información de la reserva

## 💳 Integración Stripe (Próximo)

La plataforma está preparada para integrar Stripe:
- Estructura de datos lista
- Endpoints preparados
- Webhook configurado

## 🔐 Seguridad

- Autenticación con OAuth de Manus
- Variables de entorno protegidas
- HTTPS en producción
- CORS configurado
- Validación de entrada en frontend y backend

## 📊 Base de Datos

Tablas principales:
- **users** - Usuarios del sistema
- **operators** - Operadores de tours
- **tours** - Catálogo de tours
- **bookings** - Reservas de turistas
- **booking_items** - Items individuales en cada reserva
- **commissions** - Registro de comisiones

## 🚢 Despliegue

### Opción 1: Manus (Recomendado)
```bash
# El proyecto está listo para desplegar en Manus
# Usa el botón "Publish" en la interfaz de Manus
```

### Opción 2: Vercel/Netlify
```bash
pnpm build
# Sube la carpeta dist/ a tu plataforma
```

### Opción 3: Servidor propio
```bash
pnpm build
pnpm start
# Ejecuta en tu servidor con Node.js
```

## 🐛 Troubleshooting

### Error de conexión a base de datos
- Verifica que DATABASE_URL sea correcto
- Asegúrate de que el servidor MySQL esté corriendo
- Verifica credenciales de acceso

### Errores de TypeScript
```bash
pnpm check
```

### Limpiar caché
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## 📝 Próximos Pasos

1. ✅ Implementar chatbot flotante de IA
2. ✅ Integrar sistema de email (SendGrid/Mailgun)
3. ✅ Agregar página de confirmación de reserva
4. ✅ Implementar integración de Stripe
5. ✅ Agregar panel de administración
6. ✅ Implementar disponibilidad de tours por fecha

## 📞 Soporte

Para soporte técnico, contacta a: info@chileforyou.ai

## 📄 Licencia

MIT

---

**Versión:** 1.0.0  
**Última actualización:** Marzo 2026
