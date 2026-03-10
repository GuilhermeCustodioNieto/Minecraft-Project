# 🎮 Minecraft Project (Three.js Clone)

<img src="ds craft.png" alt="DS Craft" width="400">

Um clone funcional do **Minecraft** construído com **Three.js** e **JavaScript**, executado inteiramente no navegador. Este projeto implementa um mundo procedural em tempo real com geração de terreno, biomas, recursos, árvores e física completa do jogador.

## 📋 Sumário

- [Características](#características)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Requisitos do Sistema](#requisitos-do-sistema)
- [Instalação](#instalação)
- [Como Rodar](#como-rodar)
- [Controles e Uso](#controles-e-uso)
- [Funcionamento do Sistema](#funcionamento-do-sistema)
- [Recursos Disponíveis](#recursos-disponíveis)
- [Parâmetros de Configuração](#parâmetros-de-configuração)
- [Inspiração e Referências](#inspiração-e-referências)

---

## ✨ Características

### Geração de Mundo
- **Procedural World Generation**: Mundo infinito gerado proceduralmente usando Perlin Noise
- **Sistema de Chunks**: Mundo dividido em chunks para otimizar renderização
- **Distância de Renderização Configurável**: Controle quantos chunks ao redor do jogador devem ser renderizados
- **Carregamento Assíncrono**: Chunks carregados em background sem congelar a aplicação

### Biomas e Terreno
- **4 Biomas Diferentes**: Tundra, Temperado, Jungle e Deserto
- **Variação Procedural**: Diferentes características em cada bioma
- **Árvores Procedurais**: Geração automática de árvores com troncos e copas variadas
- **Nuvens Dinâmicas**: Sistema de nuvens configurável
- **Água e Terreno**: Diferentes alturas para água, grama, areia e pedra

### Mecânicas de Jogo
- **Destruição/Colocação de Blocos**: Interaja com o mundo removendo e colocando blocos
- **Sistema de Blocos Múltiplos**: Diferentes tipos de materiais (grama, areia, água, madeira, folha, etc.)
- **Ressursos**: Carvão e Ferro gerados proceduralmente
- **Física Realista**: Colisão de personagem, gravidade, pulo e velocidade
- **Seleção Visual**: Destaque do bloco sob o cursor

### Gráficos
- **Renderização 3D Completa**: Usando WebGL through Three.js
- **Iluminação Dinâmica**: Sol posicionado adequadamente com sombras
- **Névoa (Fog)**: Efeito de profundidade configurável
- **Anti-Aliasing**: Renderização suave
- **Texturas**: Texturas em alta qualidade para blocos

### Interface
- **GUI de Controles**: Painel lil-gui para ajustar parâmetros em tempo real
- **Display de Performance**: Stats (FPS, memória)
- **Controle de Câmera**: Pointer Lock Controls para navegação imersiva

---

## 📁 Estrutura de Pastas

```
Minecraft-Project/
├── minecraft/                      # Pasta principal do projeto
│   ├── public/                    # Arquivos estáticos
│   │   ├── fonts/               # Fontes customizadas
│   │   ├── models/              # Modelos 3D (pickaxe, etc)
│   │   └── textures/            # Texturas dos blocos
│   │
│   ├── scripts/                   # Scripts do projeto (versão antiga)
│   │   ├── main.js              # Entrada principal - setup do Three.js, renderer, cena
│   │   ├── world.js             # Classe World - geração procedural do mundo
│   │   ├── worldChunk.js        # Classe WorldChunk - chunk individual
│   │   ├── player.js            # Classe Player - controle do jogador e câmera
│   │   ├── physics.js           # Classe Physics - sistema de colisão
│   │   ├── blocks.js            # Definição de tipos de blocos
│   │   ├── modelLoader.js       # Carregador de modelos 3D
│   │   ├── ui.js                # Setup da interface GUI
│   │   ├── dataStore.js         # Persistência de dados do mundo
│   │   └── rng.js               # Gerador de números aleatórios seeded
│   │
│   ├── src/                       # Scripts do projeto (versão nova)
│   │   ├── main.js
│   │   ├── blocks.js
│   │   ├── player.js
│   │   ├── world.js
│   │   ├── ui.js
│   │   └── rng.js
│   │
│   ├── index.html               # Arquivo HTML principal
│   ├── style.css                # Estilos CSS
│   ├── vite.config.js           # Configuração do Vite
│   ├── package.json             # Dependências do projeto
│   └── README.md                # README específico do projeto
│
├── LICENSE                        # Licença do projeto
└── README.md                      # Este arquivo
```

### Descrição dos Arquivos Principais

#### `scripts/main.js`
- Inicializa o renderer Three.js
- Configura a cena, câmera e iluminação
- Cria instâncias do World e Player
- Loop de renderização (requestAnimationFrame)
- Setup da UI com controles

#### `scripts/world.js`
- Classe World (estende THREE.Group)
- Geração procedural de terreno usando Perlin Noise
- Gerenciamento de chunks (criação/destruição)
- Parâmetros de terrain, biomes, árvores e recursos
- Método `generate()` para criar o mundo

#### `scripts/worldChunk.js`
- Classe WorldChunk (estende THREE.Mesh)
- Representa um chunk individual do mundo
- Responsável por criar geometria de blocos
- Otimizações de renderização (merging de geometrias)

#### `scripts/player.js`
- Classe Player
- Controle de movimento (WASD)
- Sistema de câmera (Pointer Lock Controls)
- Física do personagem (gravidade, colisão, pulo)
- Seleção e destruição/colocação de blocos
- Tool (pickaxe) com animação

#### `scripts/physics.js`
- Classe Physics
- Detecção de colisão com o mundo
- Cálculo de velocidade e gravidade
- Simulação com taxa configurável

#### `scripts/blocks.js`
- Definição de todos os tipos de blocos
- Propriedades de cada bloco (cor, transparente, etc)
- Definição de recursos (carvão, ferro)

#### `scripts/ui.js`
- Setup da GUI com lil-gui
- Controles para ajustar parâmetros do mundo
- Controles do jogador e física
- Controles de biomas e recursos

#### `scripts/rng.js`
- Gerador de números aleatórios com seed
- Garante consistência no mundo procedural

---

## 🛠️ Tecnologias Utilizadas

### **JavaScript (ES6+)**
Linguagem principal para toda a lógica do jogo.

### **Three.js (v0.156.1)**
Biblioteca 3D para JavaScript que fornece:
- Renderização de gráficos 3D via WebGL
- Primitivos geométricos (Box, Mesh)
- Sistema de iluminação e câmeras
- Controle de câmera com OrbitControls e PointerLockControls
- Helpers para debug (CameraHelper, Wireframe)

### **Vite (v4.4.5)**
Ferramenta de build moderna que oferece:
- Dev server rápido com Hot Module Replacement (HMR)
- Build otimizado para produção
- Bundling eficiente de módulos ES6

### **HTML5 & CSS3**
Interface web padrão com Canvas WebGL.

---

## 📦 Requisitos do Sistema

- **Node.js**: v18+ (recomendado v20+)
- **npm**: v9+ ou yarn/pnpm
- **Navegador**: Qualquer navegador moderno com suporte a WebGL
  - Chrome 60+
  - Firefox 55+
  - Safari 15+
  - Edge 79+

---

## 🚀 Instalação

### 1. Clonar o Repositório
```bash
git clone https://github.com/GuilhermeCustodioNieto/Minecraft-Project.git
cd Minecraft-Project/minecraft
```

### 2. Instalar Dependências
```bash
npm install
```

Isso instalará:
- **three** (v0.156.1) - Biblioteca 3D
- **vite** (v4.4.5) - Ferramenta de build

### 3. Verificar Instalação
```bash
npm --version
node --version
```

---

## ▶️ Como Rodar

### Desenvolvimento (com Hot Reload)
```bash
npm run dev
```

O projeto abrirá em `http://127.0.0.1:5173/` com recarga automática ao salvar arquivos.

### Build para Produção
```bash
npm build
```

Gera arquivos otimizados na pasta `dist/`.

### Preview da Build
```bash
npm run preview
```

Testa a build de produção localmente.

---

## 🎮 Controles e Uso

### Movimentação
| Tecla | Ação |
|-------|------|
| **W** | Andar para frente |
| **A** | Andar para esquerda |
| **S** | Andar para trás |
| **D** | Andar para direita |
| **Espaço** | Pular |
| **Shift** | Sprint (aumenta velocidade) |

### Interação
| Ação | Comando |
|------|---------|
| **Clique Esquerdo** | Quebrar bloco |
| **Clique Direito** | Colocar bloco |
| **Mouse** | Olhar ao redor (após clicar na tela) |
| **Escape** | Liberar cursor |

### Interface
| Tecla | Ação |
|-------|------|
| **U** | Mostrar/Ocultar painel de controles |

### Painel de Controles (GUI)
Após iniciar, pressione **U** para mostrar o painel de controles onde você pode:
- Ajustar velocidade máxima e velocidade de pulo
- Modificar parâmetros do terreno (escala, magnitude, altura)
- Controlar biomas e suas transições
- Ajustar spawn de recursos (carvão, ferro)
- Configurar árvores (altura, tamanho copas)
- Modificar nuvens
- Alternar visualização de colisões (debug)

---

## ⚙️ Funcionamento do Sistema

### 1. Inicialização
1. **Renderer**: Cria um WebGL renderer que renderiza a cena
2. **Cena 3D**: Setup de iluminação (sol DirectionalLight) e névoa
3. **Mundo**: Gera chunks ao redor da posição inicial do jogador
4. **Jogador**: Posiciona câmera e cria sistema de entrada do usuário
5. **Física**: Inicia sistema de colisão

### 2. Loop Principal
```
requestAnimationFrame(loop):
├── Atualizar input do jogador
├── Atualizar física (colisão, gravidade)
├── Atualizar chunks (carregar/descarregar baseado em distância)
├── Atualizar câmera
├── Renderizar cena
└── Atualizar stats (FPS)
```

### 3. Geração de Mundo

#### Algoritmo: Perlin Noise
- Usa função de ruído para gerar altura de terreno
- Seed configurável para reproduzibilidade
- 3 camadas de ruído para variação natural

#### Processo de Geração
1. **Terreno**: Gera colunas de blocos baseado em altura de Perlin Noise
2. **Bioma**: Determina tipo de bloco (grama, areia, etc) baseado em bioma
3. **Recursos**: Distribui carvão e ferro proceduralmente
4. **Árvores**: Coloca árvores em posições aleatórias (com densidade controlada)
5. **Chunks**: Agrupa blocos em chunks de 32x32
6. **Renderização**: Mescla geometrias do chunk para optimização

#### Parâmetros Configuráveis
- **Escala Terreno**: Afeta "zoom" do ruído (maiores = mundo mais suave)
- **Magnitude**: Altura máxima do terreno
- **Offset**: Altura mínima (para criar variação)
- **Water Offset**: Altura do nível da água

### 4. Sistema de Física

#### Detecção de Colisão
- Raycasting em 6 direções (cima, baixo, frente, trás, esquerda, direita)
- Cilindro de colisão ao redor do jogador (radius=0.5, height=1.75)
- Detecção contra blocos sólidos

#### Movimento
- Velocidade máxima configurável (padrão: 5 m/s)
- Sprint aumenta velocidade
- Gravidade constante
- Pulo com altura configurável

### 5. Seleção de Blocos
- **Raycasting**: Lança raio da câmera até 3 unidades
- **Destaque Visual**: Messh amarelo ao redor do bloco
- **Quebra**: Clique esquerdo remove o bloco
- **Colocação**: Clique direito coloca novo bloco do tipo selecionado

### 6. Renderização Otimizada
- **Frustum Culling**: Só renderiza chunks visíveis
- **Geometry Merging**: Combina múltiplas geometrias de blocos em uma
- **Layer System**: Água num layer diferente
- **Soft Shadows**: Sombras suaves para melhor qualidade

---

## 🌍 Recursos Disponíveis

### Tipos de Blocos

| Bloco | Descrição | Propriedades |
|-------|-----------|-------------|
| **Grama** | Bloco principal do terreno | Sólido, texturado |
| **Areia** | Encontrado em desertos | Sólido, texturado |
| **Água** | Nível de mar | Semi-transparente, layer especial |
| **Pedra** | Profundo no terreno | Sólido, texturado |
| **Madeira** | Troncos de árvores | Sólido, texturado |
| **Folha** | Copas de árvores | Semi-transparente |
| **Carvão** | Recurso | Sólido, raro |
| **Ferro** | Recurso | Sólido, raro |

### Biomas

| Bioma | Características | Recursos |
|-------|-----------------|----------|
| **Tundra** | Temperado/frio, muita neve | Carvão comum |
| **Temperado** | Clima moderado, muitas árvores | Equilibrado |
| **Jungle** | Quente, vegetação densa, árvores altas | Recursos variados |
| **Deserto** | Quente, seco, areia | Ferro mais comum |

### Recursos Procedurais

- **Carvão**: Distribuição procedural com scarcity configurável
- **Ferro**: Menos comum que carvão, distribuição em profundidade

---

## 🎛️ Parâmetros de Configuração

### Terreno
- `scale` (10-100): Escala do ruído (interpolação espacial)
- `magnitude` (0-1): Amplitude máxima de altura
- `offset` (0-32): Altura base/mínima
- `waterOffset` (0-32): Altura do nível da água

### Biomas
- `scale` (100-10000): Tamanho das regiões de bioma
- `variation.amplitude` (0-1): Variação dentro do bioma
- `variation.scale` (10-500): Escala da variação
- `tundraToTemperate` (0-1): Threshold de transição
- `temperateToJungle` (0-1): Threshold de transição
- `jungleToDesert` (0-1): Threshold de transição

### Árvores
- `frequency` (0-0.1): Densidade de árvores
- `trunk.minHeight` (0-10): Altura mínima do tronco
- `trunk.maxHeight` (0-10): Altura máxima do tronco
- `canopy.minRadius` (0-10): Tamanho mínimo da copa
- `canopy.maxRadius` (0-10): Tamanho máximo da copa
- `canopy.density` (0-1): Densidade de folhas na copa

### Nuvens
- `density` (0-1): Densidade de nuvens
- `scale` (1-100): Tamanho das nuvens

### Jogador
- `maxSpeed` (1-20): Velocidade máxima de movimento
- `jumpSpeed` (1-10): Força do pulo

### Renderização
- `drawDistance` (0-5): Quantos chunks ao redor renderizar (0 = apenas chunk atual)
- `Fog.near` (1-200): Distância de início da névoa
- `Fog.far` (1-200): Distância final da névoa

---

## 📚 Inspiração e Referências

Este projeto foi inspirado e desenvolvido seguindo a série de tutoriais em vídeo:

**YouTube Playlist**: [Minecraft Clone Coding Tutorial](https://www.youtube.com/playlist?list=PLtzt35QOXmkKALLv9RzT8oGwN5qwmRjTo)

A série cobre:
- Configuração básica de Three.js
- Geração procedural de terreno usando Perlin Noise
- Sistema de chunks para otimização
- Detecção de colisão
- Controle de câmera
- UI e parâmetros configuráveis
- Renderização eficiente

---

## 📝 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

---

## 🎯 Objetivo Educacional

Este projeto foi desenvolvido com os seguintes objetivos:

✅ Estudar **renderização 3D com Three.js**  
✅ Compreender estrutura de um **mundo baseado em voxels**  
✅ Explorar **interação do usuário em ambientes 3D**  
✅ Praticar desenvolvimento moderno com **Vite**  
✅ Aplicar conceitos de **JavaScript modular e ES6+**  
✅ Implementar **algoritmos procedurais** (Perlin Noise)  
✅ Otimização de **renderização gráfica**  

---

## 🤝 Troubleshooting

### "Erro: Cannot read property 'geometry' of undefined"
- Certifique-se que `npm install` foi executado
- Limpe cache: `rm -rf node_modules && npm install`

### Performance baixa (FPS baixo)
- Reduza `drawDistance` no painel de controles
- Reduza densidade de recursos
- Aumente `fog.far` para menos objetos serem renderizados

### Mundo não gera
- Verifique console (F12) para erros
- Tente mudar o `seed` no painel de controle
- Regenere o mundo com o botão "Generate" no UI

### Jogador cai infinitamente
- Verifique se o carregamento de chunks está ativo
- Tente resetar a posição do jogador (reload da página)

---

**Desenvolvido com ❤️ usando Three.js**

* Servidor de desenvolvimento rápido
* Hot reload
* Build otimizado para produção
* Estrutura simples de projeto

---

# Estrutura do Projeto

A estrutura geral do projeto segue um padrão simples para aplicações com Vite e Three.js:

```
minecraft-project/
│
├── public/                 # Arquivos públicos (texturas, imagens, etc.)
├── src/                    # Código-fonte principal
│   ├── main.js             # Ponto de entrada da aplicação
│   ├── world/              # Lógica de geração e manipulação do mundo
│   ├── blocks/             # Definições e comportamento dos blocos
│   ├── player/             # Controle do jogador e câmera
│   └── utils/              # Funções auxiliares
│
├── index.html              # Arquivo base da aplicação
├── package.json            # Dependências e scripts do projeto
├── vite.config.js          # Configuração do Vite
└── README.md               # Documentação do projeto
```

A organização pode variar conforme a evolução do projeto, mas o objetivo é separar responsabilidades como **mundo**, **jogador** e **componentes reutilizáveis**.

---

# Como Instalar o Projeto

Para executar este projeto localmente, é necessário ter instalado:

* **Node.js (versão 16 ou superior)**
* **npm** ou **yarn**

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/minecraft-project.git
```

### 2. Acessar o diretório do projeto

```bash
cd minecraft-project
```

### 3. Instalar as dependências

```bash
npm install
```

Esse comando irá instalar todas as bibliotecas necessárias definidas no arquivo `package.json`.

---

# Como Executar o Projeto

Após instalar as dependências, inicie o servidor de desenvolvimento com:

```bash
npm run dev
```

O Vite iniciará um servidor local. Normalmente o projeto ficará disponível em:

```
http://localhost:5173
```

Abra o navegador nesse endereço para visualizar o projeto em execução.

---

# Build para Produção

Caso seja necessário gerar uma versão otimizada do projeto, utilize:

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta:

```
dist/
```

Essa versão pode ser utilizada para **deploy em servidores ou serviços de hospedagem**.

---

# Conceitos Explorados

Durante o desenvolvimento deste projeto, diversos conceitos importantes de desenvolvimento de jogos e gráficos 3D são abordados:

* Renderização 3D com WebGL
* Estrutura de um mundo baseado em voxels
* Manipulação de câmera e movimento do jogador
* Iluminação em ambientes 3D
* Organização de projetos JavaScript modernos
* Uso de ferramentas de build modernas

Esses conceitos são fundamentais para entender como jogos baseados em blocos, como Minecraft, podem ser implementados em ambientes web.

---

# Referência de Estudo

Este projeto foi inspirado na série de tutoriais disponível no YouTube, que demonstra passo a passo a criação de um ambiente estilo voxel utilizando **Three.js**.

Playlist utilizada como referência:

[https://www.youtube.com/playlist?list=PLtzt35QOXmkKALLv9RzT8oGwN5qwmRjTo](https://www.youtube.com/playlist?list=PLtzt35QOXmkKALLv9RzT8oGwN5qwmRjTo)

---

# Licença

Este projeto está disponível sob a licença definida no arquivo `LICENSE`.

O código tem fins **educacionais e experimentais**, sendo utilizado para estudo de desenvolvimento 3D na web com JavaScript e Three.js.
