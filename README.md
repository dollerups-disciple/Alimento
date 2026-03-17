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
- GitHub Pages: [https://github.com/dollerups-disciple/Alimento/settings/pages]
- Figma: [https://www.figma.com/design/2aHqGEWnE9IcglMGJdlXE1/Design-Research-T8?node-id=48-75&t=3BWEJstoLPmIRZ5R-1]
- Trello: [https://trello.com/invite/b/69aebfa819fd18a3f0b740d4/ATTIbc1584ccdf63dceb014945770b4709c7662D9F25/dollerups-disciple]

---

## Projektstruktur

Projektet er opdelt i HTML, CSS og JavaScript-filer.

```
Alimento/
├── index.html
├── grocerylist.html.html
├── productdetails.html
├── form.html
├── CSS/
│   ├── index.css
│   ├── productlist.css
│   ├── productdetails.css
│   └──
├── js/
│   ├── grocerylist.js
│   ├── productdetails.js
│   └── form.js
└── README.md
```

### Filbeskrivelser

- **index.html** – forsiden
- **recipelist.html** – viser en liste med data fra API'et
- **recipedetails.html** – viser detaljer om en valgt opskrift
- **form.html** – indeholder formularen
- **style.css** – styrer designet
- **JavaScript-filer** – styrer det dynamiske indhold på de forskellige sider

---

## Hvordan koden fungerer

Vi har opdelt JavaScript, så hver side har sin egen fil.

### grocerylist.js

Bruges til listevisning, til at liste produkterne fra dataen op

### productdetails.js

Bruges til at vise uddybbende data og billede om det specifikke produkt, der er klikket på-

**Flow:**

1. Siden loader
2. JavaScript kører
3. Data hentes fra Rest API
4. Data bliver gennemgået med loop
5. HTML bliver indsat i DOM'en
6. Brugeren kan klikke på et produkt

### form.js

Styrer formularen og validering af inputfelter.

Denne fil bruges til at sikre, at brugeren udfylder formularen korrekt. Det gør formularen mere brugervenlig og mindsker fejl.

---

Navngivning
Vi har navngivet vores filer, variabler og funktioner, så de er så selvforklarende som muligt. Dette gør det lettere for alle i gruppen at læse og forstå koden.

Eksempler på variabler

### Eksempler på variabler

```javascript
const productId;
const container;
const product;
```

### Eksempler på funktioner

```javascript
showDetails();    /
product.tags.join();

```

Vi har brugt camelCase i JavaScript, fordi det gør koden mere ensartet og lettere at læse.

---

## Kommentarer i koden

Vi har kommenteret de steder i koden, hvor det giver mening.
Fx ved funktioner, fetch-kald og steder hvor der sker DOM-manipulation.

**Eksempel:**

```javascript
// Vi henter data fra kategorien groceries
fetch("https://dummyjson.com/products/category/groceries?limit=24")
  .then((res) => res.json())
  .then((data) => {
    // Vi sender listen af produkter videre til showData funktionen
    showData(data.products);
  });
```

Vi har prøvet ikke at skrive kommentarer til helt åbenlyse ting, men kun dér hvor det hjælper forståelsen.

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
- **title** – opskriftsnavn
- **tags** – Sætter en katefori ind (feks meat eller friut)
- **descriptione** – En beskrivelse af produktet
- **price** – Produktets pris

---

## Formular og validering

Vi har lavet en formular, hvor brugeren kan indtaste oplysninger.

**HTML-validering:**

- `required` – feltet skal udfyldes
- `type="email"` – validerer email-format
- `type="number"` – accepterer kun tal

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
Det var også lidt svært at få id med videre i URL’en til detaljesiden.

**Løsninger:**

- Console.logge data undervejs
- Teste fetch-kald separat
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
