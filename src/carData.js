const carData = [
    {
        id: 1,
        name: "VW Polo",
        category: "Kleinwagen",
        transmission: "Manuell",
        color: "white",
        extras: ["Kindersitz", "Navigationssystem", "Vollkasko"],
        pricePerDay: [40, 60],
        priority: "Preis",
        notes: "Günstiges Stadtauto, leicht zu parken und sparsam.",
    },
    {
        id: 2,
        name: "Toyota Corolla",
        category: "Kompaktklasse",
        transmission: "Automatik",
        color: "silver",
        extras: ["Zusatzfahrer", "Navigationssystem", "Vollkasko"],
        pricePerDay: [60, 80],
        priority: "Komfort",
        notes: "Zuverlässig für längere Fahrten.",
    },
    {
        id: 3,
        name: "BMW 3er",
        category: "Mittelklasse",
        transmission: "Automatik",
        color: "black",
        extras: ["Zusatzfahrer", "Navigationssystem", "Vollkasko"],
        pricePerDay: [90, 120],
        priority: "Design",
        notes: "Sportlich und hochwertig.",
    },
    {
        id: 4,
        name: "Tesla Model 3",
        category: "Elektrofahrzeug",
        transmission: "Automatik",
        color: "blue",
        extras: ["Navigationssystem", "Vollkasko"],
        pricePerDay: [100, 120],
        priority: "Nachhaltigkeit",
        notes: "Emissionsfreies Fahren.",
    },
    {
        id: 5,
        name: "VW Tiguan",
        category: "SUV",
        transmission: "Automatik",
        color: "gray",
        extras: ["Kindersitz", "Dachbox", "Zusatzfahrer", "Vollkasko"],
        pricePerDay: [80, 110],
        priority: "Komfort",
        notes: "Viel Platz für Familien.",
    },
    {
        id: 6,
        name: "Hyundai i10",
        category: "Kleinwagen",
        transmission: "Manuell",
        color: "darkred",
        extras: ["Kindersitz", "Vollkasko"],
        pricePerDay: [40, 55],
        priority: "Preis",
        notes: "Ideal für die Stadt.",
    },
    {
        id: 7,
        name: "Audi A4",
        category: "Mittelklasse",
        transmission: "Automatik",
        color: "gray",
        extras: ["Zusatzfahrer", "Navigationssystem", "Vollkasko"],
        pricePerDay: [90, 120],
        priority: "Komfort",
        notes: "Perfekt für Geschäftsreisen.",
    },
    {
        id: 8,
        name: "Skoda Octavia",
        category: "Kombi",
        transmission: "Manuell",
        color: "darkblue",
        extras: ["Dachbox", "Navigationssystem", "Vollkasko"],
        pricePerDay: [70, 90],
        priority: "Preis",
        notes: "Viel Stauraum.",
    },
    {
        id: 9,
        name: "Mercedes-Benz C-Klasse",
        category: "Mittelklasse",
        transmission: "Automatik",
        color: "black",
        extras: ["Zusatzfahrer", "Navigationssystem", "Vollkasko"],
        pricePerDay: [100, 120],
        priority: "Design",
        notes: "Luxuriös und elegant.",
    },
    {
        id: 10,
        name: "Renault Clio",
        category: "Kleinwagen",
        transmission: "Manuell",
        color: "white",
        extras: ["Kindersitz", "Vollkasko"],
        pricePerDay: [45, 60],
        priority: "Preis",
        notes: "Sparsam und zuverlässig.",
    },
    {
        id: 11,
        name: "Ford Kuga",
        category: "SUV",
        transmission: "Automatik",
        color: "#507B71",
        extras: ["Dachbox", "Zusatzfahrer", "Vollkasko"],
        pricePerDay: [80, 110],
        priority: "Komfort",
        notes: "Ideal für Reisen.",
    },
    {
        id: 12,
        name: "Peugeot 208",
        category: "Kleinwagen",
        transmission: "Automatik",
        color: "gold",
        extras: ["Navigationssystem", "Vollkasko"],
        pricePerDay: [50, 70],
        priority: "Design",
        notes: "Modern und auffällig.",
    },
    {
        id: 13,
        name: "Nissan Qashqai",
        category: "SUV",
        transmission: "Manuell",
        color: "brown",
        extras: ["Kindersitz", "Dachbox", "Vollkasko"],
        pricePerDay: [75, 100],
        priority: "Komfort",
        notes: "Solide Allround-Lösung.",
    },
    {
        id: 14,
        name: "Volvo XC40",
        category: "SUV",
        transmission: "Automatik",
        color: "white",
        extras: ["Zusatzfahrer", "Navigationssystem", "Vollkasko"],
        pricePerDay: [95, 120],
        priority: "Nachhaltigkeit",
        notes: "Sicher und umweltbewusst.",
    },
    {
        id: 15,
        name: "Fiat 500",
        category: "Kleinwagen",
        transmission: "Manuell",
        color: "#507B71",
        extras: ["Vollkasko"],
        pricePerDay: [40, 55],
        priority: "Design",
        notes: "Stylisch für Kurztrips.",
    },
];

const carDescription = [
    {
        id: 1,
        description:
            "Der VW Polo ist der ideale Begleiter für die Stadt.\nDank kompakter Maße lässt er sich mühelos parken.\nSparsam im Verbrauch und perfekt für kurze wie längere Strecken.",
    },
    {
        id: 2,
        description:
            "Der Toyota Corolla steht für Komfort und Zuverlässigkeit.\nDie Automatik sorgt für entspanntes Fahren.\nIdeal für lange Fahrten und den täglichen Einsatz.",
    },
    {
        id: 3,
        description:
            "Der BMW 3er verbindet sportliches Fahrgefühl mit elegantem Design.\nHochwertiger Innenraum und moderne Technik.\nPerfekt für alle, die Fahrspaß und Stil schätzen.",
    },
    {
        id: 4,
        description:
            "Das Tesla Model 3 bietet modernes, emissionsfreies Fahren.\nLeise, leistungsstark und innovativ.\nIdeal für nachhaltige Mobilität ohne Kompromisse.",
    },
    {
        id: 5,
        description:
            "Der VW Tiguan überzeugt mit viel Platz und hohem Komfort.\nPerfekt für Familien und längere Reisen.\nEin SUV, der Alltag und Urlaub mühelos meistert.",
    },
    {
        id: 6,
        description:
            "Der Hyundai i10 ist ein wendiger Kleinwagen für die Stadt.\nEinfach zu fahren und sehr sparsam.\nIdeal für kurze Wege und urbane Mobilität.",
    },
    {
        id: 7,
        description:
            "Der Audi A4 ist die perfekte Wahl für Geschäftsreisen.\nKomfortabel, leise und hochwertig verarbeitet.\nEin souveränes Fahrerlebnis auf jeder Strecke.",
    },
    {
        id: 8,
        description:
            "Der Skoda Octavia bietet viel Stauraum und hohe Alltagstauglichkeit.\nIdeal für Familien oder Reisen mit Gepäck.\nPraktisch, zuverlässig und preisbewusst.",
    },
    {
        id: 9,
        description:
            "Die Mercedes-Benz C-Klasse steht für Luxus und Eleganz.\nKomfortables Fahrgefühl und edles Design.\nPerfekt für anspruchsvolle Fahrer.",
    },
    {
        id: 10,
        description:
            "Der Renault Clio ist ein sparsamer und zuverlässiger Kleinwagen.\nIdeal für Stadtverkehr und kurze Ausflüge.\nEin praktisches Auto mit gutem Preis-Leistungs-Verhältnis.",
    },
    {
        id: 11,
        description:
            "Der Ford Kuga ist ein komfortabler SUV für Reisen.\nViel Platz und angenehmes Fahrgefühl.\nIdeal für Familien und längere Strecken.",
    },
    {
        id: 12,
        description:
            "Der Peugeot 208 überzeugt mit modernem Design.\nAuffällige Optik kombiniert mit komfortabler Automatik.\nPerfekt für stilbewusste Fahrer.",
    },
    {
        id: 13,
        description:
            "Der Nissan Qashqai ist ein vielseitiger SUV für jeden Tag.\nSolide, komfortabel und zuverlässig.\nEine ausgewogene Lösung für Stadt und Land.",
    },
    {
        id: 14,
        description:
            "Der Volvo XC40 legt großen Wert auf Sicherheit und Nachhaltigkeit.\nKomfortables Fahren mit modernster Technik.\nIdeal für umweltbewusste Fahrer.",
    },
    {
        id: 15,
        description:
            "Der Fiat 500 ist ein stylischer Kleinwagen mit Charme.\nPerfekt für Kurztrips und die Innenstadt.\nKompakt, verspielt und einzigartig im Design.",
    },
];

export { carData, carDescription };
