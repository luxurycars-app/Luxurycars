
/* ── Car database ── */
var CARS = [{n:"Volkswagen Fusca",t:"sedan"},
    {n:"Toyota Corolla",t:"sedan"},{n:"Toyota Camry",t:"sedan"},{n:"Toyota Yaris",t:"sedan"},{n:"Toyota Prius",t:"sedan"},{n:"Toyota Etios",t:"sedan"},
    {n:"Toyota RAV4",t:"suv"},{n:"Toyota Hilux SW4",t:"suv"},{n:"Toyota Land Cruiser",t:"suv"},{n:"Toyota Land Cruiser Prado",t:"suv"},{n:"Toyota C-HR",t:"suv"},{n:"Toyota Fortuner",t:"suv"},{n:"Toyota 4Runner",t:"suv"},{n:"Toyota Sequoia",t:"suv"},{n:"Toyota Venza",t:"suv"},
    {n:"Toyota Hilux",t:"truck"},{n:"Toyota Tundra",t:"truck"},{n:"Toyota Tacoma",t:"truck"},
    {n:"Honda Civic",t:"sedan"},{n:"Honda City",t:"sedan"},{n:"Honda Fit",t:"sedan"},{n:"Honda Accord",t:"sedan"},{n:"Honda Jazz",t:"sedan"},{n:"Honda Insight",t:"sedan"},
    {n:"Honda CR-V",t:"suv"},{n:"Honda HR-V",t:"suv"},{n:"Honda Pilot",t:"suv"},{n:"Honda WR-V",t:"suv"},{n:"Honda Passport",t:"suv"},{n:"Honda Ridgeline",t:"truck"},
    {n:"Volkswagen Polo",t:"sedan"},{n:"Volkswagen Virtus",t:"sedan"},{n:"Volkswagen Gol",t:"sedan"},{n:"Volkswagen Jetta",t:"sedan"},{n:"Volkswagen Passat",t:"sedan"},{n:"Volkswagen Golf",t:"sedan"},{n:"Volkswagen Voyage",t:"sedan"},{n:"Volkswagen Up",t:"sedan"},
    {n:"Volkswagen Tiguan",t:"suv"},{n:"Volkswagen T-Cross",t:"suv"},{n:"Volkswagen Taos",t:"suv"},{n:"Volkswagen Touareg",t:"suv"},{n:"Volkswagen Nivus",t:"suv"},{n:"Volkswagen Atlas",t:"suv"},{n:"Volkswagen Amarok",t:"truck"},{n:"Volkswagen Saveiro",t:"truck"},
    {n:"Chevrolet Onix",t:"sedan"},{n:"Chevrolet Cruze",t:"sedan"},{n:"Chevrolet Malibu",t:"sedan"},{n:"Chevrolet Cobalt",t:"sedan"},{n:"Chevrolet Prisma",t:"sedan"},{n:"Chevrolet Spark",t:"sedan"},
    {n:"Chevrolet Equinox",t:"suv"},{n:"Chevrolet Tracker",t:"suv"},{n:"Chevrolet Trailblazer",t:"suv"},{n:"Chevrolet Blazer",t:"suv"},{n:"Chevrolet Trax",t:"suv"},{n:"Chevrolet Tahoe",t:"suv"},{n:"Chevrolet Suburban",t:"suv"},
    {n:"Chevrolet S10",t:"truck"},{n:"Chevrolet Colorado",t:"truck"},{n:"Chevrolet Silverado",t:"truck"},
    {n:"Ford Ka",t:"sedan"},{n:"Ford Fiesta",t:"sedan"},{n:"Ford Focus",t:"sedan"},{n:"Ford Fusion",t:"sedan"},{n:"Ford Mustang",t:"sedan"},{n:"Ford Taurus",t:"sedan"},
    {n:"Ford EcoSport",t:"suv"},{n:"Ford Territory",t:"suv"},{n:"Ford Explorer",t:"suv"},{n:"Ford Edge",t:"suv"},{n:"Ford Expedition",t:"suv"},{n:"Ford Escape",t:"suv"},{n:"Ford Bronco",t:"suv"},{n:"Ford Bronco Sport",t:"suv"},
    {n:"Ford Ranger",t:"truck"},{n:"Ford F-150",t:"truck"},{n:"Ford F-250",t:"truck"},{n:"Ford Maverick",t:"truck"},
    {n:"Fiat Mobi",t:"sedan"},{n:"Fiat Argo",t:"sedan"},{n:"Fiat Cronos",t:"sedan"},{n:"Fiat Punto",t:"sedan"},{n:"Fiat Grand Siena",t:"sedan"},{n:"Fiat 500",t:"sedan"},{n:"Fiat Tipo",t:"sedan"},
    {n:"Fiat Pulse",t:"suv"},{n:"Fiat Fastback",t:"suv"},{n:"Fiat Toro",t:"truck"},{n:"Fiat Strada",t:"truck"},{n:"Fiat Fiorino",t:"truck"},
    {n:"Renault Kwid",t:"sedan"},{n:"Renault Sandero",t:"sedan"},{n:"Renault Logan",t:"sedan"},{n:"Renault Clio",t:"sedan"},{n:"Renault Megane",t:"sedan"},{n:"Renault Fluence",t:"sedan"},
    {n:"Renault Duster",t:"suv"},{n:"Renault Captur",t:"suv"},{n:"Renault Koleos",t:"suv"},{n:"Renault Oroch",t:"truck"},
    {n:"Hyundai HB20",t:"sedan"},{n:"Hyundai HB20S",t:"sedan"},{n:"Hyundai Elantra",t:"sedan"},{n:"Hyundai Sonata",t:"sedan"},{n:"Hyundai Azera",t:"sedan"},{n:"Hyundai Accent",t:"sedan"},{n:"Hyundai Ioniq 6",t:"sedan"},
    {n:"Hyundai Creta",t:"suv"},{n:"Hyundai Tucson",t:"suv"},{n:"Hyundai Santa Fe",t:"suv"},{n:"Hyundai ix35",t:"suv"},{n:"Hyundai Ioniq 5",t:"suv"},{n:"Hyundai Palisade",t:"suv"},{n:"Hyundai Venue",t:"suv"},
    {n:"Kia Cerato",t:"sedan"},{n:"Kia K5",t:"sedan"},{n:"Kia Stinger",t:"sedan"},{n:"Kia Rio",t:"sedan"},{n:"Kia Niro",t:"sedan"},
    {n:"Kia Sportage",t:"suv"},{n:"Kia Sorento",t:"suv"},{n:"Kia Telluride",t:"suv"},{n:"Kia Seltos",t:"suv"},{n:"Kia EV6",t:"suv"},
    {n:"Nissan Versa",t:"sedan"},{n:"Nissan March",t:"sedan"},{n:"Nissan Sentra",t:"sedan"},{n:"Nissan Altima",t:"sedan"},{n:"Nissan Leaf",t:"sedan"},
    {n:"Nissan Kicks",t:"suv"},{n:"Nissan X-Trail",t:"suv"},{n:"Nissan Murano",t:"suv"},{n:"Nissan Pathfinder",t:"suv"},{n:"Nissan Rogue",t:"suv"},{n:"Nissan Armada",t:"suv"},
    {n:"Nissan Frontier",t:"truck"},{n:"Nissan Titan",t:"truck"},
    {n:"Jeep Renegade",t:"suv"},{n:"Jeep Compass",t:"suv"},{n:"Jeep Commander",t:"suv"},{n:"Jeep Cherokee",t:"suv"},{n:"Jeep Grand Cherokee",t:"suv"},{n:"Jeep Wrangler",t:"suv"},{n:"Jeep Gladiator",t:"truck"},
    {n:"BMW 118i",t:"sedan"},{n:"BMW 120i",t:"sedan"},{n:"BMW 320i",t:"sedan"},{n:"BMW 330i",t:"sedan"},{n:"BMW 520i",t:"sedan"},{n:"BMW 530i",t:"sedan"},{n:"BMW 730i",t:"sedan"},{n:"BMW M3",t:"sedan"},{n:"BMW M4",t:"sedan"},{n:"BMW M5",t:"sedan"},{n:"BMW i4",t:"sedan"},{n:"BMW i7",t:"sedan"},
    {n:"BMW X1",t:"suv"},{n:"BMW X2",t:"suv"},{n:"BMW X3",t:"suv"},{n:"BMW X4",t:"suv"},{n:"BMW X5",t:"suv"},{n:"BMW X6",t:"suv"},{n:"BMW X7",t:"suv"},{n:"BMW iX",t:"suv"},
    {n:"Mercedes-Benz A 200",t:"sedan"},{n:"Mercedes-Benz C 180",t:"sedan"},{n:"Mercedes-Benz C 200",t:"sedan"},{n:"Mercedes-Benz C 300",t:"sedan"},{n:"Mercedes-Benz E 200",t:"sedan"},{n:"Mercedes-Benz E 300",t:"sedan"},{n:"Mercedes-Benz S 400",t:"sedan"},{n:"Mercedes-Benz S 500",t:"sedan"},{n:"Mercedes-Benz CLA 200",t:"sedan"},{n:"Mercedes-Benz EQS",t:"sedan"},{n:"Mercedes-Benz EQE",t:"sedan"},
    {n:"Mercedes-Benz GLA 200",t:"suv"},{n:"Mercedes-Benz GLB 200",t:"suv"},{n:"Mercedes-Benz GLC 200",t:"suv"},{n:"Mercedes-Benz GLE 300d",t:"suv"},{n:"Mercedes-Benz GLS 400d",t:"suv"},{n:"Mercedes-Benz G-Class",t:"suv"},
    {n:"Audi A1",t:"sedan"},{n:"Audi A3",t:"sedan"},{n:"Audi A4",t:"sedan"},{n:"Audi A5",t:"sedan"},{n:"Audi A6",t:"sedan"},{n:"Audi A7",t:"sedan"},{n:"Audi A8",t:"sedan"},{n:"Audi TT",t:"sedan"},{n:"Audi RS3",t:"sedan"},{n:"Audi RS5",t:"sedan"},{n:"Audi RS6",t:"sedan"},{n:"Audi RS7",t:"sedan"},{n:"Audi e-tron GT",t:"sedan"},
    {n:"Audi Q2",t:"suv"},{n:"Audi Q3",t:"suv"},{n:"Audi Q5",t:"suv"},{n:"Audi Q7",t:"suv"},{n:"Audi Q8",t:"suv"},{n:"Audi e-tron",t:"suv"},
    {n:"Volvo S60",t:"sedan"},{n:"Volvo S90",t:"sedan"},{n:"Volvo XC40",t:"suv"},{n:"Volvo XC60",t:"suv"},{n:"Volvo XC90",t:"suv"},{n:"Volvo C40 Recharge",t:"suv"},{n:"Volvo EX90",t:"suv"},{n:"Volvo EX30",t:"suv"},
    {n:"Land Rover Discovery Sport",t:"suv"},{n:"Land Rover Discovery",t:"suv"},{n:"Land Rover Defender",t:"suv"},{n:"Land Rover Range Rover Evoque",t:"suv"},{n:"Land Rover Range Rover Velar",t:"suv"},{n:"Land Rover Range Rover Sport",t:"suv"},{n:"Land Rover Range Rover",t:"suv"},
    {n:"Jaguar XE",t:"sedan"},{n:"Jaguar XF",t:"sedan"},{n:"Jaguar XJ",t:"sedan"},{n:"Jaguar F-Type",t:"sedan"},{n:"Jaguar E-Pace",t:"suv"},{n:"Jaguar F-Pace",t:"suv"},{n:"Jaguar I-Pace",t:"suv"},
    {n:"Porsche 911",t:"sedan"},{n:"Porsche Panamera",t:"sedan"},{n:"Porsche Taycan",t:"sedan"},{n:"Porsche 718 Boxster",t:"sedan"},{n:"Porsche 718 Cayman",t:"sedan"},{n:"Porsche Macan",t:"suv"},{n:"Porsche Cayenne",t:"suv"},
    {n:"Ferrari Roma",t:"sedan"},{n:"Ferrari Portofino",t:"sedan"},{n:"Ferrari SF90",t:"sedan"},{n:"Ferrari 296 GTB",t:"sedan"},{n:"Ferrari 812 Superfast",t:"sedan"},{n:"Ferrari F8 Tributo",t:"sedan"},{n:"Ferrari Purosangue",t:"suv"},
    {n:"Lamborghini Huracan",t:"sedan"},{n:"Lamborghini Revuelto",t:"sedan"},{n:"Lamborghini Aventador",t:"sedan"},{n:"Lamborghini Urus",t:"suv"},
    {n:"Maserati Ghibli",t:"sedan"},{n:"Maserati Quattroporte",t:"sedan"},{n:"Maserati MC20",t:"sedan"},{n:"Maserati GranTurismo",t:"sedan"},{n:"Maserati Levante",t:"suv"},{n:"Maserati Grecale",t:"suv"},
    {n:"Aston Martin Vantage",t:"sedan"},{n:"Aston Martin DB11",t:"sedan"},{n:"Aston Martin DB12",t:"sedan"},{n:"Aston Martin DBS",t:"sedan"},{n:"Aston Martin Valhalla",t:"sedan"},{n:"Aston Martin Valkyrie",t:"sedan"},{n:"Aston Martin DBX",t:"suv"},
    {n:"Bentley Continental GT",t:"sedan"},{n:"Bentley Flying Spur",t:"sedan"},{n:"Bentley Mulliner Batur",t:"sedan"},{n:"Bentley Bentayga",t:"suv"},
    {n:"Rolls-Royce Ghost",t:"sedan"},{n:"Rolls-Royce Phantom",t:"sedan"},{n:"Rolls-Royce Wraith",t:"sedan"},{n:"Rolls-Royce Dawn",t:"sedan"},{n:"Rolls-Royce Spectre",t:"sedan"},{n:"Rolls-Royce Cullinan",t:"suv"},
    {n:"Bugatti Chiron",t:"sedan"},{n:"Bugatti Veyron",t:"sedan"},{n:"Bugatti Divo",t:"sedan"},{n:"Bugatti Bolide",t:"sedan"},{n:"Bugatti Mistral",t:"sedan"},
    {n:"McLaren 720S",t:"sedan"},{n:"McLaren 750S",t:"sedan"},{n:"McLaren GT",t:"sedan"},{n:"McLaren Artura",t:"sedan"},{n:"McLaren P1",t:"sedan"},{n:"McLaren Senna",t:"sedan"},{n:"McLaren Speedtail",t:"sedan"},{n:"McLaren Elva",t:"sedan"},
    {n:"Pagani Huayra",t:"sedan"},{n:"Pagani Zonda",t:"sedan"},{n:"Pagani Utopia",t:"sedan"},
    {n:"Koenigsegg Jesko",t:"sedan"},{n:"Koenigsegg Gemera",t:"sedan"},{n:"Koenigsegg Regera",t:"sedan"},{n:"Koenigsegg Agera RS",t:"sedan"},{n:"Koenigsegg CC850",t:"sedan"},
    {n:"Lotus Emira",t:"sedan"},{n:"Lotus Evija",t:"sedan"},{n:"Lotus Eletre",t:"suv"},{n:"Lotus Emeya",t:"sedan"},
    {n:"Alfa Romeo Giulia",t:"sedan"},{n:"Alfa Romeo Stelvio",t:"suv"},{n:"Alfa Romeo Tonale",t:"suv"},
    {n:"Peugeot 208",t:"sedan"},{n:"Peugeot 308",t:"sedan"},{n:"Peugeot 408",t:"sedan"},{n:"Peugeot 508",t:"sedan"},{n:"Peugeot 2008",t:"suv"},{n:"Peugeot 3008",t:"suv"},{n:"Peugeot 5008",t:"suv"},{n:"Peugeot Landtrek",t:"truck"},
    {n:"Citroen C3",t:"sedan"},{n:"Citroen C4",t:"sedan"},{n:"Citroen C3 Aircross",t:"suv"},{n:"Citroen C5 Aircross",t:"suv"},{n:"Citroen Basalt",t:"suv"},
    {n:"Chevrolet Onix",t:"sedan"},{n:"Chevrolet Cruze",t:"sedan"},{n:"Chevrolet Spin",t:"sedan"},{n:"Chevrolet Meriva",t:"sedan"},{n:"Chevrolet Zafira",t:"sedan"},{n:"Chevrolet Prisma",t:"sedan"},{n:"Chevrolet Celta",t:"sedan"},{n:"Chevrolet Corsa",t:"sedan"},{n:"Chevrolet Vectra",t:"sedan"},{n:"Chevrolet Astra",t:"sedan"},{n:"Chevrolet Agile",t:"sedan"},{n:"Chevrolet Montana",t:"truck"},{n:"Chevrolet S10",t:"truck"},{n:"Chevrolet Tracker",t:"suv"},{n:"Chevrolet Equinox",t:"suv"},{n:"Chevrolet Trailblazer",t:"suv"},
    {n:"Fiat Uno",t:"sedan"},{n:"Fiat Mobi",t:"sedan"},{n:"Fiat Argo",t:"sedan"},{n:"Fiat Cronos",t:"sedan"},{n:"Fiat Palio",t:"sedan"},{n:"Fiat Siena",t:"sedan"},{n:"Fiat Grand Siena",t:"sedan"},{n:"Fiat Idea",t:"sedan"},{n:"Fiat Punto",t:"sedan"},{n:"Fiat Linea",t:"sedan"},{n:"Fiat Pulse",t:"suv"},{n:"Fiat Fastback",t:"suv"},{n:"Fiat Strada",t:"truck"},{n:"Fiat Toro",t:"truck"},{n:"Fiat Titano",t:"truck"},{n:"Fiat Fiorino",t:"sedan"},
    {n:"Volkswagen Gol",t:"sedan"},{n:"Volkswagen Voyage",t:"sedan"},{n:"Volkswagen Fox",t:"sedan"},{n:"Volkswagen CrossFox",t:"sedan"},{n:"Volkswagen SpaceFox",t:"sedan"},{n:"Volkswagen Polo",t:"sedan"},{n:"Volkswagen Virtus",t:"sedan"},{n:"Volkswagen Up",t:"sedan"},{n:"Volkswagen Jetta",t:"sedan"},{n:"Volkswagen Nivus",t:"suv"},{n:"Volkswagen T-Cross",t:"suv"},{n:"Volkswagen Taos",t:"suv"},{n:"Volkswagen Tiguan",t:"suv"},{n:"Volkswagen Saveiro",t:"truck"},{n:"Volkswagen Amarok",t:"truck"},
    {n:"Ford Ka",t:"sedan"},{n:"Ford Fiesta",t:"sedan"},{n:"Ford Focus",t:"sedan"},{n:"Ford EcoSport",t:"suv"},{n:"Ford Territory",t:"suv"},{n:"Ford Bronco",t:"suv"},{n:"Ford Ranger",t:"truck"},{n:"Ford Maverick",t:"truck"},
    {n:"Renault Kwid",t:"sedan"},{n:"Renault Sandero",t:"sedan"},{n:"Renault Logan",t:"sedan"},{n:"Renault Clio",t:"sedan"},{n:"Renault Duster",t:"suv"},{n:"Renault Captur",t:"suv"},{n:"Renault Oroch",t:"truck"},
    {n:"Hyundai HB20",t:"sedan"},{n:"Hyundai HB20S",t:"sedan"},{n:"Hyundai i30",t:"sedan"},{n:"Hyundai Creta",t:"suv"},{n:"Hyundai Tucson",t:"suv"},{n:"Hyundai Santa Fe",t:"suv"},
    {n:"Nissan March",t:"sedan"},{n:"Nissan Versa",t:"sedan"},{n:"Nissan Sentra",t:"sedan"},{n:"Nissan Kicks",t:"suv"},{n:"Nissan Frontier",t:"truck"},
    {n:"Mitsubishi Lancer",t:"sedan"},{n:"Mitsubishi Galant",t:"sedan"},{n:"Mitsubishi Mirage",t:"sedan"},{n:"Mitsubishi Outlander",t:"suv"},{n:"Mitsubishi Eclipse Cross",t:"suv"},{n:"Mitsubishi ASX",t:"suv"},{n:"Mitsubishi Pajero",t:"suv"},{n:"Mitsubishi Pajero Sport",t:"suv"},{n:"Mitsubishi L200 Triton",t:"truck"},
    {n:"Subaru Impreza",t:"sedan"},{n:"Subaru Legacy",t:"sedan"},{n:"Subaru BRZ",t:"sedan"},{n:"Subaru WRX",t:"sedan"},{n:"Subaru Outback",t:"suv"},{n:"Subaru Forester",t:"suv"},{n:"Subaru Crosstrek",t:"suv"},{n:"Subaru Ascent",t:"suv"},
    {n:"Mazda 2",t:"sedan"},{n:"Mazda 3",t:"sedan"},{n:"Mazda 6",t:"sedan"},{n:"Mazda MX-5",t:"sedan"},{n:"Mazda CX-3",t:"suv"},{n:"Mazda CX-30",t:"suv"},{n:"Mazda CX-5",t:"suv"},{n:"Mazda CX-50",t:"suv"},{n:"Mazda CX-9",t:"suv"},{n:"Mazda CX-90",t:"suv"},
    {n:"Suzuki Swift",t:"sedan"},{n:"Suzuki Baleno",t:"sedan"},{n:"Suzuki Vitara",t:"suv"},{n:"Suzuki Grand Vitara",t:"suv"},{n:"Suzuki Jimny",t:"suv"},
    {n:"Lexus IS 300",t:"sedan"},{n:"Lexus ES 300h",t:"sedan"},{n:"Lexus LS 500h",t:"sedan"},{n:"Lexus LC 500",t:"sedan"},{n:"Lexus RC",t:"sedan"},{n:"Lexus UX",t:"suv"},{n:"Lexus NX",t:"suv"},{n:"Lexus RX",t:"suv"},{n:"Lexus GX",t:"suv"},{n:"Lexus LX",t:"suv"},
    {n:"Genesis G70",t:"sedan"},{n:"Genesis G80",t:"sedan"},{n:"Genesis G90",t:"sedan"},{n:"Genesis GV70",t:"suv"},{n:"Genesis GV80",t:"suv"},
    {n:"Tesla Model 3",t:"sedan"},{n:"Tesla Model S",t:"sedan"},{n:"Tesla Roadster",t:"sedan"},{n:"Tesla Model Y",t:"suv"},{n:"Tesla Model X",t:"suv"},{n:"Tesla Cybertruck",t:"truck"},
    {n:"Rivian R1T",t:"truck"},{n:"Rivian R1S",t:"suv"},
    {n:"Lucid Air",t:"sedan"},{n:"Lucid Gravity",t:"suv"},
    {n:"Polestar 2",t:"sedan"},{n:"Polestar 3",t:"suv"},{n:"Polestar 4",t:"suv"},{n:"Polestar 5",t:"sedan"},
    {n:"Fisker Ocean",t:"suv"},
    {n:"RAM 1500",t:"truck"},{n:"RAM 2500",t:"truck"},{n:"RAM 3500",t:"truck"},{n:"RAM 700",t:"truck"},{n:"RAM 1000",t:"truck"},{n:"RAM Rampage",t:"truck"},
    {n:"Dodge Charger",t:"sedan"},{n:"Dodge Challenger",t:"sedan"},{n:"Dodge Hornet",t:"suv"},{n:"Dodge Durango",t:"suv"},
    {n:"GMC Sierra",t:"truck"},{n:"GMC Canyon",t:"truck"},{n:"GMC Hummer EV",t:"truck"},{n:"GMC Acadia",t:"suv"},{n:"GMC Yukon",t:"suv"},{n:"GMC Terrain",t:"suv"},
    {n:"Cadillac CT4",t:"sedan"},{n:"Cadillac CT5",t:"sedan"},{n:"Cadillac Celestiq",t:"sedan"},{n:"Cadillac XT4",t:"suv"},{n:"Cadillac XT5",t:"suv"},{n:"Cadillac XT6",t:"suv"},{n:"Cadillac Lyriq",t:"suv"},{n:"Cadillac Escalade",t:"suv"},
    {n:"Lincoln Corsair",t:"suv"},{n:"Lincoln Nautilus",t:"suv"},{n:"Lincoln Aviator",t:"suv"},{n:"Lincoln Navigator",t:"suv"},
    {n:"BYD Dolphin",t:"sedan"},{n:"BYD Han",t:"sedan"},{n:"BYD Seal",t:"sedan"},{n:"BYD Atto 3",t:"suv"},{n:"BYD Tang",t:"suv"},{n:"BYD Song Plus",t:"suv"},{n:"BYD Yuan Plus",t:"suv"},
    {n:"Chery Arrizo 6",t:"sedan"},{n:"Chery Arrizo 8",t:"sedan"},{n:"Chery Tiggo 5x",t:"suv"},{n:"Chery Tiggo 7 Pro",t:"suv"},{n:"Chery Tiggo 8 Pro",t:"suv"},
    {n:"GWM Haval H6",t:"suv"},{n:"GWM Haval H2",t:"suv"},{n:"GWM Poer",t:"truck"},{n:"GWM Ora 03",t:"sedan"},{n:"GWM Tank 300",t:"suv"},
    {n:"Infiniti Q50",t:"sedan"},{n:"Infiniti Q60",t:"sedan"},{n:"Infiniti QX50",t:"suv"},{n:"Infiniti QX55",t:"suv"},{n:"Infiniti QX60",t:"suv"},{n:"Infiniti QX80",t:"suv"},
    {n:"Acura TLX",t:"sedan"},{n:"Acura Integra",t:"sedan"},{n:"Acura RDX",t:"suv"},{n:"Acura MDX",t:"suv"},
    {n:"SEAT Ibiza",t:"sedan"},{n:"SEAT Leon",t:"sedan"},{n:"SEAT Arona",t:"suv"},{n:"SEAT Ateca",t:"suv"},{n:"SEAT Tarraco",t:"suv"},
    {n:"Cupra Formentor",t:"suv"},{n:"Cupra Leon",t:"sedan"},{n:"Cupra Ateca",t:"suv"},{n:"Cupra Born",t:"sedan"},
    {n:"Skoda Octavia",t:"sedan"},{n:"Skoda Fabia",t:"sedan"},{n:"Skoda Superb",t:"sedan"},{n:"Skoda Scala",t:"sedan"},{n:"Skoda Kamiq",t:"suv"},{n:"Skoda Karoq",t:"suv"},{n:"Skoda Kodiaq",t:"suv"},{n:"Skoda Enyaq",t:"suv"},
    {n:"Opel Astra",t:"sedan"},{n:"Opel Corsa",t:"sedan"},{n:"Opel Mokka",t:"suv"},{n:"Opel Crossland",t:"suv"},{n:"Opel Grandland",t:"suv"},
    {n:"Chrysler 300",t:"sedan"},{n:"Chrysler Pacifica",t:"suv"},
    {n:"Troller T4",t:"suv"},
    {n:"Mini Cooper",t:"sedan"},{n:"Mini Clubman",t:"sedan"},{n:"Mini Countryman",t:"suv"},
    {n:"Smart Fortwo",t:"sedan"},{n:"Smart #1",t:"suv"},{n:"Smart #3",t:"suv"},
    {n:"Lancia Ypsilon",t:"sedan"},{n:"Lancia Pu+Ra HPE",t:"sedan"},
    {n:"Saab 9-3",t:"sedan"},{n:"Saab 9-5",t:"sedan"},
    {n:"Pontiac GTO",t:"sedan"},{n:"Pontiac Firebird",t:"sedan"},
    {n:"Holden Commodore",t:"sedan"},
    {n:"Maybach S-Class",t:"sedan"},{n:"Maybach GLS",t:"suv"}
];

var TYPE = {
    sedan: {p:70,  lbl:"Sedã / Hatch",       icon:"🚗"},
    suv:   {p:90,  lbl:"SUV / Crossover",     icon:"🚙"},
    truck: {p:110, lbl:"Camionete / Pick-up", icon:"🛻"},
};

var SVCS = [
    {l:"Lavagem de motor",                                      p:40},
    {l:"Revitalização plásticos int.",                          p:25},
    {l:"Revitalização plásticos ext.",                          p:20},
    {l:"Restauração farol (Par)",                               p:120},
    {l:"Higienização bancos tecido",                            p:180},
    {l:"Higienização + Hidratação",                             p:220},
    {l:"Remoção chuva ácida",                                   p:20},
    {l:"Cristalização dos vidros",                              p:45},
    {l:"Cera — brilho e proteção até 15 dias",                  p:25},
    {l:"Cera Cadillac — brilho e proteção até 6 meses", p:50},
    {l:"Revitalização de pintura — queimada ou fosca, até 9 meses", p:149.99},
    {l:"Proteção SiO₂ PRO Vonixx",                             p:60,  sub:"Brilho intenso, toque liso e proteção duradoura para a pintura."},
    {l:"Limpeza do teto",                                       p:90},
];

/* ── State ── */
var step        = 1;
var selCar      = null;
var selSlot     = null;
var dropResults = [];

/* ════════ BOOT ════════ */
window.addEventListener("DOMContentLoaded", function() {

    /* Build toggle list */
    var tl = document.getElementById("toggleList");
    SVCS.forEach(function(s) {
        var row = document.createElement("div");
        row.className = "toggle-row";
        row.dataset.price = s.p;
        row.dataset.on = "0";
        var priceStr = Number.isInteger(s.p) ? s.p + ",00" : s.p.toFixed(2).replace(".", ",");
        row.innerHTML =
            '<div class="svc-info">' +
                '<span class="svc-label">' + s.l + '</span>' +
                (s.sub ? '<span style="font-size:11px;color:var(--text-secondary);display:block;margin-top:3px;font-weight:300;">' + s.sub + '</span>' : '') +
                '<span class="svc-price">+ R$ ' + priceStr + '</span>' +
            '</div>' +
            '<div class="check-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>';
        
        row.addEventListener("click", function() {
            var isOn = row.dataset.on === "1";
            row.dataset.on = isOn ? "0" : "1";
            row.classList.toggle("on", !isOn);
            calcularTotal();
        });
        tl.appendChild(row);
    });

    /* Date */
    var tzDate = new Date();
    var today = tzDate.getFullYear() + "-" + 
                String(tzDate.getMonth() + 1).padStart(2, '0') + "-" + 
                String(tzDate.getDate()).padStart(2, '0');
    var di = document.getElementById("fecha-agendamento");
    di.value = today;
    di.min = today;

    /* Payment Option Logic */
    document.querySelectorAll(".pay-option").forEach(function(opt) {
        opt.addEventListener("click", function() {
            document.querySelectorAll(".pay-option").forEach(o => o.classList.remove("on"));
            opt.classList.add("on");
        });
    });

    renderSlots();
    calcularTotal();
    initSearch();
});

/* ════════ PACKAGE SELECTOR ════════ */
function selectPkg(el) {
    document.querySelectorAll(".pkg-card").forEach(function(c) { c.classList.remove("on"); });
    el.classList.add("on");
    document.getElementById("pkg-mult").value     = el.dataset.mult;
    document.getElementById("pkg-name-val").value = el.dataset.pkg;
    calcularTotal();
    if (document.getElementById("fecha-agendamento").value) {
        renderSlots();
    }
}

/* ════════ CAR SEARCH ════════ */
function norm(s) {
    return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function initSearch() {
    var inp = document.getElementById("carInput");
    var dd  = document.getElementById("carDrop");

    inp.addEventListener("input", function() {
        var q = this.value.trim();
        if (q.length < 1) { closeDrop(); return; }
        showDrop(q);
    });

    inp.addEventListener("focus", function() {
        var q = this.value.trim();
        if (q.length > 0) showDrop(q);
    });

    inp.addEventListener("keydown", function(e) {
        var items = dd.querySelectorAll(".car-item");
        var hiIdx = -1;
        items.forEach(function(el, i) { if (el.classList.contains("hi")) hiIdx = i; });

        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (hiIdx >= 0) items[hiIdx].classList.remove("hi");
            var next = (hiIdx + 1) % items.length;
            items[next].classList.add("hi");
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (hiIdx >= 0) items[hiIdx].classList.remove("hi");
            var prev = (hiIdx - 1 + items.length) % items.length;
            items[prev].classList.add("hi");
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (hiIdx >= 0) pickCar(hiIdx);
        } else if (e.key === "Escape") {
            closeDrop();
        }
    });

    document.addEventListener("click", function(e) {
        if (!e.target.closest(".search-wrap")) closeDrop();
    });
}

function showDrop(q) {
    var dd = document.getElementById("carDrop");
    var qn = norm(q);
    dropResults = CARS.filter(function(c) { return norm(c.n).indexOf(qn) !== -1; }).slice(0, 9);

    var exactMatch = dropResults.some(function(c) { return norm(c.n) === qn; });
    var hasResults = dropResults.length > 0;
    var html = "";

    var safeQ = q.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    if (hasResults) {
        var esc = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        html += dropResults.map(function(c, i) {
            var cfg = TYPE[c.t];
            var hl = c.n.replace(new RegExp("(" + esc + ")", "gi"), "<mark>$1</mark>");
            var lbl = cfg.lbl;
            return '<div class="car-item" data-i="' + i + '">' +
                   '<div class="car-info">' +
                       '<div class="car-name">' + hl + '</div>' +
                       '<div class="car-type">' + lbl + '</div>' +
                   '</div>' +
                   '<div class="car-price">R$ ' + cfg.p + ',00</div>' +
                   '</div>';
        }).join("");
    } else {
        html += '<div class="no-result" style="border-bottom:none;">Nenhum modelo encontrado para "<b>' + safeQ + '</b>"</div>';
    }

    var jsSafeQ = q.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html = '<div class="add-custom-btn" style="background:rgba(14,165,233,0.15); border-bottom:1px solid rgba(255,255,255,0.05); color:var(--accent); font-weight:500;" onclick="openCustomForm(\'' + jsSafeQ + '\')">✨ Não achou seu carro? <b>Clique aqui para digitar</b></div>' + html;
    
    dd.innerHTML = html;

    dd.querySelectorAll(".car-item").forEach(function(el) {
        el.addEventListener("click", function() {
            pickCar(parseInt(el.dataset.i));
        });
    });

    dd.classList.add("open");
}

function openCustomForm(q) {
    closeDrop();
    document.getElementById("customCarBrand").value = "";
    document.getElementById("customCarName").value = q || "";
    document.getElementById("customModal").classList.add("show");
}

function closeCustomForm() {
    document.getElementById("customModal").classList.remove("show");
}

function submitCustomCar(type) {
    var brand = document.getElementById("customCarBrand").value.trim();
    var model = document.getElementById("customCarName").value.trim();
    
    if (!brand || !model) {
        showToast("Por favor, digite a marca e o modelo do carro.");
        return;
    }
    
    var fullName = brand + " " + model;
    closeCustomForm();
    finalizeCar(fullName, type);
}

function pickCar(i) {
    var car = dropResults[i];
    if (!car) return;
    closeDrop();
    finalizeCar(car.n, car.t);
}

function finalizeCar(name, type) {
    selCar = { n: name, t: type };
    var cfg = TYPE[type];

    document.getElementById("carInput").value = name;
    document.getElementById("tipo-veiculo").value = cfg.p;

    document.getElementById("selIcon").textContent  = cfg.icon;
    document.getElementById("selName").textContent  = name;
    document.getElementById("selCat").innerHTML     = cfg.lbl;
    document.getElementById("selPrice").textContent = "R$ " + cfg.p + ",00";
    document.getElementById("selCar").classList.add("show");

    calcularTotal();
    
    // Update the calendar slots in case they are already on the calendar step or if they go there next
    if (document.getElementById("fecha-agendamento").value) {
        renderSlots();
    }
}

function closeDrop() {
    document.getElementById("carDrop").classList.remove("open");
}

/* ════════ WIZARD ════════ */
function goTo(n) {
    document.getElementById("step" + step).classList.remove("active");
    step = n;
    document.getElementById("step" + n).classList.add("active");

    for (var i = 1; i <= 3; i++) {
        var p = document.getElementById("p" + i);
        p.className = "nav-pill" + (i === n ? " on" : "");
    }

    var bb = document.getElementById("btnBack");
    if (n > 1) bb.classList.add("show"); else bb.classList.remove("show");

    var lbl = document.getElementById("btnLabel");
    var ia  = document.getElementById("icoArrow");
    var iw  = document.getElementById("icoWa");
    if (n === 3) {
        lbl.textContent   = "Agendar";
        ia.style.display  = "none";
        iw.style.display  = "block";
    } else {
        lbl.textContent   = "Continuar";
        ia.style.display  = "block";
        iw.style.display  = "none";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextStep() {
    if (step === 1) {
        var cInput = document.getElementById("carInput").value.trim();
        if (!cInput || !selCar) {
            showToast("Por favor, selecione o seu carro na lista ou clique em 'Não achou seu carro' para adicioná-lo.");
            return;
        }
    }
    
        if (step === 1) {
        var bookedCars = JSON.parse(localStorage.getItem("luxury_booked_cars") || "[]");
        if (selCar && bookedCars.includes(selCar.n)) {
            showToast("Você já tem um agendamento recente em andamento para o veículo (" + selCar.n + ").");
            return;
        }
    }
    if (step < 3) goTo(step + 1);
    else enviarAgendamentoWhatsApp();
}

function goBack() {
    if (step > 1) goTo(step - 1);
}

/* ════════ DATABASE CONFIG ════════ */
var isFirebaseEnabled = false;

// 🛑 ATENÇÃO: COLOQUE SUAS CREDENCIAIS DO FIREBASE AQUI
var firebaseConfig = {
    apiKey: "AIzaSyB4RQMt23Ui1VIYiuJ0ybZv73KvngyJ4zU",
    authDomain: "luxury-cars-a35ff.firebaseapp.com",
    projectId: "luxury-cars-a35ff",
    storageBucket: "luxury-cars-a35ff.firebasestorage.app",
    messagingSenderId: "978062765158",
    appId: "1:978062765158:web:e67f3af0d463d6ac4451a7",
    measurementId: "G-YRD7XQQGNL"
};

if (typeof firebase !== 'undefined' && firebaseConfig.apiKey !== "SUA_API_KEY") {
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
    isFirebaseEnabled = true;
}

/* ════════ TIME SLOTS ════════ */
var MAX_VAGAS = 2; // 2 workers (vagas) available
var OPEN_MINUTES = 8 * 60;   // 08:00
var CLOSE_MINUTES = 18 * 60; // 18:00
var selDuration = 90;

function getCarDuration(type, pkg) {
    let tExt = 30; let tInt = 35; let tComp = 90;
    if (type === 'suv') { tExt = 30; tInt = 40; tComp = 120; }
    if (type === 'truck') { tExt = 50; tInt = 40; tComp = 150; }
    
    if (pkg === "Apenas Exterior") return tExt;
    if (pkg === "Apenas Interior") return tInt;
    return tComp; // Lavagem Completa
}

function timeToMinutes(timeStr) {
    var p = timeStr.split(':');
    return parseInt(p[0]) * 60 + parseInt(p[1]);
}

function minutesToTime(mins) {
    var h = Math.floor(mins / 60);
    var m = mins % 60;
    return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m);
}

function formatAMPM(timeStr) {
    var parts = timeStr.split(':');
    var h = parseInt(parts[0]);
    var m = parts[1];
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12; // el 0 debe ser 12
    return (h < 10 ? "0" + h : h) + ":" + m + " " + ampm;
}

function generateAllSlots() {
    let slots = [];
    for (let m = OPEN_MINUTES; m < CLOSE_MINUTES; m += 30) slots.push(m);
    return slots;
}

function saveBookingLocal(d, h, fullData) {
    if (fullData) {
        var details = JSON.parse(localStorage.getItem("lux_bookings_details") || "[]");
        details.push(fullData);
        localStorage.setItem("lux_bookings_details", JSON.stringify(details));
    }
}

async function renderSlots() {
    var date   = document.getElementById("fecha-agendamento").value;
    var grid   = document.getElementById("slotsGrid");
    selSlot    = null;
    grid.innerHTML = "";

    if (!date) return;

    grid.innerHTML = "<div style='color:var(--text-secondary);text-align:center;width:100%;padding:16px;'>Verificando disponibilidade...</div>";

    // ── Check if store is closed on this date ──
    if (isFirebaseEnabled) {
        try {
            var closedSnap = await db.collection("closedDates").doc(date).get();
            if (closedSnap.exists) {
                grid.innerHTML = `
                    <div style="grid-column: 1 / -1; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); padding: 32px 20px; border-radius: var(--radius-md); text-align: center; display: flex; flex-direction: column; align-items: center; gap: 12px; margin-top: 10px;">
                        <span style="font-size: 32px;">🚫</span>
                        <h3 style="margin:0; font-size: 18px; color: var(--danger); font-weight: 500;">Fechado neste dia</h3>
                        <p style="margin:0; font-size: 14px; color: var(--text-secondary);">O estabelecimento não operará nesta data. Por favor, escolha outro dia para o seu agendamento.</p>
                    </div>
                `;
                return;
            }
        } catch(e) {
            console.warn("Could not check closed dates", e);
        }
    }
    
    // Fallback if they typed a car but didn't click the dropdown
    let currentCar = selCar;
    if (!currentCar) {
        currentCar = { n: document.getElementById("carInput").value || "Carro Genérico", t: "sedan" };
    }

    let usage = {};
    generateAllSlots().forEach(m => usage[m] = 0);

    let existingBookings = [];

    if (isFirebaseEnabled) {
        try {
            var snap = await db.collection("bookings")
                .where("date", "==", date)
                .get();
            snap.forEach(doc => {
                let d = doc.data();
                if (d.status === "confirmed" || d.status === "pending") {
                    existingBookings.push(d);
                }
            });
        } catch (e) {
            console.error("Firebase error, fallback to local:", e);
            let details = JSON.parse(localStorage.getItem("lux_bookings_details") || "[]");
            existingBookings = details.filter(b => b.date === date && (b.status === "confirmed" || b.status === "pending"));
        }
    } else {
        let details = JSON.parse(localStorage.getItem("lux_bookings_details") || "[]");
        existingBookings = details.filter(b => b.date === date && (b.status === "confirmed" || b.status === "pending"));
    }

    existingBookings.forEach(b => {
        let startMins = timeToMinutes(b.time);
        let dur = b.duration || 90; // old bookings assume 90m
        for (let m = startMins; m < startMins + dur; m += 30) {
            if (usage[m] !== undefined) usage[m]++;
        }
    });

    let pkgEl = document.getElementById("pkg-name-val");
    let selectedPkg = pkgEl ? pkgEl.value : "Lavagem Completa";
    let myDuration = getCarDuration(currentCar.t, selectedPkg);

    // Determine if the selected date is today to block past hours
    let isToday = false;
    let currentMins = 0;
    let todayDate = new Date();
    // Format today as YYYY-MM-DD in local time
    let todayStr = todayDate.getFullYear() + "-" + 
                   String(todayDate.getMonth() + 1).padStart(2, '0') + "-" + 
                   String(todayDate.getDate()).padStart(2, '0');
    if (date === todayStr) {
        isToday = true;
        currentMins = todayDate.getHours() * 60 + todayDate.getMinutes();
    }

    grid.innerHTML = "";
    generateAllSlots().forEach(m => {
        let maxAvailable = MAX_VAGAS;
        for (let checkM = m; checkM < m + myDuration; checkM += 30) {
            let used = usage[checkM] || 0;
            let avail = MAX_VAGAS - used;
            if (avail < maxAvailable) maxAvailable = avail;
        }

        let fits = maxAvailable > 0;
        let bufferMins = 0; // 0 minutos de anticipación mínima
        
        if (isToday && m < currentMins + bufferMins) {
            fits = false; // Block if the slot has already passed today or is too soon
        } else if (m + myDuration > CLOSE_MINUTES) {
            fits = false; // Would finish after closing time
        }

        let hStr = minutesToTime(m);
        let displayStr = formatAMPM(hStr);
        let div = document.createElement("div");
        
        if (!fits) {
            div.className = "slot off";
            div.innerHTML = '<span class="slot-time">' + displayStr + '</span><span class="slot-spots" style="font-size:11px;">🔴 Indisponível</span>';
        } else {
            div.className = "slot";
            let spotText = maxAvailable === 1 ? "🟡 1 vaga disponível" : "🟢 2 vagas disponíveis";
            div.innerHTML = '<span class="slot-time">' + displayStr + '</span><span class="slot-spots" style="font-size:11px;">' + spotText + '</span>';
            div.addEventListener("click", function() {
                grid.querySelectorAll(".slot").forEach(s => s.classList.remove("on"));
                div.classList.add("on");
                selSlot = hStr; // Mantenemos el formato 24h internamente
                selDuration = myDuration;
            });
        }
        grid.appendChild(div);
    });
}

/* ════════ PRICE ════════ */
var descontoAtivo    = 0;
var activeCouponCode = null;

/* ─────────────────────────────────────────────────
   COUPON SECURITY LAYER
   • Login required
   • Rate limit: 5 attempts per session, then 60s lockout
   • 3s cooldown between attempts
   • Sanitized input (alphanumeric only, max 20 chars)
   • Firestore read validation (expiry, global limit, per-user limit)
   • Re-validation at booking time (Firestore transaction)
──────────────────────────────────────────────────── */
var _cupomAttempts   = 0;
var _cupomMaxAttempts = 5;
var _cupomLocked     = false;
var _cupomLastTs     = 0;
var _cupomCooldownMs = 3000; // 3s between attempts
var _cupomLockoutMs  = 60000; // 60s lockout after max attempts

function _updateCouponUI() {
    var locked  = document.getElementById("cupom-locked-msg");
    var wrap    = document.getElementById("cupom-input-wrap");
    if (!locked || !wrap) return;
    if (currentUser) {
        locked.style.display = "none";
        wrap.style.display   = "block";
    } else {
        locked.style.display = "flex";
        wrap.style.display   = "none";
        // Clear coupon if user logged out
        descontoAtivo    = 0;
        activeCouponCode = null;
        calcularTotal();
    }
}

function _startLockoutCountdown() {
    var countEl = document.getElementById("cupom-countdown");
    var rlEl    = document.getElementById("cupom-ratelimit");
    var btn     = document.getElementById("cupom-apply-btn");
    if (!rlEl) return;
    rlEl.style.display = "block";
    if (btn) btn.disabled = true;
    var remaining = 60;
    if (countEl) countEl.textContent = remaining;
    var interval = setInterval(function() {
        remaining--;
        if (countEl) countEl.textContent = remaining;
        if (remaining <= 0) {
            clearInterval(interval);
            _cupomLocked   = false;
            _cupomAttempts = 0;
            rlEl.style.display = "none";
            if (btn) btn.disabled = false;
        }
    }, 1000);
}

async function aplicarCupom() {
    // ── GUARD 1: Must be logged in ──
    if (!currentUser) {
        openDashboard();
        return;
    }

    var input = document.getElementById("cupom-codigo");
    var msgEl = document.getElementById("cupom-msg");
    var btn   = document.getElementById("cupom-apply-btn");

    // ── GUARD 2: Rate limit lockout ──
    if (_cupomLocked) {
        return;
    }

    // ── GUARD 3: Cooldown between attempts ──
    var now = Date.now();
    if (now - _cupomLastTs < _cupomCooldownMs) {
        var wait = Math.ceil((_cupomCooldownMs - (now - _cupomLastTs)) / 1000);
        _setCupomMsg(msgEl, false, "⏳ Aguarde " + wait + "s antes de tentar novamente.");
        return;
    }

    // ── Sanitize input (alphanumeric only, uppercase, max 20) ──
    var raw = (input ? input.value : "").replace(/[^A-Za-z0-9]/g, "").toUpperCase().substring(0, 20);
    if (input) input.value = raw;

    // Empty field — clear coupon
    if (raw === "") {
        descontoAtivo    = 0;
        activeCouponCode = null;
        if (msgEl) msgEl.style.display = "none";
        calcularTotal();
        return;
    }

    // ── Increment attempt counter ──
    _cupomAttempts++;
    _cupomLastTs = Date.now();
    if (_cupomAttempts >= _cupomMaxAttempts) {
        _cupomLocked = true;
        _startLockoutCountdown();
    }

    if (btn) { btn.textContent = "..."; btn.disabled = true; }

    // ── GUARD 4: Firebase required ──
    if (!isFirebaseEnabled) {
        descontoAtivo = 0; activeCouponCode = null;
        _setCupomMsg(msgEl, false, "❌ Sistema offline — cupom não pode ser validado.");
        if (btn) { btn.textContent = "Aplicar"; btn.disabled = false; }
        return;
    }

    try {
        var snap = await db.collection("coupons").doc(raw).get();

        if (!snap.exists) {
            descontoAtivo = 0; activeCouponCode = null;
            _setCupomMsg(msgEl, false, "❌ Cupom inválido.");

        } else {
            var data  = snap.data();
            var today = new Date(); today.setHours(0, 0, 0, 0);

            // ── Check 1: Expiry date ──
            if (data.expiresAt) {
                var exp = new Date(data.expiresAt + "T00:00:00");
                if (exp < today) {
                    descontoAtivo = 0; activeCouponCode = null;
                    _setCupomMsg(msgEl, false, "❌ Cupom expirado em " + data.expiresAt.split("-").reverse().join("/") + ".");
                    if (btn) { btn.textContent = "Aplicar"; btn.disabled = false; }
                    calcularTotal(); return;
                }
            }

            // ── Check 2: Global usage limit ──
            if (data.maxUses) {
                var used = data.usedCount || 0;
                if (used >= data.maxUses) {
                    descontoAtivo = 0; activeCouponCode = null;
                    _setCupomMsg(msgEl, false, "❌ Cupom esgotado — limite de usos atingido.");
                    if (btn) { btn.textContent = "Aplicar"; btn.disabled = false; }
                    calcularTotal(); return;
                }
            }

            // ── Check 3: Per-user limit (1 use per user per coupon) ──
            var userUsages = data.userUsages || {};
            var myUses     = userUsages[currentUser.uid] || 0;
            var maxPerUser = data.maxUsesPerUser || 1; // Default: 1 use per user
            if (myUses >= maxPerUser) {
                descontoAtivo = 0; activeCouponCode = null;
                _setCupomMsg(msgEl, false, "❌ Você já utilizou este cupom. Cada cupom só pode ser usado uma vez por cliente.");
                if (btn) { btn.textContent = "Aplicar"; btn.disabled = false; }
                calcularTotal(); return;
            }

            // ── ✅ Valid ──
            _cupomAttempts = 0; // Reset counter on success
            descontoAtivo    = data.discount / 100;
            activeCouponCode = raw;
            var remaining = data.maxUses ? (data.maxUses - (data.usedCount || 0)) + " uso(s) restante(s)" : "";
            _setCupomMsg(msgEl, true, "✅ Cupom de " + data.discount + "% aplicado!" + (remaining ? " (" + remaining + ")" : ""));
        }
    } catch(e) {
        descontoAtivo = 0; activeCouponCode = null;
        _setCupomMsg(msgEl, false, "❌ Erro ao validar cupom. Tente novamente.");
        console.error("[CouponSec] Validation error:", e);
    }

    if (btn && !_cupomLocked) { btn.textContent = "Aplicar"; btn.disabled = false; }
    calcularTotal();
}

function _setCupomMsg(el, ok, text) {
    if (!el) return;
    el.textContent   = text;
    el.style.color   = ok ? "var(--success)" : "var(--danger)";
    el.style.display = "block";
}

function calcularTotal() {
    var pb = document.querySelector(".pill-bar");
    // If no car selected yet, show zero
    if (!selCar) {
        document.getElementById("precio-final").textContent = "R$ 0,00";
        if (pb) pb.classList.remove("show-pill");
        return;
    }
    if (pb) pb.classList.add("show-pill");

    var base = 70;
    if (selCar.t === 'suv')   base = 90;
    else if (selCar.t === 'truck') base = 110;

    var mult  = parseFloat(document.getElementById("pkg-mult").value) || 1;
    var extra = 0;
    document.querySelectorAll(".toggle-row[data-on='1']").forEach(function(r) {
        extra += parseFloat(r.dataset.price);
    });
    var total = base * mult + extra;
    
    if (descontoAtivo > 0) {
        total = total - (total * descontoAtivo);
    }
    
    document.getElementById("precio-final").textContent = "R$ " + total.toFixed(2).replace(".", ",");
}


/* ════════ PHONE VALIDATION ════════ */
// Brazilian mobile format: (DD) 9XXXX-XXXX  (11 digits)
// Accepts also landlines: (DD) XXXX-XXXX    (10 digits)
function _isValidPhone(digits) {
    // Strips everything except digits
    var d = (digits || "").replace(/\D/g, "");
    if (d.length < 10 || d.length > 11) return false;
    var dd = parseInt(d.substring(0, 2));
    if (dd < 11 || dd > 99) return false; // Invalid area code
    if (d.length === 11 && d[2] !== '9') return false; // Mobile must start with 9
    return true;
}

function formatPhone(input) {
    var digits = input.value.replace(/\D/g, "").substring(0, 11);
    var formatted = "";
    if (digits.length === 0) {
        formatted = "";
    } else if (digits.length <= 2) {
        formatted = "(" + digits;
    } else if (digits.length <= 6) {
        formatted = "(" + digits.substring(0, 2) + ") " + digits.substring(2);
    } else if (digits.length <= 10) {
        formatted = "(" + digits.substring(0, 2) + ") " + digits.substring(2, 6) + "-" + digits.substring(6);
    } else {
        formatted = "(" + digits.substring(0, 2) + ") " + digits.substring(2, 7) + "-" + digits.substring(7);
    }
    input.value = formatted;

    var icon  = document.getElementById("phone-status-icon");
    var hint  = document.getElementById("phone-hint");
    var valid = _isValidPhone(digits);

    if (digits.length === 0) {
        input.classList.remove("valid", "invalid");
        if (icon) { icon.className = "phone-status"; icon.textContent = ""; }
        if (hint) { hint.className = "phone-hint"; }
        return;
    }

    if (valid) {
        input.classList.add("valid"); input.classList.remove("invalid");
        if (icon) { icon.className = "phone-status valid"; icon.textContent = "✔"; }
        if (hint) { hint.className = "phone-hint valid"; hint.textContent = "✅ Número válido"; }
    } else {
        input.classList.remove("valid"); input.classList.add("invalid");
        if (icon) { icon.className = "phone-status invalid"; icon.textContent = "✕"; }
        if (hint) {
            hint.className = "phone-hint invalid";
            if (digits.length < 10) {
                hint.textContent = "❌ Número incompleto — informe o DDD + número (ex: 49 99999-9999)";
            } else {
                hint.textContent = "❌ Número inválido — verifique o DDD e o formato";
            }
        }
    }
}

function validatePhoneBlur(input) {
    var digits = input.value.replace(/\D/g, "");
    if (digits.length > 0) formatPhone(input); // Show error state on blur
}

/* ════════ WHATSAPP ════════ */
async function enviarAgendamentoWhatsApp() {
    var cName  = document.getElementById("client-name").value.trim();
    var cPhone = document.getElementById("client-phone").value.trim();
    var cObs   = document.getElementById("client-obs").value.trim();

    // ── Validate name ──
    if (!cName) {
        showToast("Por favor, preencha seu nome antes de agendar.");
        document.getElementById("client-name").focus();
        return;
    }

    // ── Validate phone ──
    if (!cPhone) {
        showToast("Por favor, preencha seu WhatsApp antes de agendar.");
        document.getElementById("client-phone").focus();
        return;
    }
    var phoneDigits = cPhone.replace(/\D/g, "");
    if (!_isValidPhone(phoneDigits)) {
        showToast("❌ Número de WhatsApp inválido. Informe DDD + número (ex: 49 99999-9999).");
        var phoneEl = document.getElementById("client-phone");
        phoneEl.classList.add("invalid"); phoneEl.classList.remove("valid");
        var icon = document.getElementById("phone-status-icon");
        if (icon) { icon.className = "phone-status invalid"; icon.textContent = "✕"; }
        var hint = document.getElementById("phone-hint");
        if (hint) { hint.className = "phone-hint invalid"; hint.textContent = "❌ Número inválido — inclua o DDD e o número completo"; }
        phoneEl.focus();
        return;
    }

    if (!selSlot) { showToast("Por favor, selecione um horário disponível na lista."); return; }

    var date   = document.getElementById("fecha-agendamento").value;
    var dFmt   = date.split("-").reverse().join("/");
    var car    = selCar ? selCar.n + " (" + TYPE[selCar.t].lbl + ")" : "Não especificado";
    var pkgEl  = document.getElementById("pkg-name-val");
    var pkg    = pkgEl ? pkgEl.value : "Lavagem Completa";
    
    var payOpt = document.querySelector(".pay-option.on");
    var paymentMethod = payOpt ? payOpt.dataset.val : "Pix";

    var extras = [];
    document.querySelectorAll(".toggle-row[data-on='1']").forEach(function(r) {
        extras.push(r.querySelector(".svc-label").textContent.trim());
    });

    var total  = document.getElementById("precio-final").textContent;

    if (currentUser) {
        localStorage.setItem("lux_phone_" + currentUser.uid, cPhone);
    }

    var fullData = {
        id: "local_" + Date.now() + "_" + Math.floor(Math.random()*1000),
        userId: currentUser ? currentUser.uid : "anon",
        clientName: cName,
        clientPhone: cPhone,
        date: date,
        time: selSlot,
        duration: selDuration,
        car: car,
        package: pkg,
        extras: extras,
        payment: paymentMethod,
        total: total,
        obs: cObs,
        status: "pending"
    };

    if (isFirebaseEnabled) {
        try {
            // BULLET-PROOF SECURITY: Double check right before saving
            var checkSnap = await db.collection("bookings")
                .where("date", "==", date)
                .get();
                
            let tempUsage = {};
            let alreadyBooked = false;
            checkSnap.forEach(doc => {
                let b = doc.data();
                if (b.status === "confirmed" || b.status === "pending") {
                    if (b.clientPhone === cPhone && b.car === car) {
                        alreadyBooked = true;
                    }
                    let startMins = timeToMinutes(b.time);
                    let dur = b.duration || 90;
                    for (let m = startMins; m < startMins + dur; m += 30) {
                        tempUsage[m] = (tempUsage[m] || 0) + 1;
                    }
                }
            });
            
            if (alreadyBooked) {
                showToast("❌ Você já tem um agendamento para este mesmo veículo no dia de hoje.");
                return;
            }
            
            let reqStart = timeToMinutes(selSlot);
            let fits = true;
            for(let m = reqStart; m < reqStart + selDuration; m += 30) {
                if((tempUsage[m] || 0) >= MAX_VAGAS) {
                    fits = false; break;
                }
            }
            
            if(!fits) {
                showToast("Desculpe! Alguém acabou de reservar este horário há alguns segundos. Por favor, escolha outro.");
                renderSlots(); // Reload calendar
                return; // Stop saving
            }

            let bookingRef = await db.collection("bookings").add({
                userId: currentUser ? currentUser.uid : "anon",
                clientName: cName,
                clientPhone: cPhone,
                date: date,
                time: selSlot,
                duration: selDuration,
                car: car,
                package: pkg,
                extras: extras,
                payment: paymentMethod,
                total: total,
                obs: cObs,
                coupon: activeCouponCode || null,
                discount: descontoAtivo > 0 ? Math.round(descontoAtivo * 100) + "%" : null,
                status: "pending",
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });

            // ── Increment coupon usedCount securely using Firestore Transaction ──
            // This is atomic: prevents race conditions (two users using same coupon simultaneously)
            if (activeCouponCode) {
                try {
                    var couponRef = db.collection("coupons").doc(activeCouponCode);
                    var uid = currentUser ? currentUser.uid : null;

                    await db.runTransaction(async function(tx) {
                        var couponDoc = await tx.get(couponRef);

                        if (!couponDoc.exists) {
                            throw new Error("COUPON_NOT_FOUND");
                        }

                        var cData = couponDoc.data();

                        // ── Re-validate expiry inside transaction ──
                        if (cData.expiresAt) {
                            var exp = new Date(cData.expiresAt + "T00:00:00");
                            var td  = new Date(); td.setHours(0,0,0,0);
                            if (exp < td) throw new Error("COUPON_EXPIRED");
                        }

                        // ── Re-validate global limit inside transaction ──
                        if (cData.maxUses && (cData.usedCount || 0) >= cData.maxUses) {
                            throw new Error("COUPON_EXHAUSTED");
                        }

                        // ── Re-validate per-user limit inside transaction ──
                        if (uid) {
                            var userUsages  = cData.userUsages || {};
                            var myUses      = userUsages[uid] || 0;
                            var maxPerUser  = cData.maxUsesPerUser || 1;
                            if (myUses >= maxPerUser) {
                                throw new Error("COUPON_USER_LIMIT");
                            }
                        }

                        // ── Atomically increment global count + per-user count ──
                        var updatePayload = {
                            usedCount: firebase.firestore.FieldValue.increment(1)
                        };
                        if (uid) {
                            updatePayload["userUsages." + uid] = firebase.firestore.FieldValue.increment(1);
                        }
                        tx.update(couponRef, updatePayload);
                    });

                } catch(ce) {
                    var errMsg = ce.message || "";
                    if (errMsg === "COUPON_EXPIRED") {
                        showToast("❌ Cupom expirado — desconto removido.");
                    } else if (errMsg === "COUPON_EXHAUSTED") {
                        showToast("❌ Cupom esgotado — desconto removido.");
                    } else if (errMsg === "COUPON_USER_LIMIT") {
                        showToast("❌ Você já usou este cupom anteriormente — desconto removido.");
                    } else if (errMsg === "COUPON_NOT_FOUND") {
                        showToast("❌ Cupom não encontrado — desconto removido.");
                    } else {
                        console.warn("[CouponSec] Could not commit coupon usage:", ce);
                    }
                    // Invalidate the coupon on the client side
                    descontoAtivo    = 0;
                    activeCouponCode = null;
                    calcularTotal();
                }
            }
        } catch (e) {
            console.error("Firebase save error", e);
            saveBookingLocal(date, selSlot, fullData);
        }
    } else {
        saveBookingLocal(date, selSlot, fullData);
    }
    
    var rawMsg = 
        "*NOVO AGENDAMENTO - LUXURY CARS*\n\n" +
        "*Cliente:* " + cName + "\n" +
        "*Contato:* " + cPhone + "\n" +
        "*Data:* " + dFmt + "\n" +
        "*Hor\xE1rio:* " + selSlot + "\n" +
        "*Ve\xEDculo:* " + car + "\n" +
        (cObs ? "*Observa\xE7\xE3o:* " + cObs + "\n" : "") +
        "*Pacote:* " + pkg + "\n" +
        "*Adicionais:* " + (extras.length ? extras.join(", ") : "Nenhum") + "\n" +
        (activeCouponCode ? "*Cupom:* " + activeCouponCode + " (" + Math.round(descontoAtivo*100) + "% OFF)\n" : "") +
        "*Pagamento:* " + paymentMethod + "\n\n" +
        "*Total:* " + total;

        var bookedCars = JSON.parse(localStorage.getItem("luxury_booked_cars") || "[]");
    if (selCar && !bookedCars.includes(selCar.n)) {
        bookedCars.push(selCar.n);
        localStorage.setItem("luxury_booked_cars", JSON.stringify(bookedCars));
    }
        var successScreen = `
    <div id="successScreen" style="position:fixed; inset:0; background:rgba(5,5,5,0.95); backdrop-filter:blur(15px); z-index:99999; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:20px; animation: fadeInDown 0.5s cubic-bezier(0.16, 1, 0.3, 1);">
        <div style="background:rgba(15,15,15,0.8); padding:50px 30px; border-radius:32px; border:1px solid rgba(14,165,233,0.3); box-shadow:0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1); max-width:400px; width:100%;">
            <div style="width:80px; height:80px; border-radius:50%; background:rgba(14,165,233,0.1); display:flex; align-items:center; justify-content:center; margin:0 auto 24px auto; border:2px solid var(--accent); box-shadow:0 0 30px rgba(14,165,233,0.4);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h2 style="color:#fff; font-size:26px; font-weight:600; margin-bottom:12px; letter-spacing:-0.5px;">Agendamento Feito!</h2>
            <p style="color:rgba(255,255,255,0.6); font-size:15px; line-height:1.6; margin-bottom:32px;">Seu pedido foi registrado.<br>Continue o atendimento no WhatsApp.</p>
            <button class="btn-primary" onclick="window.location.reload()" style="width:100%; padding:18px; font-size:16px;">Fazer Novo Agendamento</button>
        </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', successScreen);

    setTimeout(function() {
        window.location.href = "https://wa.me/5549998099736?text=" + encodeURIComponent(rawMsg);
    }, 1200);
    
    renderSlots();
}

/* ════════ AUTHENTICATION & DASHBOARD ════════ */
var currentUser = null;

async function checkBan(uid, isAnon) {
    if(!isFirebaseEnabled) return false;
    try {
        var col = isAnon ? "anonymous_users" : "users";
        var doc = await db.collection(col).doc(uid).get();
        if(doc.exists && doc.data().blocked) {
            document.body.innerHTML = '<div style="display:flex; flex-direction:column; height:100vh; align-items:center; justify-content:center; background:#000; color:#fff; text-align:center; padding:20px; font-family:\'Outfit\',sans-serif;"><div><h1 style="color:#ef4444; margin-bottom:12px; font-size:32px;">Acesso Negado</h1><p style="color:#aaa; font-size:16px;">O seu acesso foi revogado pelo administrador.</p></div></div>';
            return true;
        }
    } catch(e) {}
    return false;
}

async function trackAnonymousVisitor() {
    if (!isFirebaseEnabled) return;
    
    let anonId = localStorage.getItem("lux_anon_id");
    if (!anonId) {
        anonId = "Visitante_" + Math.random().toString(36).substr(2, 6).toUpperCase();
        localStorage.setItem("lux_anon_id", anonId);
    }
    
    if(await checkBan(anonId, true)) return;
    if (sessionStorage.getItem("lux_anon_tracked")) return;

    try {
        var ref = db.collection("anonymous_users").doc(anonId);
        var snap = await ref.get();
        if (snap.exists) {
            await ref.update({
                lastVisit: firebase.firestore.FieldValue.serverTimestamp(),
                visitCount: firebase.firestore.FieldValue.increment(1)
            });
        } else {
            await ref.set({
                uid: anonId,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastVisit: firebase.firestore.FieldValue.serverTimestamp(),
                visitCount: 1,
                isAnonymous: true
            });
        }
        sessionStorage.setItem("lux_anon_tracked", "true");
    } catch(e) { console.error("Anon tracking err", e); }
}

async function trackUserSession(user) {
    if(await checkBan(user.uid, false)) return;
    if (sessionStorage.getItem("lux_session_tracked")) return;
    
    try {
        var userRef = db.collection("users").doc(user.uid);
        var snap = await userRef.get();
        if (snap.exists) {
            await userRef.update({
                lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
                loginCount: firebase.firestore.FieldValue.increment(1),
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email
            });
        } else {
            await userRef.set({
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
                loginCount: 1
            });
        }
        sessionStorage.setItem("lux_session_tracked", "true");
    } catch(e) {
        console.error("Error saving user data", e);
    }
}

if (typeof firebase !== 'undefined' && firebase.auth) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            currentUser = user;
            document.getElementById("authBtn").innerHTML = '<img src="' + (user.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.displayName)) + '" alt="User">';
            document.getElementById("client-name").value = user.displayName || "";
            let savedPhone = localStorage.getItem("lux_phone_" + user.uid);
            if (savedPhone) document.getElementById("client-phone").value = savedPhone;
            
            trackUserSession(user);
        } else {
            currentUser = null;
            document.getElementById("authBtn").innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
            trackAnonymousVisitor();
        }
        // Update coupon UI based on login state
        _updateCouponUI();
    });

    // Handle iOS redirect login results
    firebase.auth().getRedirectResult().then(function(result) {
        if (result && result.user) {
            openDashboard();
        }
    }).catch(function(error) {
        console.error("Erro no Login por Redirecionamento:", error);
    });
}

function loginGoogle() {
    if (!isFirebaseEnabled) {
        currentUser = {
            uid: "local_mock_user_123",
            displayName: "Cliente Teste",
            photoURL: "https://ui-avatars.com/api/?name=Cliente+Teste&background=0ea5e9&color=fff"
        };
        document.getElementById("authBtn").innerHTML = '<img src="' + currentUser.photoURL + '" alt="User">';
        document.getElementById("client-name").value = currentUser.displayName;
        openDashboard();
        return;
    }

    var provider = new firebase.auth.GoogleAuthProvider();
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isIOS) {
        // Redirecionamento para evitar bloqueio de popup no Safari/iOS
        firebase.auth().signInWithRedirect(provider);
    } else {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            openDashboard();
        }).catch(function(error) {
            alert("Erro no Login: " + error.message);
        });
    }
}

function logout() {
    if (!isFirebaseEnabled) {
        currentUser = null;
        document.getElementById("authBtn").innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
        document.getElementById("client-name").value = "";
        document.getElementById("client-phone").value = "";
        closeDashboard();
        return;
    }
    firebase.auth().signOut().then(function() {
        document.getElementById("client-name").value = "";
        document.getElementById("client-phone").value = "";
        closeDashboard();
    });
}

function openDashboard() {
    if (!currentUser) {
        document.getElementById("dashboardModal").innerHTML = `
            <h3>Meus Agendamentos</h3>
            <p style="color:var(--text-secondary); text-align:center; margin-bottom:24px; font-size:14px; font-weight:300;">Faça login para ver o seu histórico e status dos seus agendamentos na Luxury Cars.</p>
            <button class="btn-google" onclick="loginGoogle()">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google">
                Entrar com Google
            </button>
        `;
        document.getElementById("dashboardOverlay").classList.add("show");
        return;
    }

    document.getElementById("dashboardOverlay").classList.add("show");
    renderDashboard();
}

function closeDashboard() {
    document.getElementById("dashboardOverlay").classList.remove("show");
}

function openMapModal() {
    document.getElementById("mapModalOverlay").classList.add("show");
}

function closeMapModal() {
    document.getElementById("mapModalOverlay").classList.remove("show");
}

async function renderDashboard() {
    const modal = document.getElementById("dashboardModal");
    modal.innerHTML = `<h3 style="margin-bottom:16px;">Meus Agendamentos</h3>
        <div style="display:flex; align-items:center; gap:16px; margin-bottom:24px; padding-bottom:20px; border-bottom:1px solid var(--border);">
            <img src="${currentUser.photoURL}" style="width:50px; height:50px; border-radius:50%; object-fit:cover; border:2px solid var(--border);">
            <div style="flex:1;">
                <div style="font-weight:500; font-size:16px;">${currentUser.displayName}</div>
                <button class="btn-logout" onclick="logout()" style="margin-top:6px; padding:6px 14px; font-size:12px; border-radius:12px; cursor:pointer;">Encerrar Sessão</button>
            </div>
        </div>
        </div>
        <div id="dashStats"></div>
        <div id="dashList">
            <div style='text-align:center; padding:24px 0;'><div class="loader" style="width:24px;height:24px;margin:0 auto;"></div></div>
        </div>`;

    let bks = [];

    if (isFirebaseEnabled) {
        try {
            const snap = await db.collection("bookings")
                .where("userId", "==", currentUser.uid)
                .get();
            snap.forEach(doc => bks.push({id: doc.id, ...doc.data()}));
            // Ordenar no JS (para não precisar criar indice complexo no firebase se não existir)
            bks.sort((a,b) => {
                if(a.date===b.date) return b.time.localeCompare(a.time);
                return b.date.localeCompare(a.date);
            });
        } catch(e) {
            console.error("Firebase err dash:", e);
            bks = loadLocalHistoryMockForUser();
        }
    } else {
        bks = loadLocalHistoryMockForUser();
    }

    let completedWashes = bks.filter(b => b.status === "completed").length;
    let couponCosts = [2, 5, 8, 10]; // Coste de lavadas por cada cupón
    let cuponesGanhados = 0;
    let washesLeft = completedWashes;
    let currentTier = 0;
    let progressoTotal = 2;

    // Calcular cuántos cupones ganó y cuál es la meta actual
    while (true) {
        let cost = currentTier < couponCosts.length ? couponCosts[currentTier] : couponCosts[couponCosts.length - 1];
        if (washesLeft >= cost) {
            cuponesGanhados++;
            washesLeft -= cost;
            currentTier++;
        } else {
            progressoTotal = cost;
            break;
        }
    }

    let faltan = progressoTotal - washesLeft;
    let progressoAtual = washesLeft;
    let pct = (progressoAtual / progressoTotal) * 100;

    let couponsHTML = "";
    if (cuponesGanhados > 0) {
        couponsHTML = `
            <div style="margin-top: 16px; border-top: 1px dashed var(--border); padding-top: 16px;">
                <div style="font-size: 14px; font-weight: 500; color: var(--accent); margin-bottom: 8px;">🎁 Cupons Desbloqueados (${cuponesGanhados})</div>
                <div style="background: rgba(14, 165, 233, 0.1); border: 1px solid var(--accent); padding: 12px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 24px; font-weight: bold; color: var(--accent); letter-spacing: 2px;">LUXURY8</div>
                    <div style="font-size: 12px; color: var(--text); margin-top: 4px;">Você ganhou 8% de desconto! Use este código no seu próximo serviço.</div>
                </div>
            </div>
        `;
    }
    
    couponsHTML += `
        <div style="margin-top: 16px; border-top: 1px dashed var(--border); padding-top: 16px;">
            <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">Faltam ${faltan} lavagem(ns) para ganhar o próximo cupom de 8% OFF!</div>
            <div style="width: 100%; height: 6px; background: #222; border-radius: 4px; overflow: hidden;">
                <div style="width: ${pct}%; height: 100%; background: var(--accent); transition: width 0.5s ease;"></div>
            </div>
        </div>
    `;

    document.getElementById("dashStats").innerHTML = `
        <div style="background: var(--surface-hover); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 24px;">
            <div style="display:flex; justify-content: space-between; align-items:center;">
                <span style="font-size: 14px; color: var(--text-secondary);">Carros Lavados</span>
                <span style="font-size: 20px; font-weight: 500;">${completedWashes}</span>
            </div>
            ${couponsHTML}
        </div>
    `;

    let list = document.getElementById("dashList");
    list.innerHTML = "";
    if (bks.length === 0) {
        list.innerHTML = "<div style='text-align:center; color:var(--text-secondary); padding:24px 0; font-size:14px;'>Você ainda não tem agendamentos.</div>";
        return;
    }

    bks.forEach(b => {
        let badge = "bg-confirmed"; let badgeTxt = "AGENDADO";
        if (b.status === "completed") { badge = "bg-completed"; badgeTxt = "FINALIZADO"; }
        if (b.status === "cancelled") { badge = "bg-cancelled"; badgeTxt = "CANCELADO"; }

        let dFmt = b.date.split("-").reverse().join("/");
        let cancelBtn = "";
        if (b.status === "confirmed") {
            cancelBtn = `<button onclick="cancelBookingClient('${b.id}', '${b.date}', '${b.time}')" style="margin-top:12px; background:transparent; border:1px solid rgba(239, 68, 68, 0.3); color:var(--danger); padding:6px 12px; border-radius:8px; font-size:12px; cursor:pointer; width:100%; transition:all 0.2s;">Cancelar Agendamento</button>`;
        }

        let endMins = timeToMinutes(b.time) + (b.duration || 90);
        let endFmt = minutesToTime(endMins);

        list.innerHTML += `
            <div class="dash-booking">
                <div class="dash-booking-head">
                    <span class="dash-date">${dFmt} (${b.time} - ${endFmt})</span>
                    <span class="dash-badge ${badge}">${badgeTxt}</span>
                </div>
                <div class="dash-car">${b.car}</div>
                <div class="dash-pkg">${b.package}</div>
                <div class="dash-price" style="${b.status==='cancelled'?'text-decoration:line-through;color:var(--danger);':''}">${b.total}</div>
                ${cancelBtn}
            </div>
        `;
    });
}

async function cancelBookingClient(id, date, time) {
    if (!confirm("Tem certeza que deseja cancelar este agendamento?")) return;

    if (isFirebaseEnabled) {
        try {
            await db.collection("bookings").doc(id).update({ status: "cancelled" });
        } catch(e) {
            alert("Erro ao cancelar: " + e.message);
            return;
        }
    } else {
        let details = JSON.parse(localStorage.getItem("lux_bookings_details") || "[]");
        let idx = details.findIndex(b => b.id === id);
        if (idx >= 0) {
            details[idx].status = "cancelled";
            localStorage.setItem("lux_bookings_details", JSON.stringify(details));
        }

        let bMap = JSON.parse(localStorage.getItem("lux_bookings") || "{}");
        if (bMap[date] && bMap[date][time]) {
            bMap[date][time]--;
            if (bMap[date][time] <= 0) delete bMap[date][time];
            localStorage.setItem("lux_bookings", JSON.stringify(bMap));
        }
    }

    renderDashboard();
    renderSlots(); // To update the availability on the main screen
}

function loadLocalHistoryMockForUser() {
    let details = JSON.parse(localStorage.getItem("lux_bookings_details") || "[]");
    return details.filter(b => b.userId === currentUser.uid).sort((a,b) => {
        if(a.date===b.date) return b.time.localeCompare(a.time);
        return b.date.localeCompare(a.date);
    });
}

/* ── UI Helpers ── */
function showToast(msg) {
    var c = document.getElementById("toastContainer");
    
    // Check if exact same message already exists
    var existing = Array.from(c.children).find(el => el.dataset.msg === msg);
    if (existing) {
        var count = parseInt(existing.dataset.count || "1") + 1;
        existing.dataset.count = count;
        
        var badge = existing.querySelector(".toast-badge");
        if (!badge) {
            badge = document.createElement("span");
            badge.className = "toast-badge";
            existing.querySelector(".toast-msg").appendChild(badge);
        }
        badge.textContent = "x" + count;
        
        // Reset animation and timer
        existing.style.animation = "none";
        void existing.offsetWidth; // trigger reflow
        existing.style.animation = "toastShake 0.4s ease";
        
        clearTimeout(existing.timeoutId);
        existing.timeoutId = setTimeout(function() {
            existing.style.animation = "toastOut 0.3s forwards";
            setTimeout(function() { existing.remove(); }, 300);
        }, 4000);
        return;
    }
    
    var t = document.createElement("div");
    t.className = "toast";
    t.dataset.msg = msg;
    t.dataset.count = 1;
    t.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>' +
                  '<span class="toast-msg">' + msg + '</span>';
    c.appendChild(t);
    
    t.timeoutId = setTimeout(function() {
        t.style.animation = "toastOut 0.3s forwards";
        setTimeout(function() { t.remove(); }, 300);
    }, 4000);
}









