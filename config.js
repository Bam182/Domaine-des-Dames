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
    adresse:   "316 Chemin de la Roubine, 07150 Vallon-Pont-d'Arc",
    telephone: "06 26 47 73 95",
    email:     "contact@ledomainedesdames.com",
    facebook:  "https://www.facebook.com/ledomainedesdames/",
    zenchef:   "https://www.zenchef.com/VOTRE-ID-ZENCHEF", // ← remplace par ton vrai lien ZenChef
  },

  // ----------------------------------------------------------
  // TEXTES PAGE ACCUEIL
  // ----------------------------------------------------------
  accueil: {
    titre:       "Le Domaine des Dames",
    sous_titre:  "Gîtes de charme et de caractère, restaurant à la braise et événements de groupes, aux portes des Gorges de l\'Ardèche.",
    btn_gites:   "Réserver un gîte",
    btn_resto:   "Découvrir le restaurant",
  },

  // ----------------------------------------------------------
  // SECTION DOMAINE
  // ----------------------------------------------------------
  presentation: {
    titre:       "Un mas ardéchois hors du temps",
    description: "À Vallon-Pont-d'Arc, aux portes des Gorges de l'Ardèche et à proximité du Pont d'Arc, le Domaine des Dames est un mas en pierre du XVIIe siècle niché au cœur des vignes. À la fois au calme et à proximité immédiate des activités, le domaine se situe à seulement 10 minutes à pied du centre de Vallon-Pont-d'Arc. Cinq gîtes de charme avec piscine, un restaurant aux saveurs de la braise et des espaces pour vos événements de groupe : un seul lieu pour séjourner, savourer une cuisine de caractère et célébrer en Ardèche.",
    nb_gites:    "5",
    nb_personnes:"28",
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
      capacite:    "7 personnes",
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
    description:  "Cuisine de terroir ardéchois autour de la braise. Produits locaux, recettes d'antan, et vins de la région.",
    horaires:     "Ouvert d'avril à novembre · 12h–14h30 & 19h–23h",
    badge_josper: "🔥 Cuisine à la braise",

    menu: {
      entrees: [
        { nom: "Planche mixte", description: "Fromages et charcuteries", nom_en: "Mixed platter", description_en: "Cheese and charcuterie", prix: 24 },
        { nom: "Courgette grillée façon bruschetta", description: "Coupée dans la longueur, stracciatella, pesto", nom_en: "Grilled courgette bruschetta-style", description_en: "Cut lengthways, stracciatella, pesto", prix: 12 },
        { nom: "Tacos du domaine", description: "", nom_en: "Domaine tacos", description_en: "", prix: 13 },
        { nom: "Croquettes de parmesan", description: "", nom_en: "Parmesan croquettes", description_en: "", prix: 12 },
        { nom: "Chipirons à la braise", description: "", nom_en: "Ember-grilled baby squid", description_en: "", prix: 14 },
      ],
      grillades: [
        { nom: "Saucisse de porc", description: "", nom_en: "Pork sausage", description_en: "", prix: 18 },
        { nom: "Pluma", description: "", nom_en: "Pluma (Iberian pork)", description_en: "", prix: 24 },
        { nom: "Brochette de poulet et chorizo", description: "", nom_en: "Chicken and chorizo skewer", description_en: "", prix: 20 },
        { nom: "Entrecôte", description: "", nom_en: "Rib steak", description_en: "", prix: 30 },
        { nom: "Tentacule de poulpe", description: "Sur écrasé de pommes de terre", nom_en: "Octopus tentacle", description_en: "On crushed potatoes", prix: 28 },
        { nom: "Poisson", description: "Sur écrasé de pommes de terre", nom_en: "Fish", description_en: "On crushed potatoes", prix: 24 },
        { note: "Les viandes sont accompagnées de légumes et de pommes de terre grenailles grillées au feu de bois. Sauces maison : chimichurri, poivre, moutarde.", note_en: "Meats are served with vegetables and new potatoes grilled over the wood fire. Homemade sauces: chimichurri, pepper, mustard." },
      ],
      desserts: [
        { nom: "Soupe de fraises", description: "Ou autre fruit selon la saison", nom_en: "Strawberry soup", description_en: "Or another fruit depending on the season", prix: "9,5" },
        { nom: "Crème brûlée", description: "", nom_en: "Crème brûlée", description_en: "", prix: "9,5" },
        { nom: "Mousse au chocolat", description: "", nom_en: "Chocolate mousse", description_en: "", prix: "9,5" },
        { nom: "Coupe de glace", description: "Glace artisanale d'Ardèche", nom_en: "Ice cream sundae", description_en: "Artisan ice cream from the Ardèche", prix: "9,5" },
      ],
      enfants: [
        { note: "Menu enfant : 12 €", note_en: "Kids' menu: €12" },
        { nom: "Saucisse", description: "Légumes et écrasé de pommes de terre", nom_en: "Sausage", description_en: "Vegetables and crushed potatoes", prix: "" },
        { nom: "Petit poisson grillé", description: "Légumes et écrasé de pommes de terre", nom_en: "Small grilled fish", description_en: "Vegetables and crushed potatoes", prix: "" },
      ],
    },
  },

  // ----------------------------------------------------------
  // ACTIVITÉS & SÉJOURS
  // ----------------------------------------------------------
  sejours: [
    {
      titre:       "Week-end Nature",
      description: "2 nuits en gîte + journée canoë dans les Gorges + dîner au restaurant, cuisine à la braise.",
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
    capacite_max: "150",
  },

};
// ============================================================
// NE PAS MODIFIER EN DESSOUS DE CETTE LIGNE
// ============================================================
