# Instrucciones para Claude Code

## Commits automáticos

Cada vez que hagas un cambio en este proyecto y el usuario lo apruebe (explícita o implícitamente, por ejemplo al no pedir más ajustes o al pasar a otra tarea), crea automáticamente un commit de git con un mensaje descriptivo y conciso — sin esperar a que el usuario lo pida cada vez.

- Agrega solo los archivos relevantes al cambio (no `git add -A` a ciegas).
- El mensaje debe explicar el porqué del cambio, no solo qué archivos se tocaron.
- Sigue el estilo de mensajes de commit ya usado en el historial del repo.
- Esto no cambia las reglas generales sobre acciones riesgosas: seguir pidiendo confirmación antes de un `push`, `force push`, `reset --hard` u otra operación destructiva.
