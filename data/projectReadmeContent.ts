import type { ProjectLocaleContent } from "../types/project"

export const README_CONTENT_OVERRIDES: Record<
  string,
  {
    en?: Partial<ProjectLocaleContent>
    es?: Partial<ProjectLocaleContent>
  }
> = {
  vic: {
    en: {
      links: {
        live: "https://nprdb-app-test-fall2024-5e22b455dcd3.herokuapp.com/",
      },
    },
    es: {
      links: {
        live: "https://nprdb-app-test-fall2024-5e22b455dcd3.herokuapp.com/",
      },
    },
  },
  "cracking-the-crime-code": {
    en: {
      summary:
        "Java investigation workflow that decodes criminal flyers, maps organization hierarchies, and plans arrest operations to maximize captures.",
      context:
        "Built as a data structures project where the challenge was not only deciphering encoded messages, but also turning that decoded data into an operational arrest report.",
      problem:
        "The assignment required extracting organization and leader information from hidden patterns in text, then traversing each hierarchy to determine the arrest sequence that captures the most members.",
      solution:
        "The project organizes the workflow into message decoding, recursive arrest planning, and report generation, using digital roots, positional text extraction, and hierarchy traversal to produce the final case summary.",
      decisions: [
        "Separated deciphering, arrest logic, and reporting so each stage could be tested independently.",
        "Used recursion to walk the criminal hierarchy instead of hardcoding organization depth.",
        "Kept the final output report-oriented to make the algorithmic work visible and easy to validate.",
      ],
      features: [
        "Organization identification through digital-root analysis",
        "Leader extraction from word-position patterns in flyer text",
        "Recursive arrest planning across underling hierarchies",
        "Captain, arrest-count, and organization-status reporting",
      ],
      results: [
        "Turned a course prompt into a coherent multi-step investigation pipeline.",
        "Shows practical use of recursion and data structures beyond toy examples.",
        "Adds a stronger algorithmic case study to the archive section.",
      ],
    },
    es: {
      summary:
        "Flujo de investigación en Java que descifra panfletos criminales, mapea jerarquías y planifica arrestos para maximizar capturas.",
      context:
        "Se desarrolló como proyecto de estructuras de datos, donde el reto no era solo descifrar mensajes ocultos, sino convertir esa información en un reporte operativo de arresto.",
      problem:
        "La asignación exigía extraer la organización y el líder a partir de patrones escondidos en texto, y luego recorrer cada jerarquía para decidir la secuencia de arrestos con mayor impacto.",
      solution:
        "El proyecto separa el flujo en descifrado del mensaje, planificación recursiva de arrestos y generación de reportes, usando raíces digitales, extracción posicional de texto y recorrido de jerarquías.",
      decisions: [
        "Se separó el descifrado, la lógica de arresto y el reporte para poder validar cada etapa por separado.",
        "Se usó recursión para recorrer la jerarquía criminal sin depender de una profundidad fija.",
        "Se priorizó una salida en formato de reporte para que el trabajo algorítmico fuera claro y verificable.",
      ],
      features: [
        "Identificación de organizaciones mediante análisis de raíz digital",
        "Extracción del líder a partir de patrones de palabras en el texto",
        "Planificación recursiva de arrestos sobre jerarquías de subordinados",
        "Reporte con capitán a cargo, total de arrestos y estado de la organización",
      ],
      results: [
        "Convirtió una asignación académica en un flujo de investigación coherente de principio a fin.",
        "Demuestra uso práctico de recursión y estructuras de datos fuera de ejemplos triviales.",
        "Aporta un caso algorítmico más sólido dentro del archivo de proyectos.",
      ],
    },
  },
  "huffman-coding": {
    en: {
      summary:
        "Implementation of Huffman coding that compares fixed-length encoding against frequency-based compression with explicit space savings.",
      context:
        "Created as a compression-focused data structures exercise around a classic question: how to encode the same message with fewer bits when symbol frequency is uneven.",
      problem:
        "Using a fixed-length representation wastes space when some symbols appear far more often than others, so the project needed a way to compress text without losing information.",
      solution:
        "The program calculates symbol frequencies, builds a Huffman tree, maps each symbol to a variable-length code, and reports the encoded output alongside the space saved versus the original representation.",
      decisions: [
        "Used a binary-tree representation to make the compression process transparent and traceable.",
        "Reported both the encoded string and the savings percentage so the benefit is measurable, not implied.",
        "Kept the workflow input-driven around a text file to match the assignment's reproducible setup.",
      ],
      features: [
        "Frequency analysis over the input message",
        "Huffman tree construction for variable-length encoding",
        "Generated code map for each symbol",
        "Comparison between original and compressed bit usage",
      ],
      results: [
        "Makes the value of Huffman coding visible with concrete compression output.",
        "Shows comfort with trees, encoding logic, and algorithmic reporting.",
        "Strengthens the portfolio's lower-level computer science work.",
      ],
    },
    es: {
      summary:
        "Implementación de Huffman Coding que compara codificación fija contra compresión basada en frecuencia, mostrando el ahorro de espacio.",
      context:
        "Se creó como ejercicio de estructuras de datos enfocado en compresión, a partir de una pregunta clásica: cómo representar el mismo mensaje con menos bits cuando la frecuencia de símbolos no es uniforme.",
      problem:
        "Una representación de longitud fija desperdicia espacio cuando algunos símbolos aparecen mucho más que otros, así que el proyecto necesitaba comprimir texto sin perder información.",
      solution:
        "El programa calcula la frecuencia de cada símbolo, construye un árbol de Huffman, genera códigos de longitud variable y reporta la salida codificada junto con el ahorro frente a la representación original.",
      decisions: [
        "Se usó una estructura de árbol binario para que el proceso de compresión fuera claro y trazable.",
        "Se reportó tanto la cadena codificada como el porcentaje de ahorro para medir el beneficio de forma explícita.",
        "Se mantuvo un flujo basado en archivo de entrada para que la ejecución fuera reproducible.",
      ],
      features: [
        "Análisis de frecuencia sobre el mensaje de entrada",
        "Construcción del árbol de Huffman para codificación variable",
        "Generación del mapa de códigos por símbolo",
        "Comparación entre bits originales y bits comprimidos",
      ],
      results: [
        "Hace visible el valor de Huffman Coding con una salida de compresión concreta.",
        "Demuestra soltura con árboles, lógica de codificación y reportes algorítmicos.",
        "Refuerza la parte más de ciencias de computación dentro del portafolio.",
      ],
    },
  },
  "pacman-deluxe": {
    en: {
      summary:
        "Advanced Pacman extension that adds ranked power-ups, sorting mechanics, ghost-eye path recovery, and GPS-like power-up routing.",
      context:
        "This project extends a base Pacman assignment into a stronger gameplay and algorithms exercise, adding systems that combine collections, sorting, and pathfinding.",
      problem:
        "The goal was to push the original game beyond simple movement and collisions by introducing mechanics that required richer state, smarter entities, and algorithm-driven behavior.",
      solution:
        "Pacman Deluxe adds ranked power-ups stored in collections, a sorting-based ultimate power-up, ghost-eye path recovery after enemies are eaten, and a GPS feature that highlights routes to available power-ups.",
      decisions: [
        "Represented collected power-ups as an ordered collection so usage could be controlled and later sorted.",
        "Used an explicit compare/rank model to make the ultimate power-up mechanic deterministic.",
        "Treated navigation features as algorithmic systems, not just visual effects, so route logic mattered.",
      ],
      features: [
        "Ranked power-up system with collection-backed inventory",
        "Sorting algorithm triggered by the ultimate power-up",
        "Ghost-eye return path after ghost defeat",
        "GPS-style pathfinding to locate power-ups on the map",
      ],
      results: [
        "Turns a familiar game clone into a clearer demonstration of algorithms in gameplay.",
        "Shows practical integration of collections, ordering, and path logic in C++.",
        "Adds more technical depth than a standard arcade remake.",
      ],
    },
    es: {
      summary:
        "Extensión avanzada de Pacman que añade power-ups con ranking, mecánicas de ordenamiento, retorno de ojos de fantasmas y rutas tipo GPS.",
      context:
        "Este proyecto expande una práctica base de Pacman hacia un ejercicio más fuerte de gameplay y algoritmos, incorporando colecciones, ordenamiento y búsqueda de rutas.",
      problem:
        "El objetivo era llevar el juego más allá de movimiento y colisiones simples, introduciendo mecánicas que exigieran más estado, entidades más inteligentes y comportamiento guiado por algoritmos.",
      solution:
        "Pacman Deluxe agrega power-ups con ranking almacenados en colecciones, un power-up definitivo que ordena inventario, retorno autónomo de ojos de fantasmas y un GPS que resalta rutas hacia power-ups disponibles.",
      decisions: [
        "Se representaron los power-ups como una colección ordenada para controlar su uso y luego poder ordenarlos.",
        "Se definió un modelo explícito de compare/rank para que el power-up definitivo fuera determinista.",
        "Las funciones de navegación se trataron como sistemas algorítmicos reales, no solo como efectos visuales.",
      ],
      features: [
        "Sistema de power-ups con ranking e inventario basado en colecciones",
        "Algoritmo de ordenamiento activado por el power-up definitivo",
        "Ruta de retorno para los ojos de fantasmas tras ser derrotados",
        "Búsqueda de caminos estilo GPS para localizar power-ups",
      ],
      results: [
        "Convierte un clon conocido en una muestra más clara de algoritmos aplicados al gameplay.",
        "Demuestra integración práctica de colecciones, ordenamiento y rutas en C++.",
        "Aporta más profundidad técnica que un remake arcade convencional.",
      ],
    },
  },
  pacman: {
    en: {
      summary:
        "Iterative Pacman build with new game states, random ghost spawning, player selection, and expandable power-up behavior.",
      context:
        "Built as a phased extension of a Pacman starter project, with each phase pushing state management and game interaction further.",
      problem:
        "The original game needed more replayability and better control over flow, so the assignment focused on adding richer states, power-ups, and reset behavior.",
      solution:
        "The project introduces new win/pause/player-selection states, random ghost spawning, a fresh-map reset flow, and an abstract power-up hierarchy with multiple specialized behaviors.",
      decisions: [
        "Used dedicated state classes to keep pause, win, and selection logic separate from gameplay.",
        "Introduced an abstract power-up base to support multiple item behaviors cleanly.",
        "Reset the game with a fresh map instance instead of mutating the same board repeatedly.",
      ],
      features: [
        "Randomized ghost spawning and character variation",
        "Pause, win, and choose-player states",
        "Cherry, strawberry, and random power-up mechanics",
        "Improved reset logic with a fresh map instance",
      ],
      results: [
        "Shows stronger object-oriented structure than a minimal game prototype.",
        "Demonstrates state management as a real gameplay concern.",
        "Works well as a foundation for the more advanced Pacman Deluxe project.",
      ],
    },
    es: {
      summary:
        "Implementación iterativa de Pacman con nuevos estados de juego, fantasmas aleatorios, selección de personaje y power-ups extensibles.",
      context:
        "Se construyó como una extensión por fases de un proyecto base de Pacman, donde cada entrega empujaba más el manejo de estado y la interacción del juego.",
      problem:
        "El juego original necesitaba más rejugabilidad y mejor control del flujo, así que la práctica se enfocó en añadir estados, power-ups y lógica de reinicio más rica.",
      solution:
        "El proyecto incorpora nuevos estados de victoria, pausa y selección de personaje, aparición aleatoria de fantasmas, reinicio con mapa nuevo y una jerarquía abstracta de power-ups con varios comportamientos.",
      decisions: [
        "Se usaron clases de estado dedicadas para separar la pausa, la victoria y la selección del gameplay principal.",
        "Se introdujo una clase abstracta de power-up para soportar múltiples comportamientos sin duplicar lógica.",
        "El reinicio crea una nueva instancia del mapa en lugar de reutilizar el mismo tablero.",
      ],
      features: [
        "Aparición aleatoria de fantasmas y variación de personaje",
        "Estados de pausa, victoria y selección de jugador",
        "Mecánicas de cherry, strawberry y power-up aleatorio",
        "Lógica de reinicio mejorada con un mapa fresco",
      ],
      results: [
        "Muestra una estructura orientada a objetos más sólida que un prototipo de juego mínimo.",
        "Demuestra el manejo de estado como una preocupación real del gameplay.",
        "Funciona bien como base para el proyecto más avanzado Pacman Deluxe.",
      ],
    },
  },
  "audio-visualizer-simulator": {
    en: {
      summary:
        "Interactive audio visualizer with multiple display modes, keyboard-driven controls, and record/replay support for demos.",
      context:
        "Created as a graphics-heavy simulation project where each phase added more interactivity, more visualization modes, and more control over the audio experience.",
      problem:
        "The base visualizer needed richer user input and more expressive playback behavior to feel like an actual interactive tool instead of a static demo.",
      solution:
        "The project adds background and shape color controls, song switching, volume adjustment, improved rectangle-bar visualizations, and a record/replay mode for repeating interaction sequences.",
      decisions: [
        "Kept the workflow keyboard-first so visual changes could be tested and demonstrated quickly.",
        "Expanded the rectangle visualizer into multiple bars tied to amplitudes instead of a single coarse response.",
        "Added record/replay to make complex interaction sequences reproducible.",
      ],
      features: [
        "Background and shape color changes",
        "Pause/resume behavior from the keyboard",
        "Song switching and volume controls",
        "Multiple rectangle-based visualization modes",
        "Record/replay for user interaction sequences",
      ],
      results: [
        "Pushes a classroom simulation closer to a usable interactive visual demo.",
        "Shows comfort with audio-driven graphics and event handling.",
        "Adds a more visual, experiential project to the archive.",
      ],
    },
    es: {
      summary:
        "Visualizador de audio interactivo con varios modos de despliegue, controles por teclado y soporte de grabación/repetición para demos.",
      context:
        "Se creó como proyecto de simulación gráfica donde cada fase añadía más interactividad, más modos de visualización y más control sobre la experiencia de audio.",
      problem:
        "El visualizador base necesitaba entradas más ricas y un comportamiento de reproducción más expresivo para sentirse como una herramienta interactiva y no como una demo estática.",
      solution:
        "El proyecto añade controles de color de fondo y figuras, cambio de canción, ajuste de volumen, visualizadores rectangulares mejorados y un modo de grabación/repetición para secuencias de interacción.",
      decisions: [
        "Se mantuvo un flujo centrado en teclado para probar y demostrar cambios visuales con rapidez.",
        "Se amplió el visualizador rectangular a varias barras ligadas a amplitudes en vez de una sola respuesta gruesa.",
        "Se añadió record/replay para volver reproducibles secuencias complejas de interacción.",
      ],
      features: [
        "Cambios de color de fondo y de figuras",
        "Pausa y reanudación desde el teclado",
        "Cambio de canciones y control de volumen",
        "Varios modos de visualización basados en rectángulos",
        "Grabación y repetición de secuencias de interacción",
      ],
      results: [
        "Lleva una simulación académica hacia una demo visual más útil e interactiva.",
        "Muestra soltura con gráficos guiados por audio y manejo de eventos.",
        "Aporta un proyecto más visual y experiencial al archivo.",
      ],
    },
  },
  "fractals-project": {
    en: {
      summary:
        "Recursive fractal visualizer with multiple fractal classes, adjustable depth, and animated growth of the active pattern.",
      context:
        "Built as a recursion-centered graphics assignment that evolved from a single-mode fractal viewer into a polymorphic system of fractal implementations.",
      problem:
        "The project needed to demonstrate recursion more deeply than a single draw routine, while also making the differences between fractal types visible and interactive.",
      solution:
        "The application introduces recursion-level controls, per-level coloring, a Fractal interface with an abstract base class, multiple concrete fractal types, and an animation mode that grows and resets the active fractal.",
      decisions: [
        "Refactored each draw mode into its own class so polymorphism became part of the architecture, not just the requirement.",
        "Exposed recursion depth directly on the keyboard to make the algorithm visible during use.",
        "Added animation by gradually increasing depth, which makes the recursive structure easier to perceive.",
      ],
      features: [
        "Adjustable recursion depth with keyboard controls",
        "Color variation by fractal level",
        "Fractal interface plus abstract base class",
        "Multiple fractal implementations, including a custom design",
        "Animated fractal growth and reset loop",
      ],
      results: [
        "Turns a recursion topic into something visual and easier to explain.",
        "Shows clean use of abstraction and polymorphism in a graphics context.",
        "Makes the archive section feel broader than standard CRUD or scripting work.",
      ],
    },
    es: {
      summary:
        "Visualizador de fractales recursivos con múltiples clases de fractal, profundidad ajustable y crecimiento animado del patrón activo.",
      context:
        "Se desarrolló como una práctica gráfica centrada en recursión que evolucionó de un visor de un solo modo hacia un sistema polimórfico de fractales.",
      problem:
        "El proyecto debía demostrar recursión con más profundidad que una sola rutina de dibujo, y además volver visibles e interactivos los distintos tipos de fractales.",
      solution:
        "La aplicación incorpora control de niveles de recursión, coloreado por nivel, una interfaz Fractal con clase abstracta base, varios fractales concretos y un modo de animación que hace crecer y reiniciar el fractal activo.",
      decisions: [
        "Se refactorizó cada draw mode en su propia clase para que el polimorfismo formara parte real de la arquitectura.",
        "Se expuso la profundidad de recursión desde el teclado para volver visible el algoritmo durante el uso.",
        "Se añadió animación aumentando la profundidad poco a poco, haciendo más fácil percibir la estructura recursiva.",
      ],
      features: [
        "Profundidad de recursión ajustable con teclado",
        "Variación de color según el nivel del fractal",
        "Interfaz Fractal y clase abstracta base",
        "Múltiples implementaciones de fractales, incluyendo uno propio",
        "Animación de crecimiento y reinicio del fractal",
      ],
      results: [
        "Convierte un tema de recursión en algo visual y más fácil de explicar.",
        "Muestra buen uso de abstracción y polimorfismo en contexto gráfico.",
        "Hace que el archivo de proyectos se sienta más amplio que simples apps CRUD o scripts.",
      ],
    },
  },
  "spooky-quest": {
    en: {
      summary:
        "Area-based adventure game with overworld progression, enemy encounters, friend interactions, and multi-phase boss battles.",
      context:
        "Built as a phased game-development assignment where the base experience was expanded through more areas, more entity types, and richer state transitions.",
      problem:
        "The original version needed stronger progression and world interaction, so the project focused on turning a basic spooky quest into a more complete adventure loop.",
      solution:
        "The game adds new areas with world effects, pause and HUD systems, friend entities, boss battles with multiple phases, and progression rules that move the player forward after key encounters.",
      decisions: [
        "Used inheritance to introduce Friend and Boss entities without rewriting the base entity model.",
        "Treated progression gates as part of the area system so boss fights mattered structurally.",
        "Added debug and pause support to speed up testing while building new content.",
      ],
      features: [
        "Expanded area progression with overworld effects",
        "Pause state, HUD, and debug controls",
        "Friend entities with on-screen dialogue",
        "Boss encounters with multi-phase battles",
        "Enemy-path and respawn behavior extensions",
      ],
      results: [
        "Pushes the project beyond a simple class assignment into a fuller game loop.",
        "Demonstrates entity modeling and progression design in C++.",
        "Adds a narrative/gameplay flavored project with more system depth.",
      ],
    },
    es: {
      summary:
        "Juego de aventura por áreas con progresión en overworld, encuentros con enemigos, interacción con aliados y jefes de varias fases.",
      context:
        "Se construyó como una práctica de desarrollo de juegos por fases, donde la experiencia base se amplió con más áreas, más tipos de entidades y mejores transiciones de estado.",
      problem:
        "La versión original necesitaba una progresión más clara y más interacción con el mundo, así que el proyecto se enfocó en convertir una aventura simple en un loop más completo.",
      solution:
        "El juego agrega nuevas áreas con efectos en el overworld, sistemas de pausa y HUD, entidades amigas, batallas contra jefes de varias fases y reglas de progresión que hacen avanzar al jugador tras encuentros clave.",
      decisions: [
        "Se usó herencia para introducir Friend y Boss sin reescribir el modelo base de entidades.",
        "Las puertas de progresión se integraron al sistema de áreas para que las peleas contra jefes importaran estructuralmente.",
        "Se añadieron controles de debug y pausa para acelerar pruebas mientras se construía nuevo contenido.",
      ],
      features: [
        "Progresión expandida por áreas con efectos en el overworld",
        "Estado de pausa, HUD y controles de depuración",
        "Entidades amigas con diálogo en pantalla",
        "Encuentros con jefes en varias fases",
        "Extensiones en rutas de enemigos y respawn",
      ],
      results: [
        "Lleva el proyecto más allá de una práctica simple hacia un loop de juego más completo.",
        "Demuestra modelado de entidades y diseño de progresión en C++.",
        "Aporta un proyecto con sabor más narrativo y con más profundidad de sistemas.",
      ],
    },
  },
  "particles-system-simulator": {
    en: {
      summary:
        "Particle simulator with interactive velocity and color controls, mouse-defined magnification zones, and record/replay support.",
      context:
        "Created as a simulation project in three phases, each one adding more direct control over particle behavior and more observable feedback.",
      problem:
        "The base simulator was visually active but limited in interaction, so the assignment focused on giving the user meaningful control over particle states and repeatable demos.",
      solution:
        "The project introduces keyboard controls for pause, velocity, and color cycling, a draggable rectangle that magnifies particles inside it, and a recording system that replays action sequences at fixed intervals.",
      decisions: [
        "Used simple single-key controls so behavior changes could be tested immediately.",
        "Made the magnification mechanic region-based to connect mouse input with simulation state.",
        "Blocked live input during replay so recorded sequences stayed deterministic.",
      ],
      features: [
        "Color cycling across all particles",
        "Pause and velocity controls from the keyboard",
        "Mouse-drawn rectangle for particle magnification",
        "Recording indicator and replay indicator",
        "Cancelable replay of saved interactions",
      ],
      results: [
        "Turns a passive particle demo into a more controllable simulation tool.",
        "Shows good handling of input, state playback, and visual feedback.",
        "Adds another strong graphics-oriented archive project.",
      ],
    },
    es: {
      summary:
        "Simulador de partículas con control interactivo de velocidad y color, zonas de aumento definidas con el mouse y soporte de grabación/repetición.",
      context:
        "Se creó como un proyecto de simulación en tres fases, donde cada etapa agregaba más control directo sobre el comportamiento de las partículas y más retroalimentación visible.",
      problem:
        "El simulador base era visualmente activo pero limitado en interacción, así que la práctica se enfocó en dar al usuario control real sobre el estado de las partículas y demos repetibles.",
      solution:
        "El proyecto introduce controles de teclado para pausa, velocidad y ciclo de color, un rectángulo arrastrable que magnifica las partículas dentro de él y un sistema de grabación que reproduce secuencias a intervalos fijos.",
      decisions: [
        "Se usaron controles de una sola tecla para probar cambios de comportamiento de inmediato.",
        "La mecánica de magnificación se hizo por región para conectar input del mouse con el estado de la simulación.",
        "Se bloqueó la entrada en vivo durante la reproducción para mantener las secuencias deterministas.",
      ],
      features: [
        "Ciclo de color aplicado a todas las partículas",
        "Controles de pausa y velocidad desde el teclado",
        "Rectángulo dibujado con el mouse para magnificar partículas",
        "Indicadores visuales de grabación y reproducción",
        "Reproducción cancelable de interacciones guardadas",
      ],
      results: [
        "Convierte una demo de partículas pasiva en una simulación más controlable.",
        "Muestra buen manejo de input, reproducción de estado y retroalimentación visual.",
        "Suma otro proyecto fuerte orientado a gráficos dentro del archivo.",
      ],
    },
  },
  "archive-org-downloader": {
    en: {
      summary:
        "Convenience wrapper around Archive.org-Downloader that reduces repeated setup when downloading public books from Archive.org.",
      context:
        "This utility was built on top of an existing open-source downloader to make a repetitive command-line workflow easier to repeat with saved defaults.",
      problem:
        "Downloading books through the base tool required re-entering credentials and preferred image quality, which made repeated use unnecessarily tedious.",
      solution:
        "The project provides a batch-file interface that stores Archive.org credentials and default image resolution, then prompts only for the book URL before starting the download.",
      decisions: [
        "Built as a wrapper instead of a rewrite so the effort stayed focused on usability.",
        "Persisted credentials and resolution in the batch configuration to reduce repetitive typing.",
        "Kept the run flow minimal so non-technical repeated use stayed approachable.",
      ],
      features: [
        "Batch-file launcher for Archive.org downloads",
        "Saved credentials for repeat usage",
        "Preset image-resolution selection",
        "Simple URL-paste workflow with minimal input",
      ],
      results: [
        "Improves a working open-source tool through workflow design rather than reimplementation.",
        "Shows pragmatic automation and wrapper-tool thinking.",
        "Adds a small but clearly useful utility to the archive.",
      ],
    },
    es: {
      summary:
        "Wrapper de conveniencia sobre Archive.org-Downloader que reduce la configuración repetitiva al descargar libros públicos desde Archive.org.",
      context:
        "Esta utilidad se construyó sobre un downloader open source existente para volver más repetible un flujo de terminal que se usaba con frecuencia.",
      problem:
        "Descargar libros con la herramienta base exigía volver a escribir credenciales y calidad de imagen preferida, haciendo el uso repetido innecesariamente tedioso.",
      solution:
        "El proyecto ofrece una interfaz por batch file que guarda credenciales y resolución de imagen por defecto, y luego sólo pide la URL del libro antes de iniciar la descarga.",
      decisions: [
        "Se construyó como wrapper y no como reescritura para concentrar el esfuerzo en la usabilidad.",
        "Se persistieron credenciales y resolución en la configuración del batch para reducir escritura repetitiva.",
        "Se mantuvo un flujo mínimo de ejecución para que el uso repetido fuera accesible incluso sin mucha experiencia técnica.",
      ],
      features: [
        "Lanzador por batch file para descargas de Archive.org",
        "Credenciales guardadas para uso repetido",
        "Selección predefinida de resolución de imagen",
        "Flujo simple basado en pegar la URL del libro",
      ],
      results: [
        "Mejora una herramienta open source útil desde el diseño del flujo, no desde la reimplementación.",
        "Muestra criterio pragmático para automatización y herramientas wrapper.",
        "Agrega una utilidad pequeña pero claramente práctica al archivo.",
      ],
    },
  },
  "note-app": {
    en: {
      summary:
        "Code-friendly desktop editor built with PyQt6, with syntax highlighting, file management, and editing features closer to a lightweight IDE than a simple notes app.",
      context:
        "Although labeled as a note app, the README shows it as a more capable text editor built for writing and inspecting code with a familiar desktop workflow.",
      problem:
        "Basic note tools are fine for plain text, but they break down quickly when the user needs language-aware editing, better navigation, and faster keyboard-driven file handling.",
      solution:
        "The app combines PyQt6, QScintilla, and Pygments to provide syntax highlighting, code folding, brace matching, auto-indentation, auto-completion, recent files, find text, and status-bar feedback in one desktop editor.",
      decisions: [
        "Moved to a PyQt6-based primary version while keeping the older PyQt5 build as a legacy reference.",
        "Used QScintilla and Pygments instead of building editor primitives from scratch.",
        "Kept the workflow keyboard-first with conventional shortcuts for file and edit actions.",
      ],
      features: [
        "Syntax highlighting for Python, SQL, Java, C++, JavaScript, and Markdown",
        "Line numbers, code folding, brace matching, and indentation guides",
        "Auto-indentation and intelligent auto-completion",
        "Recent files, find text, save/save-as, and zoom controls",
        "Status bar with line/column, file type, and UTF-8 indicators",
      ],
      results: [
        "Positions the project as a lightweight editor, not just a toy note pad.",
        "Shows stronger desktop-app polish through editing ergonomics and shortcuts.",
        "Adds a more mature PyQt tool to the portfolio archive.",
      ],
      stack: ["Python", "PyQt6", "QScintilla", "Pygments"],
    },
    es: {
      summary:
        "Editor de escritorio orientado a código construido con PyQt6, con resaltado de sintaxis, manejo de archivos y funciones más cercanas a un IDE ligero que a una simple app de notas.",
      context:
        "Aunque se presenta como Note App, el README lo describe más bien como un editor de texto capaz de escribir e inspeccionar código dentro de un flujo de escritorio familiar.",
      problem:
        "Las apps básicas de notas funcionan para texto plano, pero se quedan cortas cuando el usuario necesita edición con conocimiento del lenguaje, mejor navegación y manejo de archivos por teclado.",
      solution:
        "La app combina PyQt6, QScintilla y Pygments para ofrecer resaltado de sintaxis, code folding, brace matching, auto-indentation, auto-completion, historial de archivos, búsqueda y feedback en la barra de estado.",
      decisions: [
        "Se migró la versión principal a PyQt6 y se dejó PyQt5 como referencia legacy.",
        "Se usaron QScintilla y Pygments en lugar de construir primitivas de edición desde cero.",
        "Se mantuvo un flujo keyboard-first con atajos convencionales para acciones de archivo y edición.",
      ],
      features: [
        "Resaltado de sintaxis para Python, SQL, Java, C++, JavaScript y Markdown",
        "Números de línea, code folding, brace matching y guías de indentación",
        "Auto-indentation y auto-completion inteligente",
        "Historial de archivos, búsqueda de texto, guardar/guardar como y zoom",
        "Barra de estado con línea/columna, tipo de archivo y UTF-8",
      ],
      results: [
        "Posiciona el proyecto como un editor ligero, no como un simple bloc de notas.",
        "Muestra más pulido de desktop app a través de ergonomía de edición y atajos.",
        "Añade una herramienta PyQt más madura al archivo del portafolio.",
      ],
      stack: ["Python", "PyQt6", "QScintilla", "Pygments"],
    },
  },
  "video-download-app": {
    en: {
      context:
        "Built to make a powerful but terminal-heavy media-download stack approachable from a desktop UI, especially for repeated downloads and platform-specific edge cases.",
      decisions: [
        "Exposed installation and update flows for FFmpeg, yt-dlp, and aria2c directly in the app instead of assuming the environment was already configured.",
        "Added pause/resume, logs, and batch input because downloads fail, stall, or expand beyond a single URL in real-world use.",
        "Included platform-specific handling for Twitch, playlists, browser cookies, and client fallback to improve success rate on harder sources.",
      ],
      results: [
        "Turns a CLI-centered media workflow into a fuller desktop product with setup, downloading, and troubleshooting in one place.",
        "Shows practical engineering around third-party tooling, edge cases, and user feedback loops.",
        "Makes the project stronger than a thin yt-dlp wrapper by covering installation, retries, and platform quirks.",
      ],
      stack: ["Python", "PyQt5", "yt-dlp", "FFmpeg", "aria2c"],
    },
    es: {
      context:
        "Se construyó para volver accesible desde escritorio un stack de descarga de medios muy potente pero demasiado centrado en terminal, sobre todo en descargas repetidas y casos límite por plataforma.",
      decisions: [
        "Se expusieron dentro de la app los flujos de instalación y actualización de FFmpeg, yt-dlp y aria2c en lugar de asumir un entorno ya configurado.",
        "Se añadieron pausa/reanudación, logs y entrada por lotes porque las descargas reales fallan, se estancan o crecen más allá de una sola URL.",
        "Se incluyó manejo específico para Twitch, playlists, cookies del navegador y client fallback para mejorar la tasa de éxito en fuentes más difíciles.",
      ],
      results: [
        "Convierte un flujo de medios centrado en CLI en un producto de escritorio más completo, con configuración, descarga y troubleshooting en un solo lugar.",
        "Muestra ingeniería práctica alrededor de tooling de terceros, casos límite y feedback al usuario.",
        "Hace que el proyecto sea más fuerte que un wrapper delgado de yt-dlp al cubrir instalación, reintentos y particularidades por plataforma.",
      ],
      stack: ["Python", "PyQt5", "yt-dlp", "FFmpeg", "aria2c"],
    },
  },
  "animeflv-enhancements": {
    en: {
      summary:
        "Tampermonkey enhancement for AnimeFLV that automates provider selection and adds faster navigation controls.",
      context:
        "Built as a quality-of-life script for a streaming workflow where the same provider and navigation actions are repeated on every episode.",
      problem:
        "Choosing the preferred video provider and navigating long pages by hand adds unnecessary clicks when the user repeats the same viewing flow over and over.",
      solution:
        "The script auto-selects the preferred provider, remembers that preference across sessions, offers a quick provider menu, and adds a floating Page Up control for faster navigation.",
      decisions: [
        "Persisted provider preferences so the script improves the workflow after the first use.",
        "Added both automation and a manual quick-access menu instead of forcing a single behavior.",
        "Included keyboard access for settings to keep the script lightweight but configurable.",
      ],
      features: [
        "Automatic preferred-provider selection",
        "Saved settings across sessions",
        "Quick provider access menu",
        "Floating Page Up navigation button",
        "F2 settings shortcut",
      ],
      results: [
        "Reduces repetitive clicks on a site used episode after episode.",
        "Shows practical DOM automation around a concrete viewing workflow.",
        "Adds a smaller but polished browser-enhancement example to the portfolio.",
      ],
    },
    es: {
      summary:
        "Mejora de Tampermonkey para AnimeFLV que automatiza la selección de proveedor y acelera la navegación.",
      context:
        "Se construyó como script de calidad de vida para un flujo de streaming donde se repiten las mismas decisiones de proveedor y navegación en cada episodio.",
      problem:
        "Elegir el proveedor preferido y navegar páginas largas manualmente agrega clics innecesarios cuando el usuario repite el mismo flujo una y otra vez.",
      solution:
        "El script selecciona automáticamente el proveedor preferido, guarda esa preferencia entre sesiones, ofrece un menú rápido de proveedores y añade un botón flotante de Page Up para navegar más rápido.",
      decisions: [
        "Se persistieron las preferencias del proveedor para que el script mejore el flujo desde el primer uso.",
        "Se combinó automatización con un menú de acceso manual en vez de imponer un único comportamiento.",
        "Se incluyó acceso por teclado a ajustes para mantener el script liviano pero configurable.",
      ],
      features: [
        "Selección automática del proveedor preferido",
        "Preferencias guardadas entre sesiones",
        "Menú rápido de acceso a proveedores",
        "Botón flotante de navegación Page Up",
        "Atajo F2 para ajustes",
      ],
      results: [
        "Reduce clics repetitivos en un sitio usado episodio tras episodio.",
        "Muestra automatización DOM práctica alrededor de un flujo concreto de visualización.",
        "Agrega un ejemplo pequeño pero pulido de mejora de navegador dentro del portafolio.",
      ],
    },
  },
  "disney-plus-enhancements": {
    en: {
      summary:
        "Disney Plus automation script focused on skip controls, playback continuity, and fullscreen convenience.",
      context:
        "Built for a streaming workflow where intro, recap, and next-episode interactions are repetitive and interruptive.",
      problem:
        "Watching serialized content often means repeating the same skip and playback actions every episode, which adds friction to an otherwise passive flow.",
      solution:
        "The script automates intro and recap skipping, continues playback into the next episode, manages fullscreen behavior, and exposes its options through a lightweight settings dialog.",
      decisions: [
        "Kept the feature set centered on repetitive playback actions instead of trying to modify the whole platform UI.",
        "Made skip behavior configurable so users can keep automation without losing control.",
        "Used a settings shortcut to keep configuration fast during actual watching.",
      ],
      features: [
        "Automatic skip for intros and recaps",
        "Auto-play support for the next episode",
        "Automatic fullscreen handling",
        "Persistent configurable settings",
        "F2 shortcut for settings access",
      ],
      results: [
        "Removes a common source of friction from binge-style viewing.",
        "Shows repeatable streaming-site automation with a cleaner UX layer.",
        "Strengthens the automation section with a focused playback tool.",
      ],
    },
    es: {
      summary:
        "Script de automatización para Disney Plus enfocado en saltos automáticos, continuidad de reproducción y comodidad de pantalla completa.",
      context:
        "Se construyó para un flujo de streaming donde las interacciones de intro, recap y siguiente episodio se repiten y rompen la continuidad.",
      problem:
        "Ver contenido serializado suele implicar repetir las mismas acciones de skip y reproducción en cada episodio, agregando fricción a un flujo que debería ser pasivo.",
      solution:
        "El script automatiza el salto de intros y recaps, continúa hacia el siguiente episodio, gestiona la pantalla completa y expone opciones mediante un panel de ajustes liviano.",
      decisions: [
        "Se mantuvo el alcance centrado en acciones repetitivas de reproducción en lugar de intentar modificar toda la interfaz.",
        "El comportamiento de skip se volvió configurable para mantener automatización sin perder control.",
        "Se usó un atajo para ajustes que permite configurar el script durante el uso real.",
      ],
      features: [
        "Salto automático de intros y recaps",
        "Soporte para reproducir automáticamente el siguiente episodio",
        "Manejo automático de pantalla completa",
        "Ajustes configurables y persistentes",
        "Atajo F2 para abrir configuración",
      ],
      results: [
        "Elimina una fuente común de fricción del consumo continuo de series.",
        "Muestra automatización repetible sobre plataformas de streaming con una capa UX más limpia.",
        "Fortalece la sección de automatización con una herramienta de reproducción bien enfocada.",
      ],
    },
  },
  "fast-search": {
    en: {
      summary:
        "React-based universal search launcher for the browser, with shortcut-driven navigation across dozens of platforms.",
      context:
        "Built as a keyboard-first productivity script for users who regularly bounce between search engines, social platforms, coding sites, and entertainment sources.",
      problem:
        "Opening the right site and composing the right search repeatedly costs time, especially when the user already knows the platform they want before reaching it.",
      solution:
        "Fast Search opens a React-powered launcher with a single key, lets the user search dozens of platforms through short aliases, supports auto-suggestions, and can jump directly to a platform home page when only the shortcut is entered.",
      decisions: [
        "Used a React interface so the script could feel like a small product instead of a bare prompt overlay.",
        "Optimized for keyboard flow with Insert to open and ESC to close.",
        "Made shortcuts the core interaction model so the tool stays fast after the user learns it.",
      ],
      features: [
        "Shortcut-based search across search, coding, social, gaming, and entertainment platforms",
        "Direct homepage navigation when only the alias is entered",
        "Auto-suggestions and keyboard navigation",
        "Insert/ESC controls for quick open and close",
        "Option to search in the current tab or a new window",
      ],
      results: [
        "Converts fragmented browser navigation into a single launcher workflow.",
        "Shows a stronger UI layer than most userscripts thanks to the React-based interface.",
        "Makes the automation section feel broader than skip/ad scripts alone.",
      ],
    },
    es: {
      summary:
        "Lanzador universal de búsqueda en el navegador, construido con React y guiado por atajos sobre decenas de plataformas.",
      context:
        "Se creó como script de productividad keyboard-first para usuarios que saltan constantemente entre buscadores, redes sociales, sitios de código y plataformas de entretenimiento.",
      problem:
        "Abrir el sitio correcto y componer la búsqueda correcta una y otra vez consume tiempo, sobre todo cuando el usuario ya sabe a qué plataforma quiere ir.",
      solution:
        "Fast Search abre un launcher con una sola tecla, permite buscar en decenas de plataformas mediante alias cortos, soporta sugerencias automáticas y puede ir directo al home del sitio si sólo se escribe el atajo.",
      decisions: [
        "Se usó una interfaz en React para que el script se sintiera como un pequeño producto y no como un prompt improvisado.",
        "Se optimizó el flujo por teclado con Insert para abrir y ESC para cerrar.",
        "Los atajos se volvieron la interacción principal para que la herramienta gane velocidad con el uso repetido.",
      ],
      features: [
        "Búsqueda por atajos en plataformas de search, coding, social, gaming y entertainment",
        "Navegación directa al home del sitio cuando sólo se ingresa el alias",
        "Sugerencias automáticas y navegación por teclado",
        "Controles Insert/ESC para abrir y cerrar rápido",
        "Opción de buscar en la pestaña actual o en una ventana nueva",
      ],
      results: [
        "Convierte una navegación fragmentada del navegador en un solo flujo tipo launcher.",
        "Muestra una capa UI más fuerte que la mayoría de userscripts gracias a la interfaz en React.",
        "Hace que la sección de automatización se vea más amplia que simples scripts de skip o ads.",
      ],
    },
  },
  "lookmovie-ad-blocker": {
    en: {
      summary:
        "LookMovie userscript that removes ad interruptions, handles specific dialogs, and manages reCAPTCHA-related elements more safely.",
      context:
        "Built around a specific site where player interruptions are frequent and the DOM changes often enough that blunt element removal can break the viewing flow.",
      problem:
        "Ads, banners, and recurring prompts interrupt playback, but aggressive cleanup can also interfere with threat-protection or CAPTCHA-related elements if not handled carefully.",
      solution:
        "The script continuously monitors the page, closes player ads, removes banners, handles the 'I Prefer Ads' dialog, and excludes threat-protection elements while still reducing interruptions.",
      decisions: [
        "Used debounced monitoring so the script stays responsive without hammering the page.",
        "Explicitly protected threat-protection elements instead of removing everything that looked similar.",
        "Added retry logic because ad-related DOM changes do not always appear in a stable order.",
      ],
      features: [
        "Automatic player-ad closure",
        "Banner-ad removal",
        "Handling for ad-preference dialogs",
        "Selective reCAPTCHA and threat-protection management",
        "Continuous monitoring with retry behavior",
      ],
      results: [
        "Improves a brittle viewing flow without relying on a single selector pass.",
        "Shows more careful DOM automation than a naive ad-removal script.",
        "Adds a good example of balancing automation with defensive behavior.",
      ],
    },
    es: {
      summary:
        "Userscript para LookMovie que elimina interrupciones publicitarias, maneja diálogos específicos y trata con más cuidado elementos relacionados con reCAPTCHA.",
      context:
        "Se construyó alrededor de un sitio donde las interrupciones del reproductor son frecuentes y el DOM cambia lo suficiente como para que una limpieza agresiva rompa el flujo.",
      problem:
        "Los anuncios, banners y prompts recurrentes interrumpen la reproducción, pero una limpieza demasiado agresiva también puede afectar elementos de protección o CAPTCHA si no se maneja con cuidado.",
      solution:
        "El script monitoriza la página de forma continua, cierra anuncios del reproductor, elimina banners, maneja el diálogo 'I Prefer Ads' y excluye elementos de protección mientras reduce interrupciones.",
      decisions: [
        "Se usó monitoreo con debounce para mantener respuesta sin castigar la página con chequeos excesivos.",
        "Se protegieron explícitamente elementos de threat protection en lugar de borrar todo lo parecido.",
        "Se agregó lógica de reintentos porque los cambios de DOM ligados a anuncios no aparecen siempre en el mismo orden.",
      ],
      features: [
        "Cierre automático de anuncios del reproductor",
        "Eliminación de banners publicitarios",
        "Manejo de diálogos de preferencia por anuncios",
        "Gestión selectiva de reCAPTCHA y threat protection",
        "Monitoreo continuo con reintentos",
      ],
      results: [
        "Mejora un flujo de reproducción frágil sin depender de una sola pasada por selectores.",
        "Muestra una automatización DOM más cuidadosa que un simple script para quitar ads.",
        "Aporta un buen ejemplo de equilibrio entre automatización y comportamiento defensivo.",
      ],
    },
  },
  "netflix-enhancements": {
    en: {
      summary:
        "Netflix userscript that automates skip actions, manages fullscreen behavior, and removes low-value UI clutter like the games section.",
      context:
        "Designed for long viewing sessions where repetitive recap, intro, and outro interactions make the playback flow feel slower than it should.",
      problem:
        "Netflix still requires repeated manual actions for skips and fullscreen preferences, and some UI sections add noise without helping the viewing experience.",
      solution:
        "The script detects recap, intro, and outro prompts, manages fullscreen transitions, optionally hides the games section, and exposes settings behind a lightweight F2 panel.",
      decisions: [
        "Focused on the high-frequency playback moments that users hit in almost every episode.",
        "Made interface cleanup optional instead of forcing a single opinionated layout.",
        "Used persistent settings so the script behaves consistently across sessions.",
      ],
      features: [
        "Automatic recap, intro, and outro skipping",
        "Auto-fullscreen handling",
        "Optional games-section removal",
        "Persistent settings dialog with F2 access",
      ],
      results: [
        "Cuts repeated playback friction from binge sessions.",
        "Shows repeatable automation on a complex streaming DOM.",
        "Pairs well with the Disney Plus and Prime Video scripts as a small suite.",
      ],
    },
    es: {
      summary:
        "Userscript para Netflix que automatiza saltos, gestiona pantalla completa y elimina ruido visual como la sección de juegos.",
      context:
        "Se diseñó para sesiones largas de reproducción donde las interacciones repetidas de recap, intro y outro hacen que el flujo se sienta más lento de lo necesario.",
      problem:
        "Netflix todavía exige acciones manuales repetidas para saltos y preferencias de pantalla completa, y algunas secciones de la interfaz agregan ruido sin ayudar a la visualización.",
      solution:
        "El script detecta prompts de recap, intro y outro, gestiona transiciones de pantalla completa, puede ocultar la sección de juegos y expone ajustes mediante un panel liviano con F2.",
      decisions: [
        "Se enfocó en los momentos de reproducción más frecuentes que aparecen casi en cada episodio.",
        "La limpieza de interfaz se hizo opcional en lugar de imponer un layout único.",
        "Se usaron ajustes persistentes para mantener un comportamiento consistente entre sesiones.",
      ],
      features: [
        "Salto automático de recap, intro y outro",
        "Manejo automático de pantalla completa",
        "Opción para ocultar la sección de juegos",
        "Panel de ajustes persistentes accesible con F2",
      ],
      results: [
        "Reduce fricción repetitiva durante sesiones de binge watching.",
        "Muestra automatización estable sobre un DOM de streaming complejo.",
        "Se complementa bien con los scripts de Disney Plus y Prime Video como una pequeña suite.",
      ],
    },
  },
  "auto-click-not-a-robot": {
    en: {
      summary:
        "Automation script that detects supported captcha checkboxes and clicks them automatically across multiple providers.",
      context:
        "Built as an experiment in browser automation around a very specific repetitive interaction: the initial checkbox step of common captcha systems.",
      problem:
        "Sites that reuse the same checkbox verification patterns can force repetitive manual clicks even before the real challenge begins.",
      solution:
        "The script watches the DOM for supported captcha widgets, detects reCaptcha V2, reCaptcha Enterprise, and hCaptcha checkboxes, and triggers the initial click automatically when the element is available.",
      decisions: [
        "Used MutationObserver plus periodic checks to catch both immediate and delayed widget rendering.",
        "Scoped support to checkbox-based systems instead of claiming to solve the whole captcha flow.",
        "Kept the logic resource-aware so it can run continuously without a heavy footprint.",
      ],
      features: [
        "Automatic checkbox clicking for supported captcha widgets",
        "Support for reCaptcha V2, reCaptcha Enterprise, and hCaptcha",
        "MutationObserver-based DOM detection",
        "Retry and compatibility logic across sites",
      ],
      results: [
        "Shows precise browser automation targeted at one repeatable interaction.",
        "Demonstrates restraint by automating only the part the script can reliably handle.",
        "Adds another example of DOM observation and event timing work.",
      ],
    },
    es: {
      summary:
        "Script de automatización que detecta checkboxes de captcha soportados y los pulsa automáticamente en varios proveedores.",
      context:
        "Se construyó como experimento de automatización del navegador alrededor de una interacción muy específica y repetitiva: el primer checkbox de sistemas captcha comunes.",
      problem:
        "Muchos sitios reutilizan el mismo patrón de verificación por checkbox, obligando a un clic manual repetido incluso antes del reto real.",
      solution:
        "El script observa el DOM en busca de widgets compatibles, detecta checkboxes de reCaptcha V2, reCaptcha Enterprise y hCaptcha, y ejecuta el clic inicial de forma automática cuando el elemento aparece.",
      decisions: [
        "Se usó MutationObserver junto con chequeos periódicos para cubrir widgets que cargan inmediato o con retraso.",
        "El soporte se limitó a sistemas basados en checkbox en lugar de afirmar que resuelve todo el captcha.",
        "La lógica se mantuvo ligera para poder ejecutarse de forma continua sin mucho costo.",
      ],
      features: [
        "Clic automático sobre checkboxes de captcha soportados",
        "Soporte para reCaptcha V2, reCaptcha Enterprise y hCaptcha",
        "Detección de DOM basada en MutationObserver",
        "Lógica de reintentos y compatibilidad entre sitios",
      ],
      results: [
        "Muestra automatización precisa del navegador sobre una interacción bien delimitada.",
        "Demuestra criterio al automatizar sólo la parte que el script puede manejar de forma fiable.",
        "Aporta otro ejemplo de observación de DOM y timing de eventos.",
      ],
    },
  },
  "perplexity-ai-enhancements": {
    en: {
      summary:
        "Small Perplexity userscript suite focused on faster thread management and wider chat layouts for long reading sessions.",
      context:
        "This portfolio entry groups two focused Perplexity scripts: one for keyboard-driven thread deletion and another for expanding the chat width for easier reading.",
      problem:
        "Perplexity's default UI makes some repetitive actions slower than they need to be, especially deleting threads and reading long responses in a narrow content column.",
      solution:
        "One script adds a keyboard-only deletion flow with confirmation and cancel states, while the other injects lightweight CSS to remove width restrictions and make long answers easier to read.",
      decisions: [
        "Kept each script tightly scoped instead of combining unrelated behavior into one large userscript.",
        "Added a safe confirmation step for deletion so the keyboard shortcut does not become destructive by default.",
        "Used CSS injection for the layout script to keep the performance impact minimal.",
      ],
      features: [
        "Delete-key thread removal flow with Enter to confirm and ESC to cancel",
        "Selector updates for reliability with Perplexity UI changes",
        "Full-width chat layout for long responses",
        "Responsive spacing adjustments with lightweight CSS injection",
      ],
      results: [
        "Improves both speed and readability in a tool built around long-form AI conversations.",
        "Shows good judgment in shipping two narrowly useful scripts instead of one noisy bundle.",
        "Adds another example of keyboard workflow design in browser automation.",
      ],
    },
    es: {
      summary:
        "Pequeña suite de userscripts para Perplexity enfocada en gestión más rápida de hilos y un layout de chat más ancho para lecturas largas.",
      context:
        "Esta entrada del portafolio agrupa dos scripts enfocados para Perplexity: uno para borrar hilos por teclado y otro para expandir el ancho del chat.",
      problem:
        "La interfaz por defecto de Perplexity vuelve más lentas algunas acciones repetitivas de lo necesario, especialmente borrar hilos y leer respuestas largas en una columna estrecha.",
      solution:
        "Un script añade un flujo de borrado sólo por teclado con confirmación y cancelación, mientras el otro inyecta CSS liviano para quitar límites de ancho y facilitar la lectura de respuestas largas.",
      decisions: [
        "Cada script se mantuvo con alcance acotado en lugar de mezclar comportamientos no relacionados en un solo userscript.",
        "Se añadió un paso de confirmación seguro para que el atajo de borrado no sea destructivo por defecto.",
        "Se usó inyección CSS en el script de layout para mantener el impacto de performance al mínimo.",
      ],
      features: [
        "Flujo de borrado de hilos con Delete para iniciar, Enter para confirmar y ESC para cancelar",
        "Actualizaciones de selectores para mayor compatibilidad con cambios de UI",
        "Layout de chat a ancho completo para respuestas largas",
        "Ajustes responsivos de espaciado mediante CSS injection",
      ],
      results: [
        "Mejora velocidad y legibilidad en una herramienta centrada en conversaciones largas con IA.",
        "Muestra buen criterio al entregar dos scripts útiles y acotados en vez de un bundle ruidoso.",
        "Aporta otro ejemplo de diseño de flujos por teclado dentro de automatización de navegador.",
      ],
    },
  },
  "prime-video-enhancements": {
    en: {
      summary:
        "Prime Video automation script that targets recap, intro, ad, and fullscreen friction in serialized playback.",
      context:
        "Built with the same quality-of-life mindset as the Netflix and Disney Plus scripts, but adapted to Prime Video's own playback prompts and interruptions.",
      problem:
        "Prime Video still requires repeated interaction around skips, fullscreen, and ads, which slows down a viewing session that should be mostly passive.",
      solution:
        "The script automates recap and intro skipping, handles ad-related interruptions where possible, manages fullscreen behavior, and exposes persistent settings through an F2-triggered interface.",
      decisions: [
        "Modeled the UI after a lightweight settings experience so users can toggle behavior without editing code.",
        "Focused on repeatable interruptions instead of trying to redesign the entire site.",
        "Persisted settings to keep behavior stable across episodes and sessions.",
      ],
      features: [
        "Automatic skipping for recaps and intros",
        "Ad-related playback handling",
        "Fullscreen behavior automation",
        "Persistent settings dialog with F2 access",
      ],
      results: [
        "Brings Prime Video closer to a hands-off playback workflow.",
        "Rounds out the streaming-automation subset in the portfolio.",
        "Shows reusable patterns across similar platforms without being a copy-paste clone.",
      ],
    },
    es: {
      summary:
        "Script de automatización para Prime Video que ataca la fricción de recap, intro, anuncios y pantalla completa durante la reproducción.",
      context:
        "Se construyó con la misma lógica de calidad de vida que los scripts de Netflix y Disney Plus, pero adaptado a los prompts e interrupciones propias de Prime Video.",
      problem:
        "Prime Video todavía exige interacción repetida alrededor de skips, pantalla completa y anuncios, ralentizando una sesión que debería ser casi pasiva.",
      solution:
        "El script automatiza el salto de recaps e intros, maneja interrupciones relacionadas con anuncios cuando es posible, gestiona pantalla completa y expone ajustes persistentes mediante una interfaz activada con F2.",
      decisions: [
        "La interfaz se modeló como una experiencia de ajustes liviana para que el usuario pueda activar o desactivar comportamientos sin tocar código.",
        "El foco estuvo en interrupciones repetibles en vez de intentar rediseñar todo el sitio.",
        "Los ajustes se persistieron para mantener un comportamiento estable entre episodios y sesiones.",
      ],
      features: [
        "Salto automático de recaps e intros",
        "Manejo de interrupciones relacionadas con anuncios",
        "Automatización de pantalla completa",
        "Panel de ajustes persistentes accesible con F2",
      ],
      results: [
        "Acerca Prime Video a un flujo de reproducción más hands-off.",
        "Completa el subconjunto de automatización para streaming dentro del portafolio.",
        "Muestra patrones reutilizables entre plataformas similares sin quedarse en un simple copy-paste.",
      ],
    },
  },
  "serieslan-enhancements": {
    en: {
      summary:
        "Serieslan enhancement script that automates provider choice and improves readability with persistent visual tweaks.",
      context:
        "Built for a streaming site where the repetitive tasks are picking the same provider and adjusting the page to be visually more comfortable.",
      problem:
        "Repeating the same provider-selection flow and working around a less comfortable default UI creates friction for regular use.",
      solution:
        "The script chooses the preferred provider automatically, remembers that preference, applies a darker background for visual comfort, and exposes its controls through a small settings panel.",
      decisions: [
        "Combined provider automation with visual comfort instead of treating them as separate scripts.",
        "Applied settings immediately on load so the site feels improved before manual interaction.",
        "Used persistent preferences so the script gets more valuable over time.",
      ],
      features: [
        "Automatic preferred-provider selection",
        "Saved provider preferences",
        "Darker background and improved readability styling",
        "Real-time configurable settings",
        "F2 shortcut for quick access",
      ],
      results: [
        "Improves both speed and comfort on a frequently reused site.",
        "Shows that browser automation can target UX polish, not just button clicks.",
        "Adds another compact but well-targeted streaming enhancement.",
      ],
    },
    es: {
      summary:
        "Script de mejora para Serieslan que automatiza la elección de proveedor y mejora la lectura con ajustes visuales persistentes.",
      context:
        "Se construyó para un sitio de streaming donde las tareas repetitivas son escoger siempre el mismo proveedor y acomodar una interfaz menos cómoda visualmente.",
      problem:
        "Repetir el mismo flujo de selección de proveedor y lidiar con una UI por defecto menos cómoda genera fricción en el uso frecuente.",
      solution:
        "El script elige automáticamente el proveedor preferido, guarda esa preferencia, aplica un fondo más oscuro para comodidad visual y expone controles mediante un pequeño panel de ajustes.",
      decisions: [
        "Se combinaron automatización del proveedor y confort visual en lugar de separarlos en scripts distintos.",
        "Los ajustes se aplican desde el load inicial para que el sitio se sienta mejorado antes de interactuar manualmente.",
        "Las preferencias persistentes hacen que el valor del script aumente con el tiempo.",
      ],
      features: [
        "Selección automática del proveedor preferido",
        "Preferencias guardadas del proveedor",
        "Fondo más oscuro y estilos para mejorar legibilidad",
        "Ajustes configurables en tiempo real",
        "Atajo F2 para acceso rápido",
      ],
      results: [
        "Mejora tanto velocidad como comodidad en un sitio de uso repetido.",
        "Muestra que la automatización del navegador también puede apuntar a pulido UX y no solo a clics.",
        "Aporta otra mejora compacta pero bien enfocada sobre streaming.",
      ],
    },
  },
  "twitch-enhancements": {
    en: {
      summary:
        "Automation suite for Twitch and Amazon Gaming that claims rewards, improves viewing defaults, and speeds up redemption workflows across related platforms.",
      context:
        "Built around a cluster of repetitive actions spread across Twitch, Amazon Gaming, GOG, and Legacy Games rather than a single page interaction.",
      problem:
        "Reward claiming, theater mode, drop checks, and redemption flows are repetitive and distributed across multiple interfaces, making the whole process slower than necessary.",
      solution:
        "The script automates channel points, Prime rewards, Twitch drops, theater mode, and even adds platform-specific redemption helpers for GOG and Legacy Games, all configurable through a persistent settings dialog.",
      decisions: [
        "Treated the project as a workflow suite across related platforms instead of limiting it to one Twitch page.",
        "Added batch actions like Claim All and Remove All because reward pages often contain repeated bulk interactions.",
        "Built visible logging and settings into the script so users can understand what is happening without digging into the code.",
      ],
      features: [
        "Automatic Twitch channel-points claiming",
        "Prime rewards and Amazon Gaming bulk actions",
        "Automatic Twitch drops claiming on interval",
        "Theater mode and interface cleanup",
        "GOG and Legacy Games redemption helpers",
        "Persistent settings dialog with F2 shortcut",
      ],
      results: [
        "Turns a scattered rewards workflow into a much more automated routine.",
        "Shows one of the most complete DOM-automation projects in the portfolio.",
        "Demonstrates handling of multi-platform UI flows, not just one-page scripting.",
      ],
    },
    es: {
      summary:
        "Suite de automatización para Twitch y Amazon Gaming que reclama recompensas, mejora defaults de visualización y acelera flujos de redención en plataformas relacionadas.",
      context:
        "Se construyó alrededor de un conjunto de acciones repetitivas distribuidas entre Twitch, Amazon Gaming, GOG y Legacy Games, no alrededor de una sola página.",
      problem:
        "Reclamar recompensas, activar theater mode, revisar drops y completar redenciones es repetitivo y está repartido entre varias interfaces, haciendo todo el proceso más lento de lo necesario.",
      solution:
        "El script automatiza channel points, recompensas Prime, Twitch drops, theater mode e incluso añade ayudas de redención para GOG y Legacy Games, todo configurable desde un panel de ajustes persistente.",
      decisions: [
        "El proyecto se trató como una suite de flujo entre plataformas relacionadas en lugar de limitarse a una sola página de Twitch.",
        "Se añadieron acciones por lote como Claim All y Remove All porque las páginas de recompensas suelen concentrar interacciones repetidas.",
        "Se incluyeron logs visibles y ajustes para que el usuario entienda qué ocurre sin inspeccionar el código.",
      ],
      features: [
        "Reclamo automático de channel points en Twitch",
        "Recompensas Prime y acciones por lote en Amazon Gaming",
        "Reclamo automático de Twitch drops por intervalo",
        "Theater mode y limpieza de interfaz",
        "Ayudas de redención para GOG y Legacy Games",
        "Panel de ajustes persistentes con atajo F2",
      ],
      results: [
        "Convierte un flujo disperso de recompensas en una rutina mucho más automatizada.",
        "Muestra uno de los proyectos de automatización DOM más completos del portafolio.",
        "Demuestra manejo de flujos UI multi-plataforma, no solo scripting de una página aislada.",
      ],
    },
  },
  "html5-video-player-enhancements": {
    en: {
      summary:
        "HTML5 video userscript that adds precise playback-speed controls, presets, and a responsive on-screen indicator.",
      context:
        "Built as a generic enhancement for HTML5 video players rather than a script tied to one streaming site, focusing on a missing but highly repeated interaction: speed control.",
      problem:
        "Default HTML5 players often expose limited speed options and inconsistent shortcuts, which is frustrating for users who frequently adjust playback pace.",
      solution:
        "The script adds incremental speed changes, preset shortcuts, previous-speed toggling, a fade-out speed overlay, and dynamic video detection so controls remain available as players change on the page.",
      decisions: [
        "Kept the feature set generic so the script works across multiple sites and browsers.",
        "Used an overlay indicator to make speed changes visible without opening controls.",
        "Added MutationObserver-based video detection to handle dynamic players.",
      ],
      features: [
        "Incremental playback-speed controls",
        "Quick preset speeds and previous-speed toggling",
        "On-screen speed indicator with fade effect",
        "Fullscreen-aware positioning",
        "Dynamic video detection for changing pages",
      ],
      results: [
        "Extends a common browser primitive in a way users notice immediately.",
        "Shows a reusable enhancement pattern outside platform-specific scripting.",
        "Adds a more general-purpose tool to the automation catalog.",
      ],
    },
    es: {
      summary:
        "Userscript para reproductores HTML5 que añade control preciso de velocidad, presets y un indicador visual adaptable.",
      context:
        "Se construyó como mejora genérica para reproductores HTML5 y no para una sola plataforma, enfocándose en una interacción muy repetida que suele faltar: el control fino de velocidad.",
      problem:
        "Los reproductores HTML5 por defecto suelen ofrecer opciones limitadas de velocidad y atajos inconsistentes, algo frustrante para usuarios que ajustan el ritmo con frecuencia.",
      solution:
        "El script añade cambios incrementales de velocidad, atajos preset, conmutación a velocidad previa, un overlay que muestra la velocidad y detección dinámica de videos para mantener los controles disponibles aunque el player cambie.",
      decisions: [
        "Se mantuvo un alcance genérico para que el script funcione en varios sitios y navegadores.",
        "Se usó un indicador overlay para hacer visibles los cambios de velocidad sin abrir controles extra.",
        "Se añadió detección de video con MutationObserver para cubrir reproductores dinámicos.",
      ],
      features: [
        "Controles incrementales de velocidad de reproducción",
        "Velocidades preset y conmutación a la velocidad previa",
        "Indicador visual de velocidad con efecto fade",
        "Posicionamiento compatible con fullscreen",
        "Detección dinámica de video en páginas cambiantes",
      ],
      results: [
        "Extiende una primitiva común del navegador de una forma que el usuario nota al instante.",
        "Muestra un patrón de mejora reutilizable fuera del scripting específico por plataforma.",
        "Añade una herramienta más general al catálogo de automatización.",
      ],
    },
  },
  "youtube-enhancements": {
    en: {
      summary:
        "Comprehensive YouTube userscript suite covering auto-like, channel navigation, adblock-protection bypass, smart scrolling, UI cleanup, and detailed settings.",
      context:
        "This is one of the broader browser-automation projects in the portfolio, built around many small frictions that appear while using YouTube regularly.",
      problem:
        "Frequent YouTube use creates a long tail of repetitive actions: liking subscribed channels, navigating to videos tabs, bypassing adblock warnings, scrolling, and hiding unwanted homepage sections.",
      solution:
        "The script bundles multiple focused features behind a settings panel: subscription-aware auto-like, channel redirect shortcuts, adblock-ban bypass, keyboard-controlled scrolling, game-section removal, configurable check frequency, and advanced logging.",
      decisions: [
        "Refactored the codebase into specialized classes so the growing feature set stayed maintainable.",
        "Made every major behavior configurable because not all automation belongs on by default.",
        "Updated the implementation for Trusted Types compliance and dynamic navigation events to stay reliable on modern YouTube.",
      ],
      features: [
        "Auto-like with watch-threshold, live-stream, and subscription-aware options",
        "Automatic redirect from channel featured pages to videos pages",
        "AdBlock-ban bypass with feature-preserving playback",
        "Keyboard-controlled smart scrolling",
        "Optional hiding of game-related homepage sections",
        "Advanced logging and configurable check frequency",
        "F2 settings panel",
      ],
      results: [
        "Represents one of the most feature-complete userscripts in the portfolio.",
        "Shows architecture, maintainability, and compatibility work beyond small DOM tweaks.",
        "Adds a stronger product feel to the automation catalog through settings, logging, and modular design.",
      ],
    },
    es: {
      summary:
        "Suite amplia de userscripts para YouTube que cubre auto-like, navegación de canales, bypass de bloqueo por AdBlock, smart scrolling, limpieza de UI y ajustes detallados.",
      context:
        "Es uno de los proyectos de automatización de navegador más amplios del portafolio, construido alrededor de muchas pequeñas fricciones que aparecen al usar YouTube con frecuencia.",
      problem:
        "El uso frecuente de YouTube acumula una larga lista de acciones repetitivas: dar like a canales suscritos, ir a la pestaña de videos, evitar avisos por AdBlock, hacer scroll y ocultar secciones no deseadas del home.",
      solution:
        "El script agrupa varias funciones detrás de un panel de ajustes: auto-like con lógica de suscripción, redirección de canales, bypass del ban por AdBlock, scrolling por teclado, ocultación de secciones de juegos, frecuencia configurable y logging avanzado.",
      decisions: [
        "Se refactorizó el código en clases especializadas para que el conjunto creciente de funciones siguiera siendo mantenible.",
        "Cada comportamiento importante se volvió configurable porque no toda automatización debe estar activa por defecto.",
        "La implementación se actualizó para cumplir con Trusted Types y con eventos de navegación dinámica de YouTube.",
      ],
      features: [
        "Auto-like con umbral de visualización, soporte live y lógica basada en suscripción",
        "Redirección automática de páginas destacadas del canal hacia la pestaña de videos",
        "Bypass del bloqueo por AdBlock sin perder funciones del reproductor",
        "Scrolling inteligente controlado por teclado",
        "Opción para ocultar secciones de juegos del home",
        "Logging avanzado y frecuencia de chequeo configurable",
        "Panel de ajustes con F2",
      ],
      results: [
        "Representa uno de los userscripts más completos del portafolio.",
        "Muestra arquitectura, mantenibilidad y trabajo de compatibilidad más allá de simples tweaks de DOM.",
        "Le da más sensación de producto a la sección de automatización mediante ajustes, logging y diseño modular.",
      ],
    },
  },
  "youtube-adblock-ban-bypass": {
    en: {
      summary:
        "Focused YouTube userscript that detects AdBlock warning states and restores playback with minimal visual disruption.",
      context:
        "Built as a smaller, more focused companion to the broader YouTube script, aimed specifically at preserving playback when warning screens appear.",
      problem:
        "YouTube's AdBlock warning flow can interrupt playback and degrade the viewing experience, even when the user only wants to keep normal player behavior.",
      solution:
        "The script detects warning states, replaces the broken playback surface when needed, cleans up duplicates, and preserves native features like full-quality playback and Picture-in-Picture support.",
      decisions: [
        "Scoped the project tightly to the warning/bypass problem instead of bundling unrelated features.",
        "Preserved native player behavior as much as possible so the fix feels invisible.",
        "Added cleanup for duplicate elements to avoid a broken-looking page after replacement.",
      ],
      features: [
        "Instant AdBlock warning detection",
        "Seamless playback-surface replacement",
        "Duplicate-element cleanup",
        "Support for regular pages, embedded videos, and video links",
        "Preserved full-quality playback and PiP support",
      ],
      results: [
        "Delivers a very focused fix with a clear before/after value proposition.",
        "Shows good judgment about scope in browser scripting.",
        "Complements the broader YouTube enhancement project without duplicating it.",
      ],
    },
    es: {
      summary:
        "Userscript enfocado para YouTube que detecta estados de advertencia por AdBlock y restaura la reproducción con mínima disrupción visual.",
      context:
        "Se construyó como complemento más pequeño y enfocado del script más amplio de YouTube, apuntando específicamente a preservar la reproducción cuando aparecen pantallas de advertencia.",
      problem:
        "El flujo de advertencia por AdBlock en YouTube puede interrumpir la reproducción y degradar la experiencia, incluso cuando el usuario solo quiere conservar el comportamiento normal del player.",
      solution:
        "El script detecta estados de advertencia, reemplaza la superficie rota de reproducción cuando hace falta, limpia elementos duplicados y preserva funciones nativas como reproducción en alta calidad y Picture-in-Picture.",
      decisions: [
        "El alcance se mantuvo muy acotado al problema del warning/bypass en lugar de mezclar funciones no relacionadas.",
        "Se preservó al máximo el comportamiento nativo del reproductor para que la corrección se sienta invisible.",
        "Se añadió limpieza de elementos duplicados para evitar una página visualmente rota tras el reemplazo.",
      ],
      features: [
        "Detección inmediata de advertencias por AdBlock",
        "Reemplazo fluido de la superficie de reproducción",
        "Limpieza de elementos duplicados",
        "Soporte para páginas normales, videos embebidos y enlaces directos",
        "Preservación de reproducción en alta calidad y PiP",
      ],
      results: [
        "Entrega una corrección muy enfocada con un valor antes/después fácil de entender.",
        "Muestra buen criterio sobre alcance en scripting de navegador.",
        "Complementa el proyecto más amplio de mejoras para YouTube sin duplicarlo.",
      ],
    },
  },
}
