# ♟️ Chess Position Editor

A modern, interactive chess board editor built with **React**, **Redux**, and **TypeScript**. This tool allows users to visually create, edit, and analyze chess positions, supporting features like FEN input/output, board flipping, piece placement/removal, castling rights, and move toggling.

Visit https://abhi1kush.github.io/chess-frontend/ for Editing Fen or Chess positions.
---

Product Backlog:
* When user deviates from the move list and make move by dragging the piece, then anaylse this new position and show evalBar move category etc but keep it temporary dont need to store it
* Recognize book move and add in categorization. 
* Make available option of backend server analysis.
* Improve move category color mapping and icons.
* Moves should use icon of the piece instead of Alphabet.
* AI speaker who told us about review.

* DONE - Moves is categorized in multiple categories
* DONE - Board shows highlighted square and arrows for last move made.

## 🚀 Features

- 🧩 Drag & drop based **chess piece placement**
- 📋 **FEN** string input/output
- 🔁 **Flip board** orientation
- 🧹 **Clear** board and **reset** to the standard initial position
- 🔐 Toggle **castling rights**
- 🔄 Change **player to move**
- 🎨 Custom piece palette for manual editing
- 📱 Responsive design

---

## 🧱 Tech Stack

- ⚛️ React
- 🧠 Redux with Immer
- 🟦 TypeScript
- 🧪 Jest / React Testing Library *(if included)*
- 💅 Tailwind CSS or CSS Modules *(optional, depending on your setup)*

---

## 📂 App tree

`src/main.tsx` mounts Redux `Provider` + `store`, then `App`. Everything below is the runtime tree from `App`.

```
App
├── ConfigProvider
│   └── EngineProvider          (Stockfish WASM)
│       └── HashRouter
│           ├── PageViewTracker
│           └── AppRoutes
│               └── AnalysisPage            (/analysis)
│                   │
│                   │  hooks (not UI):
│                   │    useAnalysisLine
│                   │    usePositionAnalysis
│                   │    useAnalysisBoardView
│                   │
│                   ├── TopContainer
│                   │   └── TopBar
│                   │       ├── FlipButton
│                   │       ├── FenOverlayButton
│                   │       ├── PgnUploader
│                   │       ├── DarkThemeToggle
│                   │       └── Settings
│                   │
│                   ├── EngineSidebar   ← left column (fixed)
|                   |   |__ Score / Move Quality / Best Move
│                   │   └── GameReviewSummary   (after Review completes)
│                   │
│                   └── BoardStage              (.analysis-container)
│                       ├── EvalBar + ChessBoard
│                       └── sidebar   ← right column (fixed) 
│                           ├── MoveList
│                           │   ├── EngineWarmupBar
│                           │   ├── Review / Analyse
│                           │   ├── BoardControls          (mobile)
│                           │   └── MoveListTable
│                           │       └── MoveSanCell
│                           └── BoardControls              (desktop)
```

`MoveList` is the right-hand panel (buttons + review). `MoveListTable` is the `# / White / Black` grid inside it.

Redux slices used by this tree: `pgn`, `analysis`, `engine`, `settings` (`src/app/rootReducer.ts`).

### Source folders

```
src/
├── main.tsx
├── app/
│   ├── App.tsx
│   ├── routes.tsx
│   ├── store.ts
│   └── rootReducer.ts
├── features/
│   ├── analysis/     # page, move list, classifier, review
│   ├── chessboard/   # board, arrows, FEN helpers
│   ├── engine/       # Stockfish
│   ├── pgn/          # parser + uploader
│   └── settings/
└── shared/
```

## 🧪 Getting Started

### 1. Clone the Repo

```bash
1. git clone https://github.com/your-username/chess-position-editor.git
cd chess-position-editor
2. Install Dependencies

npm install
# or
yarn install

3. Run the App
npm run dev
# or
yarn dev
Visit http://localhost:3000 in your browser.

🛠️ Usage
Click on a square to place or remove a piece.

Use the side palette to select a piece before placing.

Use toolbar buttons to:

Clear board

Reset to starting position

Flip board

Toggle castling rights

Change player to move

Generate FEN from current position

🌐 Future Enhancements
PGN Import / Export

Piece drag-and-drop support (with mobile touch support)

Keyboard shortcuts

Auto FEN validation

Light/Dark theme toggle
