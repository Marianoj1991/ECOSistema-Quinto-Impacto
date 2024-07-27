const proveedores = [
  {
    id: 1,
    categoria: "Bienestar",
    imagenes: [
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/e308/f03d/a45d3fdab035379810b3564aa3ca08bd?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XK1J4dlcEuAJorxUtgZBtaa0Ty9z5XJ3I0NktEQ7FNH5ps1R8wUrbBcSzc7KqoRpj0zx8G~9~UqcV2msyXbRSOD2IPKDc-H9-0SOSfxgYxZUtIkJ2LwFy5nFMZY0IN569kg9n7hHSA1WLsa1GHFE8aIjo5nXI583ghp6eLKb7cIPMfduzApiMnpNXwVaAdIwbqg1Pz2YnHRcsD2qUUWiroB9Fpiy0M2K18U2FL2Fv~aY-kQd1eAK8x3rzWielu9VN5b-xiCUD-1ulsqMliJDCq-KUFW7t6vj-o6yU6S8Ny23XMZ73e-3tqsiQ14AAi33G2zD-bC5nMV9Z2yVl96Eng__",
        alt: "Imagen 1",
      },
      {
        id: 2,
        url: "https://s3-alpha-sig.figma.com/img/76c6/5ee9/4989818dea0524d2fb0186ddb4f48bb3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUGE8nZBPRk1OzDklOyub7LXKTpql0NtZnAOhzFdCvgq30k-CmCVxle3hFSEq-JOk8Vz1fvSYoQBdVhNY9c27m-ZymnQU-OLGdPZxw54MNe~Y3DosfLY9KsHw4g8opxw1Z6rgQjK~Ae5kXvZebfQnDALee0NirAxwv~YYioiHnbHO0vNnL~Lv8oWYvIEol~UBH0XYkgq4EqkJzxNBcD2YPAcEK8opUZPCaALCTp1Kfu87sDX2zDHP93hJZEcKmistfM5FZ5gNuPzy2wbQuVRmAbcMVDi9o5QfhhVJqJTlUM3KLDLYCupl9yxBZPVfju7iSZBzEq2IciWlvPbR58p9g__",
        alt: "Imagen 2",
      },
      {
        id: 3,
        url: "https://s3-alpha-sig.figma.com/img/3d63/16ca/e3bd50330ffa28bcb22ef67ef6231dd2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fN4xFn-A1fmg3WkLXZG3ixsk0hrtCB~XdQZN0F-KY1mAlsLniW~7rkVjJZiRYt2yMWVRV452Jgv-pCeT3wmAS4XZVPYyy-zemS42Is4P~PgvFKmck-sSZ-ENhhagvixbwpvyImvfK8rrzdtDxSGLTm-C9A7b3PIFiM~dtUhr2LNDK5yNWGoDfFRfNcKLSbbOw57VTbGc7VF7DMnPX7uDfFaFqzfEV9TBQ4a5zQ5RNq2ccnYavuGlwGAG8W6MMvdPND0hWJ40hj4nM1dH9yEz9mzKbBUaNKkNJ7aSlZRjyg3un5-V9cBZiHM95mzB6hyV03FWxn44xAVg7rmKOt6R7A__",
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
        url: "https://s3-alpha-sig.figma.com/img/8b7a/2575/ee63770fb5b2446d50fbc74296318fd8?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H2G1qAjL7bIlYpRZiO1cuoMo-ZH-huMrLhEAY3rBR2ZO2~5WQh9LPV8c2sx4aUdTN6Owvj3NMNrfYOQjGDcQpwy5cUrlxiBoPV4itQsFMKBhRiRY6-F~HiOIV2FJhUfc3IdBeTWWrImeCzHY5QiLOAbZP-4Nki1aWHSnpeLYaoZ3GRsMN2UGTcrElJEr4CdpiOtkuUodCcd6G1cEax24K9oVYghmRZsl9w2RK8GG3qCh-vt7YNbCZwFNJnRAa4P3PiQ~BtFrDk1O0olPVLUm06-tBbqoApLCpU~lpbI2K9Oho284SUuj~Po5lAhRDdR6746GLxKkUvR0PERwvT-tWA__",
        alt: "Imagen 1",
      },
      {
        id: 2,
        url: "https://s3-alpha-sig.figma.com/img/76c6/5ee9/4989818dea0524d2fb0186ddb4f48bb3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUGE8nZBPRk1OzDklOyub7LXKTpql0NtZnAOhzFdCvgq30k-CmCVxle3hFSEq-JOk8Vz1fvSYoQBdVhNY9c27m-ZymnQU-OLGdPZxw54MNe~Y3DosfLY9KsHw4g8opxw1Z6rgQjK~Ae5kXvZebfQnDALee0NirAxwv~YYioiHnbHO0vNnL~Lv8oWYvIEol~UBH0XYkgq4EqkJzxNBcD2YPAcEK8opUZPCaALCTp1Kfu87sDX2zDHP93hJZEcKmistfM5FZ5gNuPzy2wbQuVRmAbcMVDi9o5QfhhVJqJTlUM3KLDLYCupl9yxBZPVfju7iSZBzEq2IciWlvPbR58p9g__",
        alt: "Imagen 2",
      },
      {
        id: 3,
        url: "https://s3-alpha-sig.figma.com/img/3d63/16ca/e3bd50330ffa28bcb22ef67ef6231dd2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fN4xFn-A1fmg3WkLXZG3ixsk0hrtCB~XdQZN0F-KY1mAlsLniW~7rkVjJZiRYt2yMWVRV452Jgv-pCeT3wmAS4XZVPYyy-zemS42Is4P~PgvFKmck-sSZ-ENhhagvixbwpvyImvfK8rrzdtDxSGLTm-C9A7b3PIFiM~dtUhr2LNDK5yNWGoDfFRfNcKLSbbOw57VTbGc7VF7DMnPX7uDfFaFqzfEV9TBQ4a5zQ5RNq2ccnYavuGlwGAG8W6MMvdPND0hWJ40hj4nM1dH9yEz9mzKbBUaNKkNJ7aSlZRjyg3un5-V9cBZiHM95mzB6hyV03FWxn44xAVg7rmKOt6R7A__",
        alt: "Imagen 3",
      },
    ],
    nombre: "Avocado",
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
        url: "https://s3-alpha-sig.figma.com/img/4258/8eaf/742f12aa521e9c0f78063933ce74e857?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hmbc4lEBRGY3-WsoiLMVOoH7hKDC39W2ICksBfxd~i4zDb3JiQqxejjMmNtcxEq6km7QeSSwfV5rNu5yKh7C5ht~TiZ0TNKkkaN2ndKNGtjpPVd5SmiTdX6cjR3yEbjotyhTFqSYrJGwL8eQHfsUF4YDdjIJ47Th565KjdABklPzSAulsGUgBzUm8FaUEw5hDqABji4GheZpqAp~QnpCJigNwFde23DqPzcgn~bgbA9IcU-k3wQrHFZwV8pzGgDaPobjf0t9QQfj2w4Ri~BHNRwi9Edb9JXAABLCCxKQQjAoQMyjhzGJdPEmov6cxJph4d9do4VvgT1m9vjO-DNZpg__",
        alt: "Imagen 1",
      },
      {
        id: 2,
        url: "https://s3-alpha-sig.figma.com/img/76c6/5ee9/4989818dea0524d2fb0186ddb4f48bb3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUGE8nZBPRk1OzDklOyub7LXKTpql0NtZnAOhzFdCvgq30k-CmCVxle3hFSEq-JOk8Vz1fvSYoQBdVhNY9c27m-ZymnQU-OLGdPZxw54MNe~Y3DosfLY9KsHw4g8opxw1Z6rgQjK~Ae5kXvZebfQnDALee0NirAxwv~YYioiHnbHO0vNnL~Lv8oWYvIEol~UBH0XYkgq4EqkJzxNBcD2YPAcEK8opUZPCaALCTp1Kfu87sDX2zDHP93hJZEcKmistfM5FZ5gNuPzy2wbQuVRmAbcMVDi9o5QfhhVJqJTlUM3KLDLYCupl9yxBZPVfju7iSZBzEq2IciWlvPbR58p9g__",
        alt: "Imagen 2",
      },
      {
        id: 3,
        url: "https://s3-alpha-sig.figma.com/img/3d63/16ca/e3bd50330ffa28bcb22ef67ef6231dd2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fN4xFn-A1fmg3WkLXZG3ixsk0hrtCB~XdQZN0F-KY1mAlsLniW~7rkVjJZiRYt2yMWVRV452Jgv-pCeT3wmAS4XZVPYyy-zemS42Is4P~PgvFKmck-sSZ-ENhhagvixbwpvyImvfK8rrzdtDxSGLTm-C9A7b3PIFiM~dtUhr2LNDK5yNWGoDfFRfNcKLSbbOw57VTbGc7VF7DMnPX7uDfFaFqzfEV9TBQ4a5zQ5RNq2ccnYavuGlwGAG8W6MMvdPND0hWJ40hj4nM1dH9yEz9mzKbBUaNKkNJ7aSlZRjyg3un5-V9cBZiHM95mzB6hyV03FWxn44xAVg7rmKOt6R7A__",
        alt: "Imagen 3",
      },
    ],
    nombre: "Tomato",
    tipo: "Cosmética natural",
    ubicacion: "Godoy Cruz, Mendoza, Argentina",
    descripcion:
      "Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden al planeta, con principios activos que dejen el pelo sano y la piel bella.",
  },
];

export default proveedores;
