const proveedores = [
  {
    id: 1,
    categoria: "Bienestar",
    imagenes: [
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/e308/f03d/a45d3fdab035379810b3564aa3ca08bd?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KKM-QCvvRILcqRV-Ga8guK3lPUswv8yKfmXQzrDXJ3qJ2UtRzm0SX1fKK1v6egqKF~5IR2gb2Hm7V7kqsth6S4nPM4FiJKcA0MsQGUjSFv9cH9PWLwPbY1Ut4ZqS7j2iboZPgRHuQ0NWnZgjEy9DQq0FVziboIMbQ-UISkBFmhw5-~l7TacboevH4YboL4kO572Er2rlqq7eHPb8JpZd8ATL6gO7OF5MuTzWc99DJE-ed9kHD4LU116sSLX6vK6Ty7wWThwmwVKN1qrsS0~C4Nq-7ZQfXtts9wd4VPG2dW~6kB1Xj2EAT5JIhA4ueZWzWT1GzJdPBPIWAY83r9z1MA__",
        alt: "Imagen 1",
      },
      {
        id: 2,
        url: "https://s3-alpha-sig.figma.com/img/76c6/5ee9/4989818dea0524d2fb0186ddb4f48bb3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CtrKlSN11WUBqIeXpucb1oUtJxH6PzMkf4~XAcKhwJV7eGigfPeMs5i1ggklSr5LuPu0h3~NLKp7l0X34BUNBKudfmS5tfhxo35dGQK1H2yJaXlCeK5dhRw~6YWFrQRVKvjWZzWEGXSxb0qURV~DpQzm3dnWUEQkYPCe2x7z93tnXRS2T4MLjBM7EeDCHtKVPHTY-Rs-OSQ6G3-wqr-OOr9oo1w7Tkf5r7HGYRr4yyKm~XuB7G6dCGEzRqXsmny3CjUAcANFbSb9seNq7SbCNUd8l6wPshc2-fnTymWu7eGaRQSv5P6DRtqMbJ-8K~IZ~ikhJahL6XV7r3QA35bzbg__",
        alt: "Imagen 2",
      },
      {
        id: 3,
        url: "https://s3-alpha-sig.figma.com/img/3d63/16ca/e3bd50330ffa28bcb22ef67ef6231dd2?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GyHPOAj0cNegrvZrTVFP7pmSzzFnzGdUmlDwEpiHvGzXXoti0ZsR7F83f0I0yhhtLErMjzQwjL31g7UAjMSsaBL8q04hM6~SYuav8Ws8EYFAPRG1vPKG95~ZwB02MPYf3jG-tAA0u~ooWeqPW5jgf2TBEo7XdA9RqSX6bgoAy7uLniC7VMZbzcR5RSrEw66iNoGFNZPDRZ2pHmrryM91FqkU8yQrCTqi193~L6IFcr6G4O6TimzgRbfLav3Gjy-k~9N4AxbhP5m6TryLgiF2JIru6HIwuOyVDCXJgELOyTWRX8vA-4F~PIm46~MK3hRYtyuCGbayvLlYfOkYSAy~uQ__",
        alt: "Imagen 3",
      },
    ],
    nombre: "Lavanda",
    tipo: "Cosmética natural",
    ubicacion: "Godoy Cruz, Mendoza, Argentina",
    ubicacionCorta: "Godoy Cruz",
    descripcion:
      "Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden al planeta, con principios activos que dejen el pelo sano y la piel bella.",
  },
  {
    id: 2,
    categoria: "Tecnologia",
    imagenes: [
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/8b7a/2575/ee63770fb5b2446d50fbc74296318fd8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aH4hBWwMFmg5MJwcDJhJNp9QJk8ZrG3kEnDe0euY5AmJ-jAvkxJRm5QuQBc~2C3l2bR5xG2B3Livoe8DV51NFYr2RzXv8pvN7Yj24PdQGRQPdGzpEVsiiwqj2ii81EEzv9QKeTCKjzPDwdLnxl6PbbQi4Q7JXayWYHxMhuW9NMklYugn4bbOEiiPEpZgsvocxPIpLEFwhpTO-wHhe9Ywp1tZRz2Q0Auuxvuld4DKmkJ5M88n0G5VMWDT6TzzK85iHgOcsY964RcsGZUWe4n9GxpWCGo8Hieuc3kSb0OWlq45E6AGeJPEOKI3QToCKLDGk578O9ZGKL4i4sk~GANeww__",
        alt: "Imagen 1",
      },
      {
        id: 2,
        url: "https://s3-alpha-sig.figma.com/img/76c6/5ee9/4989818dea0524d2fb0186ddb4f48bb3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CtrKlSN11WUBqIeXpucb1oUtJxH6PzMkf4~XAcKhwJV7eGigfPeMs5i1ggklSr5LuPu0h3~NLKp7l0X34BUNBKudfmS5tfhxo35dGQK1H2yJaXlCeK5dhRw~6YWFrQRVKvjWZzWEGXSxb0qURV~DpQzm3dnWUEQkYPCe2x7z93tnXRS2T4MLjBM7EeDCHtKVPHTY-Rs-OSQ6G3-wqr-OOr9oo1w7Tkf5r7HGYRr4yyKm~XuB7G6dCGEzRqXsmny3CjUAcANFbSb9seNq7SbCNUd8l6wPshc2-fnTymWu7eGaRQSv5P6DRtqMbJ-8K~IZ~ikhJahL6XV7r3QA35bzbg__",
        alt: "Imagen 2",
      },
      {
        id: 3,
        url: "https://s3-alpha-sig.figma.com/img/3d63/16ca/e3bd50330ffa28bcb22ef67ef6231dd2?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GyHPOAj0cNegrvZrTVFP7pmSzzFnzGdUmlDwEpiHvGzXXoti0ZsR7F83f0I0yhhtLErMjzQwjL31g7UAjMSsaBL8q04hM6~SYuav8Ws8EYFAPRG1vPKG95~ZwB02MPYf3jG-tAA0u~ooWeqPW5jgf2TBEo7XdA9RqSX6bgoAy7uLniC7VMZbzcR5RSrEw66iNoGFNZPDRZ2pHmrryM91FqkU8yQrCTqi193~L6IFcr6G4O6TimzgRbfLav3Gjy-k~9N4AxbhP5m6TryLgiF2JIru6HIwuOyVDCXJgELOyTWRX8vA-4F~PIm46~MK3hRYtyuCGbayvLlYfOkYSAy~uQ__",
        alt: "Imagen 3",
      },
    ],
    nombre: "TecnoStore",
    tipo: "Venta de articulos tecnologicos",
    ubicacion: "Godoy Cruz, Mendoza, Argentina",
    descripcion:
      "TecnoStore es un proyecto que surgio de la idea de un grupo de amigos que querian ser sus propios jefes, cansados de seguir un estilo de vida comun y corriente.",
  },
  {
    id: 3,
    categoria: "Bienestar",
    imagenes: [
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/4258/8eaf/742f12aa521e9c0f78063933ce74e857?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L3OFOih2JGWy42B6ykWvx0s0KgCp~QBtb1mkJt2RLXID7MxIMoy60KlsSziaPJVF-Sdbu0ftrNL9hNp4P2wMJehsBrzfVqOLIdqk8mWMO63nTZzFDGoyIZoVFOfMu4~nakMVJzpBgdYOtPVY5I0upT3Tj0M5HYwam9QC7MnJm172Q50ZDEEq5SLe91pVCHqic3r~qppQneY-SEOteZ14Vyy4kBFyQg2uAJw5LXDZTT3pht6CGVCIkwnAM4BYzixXxgGVxz7BVLHggMTcIIQcGGsV4FMmKDJ-17bFotx6U6vjVQl58nPlcls0vxMhVN8TRlz~IWUdbhtQRwyq1pyhkg__",
        alt: "Imagen 1",
      },
      {
        id: 2,
        url: "https://s3-alpha-sig.figma.com/img/76c6/5ee9/4989818dea0524d2fb0186ddb4f48bb3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CtrKlSN11WUBqIeXpucb1oUtJxH6PzMkf4~XAcKhwJV7eGigfPeMs5i1ggklSr5LuPu0h3~NLKp7l0X34BUNBKudfmS5tfhxo35dGQK1H2yJaXlCeK5dhRw~6YWFrQRVKvjWZzWEGXSxb0qURV~DpQzm3dnWUEQkYPCe2x7z93tnXRS2T4MLjBM7EeDCHtKVPHTY-Rs-OSQ6G3-wqr-OOr9oo1w7Tkf5r7HGYRr4yyKm~XuB7G6dCGEzRqXsmny3CjUAcANFbSb9seNq7SbCNUd8l6wPshc2-fnTymWu7eGaRQSv5P6DRtqMbJ-8K~IZ~ikhJahL6XV7r3QA35bzbg__",
        alt: "Imagen 2",
      },
      {
        id: 3,
        url: "https://s3-alpha-sig.figma.com/img/3d63/16ca/e3bd50330ffa28bcb22ef67ef6231dd2?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GyHPOAj0cNegrvZrTVFP7pmSzzFnzGdUmlDwEpiHvGzXXoti0ZsR7F83f0I0yhhtLErMjzQwjL31g7UAjMSsaBL8q04hM6~SYuav8Ws8EYFAPRG1vPKG95~ZwB02MPYf3jG-tAA0u~ooWeqPW5jgf2TBEo7XdA9RqSX6bgoAy7uLniC7VMZbzcR5RSrEw66iNoGFNZPDRZ2pHmrryM91FqkU8yQrCTqi193~L6IFcr6G4O6TimzgRbfLav3Gjy-k~9N4AxbhP5m6TryLgiF2JIru6HIwuOyVDCXJgELOyTWRX8vA-4F~PIm46~MK3hRYtyuCGbayvLlYfOkYSAy~uQ__",
        alt: "Imagen 3",
      },
    ],
    nombre: "Lavanda",
    tipo: "Cosmética natural",
    ubicacion: "Godoy Cruz, Mendoza, Argentina",
    descripcion:
      "Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden al planeta, con principios activos que dejen el pelo sano y la piel bella.",
  },
];

export default proveedores;
