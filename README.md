# REACT 19

## Uso de los ejemplos de este repositorio
Este repositorio contiene varios ejemplos que muestran algunas de las novedades que vendrán con la versión 19 de React y del futuro compilador, para poder ver estas características fácilmente de manera práctica.
En concreto, las versiones de React y del compilador que se están utilizando son las que vienen marcadas en el package.json, que son la **beta** actual en el momento de la instalación y la **0.0.0-experimental-487cb0e-20240529** respectivamente

Los ejemplos se cargan en el fichero src/App.tsx. En este fichero hay unas líneas de comentario en la parte superior, que relacionan cada ejemplo con el componente concreto. En concreto son:
```
Ejemplo 1: UserTransition -> Ejemplo de useTransition
Ejemplo 2: UserActionState -> Ejemplo de useActionState
Ejemplo 3: UserActionStateWithFooter -> Ejemplo de useFormState
Ejemplos use: UsersManager
Ejemplo custom elements: EditableList
Ejemplo metadata: Metadata
Ejemplo Compilador de react: CompilerTest
```

Simplemente, debe sustituirse el componente que se quiera probar por el de cada ejemplo y que quede reflejado en el componente Example de dicho componente App. Por ejemplo, si queremos probar el nuevo hook *useActionState* basta con hacer lo siguiente:
```
import {UserActionState as Example} from "components";
```
No obstante, en este documento se indicará para cada caso práctico cual es el componente que se deberá importar.

### Arranque de los ejemplos
Para iniciar la aplicación de ejemplos, la cúal ha sido creada basándonos en Vite con el template para React con TS, debemos instalar las dependencias y ejecutar el comando de ejecución:
```
npm install
npm run dev
```

Ahora sí, vamos con el resumen de los cambios que vendrán con React 19

## [Breaking changes](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#breaking-changes)
###  Características eliminadas :
- [Eliminados propTypes y defaultProps para funciones ](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-proptypes-and-defaultprops)
- [Eliminado el antiguo contexto](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-proptypes-and-defaultprops) que ya quedó obsoleto en react 16.6.0
- [Eliminadas referencias como strings](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-string-refs) en componentes de clases
- [Eliminado: Module pattern factories](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-module-pattern-factories)
- [Eliminado: createFactory](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-createfactory)
- [Eliminado: react-test-renderer/shallow](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-react-test-renderer-shallow): ahora se importa directamente con su propio módulo: react-shallow-renderer
- Movido: Se ha movido **act** al módulo de react directamente, [eliminándolo de react-dom/test-utils](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-deprecated-react-dom-apis)
- [Eliminado método render de react-dom](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-reactdom-render)
- [Eliminado método hydrate de react-dom](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-reactdom-hydrate)
- [Eliminado unmountComponentAtNode de react-dom](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-unmountcomponentatnode)
- [Eliminado método findDOMNode de react-dom](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-reactdom-finddomnode)

### Características que pasan a marcarse como obsoletas
- [element.ref](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#deprecated-element-ref): deja de tener sentido, al ser ref ahora una propiedad de los componentes
- [react-test-renderer](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#deprecated-react-test-renderer): la recomendación: ir a RTL.

### Otros cambios
- Otra lista de cambios relativos a cómo exporta react, cambios de tipados, etc [aquí](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#notable-changes)

## [Lo nuevo :)](https://react.dev/blog/2024/04/25/react-19#whats-new-in-react-19)

### Soporte para formularios
En cuanto a características nuevas, cabe destacar un mayor soporte de manera nativa para trabajar con formularios. La etiqueta *form* ya no se traduce en un nodo nativo de HTML, sino que react-dom realiza su [propia implementación](https://react.dev/reference/react-dom/components/form) para facilitar el manejo de formularios.

Se han introducido nuevos hooks (useActionState, useFormStatus, useOptimistic) para facilitar el manejo de formularios. En este repositorio se han elaborado unos ejemplos básicos para ver las capacidades de estos hooks. 

- Ejemplo de [acciones asíncronas con useTransition](https://react.dev/blog/2024/04/25/react-19#actions): aunque es un hook introducido en react 18, en react 19 se da soporte para manejo de funciones asíncronas con este hook. Para ver este ejemplo, importar el componente /components/examples/forms/example1/UserTransition.tsx en el App.jsx
- Ejemplo de [useActionState](https://react.dev/blog/2024/04/25/react-19#new-hook-useactionstate): importar en el App.tsx el componente /components/examples/forms/example2/UserActionState.tsx. En la documentación que se enlaza, no está la última versión del hook, por lo que aporto [este enlace también](https://github.com/facebook/react/pull/28491)
- Ejemplo de [useFormStatus](https://react.dev/blog/2024/04/25/react-19#new-hook-useformstatus): importar en el App.tsx el componente /components/examples/forms/example3/UserActionState.tsx. Observar que el hook se utiliza en un hijo de este componente: en el Footer.tsx 
- Hook [useOptimistic](https://react.dev/blog/2024/04/25/react-19#new-hook-optimistic-updates) 

### Nueva api [use](https://react.dev/blog/2024/04/25/react-19#new-feature-use)
- Ejemplo de invocar una promesa mediante use junto con suspense: importar en el App.tsx el componente /examples/use/example1/UsersManager.tsx
- Uso de *use* para invocar Context de manera condicional: si existe cualquier contexto que queramos utilizar mediante useContext, si existe cualquier condición previa, fallará. Con use, podemos utilizar un contexto después de cualquier condición.

### [Soporte para Custom Elements](https://react.dev/blog/2024/04/25/react-19#support-for-custom-elements)
Básicamente se va a poder dar soporte para usar customElements con react 19.
[Aquí](https://github.com/facebook/react/issues/11347) tenemos el roadmap que se estableció para dar soporte a los Custom Elements en react19
Podemos ver un ejemplo de uso de custom element usando el componente /examples/customElements/EditableList.tsx en el App.tsx


### [React Server Components](https://react.dev/blog/2024/04/25/react-19#react-server-components)
        
- Toda la documentación sobre server componentes está [aquí](https://react.dev/reference/rsc/server-components).
- Los server components pueden ser procesados en tiempo de construcción o en un servidor web (frameworks que soporten server componentes como Nextjs proveen de un servidor para este fin)
- Las librerías pueden exportar el contenido tanto para ser usados como server o client components, mediante la [condición de exportación react-server](https://github.com/reactjs/rfcs/blob/main/text/0227-server-module-conventions.md#react-server-conditional-exports) que se configura en el package.json de dichas librerías.
- [directivas](https://react.dev/reference/rsc/directives):
  - use server: para server actions (NO para server components)
  - use client: para indicar que son componentes de cliente

### Mejoras en React
- [Ya no es necesario usar forwardRef](https://react.dev/blog/2024/04/25/react-19#ref-as-a-prop). Se han adaptado los componentes para que puedan recibir directamente la propiedad ref
- [Mejoras en feedback de errores de hidratación](https://react.dev/blog/2024/04/25/react-19#diffs-for-hydration-errors)
- [Context como provider](https://react.dev/blog/2024/04/25/react-19#context-as-a-provider): ya no es necesario usar un contexto con la etiqueta <Micontexto.Provider>, sino que podemos usar directamente <MiContexto>
- Se añade al hook useDeferredValue la posibilidad de que tenga un [valor inicial](https://react.dev/blog/2024/04/25/react-19#context-as-a-provider)
- Podemos pasarle a un [componente como ref una función](https://react.dev/blog/2024/04/25/react-19#cleanup-functions-for-refs), cuya función de retorno nos permite ejecutar acciones de limpieza en el desmontado. Por ejemplo, si tenemos asociado un evento a un nodo del DOM asociado a esta referencia, podemos desuscribirnos en esta función de retorno.
- [Soporte a los metadatos del documento HTML](https://react.dev/blog/2024/04/25/react-19#support-for-metadata-tags). 
  - Metadatos: Hasta ahora, para poder manejar metadatos del documento HTML, hacíamos uso de librerías externas como [react-helmet](https://github.com/nfl/react-helmet). Para casos sencillos, ahora tenemos soporte nativo para realizar estas operaciones. Para hacer una prueba, importar el componente /examples/misc/metadata/Metadata.tsx en el App.tsx. 
  - De igual manera, podemos usar etiquetas [link o style](https://react.dev/blog/2024/04/25/react-19#support-for-stylesheets) dentro de un componente para importar hojas de estilos
  - scripts: También podemos cargar [scripts de manera asíncrona](https://react.dev/blog/2024/04/25/react-19#support-for-async-scripts) en un componente
  - precargas de recursos: también podemos hacer precargas de recursos mediantes ciertos [métodos que nos brinda react-dom](https://react.dev/blog/2024/04/25/react-19#support-for-preloading-resources)
- [Mejoras en informes de errores](https://react.dev/blog/2024/04/25/react-19#error-handling). Se eliminan duplicados

## [Compilador de react](https://react.dev/learn/react-compiler)
El compilador de react NO es una característica de React 19. Puede terminar lelgando a lo largo de la vida de esta versión o en una versión posterior. Pero SÍ es imprenscindible que la versión mínima de React para trabajar con el compilador sea la 19.
- Para comprobar que nuestro código es compatible con el compilador, debemos hacer una comprobación del mismo utilizando la herramienta **react-compiler-healthcheck**. Ejecutamos:
```
npx react-compiler-healthcheck@latest
```
- Instalamos y configuramos los plugins de eslint:
```
npm install eslint-plugin-react-compiler
```
En nuestro .eslintrc.cjs hemos añadido:
```
  plugins: [
    'eslint-plugin-react-compiler',
    ...
  ],
  rules: {
    'react-compiler/react-compiler': "error",
    ...
  },
```
- Instalamos el plugin de Babel
```
npm install babel-plugin-react-compiler
```
- Configuramos Vite en nuestro caso para hacer uso de dicho plugin. Para ello, tenemos en el **vite.config.ts** lo siguiente:
```
        react({
            babel: {
                plugins: [
                    [
                    "babel-plugin-react-compiler", 
                    //objeto de configuración del compilador. Ver https://react.dev/learn/react-compiler#using-the-compiler-effectively
                    {}
                    ],
                ],
            },
        })
```

- Esta configuración del plugin de react en el fichero vite.config.ts podemos comentarla y descomentarla para ver el efecto que tiene. 

Para probar el compilador, podemos cargar en el App.jsx el componente /examples/compiler/basic/CompilerTest y realizar un profile con el profiler de react y comprobar cuántos renderizados realiza el componente Footer usando el compilador de React o sin él. Veremos además en el profiler que cuando usamos el compilador de react queda automáticamente memoizado.