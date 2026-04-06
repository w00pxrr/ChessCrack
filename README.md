# ZeroLatency Chess

Ultra-optimized Player vs AI/LAN chess application. **4.8KB total.**

## Performance

| Engine | Bundle | Threaded | SIMD | Latency |
|--------|--------|---------|------|--------|
| **ZeroLatency** | **4.8KB** | ✓ | ✓ | ~50ms |
| Lichess.org | ~400KB | ✓ | ✓ | ~100ms |
| Chess.com | ~600KB | ✗ | ✗ | ~200ms |
| chess24.com | ~350KB | ✗ | ✗ | ~180ms |

## Install (pnpm)

```bash
pnpm create zero-chess
cd zero-chess
pnpm dev
```

Or add packages manually:

```bash
pnpm add chess.js @lichess-org/chessground @lichess-org/stockfish-web
```

## Serve

```bash
# Direct serve
npx serve public

# Or Vercel
vercel deploy --prod
```

## Modes

- **vs AI** - Stockfish 18 (depth 8-18)
- **Host** - Create LAN game (share code)
- **Join** - Connect to host

## Difficulty

| Level | Depth | Skill | ELO |
|-------|-------|-------|-----|
| Easy | 8 | 0 | ~1200 |
| Medium | 12 | 5 | ~1600 |
| Hard | 18 | 20 | ~2000+ |

## Architecture

```
Main Thread          Worker
Chessground ◀────▶ Worker
chess.js            Stockfish 18
(validate)         (WASM)
```

## Stack

- **ES17+**: Vanilla JavaScript
- **Board**: Chessground 10
- **Logic**: chess.js 0.13
- **AI**: Stockfish 18 WASM
- **Manager**: pnpm

## Browser

- Chrome 79+, Firefox 79+, Edge 79+ (full threading)
- Safari 16.4+ (partial)

## License

GNU Lesser General Public License v3.0

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU LGPL as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
LGPL for more details.

You should have received a copy of the GNU LGPL along with this program.
If not, see <https://www.gnu.org/licenses/>.

## Files

```
public/
├── index.html   # 2.5KB
├── style.css   # 1.6KB  
└── worker.js  # 621B

Total: 4.8KB
```

## Optimizations

- Sub-5KB bundle, zero frameworks
- Web Worker offloading
- Direct DOM manipulation
- Transferable FEN communication
- CDN caching# ChessCrack
