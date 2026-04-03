# ♟️ Chess Position Editor

A modern, interactive chess board editor built with **React**, **Redux**, and **TypeScript**. This tool allows users to visually create, edit, and analyze chess positions, supporting features like FEN input/output, board flipping, piece placement/removal, castling rights, and move toggling.

Visit https://abhi1kush.github.io/chess-frontend/ for Editing Fen or Chess positions.
---

Product Backlog:
1. Moves should use icon of the piece instead of Alphabet.
2. Moves is categorized in multiple catogries
3. AI speaker who told us about review.
4. Board shows highlighted square and arrows for last move made.
5. When user deviates from the move list and make move by dragging the piece, then anaylse this new position and show evalBar move category etc but keep it temporary dont need to store it 

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

## 📂 Project Structure
```
src/
|--- components/ # Reusable UI components (Board, PiecePalette, etc.)
|--- redux
|       |---store/ # Redux logic (reducers, actions, types)
|       |---reducers/boardEditorReducer.ts
|       |---actions/boardEditorActions.ts
|--- services/ # Utility functions (e.g., FEN parser)
│       |---fen/fenparser.ts
|--- config.ts # Constants like starting positions, colors
|--- App.tsx # Main entry component
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
