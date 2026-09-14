Quiero que actúes como arquitecto de software, analista funcional y desarrollador Frontend Senior especializado en React, TypeScript, PWA y aplicaciones de productividad.

Quiero desarrollar conmigo, paso a paso, una aplicación web personal llamada provisionalmente **TaskFlow**.

IMPORTANTE:
No quiero que generes todo el proyecto de golpe. Quiero desarrollar cada funcionalidad progresivamente, entendiendo qué estamos haciendo, por qué lo hacemos y cómo funciona.

No avances a una nueva fase hasta que yo confirme que la anterior funciona correctamente.

# 1. OBJETIVO DE LA APLICACIÓN

TaskFlow será una aplicación personal para organizar y EJECUTAR mis actividades de:

- Universidad
- Trabajo
- Vida personal

NO quiero que sea solamente una aplicación de recordatorios o una To-Do List donde creo una tarea, la marco y desaparece.

Quiero que cada actividad pueda convertirse en una pequeña GUÍA DE TRABAJO.

La aplicación debe ayudarme a responder:

1. ¿Qué tengo que hacer?
2. ¿Cuándo tengo que hacerlo?
3. ¿Qué pasos debo seguir?
4. ¿Qué pasos ya realicé?
5. ¿Qué me falta?
6. ¿En qué parte de la actividad estoy?
7. ¿Ya revisé que realmente no falta nada?
8. ¿Qué actividades terminé anteriormente?

Una actividad completada NO debe desaparecer.

Debe permanecer disponible dentro del historial/completadas.

# 2. TECNOLOGÍAS

Quiero utilizar exclusivamente tecnologías gratuitas para esta primera versión.

Frontend:

- React
- TypeScript
- Vite

Diseño:

- Tailwind CSS
- Lucide React

Navegación:

- React Router

Estado:

- Zustand

Persistencia local:

- IndexedDB
- Dexie.js

Exportación:

- SheetJS para Excel
- JSON para backups completos

Aplicación instalable:

- PWA
- vite-plugin-pwa

Versionamiento:

- Git
- GitHub

Deploy:

- Vercel

NO utilizar inicialmente:

- Backend
- Spring Boot
- Node.js
- NestJS
- PostgreSQL
- MongoDB
- Firebase
- Supabase
- Login
- Autenticación
- APIs de pago
- API de OpenAI

La aplicación será inicialmente para uso personal.

Todo debe funcionar gratuitamente.

# 3. PERSISTENCIA

Los datos deberán almacenarse localmente utilizando IndexedDB mediante Dexie.js.

NO utilizar localStorage como almacenamiento principal de las actividades.

Quiero poder cerrar la aplicación y volver a abrirla sin perder información.

También quiero:

- Exportar mis datos.
- Importar mis datos.
- Crear backups.
- Exportar historial a Excel.
- Exportar backup completo en JSON.
- Restaurar un backup JSON.

# 4. ÁREAS

La aplicación tendrá tres áreas principales:

## UNIVERSIDAD

Quiero registrar cursos.

Ejemplos:

- Inmunología
- Ética Profesional
- Redes
- Desarrollo de Software

Cada curso tendrá sus propias actividades.

Tipos de actividad:

- Examen
- Práctica calificada
- PC
- Exposición
- Tarea
- Proyecto
- Laboratorio
- Informe
- Entrega
- Lectura
- Otro

## TRABAJO

Quiero registrar proyectos.

Ejemplo:

Proyecto:
IPS - Orquestador de pagos

Dentro del proyecto existirán tareas.

Ejemplo:

Implementar endpoint de pagos.

Pero la tarea no debe ser solamente un checkbox.

Debe contener todos los pasos necesarios para completarla.

## PERSONAL

Quiero registrar:

- Gimnasio
- Compras
- Trámites
- Pagos
- Citas
- Recordatorios
- Objetivos personales
- Otros

# 5. CONCEPTO MÁS IMPORTANTE: ACTIVIDAD COMO GUÍA

Esta es una de las funcionalidades principales.

Una actividad debe poder dividirse en ETAPAS y SUBTAREAS.

Ejemplo:

ACTIVIDAD:
Implementar endpoint de pagos

PROYECTO:
IPS - Orquestador de pagos

PRIORIDAD:
Alta

FECHA:
16/09/2026

ESTADO:
En proceso

PROGRESO:
4/8 - 50%

ETAPA 1 — ANÁLISIS Y PREPARACIÓN

[x] Revisar requerimiento funcional
[x] Analizar endpoints relacionados
[x] Crear rama feature/endpoint-pagos

ETAPA 2 — DESARROLLO

[x] Implementar controller y service
[ ] Agregar validaciones
[ ] Manejar errores y excepciones

ETAPA 3 — PRUEBAS Y DOCUMENTACIÓN

[ ] Crear pruebas unitarias
[ ] Probar casos límite
[ ] Documentar Swagger/OpenAPI

ETAPA 4 — REVISIÓN FINAL

[ ] Probar nuevamente el flujo completo
[ ] Revisar que no quede nada pendiente
[ ] Realizar doble check final

Quiero que visualmente pueda identificar inmediatamente:

- qué terminé;
- qué estoy haciendo;
- qué me falta;
- cuánto he avanzado.

# 6. DOBLE CHECK

No quiero que una actividad pase directamente de:

EN PROCESO → FINALIZADA

El flujo será:

PENDIENTE
↓
EN PROCESO
↓
POR REVISAR
↓
FINALIZADA

Cuando termine las subtareas, la actividad debe pasar a:

POR REVISAR

Entonces debo realizar una revisión final.

Ejemplo:

[ ] Revisé todos los pasos
[ ] Confirmé que no existe ningún pendiente

Después:

[ FINALIZAR ACTIVIDAD ]

Solo entonces debe considerarse terminada.

# 7. ACTIVIDADES COMPLETADAS

Cuando complete una actividad:

NO eliminarla.

Moverla lógicamente al historial de actividades completadas.

Quiero poder consultar posteriormente:

- Qué hice.
- Cuándo lo hice.
- Qué pasos realicé.
- Cuánto tiempo tomó.
- A qué curso/proyecto pertenecía.
- Notas que escribí.

Las actividades antiguas podrán archivarse.

# 8. DASHBOARD

La pantalla principal debe mostrar:

"Buenos días, Jairo"

y un resumen:

PENDIENTES
EN PROCESO
POR REVISAR
COMPLETADAS

Después:

HOY

Mostrar las actividades que tengo que realizar hoy.

Ejemplo:

Implementar endpoint de pagos
Trabajo
4/8
50%

PC de Inmunología
Universidad
3/6
50%

Gimnasio
Personal
0/3

Después:

ESTA SEMANA

Mostrar actividades organizadas por fecha.

Después:

PRÓXIMAMENTE

Mostrar:

- Exámenes
- PC
- Exposiciones
- Entregas
- Deadlines laborales
- Eventos importantes

# 9. DETALLE DE UNA ACTIVIDAD

Esta será una de las pantallas más importantes.

Quiero pestañas como:

CHECKLIST | DESCRIPCIÓN | NOTAS | HISTORIAL

La sección principal será CHECKLIST.

Debe mostrar:

Título
Área
Curso/proyecto
Fecha
Prioridad
Estado
Progreso

Después las etapas.

Cada etapa debe poder expandirse/contraerse.

Ejemplo:

1. Análisis y preparación 3/3 ✓
2. Desarrollo 1/3
3. Pruebas 0/3
4. Revisión final 0/2

Cada subtarea tendrá:

- Checkbox
- Nombre
- Posición
- Estado
- Notas opcionales

Quiero poder agregar nuevas subtareas mientras estoy realizando una actividad.

Esto es importante porque muchas veces descubro nuevos pendientes mientras trabajo.

# 10. FUNCIÓN "¿QUÉ ME FALTA?"

Dentro de una actividad quiero una forma rápida de visualizar únicamente los pendientes.

Ejemplo:

IMPLEMENTAR ENDPOINT DE PAGOS

COMPLETADO
✓ Requerimiento
✓ Rama
✓ Controller
✓ Service

TE FALTA

□ Validaciones
□ Manejo de errores
□ Tests
□ Swagger
□ Probar casos límite
□ Revisión final

Progreso: 4/10

Esta función debe ayudarme a retomar rápidamente una actividad después de varias horas o días.

# 11. NOTAS

Cada actividad podrá tener notas.

Ejemplo:

"Revisar con Jorge el esquema de seguridad."

"El endpoint anterior tiene un ejemplo parecido."

"Verificar timeout del servicio."

Las notas NO deben marcarse necesariamente como tareas.

Son información de apoyo mientras realizo la actividad.

# 12. HISTORIAL DE ACTIVIDAD

Quiero registrar eventos relevantes.

Ejemplo:

09:10 — Actividad iniciada
09:25 — Completaste "Revisar requerimiento"
10:05 — Agregaste "Validar timeout"
11:30 — Actividad pausada
14:00 — Actividad retomada
15:20 — Pasó a "Por revisar"
15:45 — Actividad finalizada

No es necesario implementar todo el historial avanzado inmediatamente.

Debe diseñarse la arquitectura para poder añadirlo progresivamente.

# 13. UNIVERSIDAD

Pantalla:

UNIVERSIDAD

Mostrar mis cursos.

Cada curso mostrará:

- Nombre
- Número de actividades
- Pendientes
- Progreso

Al entrar a un curso:

INMUNOLOGÍA

Próximamente:

- PC práctica 6
- Exposición
- Examen parcial

En proceso:

- Preparar exposición

Completadas:

- Práctica 5

# 14. TRABAJO

Pantalla:

TRABAJO

Mostrar proyectos.

Ejemplo:

IPS - Orquestador de pagos

5 tareas
2 en proceso
60%

Al entrar:

- Implementar endpoint
- Pruebas
- Documentación
- Corregir observaciones

Cada tarea podrá utilizar el sistema completo de etapas + checklist.

# 15. CALENDARIO

Quiero una vista:

- Semana
- Mes

Debe mostrar visualmente:

Universidad
Trabajo
Personal

Al seleccionar una actividad debe abrirse su detalle.

# 16. BÚSQUEDA Y FILTROS

Quiero poder buscar por texto.

También filtrar por:

- Área
- Curso
- Proyecto
- Estado
- Prioridad
- Tipo
- Fecha

# 17. PRIORIDADES

Utilizar:

BAJA
MEDIA
ALTA
URGENTE

Representarlas visualmente sin saturar la interfaz.

# 18. PROGRESO

El progreso debe calcularse automáticamente según las subtareas.

Ejemplo:

8 subtareas
4 completadas

Progreso = 50%

Mostrar:

4/8
50%
barra visual

No quiero ingresar manualmente el porcentaje.

# 19. RESPONSIVE

La aplicación debe diseñarse MOBILE FIRST pero funcionar correctamente también en escritorio.

En PC quiero aprovechar el espacio para mostrar:

- Menú lateral.
- Actividades.
- Detalle.
- Calendario.

En celular:

- Navegación inferior.
- Tarjetas.
- Checklists cómodos para tocar.
- Botón flotante para crear actividad.

Debe sentirse como una aplicación móvil y no simplemente como una página web reducida.

# 20. PWA

Quiero convertirla en PWA.

Debe poder:

- Instalarse desde el navegador.
- Tener icono.
- Abrirse como aplicación.
- Funcionar correctamente en PC y celular.
- Mantener los datos locales.

# 21. ARCHIVOS

En la V1 NO quiero almacenar PDFs, imágenes o documentos pesados dentro de IndexedDB.

Inicialmente podemos permitir guardar:

- Nombre del recurso.
- URL/enlace.
- Descripción.

Ejemplo:

Guía Inmunología
https://...

Esto evita aumentar innecesariamente el almacenamiento de la aplicación.

La carga real de archivos puede evaluarse para una versión futura.

# 22. BACKUP

Configuración deberá incluir:

EXPORTAR HISTORIAL A EXCEL

Para consultar actividades realizadas.

CREAR BACKUP JSON

Debe contener toda la información necesaria para restaurar la aplicación.

IMPORTAR BACKUP

Debe restaurar los datos.

Antes de importar quiero validación para evitar cargar archivos incompatibles.

# 23. ARCHIVADO

Las actividades finalizadas no se eliminarán automáticamente.

Quiero poder:

- Consultarlas.
- Archivarlas.
- Exportarlas.
- Eliminarlas manualmente si lo deseo.

Podemos posteriormente implementar:

"Archivar automáticamente después de 90 días."

# 24. DISEÑO

Quiero una interfaz moderna, limpia y profesional.

Referencias conceptuales:

- Dashboard de productividad.
- Tarjetas.
- Bordes redondeados.
- Buena separación visual.
- Colores suaves.
- Barras de progreso.
- Iconografía sencilla.
- Excelente legibilidad.

No quiero:

- Interfaz saturada.
- Demasiados colores.
- Animaciones innecesarias.
- Elementos gigantes.
- Diseño infantil.

Debe priorizar rapidez y claridad.

# 25. MODELO DE DATOS

Antes de programar quiero que analices qué entidades necesitamos.

Como mínimo evaluar:

Area
Course
Project
Task
TaskStage
Subtask
Note
ActivityHistory
Settings

Pero NO asumas que esta estructura es definitiva.

Analízala y propón una estructura correcta para IndexedDB.

También define relaciones y TypeScript interfaces.

# 26. ARQUITECTURA

Quiero evitar componentes gigantes.

Separar correctamente:

components
pages
features
services
repositories
database
stores
hooks
types
utils

Quiero separar la persistencia de la UI.

Los componentes React NO deben acceder directamente a IndexedDB.

Debe existir una capa Repository/Service.

Ejemplo conceptual:

UI
↓
Store / Hook
↓
Service
↓
Repository
↓
Dexie
↓
IndexedDB

# 27. FORMA DE TRABAJO

Vamos a desarrollar mediante funcionalidades pequeñas.

Para cada funcionalidad:

1. Explícame qué vamos a construir.
2. Indica qué archivos vamos a crear/modificar.
3. Dame el código.
4. Explícame las partes importantes.
5. Indícame cómo probarlo.
6. Dame casos de prueba manuales.
7. Espera mi confirmación.
8. Solo después continúa.

Si aparece un error, primero solucionamos el error.

NO continúes desarrollando otras funcionalidades mientras exista un error pendiente.

# 28. GIT

Quiero trabajar correctamente con Git.

Antes de cada funcionalidad indícame una rama apropiada.

Formato:

feature/nombre-funcionalidad

Ejemplos:

feature/task-crud
feature/task-checklist
feature/dashboard
feature/courses
feature/projects
feature/export-backup

Cuando terminemos una funcionalidad, indícame un mensaje de commit apropiado utilizando Conventional Commits.

Ejemplo:

feat(tasks): add task checklist management

# 29. FASES

Quiero seguir este orden:

FASE 1
Análisis funcional.

FASE 2
Modelo de datos.

FASE 3
Arquitectura del proyecto.

FASE 4
Wireframes/pantallas.

FASE 5
Configuración React + TypeScript + Vite.

FASE 6
Diseño base y navegación.

FASE 7
IndexedDB + Dexie.

FASE 8
CRUD de actividades.

FASE 9
Etapas y subtareas.

FASE 10
Sistema de progreso.

FASE 11
Estados y doble check.

FASE 12
Universidad/cursos.

FASE 13
Trabajo/proyectos.

FASE 14
Área personal.

FASE 15
Dashboard.

FASE 16
Calendario.

FASE 17
Búsqueda/filtros.

FASE 18
Notas e historial.

FASE 19
Exportación Excel.

FASE 20
Backup/restore JSON.

FASE 21
PWA.

FASE 22
Pruebas.

FASE 23
GitHub.

FASE 24
Deploy gratuito en Vercel.

# 30. PRIMERA RESPUESTA

Todavía NO escribas código.

Tu primera respuesta debe contener exclusivamente el análisis de la FASE 1:

- Problema que resuelve TaskFlow.
- Objetivo general.
- Objetivos específicos.
- Alcance V1.
- Qué NO incluirá V1.
- Requisitos funcionales.
- Requisitos no funcionales.
- Historias de usuario principales.
- Flujo general.
- Riesgos o puntos que debemos decidir antes de continuar.
- Mejoras que propondrías a mi idea.

Al final, detente y espera mi aprobación para pasar a la FASE 2.
