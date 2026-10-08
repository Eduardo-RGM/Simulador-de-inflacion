# Currency Explorer · Starter Project

## Integrantes
- Estudiante A:
- Estudiante B:

## Pair Programming
| Misión | Driver | Navigator | Commit / evidencia |
|---|---|---|---|
| 04 | | | |
| 05 | | | |
| 06 | | | |
| 07 | | | |
| 08 | | | |
| 09 | | | |
| 10 | | | |

## Objetivo
Completar una aplicación frontend que consuma Frankfurter API para convertir divisas y demostrar comprensión de eventos, DOM, `fetch()`, JSON, asincronía, validación y manejo de errores.

## Ejecución
1. Descomprime el proyecto.
2. Abre la carpeta en VS Code.
3. Ejecuta `index.html` con Live Server o un servidor local equivalente.
4. Abre DevTools → Console y Network para observar el comportamiento.

## API
Endpoint de referencia:
`https://api.frankfurter.dev/v2/rate/{origen}/{destino}`

## Arquitectura MVC

- **Modelo (`js/model.js`)**: consulta Frankfurter, valida la respuesta HTTP y calcula la conversión.
- **Vista (`js/view.js`)**: encapsula las referencias al DOM, los eventos de la interfaz y los estados de resultado, carga y error.
- **Controlador (`js/code.js`)**: coordina los eventos, valida la entrada y conecta el modelo con la vista.

La aplicación usa módulos JavaScript, por lo que debe abrirse mediante Live Server o
algún servidor HTTP local, no directamente con `file://`.

## Decisiones técnicas
Registra aquí al menos dos decisiones tomadas por la pareja y explica por qué.

1. Se separó el código en modelo, vista y controlador para hacer explícito el recorrido
   solicitud HTTP → JSON → cálculo → actualización del DOM.
2. Se validó `response.ok` y la propiedad `rate` antes de calcular para evitar mostrar
   resultados engañosos cuando la API responde con un error o con datos incompletos.

## Revisión cruzada
- Aspecto bien resuelto:
- Error o comportamiento mejorable:
- Propuesta de mejora:
- Cambio incorporado después de la revisión:

## Reflexión final (150–200 palabras)
Explica el principal aprendizaje técnico, una dificultad relevante y una decisión que haya surgido del trabajo Driver/Navigator.
