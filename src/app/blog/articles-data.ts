export interface Article {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "nouvelle-facade-nouvelles-collections",
    title:
      "Nouvelle façade, nouvelles collections : découvrez Optique Queuleu autrement",
    date: "11 septembre 2025",
    dateISO: "2025-09-11",
    image: "/images/boutique/facade.webp",
    imageAlt:
      "Nouvelle façade du magasin Optique Queuleu à Metz après rénovation",
    excerpt:
      "Optique Queuleu fait peau neuve ! Nouvelle façade, nouvel accès… et surtout de nouvelles collections exclusives : Eleven Paris pour les ados, Star Wars, Barbie et Tête à Lunettes pour les enfants...",
    content: `<p>Optique Queuleu fait peau neuve ! Après plusieurs semaines de travaux, notre magasin situé au 28 rue de Queuleu à Metz arbore une toute nouvelle façade, plus moderne et plus accueillante. L'entrée a été repensée pour vous offrir un accès plus confortable et une vitrine entièrement rénovée qui met en valeur nos plus belles <a href="/marques" class="text-primary hover:underline">collections de montures</a>.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Des collections exclusives pour toute la famille</h2>

<p>Cette rénovation s'accompagne de l'arrivée de nouvelles collections exclusives chez votre opticien à Metz. Pour les adolescents, nous sommes fiers de proposer la marque <strong>Eleven Paris</strong>, connue pour ses designs urbains et tendance qui séduisent les 12-18 ans. Des montures audacieuses, colorées, qui permettent aux ados d'affirmer leur style tout en bénéficiant d'une qualité optique irréprochable.</p>

<p>Pour les plus jeunes, notre sélection s'enrichit avec les collections <strong>Star Wars</strong> et <strong>Barbie</strong> : des montures ludiques sous licence qui transforment le port de lunettes en un véritable plaisir. Parce qu'un enfant qui aime ses lunettes est un enfant qui les porte volontiers ! Nous proposons également la marque <strong>Tête à Lunettes</strong>, spécialiste des montures enfants robustes, flexibles et adaptées aux petits visages.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Un accompagnement personnalisé</h2>

<p>Chez Optique Queuleu, le renouveau ne se limite pas à la façade. Notre équipe reste fidèle à sa philosophie : un accompagnement personnalisé pour chaque membre de la famille. Que vous ayez besoin d'un <a href="/verres" class="text-primary hover:underline">équipement en verres progressifs</a>, de lunettes pour votre enfant ou simplement de conseils sur les dernières tendances, nous prenons le temps de vous guider dans votre choix.</p>

<p>Passez nous voir pour découvrir le nouveau visage d'Optique Queuleu. Notre <a href="/magasin" class="text-primary hover:underline">magasin</a> est ouvert du mardi au samedi, et vous pouvez également prendre rendez-vous directement sur Doctolib pour un examen de vue.</p>`,
  },
  {
    slug: "ordonnances-48h-lyleoo",
    title: "Vos ordonnances en 48h avec Lyleoo",
    date: "30 juin 2025",
    dateISO: "2025-06-30",
    image: "/images/boutique/optique.webp",
    imageAlt:
      "Service télé-ophtalmologie Lyleoo chez Optique Queuleu Metz pour ordonnances rapides",
    excerpt:
      "Vous avez besoin de lunettes ou de lentilles, mais pas de rendez-vous chez l'ophtalmo avant des semaines ? Avec Lyleoo, notre partenaire télé-ophtalmologie, obtenez votre prescription en 48h.",
    content: `<p>Obtenir un rendez-vous chez l'ophtalmologiste à Metz peut parfois prendre plusieurs semaines, voire plusieurs mois. Pendant ce temps, votre vue évolue, vos lunettes ne sont plus adaptées, et votre confort visuel en pâtit. C'est pour répondre à cette problématique que nous avons noué un partenariat avec <strong>Lyleoo</strong>, un service de télé-ophtalmologie innovant.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Comment ça fonctionne ?</h2>

<p>Le principe est simple et rapide. Vous vous rendez chez Optique Queuleu à Metz, où notre équipe réalise un bilan visuel complet à l'aide d'équipements de mesure de dernière génération. Ces données sont ensuite transmises de manière sécurisée à un ophtalmologiste partenaire via la plateforme Lyleoo. En <strong>moins de 48 heures</strong>, vous recevez votre ordonnance, valable pour vos lunettes comme pour vos <a href="/lentilles" class="text-primary hover:underline">lentilles de contact</a>.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Pour qui est ce service ?</h2>

<p>Ce service s'adresse à toute personne majeure ayant déjà bénéficié d'un examen ophtalmologique complet au cours des cinq dernières années. Il est particulièrement adapté pour le renouvellement d'ordonnances, les changements de correction légers, ou lorsque vous avez besoin d'une nouvelle paire de lunettes rapidement. Pour les primo-porteurs ou en cas de pathologie oculaire détectée, un rendez-vous en cabinet reste recommandé.</p>

<p>Le tarif du bilan Lyleoo est de 29 euros, non remboursé par la Sécurité sociale mais pris en charge par certaines mutuelles. C'est un investissement minime pour un gain de temps considérable.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Prenez rendez-vous dès maintenant</h2>

<p>N'attendez plus des semaines pour renouveler vos lunettes. Prenez rendez-vous directement sur Doctolib ou passez nous voir au <a href="/magasin" class="text-primary hover:underline">magasin</a>. Notre équipe vous accueille du mardi au samedi pour réaliser votre bilan visuel et vous accompagner dans le choix de votre nouvel équipement parmi nos <a href="/marques" class="text-primary hover:underline">60 marques de créateurs</a>.</p>`,
  },
  {
    slug: "soldes-ete-2025",
    title: "Soldes d'été 2025",
    date: "25 juin 2025",
    dateISO: "2025-06-25",
    image: "/images/produits/collection.webp",
    imageAlt:
      "Soldes d'été 2025 Optique Queuleu Metz : promotions montures lunettes",
    excerpt:
      "Semaines privilèges chez Optique Queuleu ! Du 25 juin au 22 juillet 2025 : jusqu'à -50% sur une sélection de montures, 2e paire à -50% ou offerte, examen de vue offert...",
    content: `<p>Les semaines privilèges sont de retour chez Optique Queuleu ! Du <strong>25 juin au 22 juillet 2025</strong>, profitez d'offres exceptionnelles sur l'ensemble de notre magasin à Metz. C'est le moment idéal pour renouveler votre équipement optique ou vous offrir une paire de solaires pour l'été.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Les offres à ne pas manquer</h2>

<p>Pendant cette période, nous vous proposons <strong>jusqu'à -50% sur une large sélection de montures</strong> de nos plus grandes <a href="/marques" class="text-primary hover:underline">marques</a> : Ray-Ban, Moscot, Kaleos, TALLA, Lafont et bien d'autres. Que vous cherchiez un modèle discret pour le bureau ou une monture audacieuse pour affirmer votre style, vous trouverez forcément votre bonheur parmi notre sélection de plus de 2 000 références.</p>

<p>L'offre <strong>2e paire</strong> est également reconduite : pour tout achat d'un équipement complet (monture + verres), votre deuxième paire bénéficie de -50%, ou est tout simplement <strong>offerte</strong> selon la formule choisie. Idéal pour avoir une paire de rechange, des lunettes de soleil correctrices, ou équiper toute la famille à moindre coût.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Examen de vue offert</h2>

<p>Pour accompagner ces offres, nous offrons un <strong>examen de vue complet</strong> réalisé en magasin par notre opticien diplômé. En quelques minutes, nous vérifions votre correction actuelle et détectons toute évolution de votre vue. Si votre ordonnance est toujours valide, nous pouvons l'utiliser directement. Sinon, notre service de télé-ophtalmologie Lyleoo vous permet d'obtenir une nouvelle prescription en 48 heures.</p>

<p>N'attendez pas la fin des soldes pour en profiter ! Prenez rendez-vous sur Doctolib ou rendez-vous directement dans notre <a href="/magasin" class="text-primary hover:underline">magasin au 28 rue de Queuleu à Metz</a>. Notre équipe vous accueille du mardi au samedi avec ou sans rendez-vous. Et pensez à découvrir nos <a href="/verres" class="text-primary hover:underline">verres ZEISS, Essilor et Seiko</a> pour un confort visuel optimal.</p>`,
  },
  {
    slug: "impression-3d-lunettes-oomade",
    title:
      "Impression 3D de pièces de lunettes à Metz – Optique Queuleu innove avec OOMADE",
    date: "23 juin 2025",
    dateISO: "2025-06-23",
    image: "/images/boutique/interieur-4.webp",
    imageAlt:
      "Service impression 3D OOMADE pour réparation lunettes Optique Queuleu Metz",
    excerpt:
      "Une branche cassée ? Une pièce introuvable ? Ce n'est plus une fatalité. On recrée la pièce manquante en boutique grâce à l'impression 3D, en moins de 15 minutes.",
    content: `<p>Une branche de lunettes cassée, un plaquette nasale perdue, une charnière endommagée... Jusqu'à récemment, ces petits accidents du quotidien pouvaient signifier des jours d'attente pour une réparation, voire l'obligation de racheter une monture complète si la pièce n'était plus disponible. Chez Optique Queuleu, c'est désormais du passé grâce à notre partenariat avec <a href="/oomade" class="text-primary hover:underline">OOMADE</a>.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">La technologie 3D au service de vos lunettes</h2>

<p>OOMADE est un service d'<strong>impression 3D de pièces détachées pour lunettes</strong>, directement disponible dans notre magasin à Metz. Le principe est révolutionnaire : à partir d'un scan de la pièce endommagée ou d'une modélisation sur mesure, nous recréons la pièce manquante en <strong>moins de 15 minutes</strong>, directement en boutique. Branches, charnières, plaquettes, embouts... Pratiquement toutes les pièces peuvent être reproduites.</p>

<p>Les pièces sont imprimées en matériaux de haute qualité, résistants et durables. Elles sont ensuite ajustées avec précision par notre équipe pour s'adapter parfaitement à votre monture. Le résultat est une réparation quasi invisible, solide, et réalisée pendant que vous patientez.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Économique et écologique</h2>

<p>Au-delà du gain de temps, l'impression 3D de pièces détachées présente un double avantage. D'abord <strong>économique</strong> : réparer une pièce coûte nettement moins cher que de remplacer une monture entière, surtout lorsqu'il s'agit d'une <a href="/marques" class="text-primary hover:underline">monture de créateur</a> à laquelle vous tenez. Ensuite <strong>écologique</strong> : en réparant plutôt qu'en jetant, nous contribuons à réduire les déchets liés à l'industrie optique. C'est une démarche responsable qui s'inscrit dans notre volonté de proposer une optique plus durable.</p>

<p>Ce service est disponible pour toutes les montures, qu'elles aient été achetées chez nous ou ailleurs. Passez au <a href="/magasin" class="text-primary hover:underline">magasin</a> avec vos lunettes endommagées, et notre équipe évaluera la faisabilité de la réparation. Dans la grande majorité des cas, vous repartirez avec vos lunettes comme neuves le jour même.</p>`,
  },
  {
    slug: "dernieres-collections-talla-komono",
    title: "Découvrez nos dernières collections",
    date: "6 décembre 2024",
    dateISO: "2024-12-06",
    image: "/images/produits/talla.webp",
    imageAlt:
      "Collection lunettes TALLA design minimaliste chez Optique Queuleu Metz",
    excerpt:
      "TALLA : la perfection du design minimaliste. La marque TALLA se distingue par ses designs épurés et modernes. Conçues pour ceux qui recherchent des lunettes élégantes et fonctionnelles...",
    content: `<p>Chez Optique Queuleu, nous renouvelons régulièrement nos collections pour vous proposer le meilleur de la lunetterie contemporaine. Cet hiver, nous sommes particulièrement fiers de vous présenter nos dernières arrivées, avec des <a href="/marques" class="text-primary hover:underline">marques</a> qui allient design, qualité et originalité.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">TALLA : la perfection du design minimaliste</h2>

<p>La marque <strong>TALLA</strong> se distingue par ses designs épurés et résolument modernes. Fondée par un designer italien passionné par l'architecture contemporaine, TALLA propose des montures aux lignes pures, aux couleurs subtiles et aux finitions impeccables. Chaque modèle est conçu pour ceux qui recherchent des lunettes à la fois élégantes et fonctionnelles, sans concession sur le confort. Les montures TALLA utilisent des matériaux premium comme le titane japonais et l'acétate italien, garantissant légèreté et durabilité.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Komono : l'accessoire belge qui fait la différence</h2>

<p>Venue tout droit d'Anvers, la marque <strong>Komono</strong> apporte une touche de fraîcheur à notre sélection. Connue initialement pour ses montres au design minimaliste, Komono s'est imposée dans l'univers de la lunetterie avec des montures accessibles, tendance et déclinées dans une palette de couleurs originales. C'est le choix idéal pour ceux qui veulent changer de style sans se ruiner, ou pour compléter leur équipement avec une deuxième paire mode.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Un conseil personnalisé pour trouver votre style</h2>

<p>Avec plus de <strong>60 marques</strong> en magasin, le choix peut sembler vaste. C'est pourquoi notre équipe prend le temps de comprendre vos besoins, votre style de vie et vos préférences esthétiques pour vous orienter vers les montures qui vous correspondent le mieux. Associées à des <a href="/verres" class="text-primary hover:underline">verres de qualité ZEISS, Essilor ou Seiko</a>, vos nouvelles lunettes deviendront un véritable accessoire de mode au service de votre vision.</p>

<p>Venez découvrir ces nouvelles collections dans notre <a href="/magasin" class="text-primary hover:underline">magasin à Metz</a>, ouvert du mardi au samedi. N'hésitez pas à prendre rendez-vous sur Doctolib pour un essayage personnalisé.</p>`,
  },
  {
    slug: "masque-ski-izipizi",
    title: "Le masque de ski Izipizi : l'accessoire mode incontournable",
    date: "6 décembre 2024",
    dateISO: "2024-12-06",
    image: "/images/produits/izipizi-ski.webp",
    imageAlt:
      "Masque de ski Izipizi disponible chez Optique Queuleu Metz pour Noël",
    excerpt:
      "Les fêtes de Noël approchent, et si vous cherchez le cadeau parfait pour un amateur de ski, nous avons la solution ! Le masque de ski Izipizi allie style et performance.",
    content: `<p>Les fêtes de Noël approchent à grands pas, et vous cherchez peut-être le cadeau parfait pour un amateur de glisse dans votre entourage. Chez Optique Queuleu à Metz, nous avons la solution : le <strong>masque de ski Izipizi</strong>, un accessoire qui allie style et performance sur les pistes.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Izipizi : le design français sur les pistes</h2>

<p>Izipizi, la marque française devenue incontournable dans l'univers des lunettes accessibles et design, a élargi son savoir-faire aux sports d'hiver. Leurs masques de ski reprennent les codes qui ont fait le succès de la marque : des <strong>couleurs tendance</strong>, un design épuré et un rapport qualité-prix imbattable. Disponibles dans une large palette de coloris — du classique noir au rose poudré en passant par le vert sapin —, ces masques s'adaptent à tous les styles.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Performance optique au rendez-vous</h2>

<p>Au-delà de l'esthétique, les masques Izipizi offrent une véritable protection visuelle. Dotés de <strong>verres catégorie 3</strong> avec traitement anti-buée et anti-rayures, ils garantissent une vision claire et un confort optimal sur les pistes, même par temps ensoleillé. Le champ de vision large et la mousse triple densité assurent un ajustement parfait sur le visage, compatible avec le port du casque. Pour les porteurs de lunettes de vue, certains modèles sont compatibles OTG (Over The Glasses).</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Le cadeau idéal pour Noël</h2>

<p>Avec leur packaging soigné et leur design reconnaissable, les masques de ski Izipizi font un cadeau de Noël parfait. Ils sont proposés à un prix accessible, bien en dessous des masques de ski haut de gamme, tout en offrant une qualité et un style remarquables. Disponibles en version adulte et junior, ils conviennent à toute la famille.</p>

<p>Venez découvrir la collection complète dans notre <a href="/magasin" class="text-primary hover:underline">magasin à Metz</a>. Notre équipe vous aidera à choisir le modèle et le coloris idéal. Et si vous en profitez pour renouveler vos lunettes de vue avant les vacances, découvrez nos <a href="/marques" class="text-primary hover:underline">collections de montures</a> et nos <a href="/verres" class="text-primary hover:underline">verres optiques haute performance</a>.</p>`,
  },
  {
    slug: "lunettes-moscot-metz",
    title: "Où trouver des lunettes Moscot à Metz ?",
    date: "6 décembre 2024",
    dateISO: "2024-12-06",
    image: "/images/produits/moscot-miltzen.webp",
    imageAlt:
      "Lunettes Moscot Miltzen disponibles chez Optique Queuleu opticien à Metz",
    excerpt:
      "Les lunettes sont bien plus qu'un simple accessoire. Si vous êtes à la recherche d'une paire intemporelle, les lunettes Moscot sont le choix idéal.",
    content: `<p>Les lunettes sont bien plus qu'un simple accessoire de correction visuelle : elles expriment votre personnalité, votre style, votre rapport au monde. Si vous êtes à la recherche d'une paire intemporelle, à la croisée du vintage et du contemporain, les lunettes <strong>Moscot</strong> sont le choix idéal. Et bonne nouvelle : Optique Queuleu est l'un des rares opticiens à Metz à proposer cette marque emblématique.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Moscot : plus d'un siècle de savoir-faire new-yorkais</h2>

<p>Fondée en 1915 dans le Lower East Side de New York, <strong>Moscot</strong> est une maison familiale qui traverse les décennies sans prendre une ride. Aujourd'hui dirigée par la cinquième génération de la famille Moscot, la marque perpétue une tradition d'excellence artisanale. Chaque monture est dessinée à New York et fabriquée avec des matériaux soigneusement sélectionnés : acétate italien de haute qualité, charnières renforcées, finitions minutieuses à la main.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Les modèles iconiques</h2>

<p>Parmi les modèles les plus célèbres, le <strong>Lemtosh</strong> est devenu une véritable icône culturelle, porté par des personnalités comme Johnny Depp ou Truman Capote. Avec sa forme ronde caractéristique et ses rivets distinctifs, il incarne l'esprit Moscot. Le <strong>Miltzen</strong>, autre modèle phare, propose une forme plus ovale et raffinée, parfait pour les visages fins. Le <strong>Zev</strong>, plus récent, apporte une touche de modernité avec sa combinaison métal et acétate.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Essayez Moscot chez Optique Queuleu</h2>

<p>Chez Optique Queuleu, nous proposons une <strong>sélection complète de montures Moscot</strong>, en optique comme en solaire. Notre équipe connaît parfaitement la marque et saura vous guider vers le modèle qui sublimera votre visage. Chaque monture peut être équipée de <a href="/verres" class="text-primary hover:underline">verres correcteurs ZEISS, Essilor ou Seiko</a> pour un équipement à la fois esthétique et performant.</p>

<p>Pour découvrir la collection Moscot et bien d'autres <a href="/marques" class="text-primary hover:underline">marques de créateurs</a>, rendez-vous dans notre <a href="/magasin" class="text-primary hover:underline">magasin au 28 rue de Queuleu à Metz</a>. Vous pouvez également prendre rendez-vous sur Doctolib pour un essayage et un examen de vue personnalisé.</p>`,
  },
  {
    slug: "decouvrez-kaleos-art-lunetier",
    title: "Découvrez Kaleos : L'Essence de l'Art Lunetier",
    date: "22 mai 2024",
    dateISO: "2024-05-22",
    image: "/images/produits/galerie.webp",
    imageAlt:
      "Collection lunettes Kaleos espagnole créative chez Optique Queuleu Metz",
    excerpt:
      "Bienvenue chez Kaleos, la marque espagnole qui révolutionne l'univers de la lunetterie avec des créations où l'art, la mode et la qualité se rencontrent.",
    content: `<p>Dans l'univers de la lunetterie, certaines marques se contentent de suivre les tendances. D'autres les créent. <strong>Kaleos</strong>, marque espagnole fondée à Barcelone, appartient résolument à la seconde catégorie. Chez Optique Queuleu, nous sommes fiers de compter Kaleos parmi nos <a href="/marques" class="text-primary hover:underline">60 marques de créateurs</a>, et nous souhaitons vous faire découvrir l'univers unique de cette maison.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">L'art comme inspiration</h2>

<p>Ce qui distingue Kaleos de toutes les autres marques, c'est son lien profond avec <strong>l'art et la photographie</strong>. Chaque collection est inspirée par des photographes contemporains, et chaque modèle porte le nom d'un artiste ou d'une figure culturelle. Cette approche confère aux montures Kaleos une identité forte et une dimension artistique que l'on retrouve dans le moindre détail : courbes des branches, jeu de couleurs, textures des acétates.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Qualité et fabrication</h2>

<p>Les montures Kaleos sont fabriquées en <strong>acétate Mazzucchelli</strong>, le plus réputé au monde, dans des ateliers spécialisés. Chaque pièce passe par de nombreuses étapes de fabrication artisanale : découpe, polissage, tumbling, assemblage... Le résultat est une monture d'une qualité exceptionnelle, avec des couleurs profondes et une finition satinée caractéristique. Les charnières à cinq barillets garantissent une solidité et une souplesse remarquables dans le temps.</p>

<h2 class="text-xl font-bold text-foreground mt-8 mb-4">Pour qui sont les lunettes Kaleos ?</h2>

<p>Kaleos s'adresse à ceux qui considèrent leurs lunettes comme un véritable accessoire de mode, un prolongement de leur personnalité. Les modèles varient du classique revisité aux formes plus audacieuses : papillon, cat-eye, oversize... Il y a un Kaleos pour chaque visage et chaque style. La marque propose une gamme complète en optique et en solaire, pour homme comme pour femme.</p>

<p>Venez essayer les collections Kaleos dans notre <a href="/magasin" class="text-primary hover:underline">magasin à Metz</a>. Notre équipe d'opticiens passionnés vous accompagnera dans votre choix et pourra équiper votre monture avec des <a href="/verres" class="text-primary hover:underline">verres sur mesure</a> adaptés à votre correction et à votre mode de vie. Rendez-vous chez Optique Queuleu, votre opticien de confiance à Metz.</p>`,
  },
];
