# Teknisk dokumentation – [Alimento]

## Om projektet

Dette projekt er lavet som en del af Tema 8.
Vi har lavet et dynamisk website med HTML, CSS og JavaScript, hvor indholdet bliver hentet fra et Rest API.

Sitet består af flere sider, hvor brugeren kan:

- se en liste med indhold
- klikke sig videre til en detaljeside
- bruge filtrering
- udfylde en formular

## Links

- GitHub repository: [https://github.com/dollerups-disciple/Alimento]
- GitHub Pages: [https://dollerups-disciple.github.io/Alimento/]
- Figma: [https://www.figma.com/design/2aHqGEWnE9IcglMGJdlXE1/Design-Research-T8?node-id=48-75&t=3BWEJstoLPmIRZ5R-1]
- Trello: [https://trello.com/invite/b/69aebfa819fd18a3f0b740d4/ATTIbc1584ccdf63dceb014945770b4709c7662D9F25/dollerups-disciple]

---

## Projektstruktur

Projektet er opdelt i HTML, CSS og JavaScript-filer.

```
Alimento/
├── index.html
├── grocerylist.html
├── productdetails.html
├── CSS/
│   ├── index.css
│   ├── productlist.css
│   ├── productdetails.css
│   └──
├── js/
│   ├── grocerylist.js
│   ├── productdetails.js
└── README.md
```

### Filbeskrivelser

- **index.html** – forsiden
- **grocerylist.html** – viser en liste med data fra API'et, samt formularen
- **productdetails.html** – viser detaljer om et valgt produkt
- **index.css** – styrer designet for index.html
- **productlist.css** Styrer designet for grocerylist.html
- **productdetails.css** Styrer designet for productdetails.html
- **JavaScript-filer** – styrer det dynamiske indhold på de forskellige sider

---

## Hvordan koden fungerer

Vi har opdelt JavaScript, så hver side har sin egen fil.

### grocerylist.js

Denne fil henter alle produkterne fra API'et og indsætter dem i listen.

### productdetails.js

Denne fil bruges til at vise det specifikke produkt, som brugeren har klikket på.

**Flow:**

1. Siden indlæses.

2. JavaScriptet udlæser produktets unikke ID fra URL'en ved hjælp af URLSearchParams.

3. Der laves et specifikt fetch-kald til API'et med dette ID.

4. Produktets detaljer (pris, beskrivelse, billede osv.) indsættes dynamisk i DOM'en.

5. Brugeren præsenteres for den uddybende produktinformation.

---

Navngivning
Vi har navngivet vores filer, variabler og funktioner, så de er så selvforklarende som muligt. Dette gør det lettere for alle i gruppen at læse og forstå koden.

Eksempler på variabler

### Eksempler på variabler

```javascript
const productId;
const container;
```

### Eksempler på funktioner

```javascript
showData();
```

Vi har brugt camelCase i JavaScript, fordi det gør koden mere ensartet og lettere at læse.

---

## Kommentarer i koden

Vi har kommenteret de steder i koden, hvor det giver mening.
Fx ved funktioner, fetch-kald og steder hvor der sker DOM-manipulation.

**Eksempel:**

```javascript
// --- 1. FIND BEHOLDERE ---
const container = document.querySelector(".cards");
const priceSort = document.querySelector("#price-sort"); // Finder dropdown
const filterButtons = document.querySelectorAll(".filter-btn"); // Finder knapper
```

---

## Data og JSON-struktur

Vi henter data fra et API i JSON-format.

**Et objekt kan fx se sådan ud:**

```json
{
  {
      "id": 16,
      "title": "Apple",
      "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
      "category": "groceries",
      "price": 1.99,
      "discountPercentage": 12.62,
      "rating": 4.19,
      "stock": 8,
      "tags": [
        "fruits"
      ],
      "sku": "GRO-BRD-APP-016",
      "weight": 9,
      "dimensions": {
        "width": 13.66,
        "height": 11.01,
        "depth": 9.73
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Sophia Brown",
          "reviewerEmail": "sophia.brown@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very dissatisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Scarlett Bowman",
          "reviewerEmail": "scarlett.bowman@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Very unhappy with my purchase!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "William Gonzalez",
          "reviewerEmail": "william.gonzalez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 7,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "7962803553314",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp"
    },
}
```

### Felter vi bruger

- **id** – bruges til at sende brugeren videre til detaljesiden
- **title** – Produktnavn
- **tags** – Sætter en kategori ind (feks meat eller fruit)
- **description** – En beskrivelse af produktet
- **price** – Produktets pris

---

## Formular og validering

Vi har lavet en formular, hvor brugeren kan indtaste oplysninger.

**HTML-validering:**

- `required` – feltet skal udfyldes
- `type="email"` – validerer email-format

Det sikrer, at brugeren ikke kan sende formularen, hvis felterne ikke er udfyldt korrekt.

---

## Git og branches

Vi har brugt GitHub til at samarbejde om projektet.

Vi har arbejdet med branches, så vi ikke sad og ændrede i det samme på samme tid.

Vi navngav branchene med feature.

### Eksempler på branches

- `prodcutlister-og-js`
- `JS`

### Workflow

1. Lave en branch med feature-navn
2. Kode en feature
3. Committe ændringer
4. Pushe til GitHub
5. Merge til main når det virkede

Det gjorde det nemmere at holde styr på, hvem der lavede hvad.

---

## Bæredygtighed

Vi har tænkt bæredygtighed ind i projektet.

**Tiltag:**

- Ingen videoer
- Ingen tunge frameworks
- Genbruge af kode

---

## Udfordringer undervejs

En af vores udfordringer var at få data fra Rest API’et vist korrekt på siderne.

**Løsninger:**

- Console.logge data undervejs
- Bruge URLSearchParams
- Dele opgaverne mere tydeligt i gruppen

---

## Mulige forbedringer

Hvis vi skulle arbejde videre med projektet, kunne vi forbedre det ved at tilføje:

- Søgefunktion
- Add to basket knap der virker
- Udvide konceptet med mere data

---

## Gruppemedlemmer

- Frederik Højvar Bust Hansen
- Gregor Pavlik
- Isabel Miabom
- William Tien Nguyen

---
