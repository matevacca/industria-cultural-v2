# Industria Cultural V2 — Panel editorial

Este paquete mantiene las notas HTML originales e incorpora Pages CMS + Jekyll para las próximas publicaciones.

## Instalación
1. **No subas este ZIP como un archivo**: descomprimilo y subí sus carpetas y archivos al repositorio `industria-cultural-v2`, conservando los directorios que empiezan con guion bajo (`_articulos`, `_layouts`).
2. Conservá GitHub Pages en `main` y `/(root)`. GitHub Pages ejecuta Jekyll de manera predeterminada.
3. Entrá a https://app.pagescms.org e iniciá sesión con GitHub. Autorizá la aplicación para este repositorio.
4. Abrí `industria-cultural-v2` → `Nuevas notas` → nueva nota. Usá exactamente una de estas categorías: `Noticias`, `Estrenos`, `Efemérides`, `Análisis`.
5. Completá fecha como AAAA-MM-DD, cargá la imagen y el artículo. Guardar crea archivos en `_articulos/`; GitHub Pages publicará las páginas.

## Notas importantes
- La portada original y sus historias destacadas siguen siendo manuales. Las nuevas publicaciones aparecen en el bloque `Últimas notas` y en las secciones correspondientes.
- El CMS guarda directamente en GitHub: revisá permisos y estrategia de borradores antes de permitir ediciones de todo el equipo.
- El repositorio de prueba debe estar PUBLIC y se recomienda probar una nota ficticia antes de dar acceso a otros colaboradores.
- Por ahora no hay un flujo de aprobación editorial previo: cada guardado sobre main provoca una nueva publicación.
- El campo imagen publica rutas bajo `/industria-cultural-v2/img/notas/`. Si cambiás el nombre del repositorio, actualizá `baseurl` en `_config.yml` y `output` en `.pages.yml`.
