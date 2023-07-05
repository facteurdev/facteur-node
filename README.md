# Facteur Node.js SDK

> Send emails in your Node.js applications with Facteur.

## Installation

```bash
npm install facteur-node
```

## Usage

```typescript
import Facteur from 'facteur-node';

async function sendSomeEmail() {
  const facteur = new Facteur('facteur-...');

  await facteur.sendEmail({
    from: 'no-reply@example.com',
    to: 'ayn@rand.com',
    subject: 'Who is John Galt?',
    text:
      'I started my life with a single absolute: that the world was mine to shape in the image of my highest values and never to be given up to a lesser standard, no matter how long or hard the struggle.',
    html:
      '<p>I started my life with <b>a single absolute</b>: that the world was mine to shape in the image of my highest values and never to be given up to a lesser standard, no matter how long or hard the struggle.</p>',
  });
}
sendSomeEmail();
```
