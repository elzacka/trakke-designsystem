# Tråkke Design System v2

Et moderne, tilgjengelig designsystem for norske friluftsapplikasjoner.

## Filosofi

Tråkke Design System er bygget rundt konseptet **"Nordisk ro"** – et designspråk som reflekterer den norske friluftsfilosofien:

- **Friluftsliv**: Design inspirert av norsk natur og utendørskultur
- **Privacy-first**: Ingen eksterne avhengigheter, all data i Norge/EU
- **Offline-first**: Fullt funksjonell uten internettforbindelse
- **Tilgjengelighet**: WCAG 2.1 AA-compliance som minimum

## Installasjon

```bash
npm install @trakke/design-system
# eller
yarn add @trakke/design-system
# eller
pnpm add @trakke/design-system
```

## Kom i gang

### Importer stiler

```tsx
// I din hovedfil (App.tsx eller index.tsx)
import '@trakke/design-system/styles';
```

### Bruk komponenter

```tsx
import { Button, Card, Sheet, FAB } from '@trakke/design-system';

function App() {
  return (
    <Card>
      <h2>Min tur til Besseggen</h2>
      <p>En klassisk norsk fjelltur</p>
      <Button variant="primary">Start navigasjon</Button>
    </Card>
  );
}
```

### Bruk design tokens

```tsx
import { colors, spacing, fontSize } from '@trakke/design-system/tokens';

// I JavaScript/TypeScript
const style = {
  color: colors.brand,
  padding: spacing[4],
  fontSize: fontSize.lg,
};
```

```scss
// I SCSS
@use '@trakke/design-system/styles/colors' as *;
@use '@trakke/design-system/styles/spacing' as *;

.my-component {
  color: $trk-brand;
  padding: $trk-space-4;
}
```

## Komponenter

### Primitive

| Komponent | Beskrivelse |
|-----------|-------------|
| `Button` | Knapp med flere varianter og størrelser |
| `Icon` | Material Symbols ikoner |
| `Spinner` | Loading-indikator |
| `Text` | Typografi-primitiv |

### Form

| Komponent | Beskrivelse |
|-----------|-------------|
| `Input` | Tekstfelt med validering |
| `Checkbox` | Avkryssningsboks |
| `Switch` | Av/på-bryter |

### Layout

| Komponent | Beskrivelse |
|-----------|-------------|
| `Card` | Kort for gruppering av innhold |
| `Sheet` | Bottom sheet (mobil) / modal (desktop) |

### Navigasjon

| Komponent | Beskrivelse |
|-----------|-------------|
| `FAB` | Floating Action Button med meny |

### Feedback

| Komponent | Beskrivelse |
|-----------|-------------|
| `Badge` | Statusetikett |
| `Toast` | Varselmeldinger |

### Brand

| Komponent | Beskrivelse |
|-----------|-------------|
| `Logo` | Tråkke-logo i flere varianter |

## Design Tokens

### Farger

```
Brand:     #3e4533 (skoggrønn)
Blue:      #1e6ce0 (GPS/interaktiv)
Red:       #d0443e (waypoints/feil)
Green:     #2e9e5b (suksess)
Yellow:    #e6a817 (advarsel)
```

### Typografi

- **Font**: Exo 2 (variable font)
- **Fallback**: System font stack

### Spacing

8px grid-system:
- `space-1`: 4px
- `space-2`: 8px
- `space-3`: 12px
- `space-4`: 16px
- ...

### Tilgjengelighet

- WCAG 2.1 AA-compliance
- Minimum touch target: 44px
- Fokusindikatorer på alle interaktive elementer
- Støtte for `prefers-reduced-motion`
- Skjermleser-vennlig

## Utvikling

### Start Storybook

```bash
npm run dev
```

### Bygg

```bash
npm run build
```

### Test

```bash
npm run test
```

### Lint

```bash
npm run lint
npm run typecheck
```

## Mappestruktur

```
src/
├── components/       # React-komponenter
│   ├── Button/
│   ├── Card/
│   ├── Sheet/
│   └── ...
├── styles/          # SCSS-stiler og tokens
│   ├── _colors.scss
│   ├── _spacing.scss
│   ├── _typography.scss
│   └── index.scss
├── tokens/          # JavaScript tokens
├── hooks/           # React hooks
├── utils/           # Hjelpefunksjoner
└── index.ts         # Hovedeksport
```

## Lokalisering

Designsystemet er bygget med norsk som hovedspråk:

- Alle komponenttekster på norsk
- Støtte for norske tall- og datoformater
- Norske avstands- og høydeenheter

## Responsive Design

Mobile-first tilnærming med breakpoints:

| Breakpoint | Verdi | Beskrivelse |
|------------|-------|-------------|
| `xs` | 0 | Mobil (standard) |
| `sm` | 480px | Stor mobil |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Stor desktop |
| `2xl` | 1536px | Ekstra stor |

## Privacy

Designsystemet følger Tråkkes privacy-first filosofi:

- Ingen eksterne CDN-er (alle fonter self-hosted)
- Ingen tracking eller analytics
- GDPR-compliant
- Kun EU/EØS API-er

## Lisens

MIT
