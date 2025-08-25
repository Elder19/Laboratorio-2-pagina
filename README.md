# Documentación de selectores y requerimientos del laboratorio

---

**Selectores de tipo:**

- Aplicados en: `header`, `nav`, `section`, `img`, `p`, `h1`, `h2`

**Selectores de clase:**

- `.btn` en botones de formularios (components.css)
- `.card` en secciones como "Sobre el evento", "Equipos registrados" (components.css)
- `.badge` en el span de "Nuevo" en el premio (components.css)
- `.premio` en el aside del premio (components.css)

**Selectores de ID:**

- `#agenda` en la sección de agenda (base.css/layout.css)
- `#administrativo` en la sección de personal administrativo (layout.css)
- `#equipos`, `#registro`, `#ubicacion`

**Selectores de atributo:**

- `a[target="_blank"]` en enlaces externos (components.css)
- `img[alt]` en imágenes (components.css)
- `input[type="email"]` en formularios (components.css)
- `a[href^="https://"]` en enlaces externos (components.css)

**Combinadores:**

- `nav a + a` en el menú de navegación (base.css/components.css)
- `.card p` en tarjetas (components.css)
- `header > nav` en el header (base.css)

**Pseudo-clases de estado:**

- `:hover` en `.btn` (components.css)
- `:focus-visible` en `.btn` (components.css)
- `:active` en `.btn` (components.css)

**Pseudo-clases estructurales:**

- `ul li:first-child` y `ul li:last-child` en listas (components.css)
- `ol li:nth-child(2n)` en listas ordenadas (components.css)
- `ol li:not(:last-child)` en listas ordenadas (components.css)

**Especificidad (!important e inline style):**

- `.card .badge` sobrescrito con `!important` en overrides.css
- Estilo en línea en `<h1 style="margin-bottom: 24px">` en index.html

**Box model:**

- Aplicado en `.card` y `.container` (components.css, layout.css)
- Márgenes y paddings en secciones y títulos (layout.css, base.css)

**Overflow:**

- En el párrafo largo dentro de `.premio` (components.css)

**Flexbox:**

- En `nav` para alinear enlaces (layout.css, base.css)

**Grid:**

- En `.grid` para organizar tarjetas de personal y patrocinadores (base.css)

**Position relative/absolute:**

- `.card` como contenedor `relative` y `.badge` como elemento `absolute` (components.css)
