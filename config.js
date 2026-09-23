// ============================================================
// FICHIER DE CONFIGURATION — DOMAINE DES DAMES
// ============================================================
// Pour modifier le site :
// 1. Ouvre ce fichier avec le Bloc-notes (Windows) ou TextEdit (Mac)
// 2. Modifie les valeurs entre guillemets
// 3. Sauvegarde le fichier
// 4. Uploade-le sur GitHub (remplace l'ancien)
// 5. Le site se met à jour automatiquement en 30 secondes
// ============================================================

var CONFIG = {

  // ----------------------------------------------------------
  // INFORMATIONS GÉNÉRALES
  // ----------------------------------------------------------
  domaine: {
    nom:       "Domaine des Dames",
    slogan:    "Vallon-Pont-d'Arc · Ardèche",
    adresse:   "316 route de la Roubine, 07150 Vallon-Pont-d'Arc",
    telephone: "06 26 47 73 95",
    email:     "contact@ledomainedesdames.com",
    facebook:  "https://www.facebook.com/ledomainedesdames/",
    zenchef:   "https://www.zenchef.com/VOTRE-ID-ZENCHEF", // ← remplace par ton vrai lien ZenChef
  },

  // ----------------------------------------------------------
  // TEXTES PAGE ACCUEIL
  // ----------------------------------------------------------
  accueil: {
    titre:       "Domaine des Dames",
    sous_titre:  "Un mas ardéchois du XVIIe siècle niché au cœur des Gorges de l'Ardèche. Gîtes de charme, piscine et restaurant de terroir.",
    btn_gites:   "Réserver un gîte",
    btn_resto:   "Découvrir le restaurant",
  },

  // ----------------------------------------------------------
  // SECTION DOMAINE
  // ----------------------------------------------------------
  presentation: {
    titre:       "Un mas ardéchois hors du temps",
    description: "Perché sur les hauteurs de Vallon-Pont-d'Arc, à deux pas des Gorges de l'Ardèche et de la Grotte Chauvet, le Domaine des Dames est un mas en pierre du XVIIe siècle entièrement restauré. Cinq gîtes indépendants, une piscine, un restaurant de terroir et des hectares de nature sauvage vous attendent.",
    nb_gites:    "5",
    nb_personnes:"30",
    siecle:      "17e",
  },

  // ----------------------------------------------------------
  // GÎTES
  // ----------------------------------------------------------
  gites: {
    glycine: {
      nom:         "La Glycine",
      superficie:  "45 m²",
      capacite:    "2 personnes",
      prix:        120,           // ← prix par nuit en €
      description: "Studio cosy et romantique, idéal pour un séjour en duo au cœur du mas.",
    },
    chapelle: {
      nom:         "La Chapelle",
      superficie:  "70 m²",
      capacite:    "5 personnes",
      prix:        180,
      description: "Plafonds voûtés, murs en pierre taillée — un espace chargé d'histoire et de caractère.",
    },
    vignes: {
      nom:         "Les Vignes",
      superficie:  "90 m²",
      capacite:    "8 personnes",
      prix:        260,
      description: "Le plus grand gîte du domaine, avec mezzanine et grand séjour pour familles et groupes.",
    },
    laurier: {
      nom:         "Le Laurier Rose",
      superficie:  "75 m²",
      capacite:    "5 personnes",
      prix:        195,
      description: "Lumineux et fleuri, avec terrasse privée et vue sur la garrigue ardéchoise.",
    },
    sampzon: {
      nom:         "Sampzon",
      superficie:  "75 m²",
      capacite:    "5 personnes",
      prix:        195,
      description: "Vue panoramique sur le rocher de Sampzon et les collines environnantes.",
    },
  },

  // ----------------------------------------------------------
  // RESTAURANT
  // ----------------------------------------------------------
  restaurant: {
    description:  "Cuisine de terroir ardéchois autour des braises du four Josper. Produits locaux, recettes d'antan, et vins de la région.",
    horaires:     "Ouvert de mai à septembre · Midi & Soir",
    badge_josper: "🔥 Grillades au feu de bois · Four Josper",

    menu: {
      entrees: [
        { nom: "Planche ardéchoise",   description: "Caillette ardéchoise, picodo, charcuteries du pays, condiments maison", prix: 18 },
        { nom: "Soupe de châtaignes",  description: "Crème de châtaigne, lardons fumés, huile de noix",                     prix: 12 },
        { nom: "Salade de chèvre chaud", description: "Miel de lavande, noix", prix: 14 },
      ],
      grillades: [
        { nom: "Côte de bœuf au feu de bois", description: "Pour 2 · sauce bordelaise · gratin dauphinois", prix: 34 },
        { nom: "Agneau de l'Ardèche",          description: "Épaule confite, herbes de garrigue, ratatouille provençale",  prix: 28 },
      ],
      desserts: [
        { nom: "Mont Blanc revisité",        description: "", prix: 10 },
        { nom: "Tarte aux myrtilles sauvages", description: "", prix: 9  },
        { nom: "Soupe de bite", description: "Miel de lavande, noix", prix: 14 },
      ],
    },
  },

  // ----------------------------------------------------------
  // ACTIVITÉS & SÉJOURS
  // ----------------------------------------------------------
  sejours: [
    {
      titre:       "Week-end Nature",
      description: "2 nuits en gîte + journée canoë dans les Gorges + dîner au restaurant autour du feu Josper.",
      disponible:  false,   // ← passe à true quand l'offre est prête
      prix:        "",      // ← ex: "À partir de 350€ / personne"
    },
    {
      titre:       "Escapade Gourmande",
      description: "1 nuit en gîte + demi-pension + visite de la Grotte Chauvet. Idéal en basse saison.",
      disponible:  false,
      prix:        "",
    },
    {
      titre:       "Séjour Aventure",
      description: "3 nuits + canyoning + accrobranche + randonnée guidée + petit-déjeuner inclus.",
      disponible:  false,
      prix:        "",
    },
  ],

  // ----------------------------------------------------------
  // ÉVÉNEMENTIEL
  // ----------------------------------------------------------
  evenementiel: {
    description: "Le Domaine des Dames se prête magnifiquement à l'organisation de vos événements privés et professionnels. Mariages, séminaires, anniversaires ou repas de famille — nos espaces en pierre et notre cadre naturel exceptionnel créent une atmosphère inoubliable.",
    capacite_max: "200",
  },

};
// ============================================================
// NE PAS MODIFIER EN DESSOUS DE CETTE LIGNE
// ============================================================
