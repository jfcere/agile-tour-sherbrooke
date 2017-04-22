import { Room, Time  } from '../consts';
import { Conference } from '../models';

export const ConferenceAm1: Conference[] = [
  {
    time: Time.timeAM1,
    room: Room.room1,
    title: `Faire Agile vs être Agile`,
    resume: `L'agilité dans l'approche et l'agilité comme état d'esprit, deux choses n'allant pas sans l'autre mais qui se retrouvent trop souvent séparées, ce qui heurte à la longue la réputation de cette approche.`,
    company: `FX Innovation`,
    presenters: [
      {
        name: `Olivier Fortier`,
        picture: `assets/olivier-fortin.png`,
        bio: `Scrum Master Professionnel bilingue orienté vers les gens et leader engagé, cumulant 4 ans d’expérience en gestion d’équipe dans un environnement Agile et Scrum, et 13 ans d’expérience dans la création et la maintenance de sites Web.`,
      },
      {
        name: `Éric Chailler`,
        picture: `assets/eric-chailler.png`,
        bio: `Gestionnaire et technologue d'expérience, il a géré des équipes opérationnelles, spécialistes en infrastructure et équipes de développements en mode agile depuis les dernières 10 années. Reconnu pour son leadership, sa compréhension des technologies et son ouverture à faire avancer les choses et défier le statu quo.`,
      }
    ],
  },
  {
    time: Time.timeAM1,
    room: Room.room2,
    title: `"Scaling Agile" dans un contexte manufacturier`,
    resume: `Depuis plusieurs années, le département des technologies de l'information chez IBM Bromont a expérimenté différentes approches agiles. Par contre, pour maximiser la création de valeur pour l’organisation, il a fallu d'influencer les autres départements de l'entreprise afin d'avoir une approche d'agilité plus globale.<br><br>Cette conférence se veut un retour d'expérience sur la démarche d’'intégration des valeurs agiles dans la gestion des projets chez IBM Bromont. Elle portera essentiellement sur l'évolution des différents bureaux de projets de l'usine, ainsi que l'intégration entre la gestion de projet traditionnelle et agile. La conférence sera un mélange de « lessons learned », des défis actuels et la vision pour la suite des choses.`,
    company: `IBM`,
    presenters: [
      {
        name: `Benoit Lapointe`,
        picture: `assets/benoit-lapointe.png`,
        bio: `Benoit Lapointe est à l'emploi d'IBM Bromont depuis 2001. Depuis près de 10 ans, il a expérimenté plusieurs approches : Rational Unified Process, Lean Software Developpement (Kanban), eXtreme Programming, Scrum et Scaled Agile Framework.<br><br>Il est IBM Systems Agile Champion pour l'usine de Bromont ce qui fait de lui un acteur important à la mise en place de l'approche Agile/Scrum pour l'ensemble de l'usine. Dans le cadre de sa maîtrise en administration des affaires (MBA), Benoit s'est intéressé à l'intégration des valeurs et principes agiles dans la gestion de projet non relié aux technologies de l'information. En plus d'accompagner une équipe de recherche et développement dans son parcours vers l'agilité, il est impliqué au niveau des différents bureaux de projets de l'usine de Bromont pour faire de l'accompagnement.<br><br>Finalement, Benoit est chargé de cours pour l’école de gestion de l’université de Sherbrooke. Il enseigne le cours de gestion des opérations pour les étudiants à la maitrise en administration des affaires (MBA).`,
      }
    ],
  },
  {
    time: Time.timeAM1,
    room: Room.room3,
    title: `Top 5 des meilleures façons d'améliorer votre code`,
    resume: `Écrire une fois, lire souvent (Write once, read many). Arrêter de redécouvrir ce que vous aviez déjà imaginé. Dans cette présentation, nous allons vois 5 façons efficaces et peu coûteuses d’améliorer votre code. Vous devriez vous attarder à rendre votre code plus facile à lire pour éviter que les prochains ne perdent leur temps à le comprendre. Vous sortirez de cette session avec des conseils utiles pour accomplir cette tâche.`,
    company: `Pyxis`,
    presenters: [
      {
        name: `Éric De Carufel`,
        picture: `assets/eric-de-carufel.png`,
        bio: `Passionné, impliqué et minutieux sont des qualités qui décrivent bien Éric pour qui le développement logiciel est une quête constante d'amélioration pour atteindre l'équilibre entre la perfection et les besoins du client. Éric travaille pour Studio Pyxis depuis 2010. Son approche architecturale est simple : élaborer une architecture où il est plus facile d'appliquer les bonnes pratiques que les mauvaises. Son implication en tant que conférencier et blogueur est reconnue par Microsoft, qui lui a décerné le prix de 'Most Valuable Professional in Visual C#' (MVP C#) ces huit dernières années.`,
      },
    ],
  },
  {
    time: Time.timeAM1,
    room: Room.room4,
    title: `Le Management 3.0 et le Lean : les clés d'une transformation réussie`,
    resume: `Le Management 3.0 est un courant d’innovation et de leadership qui affirme que le management est une responsabilité collective. Les outils du Management 3.0 et du Lean nous permettent un virage efficace vers de nouvelles façons de faire.`,
    company: `Levio`,
    presenters: [
      {
        name: `Nathalie Ferron`,
        picture: `assets/nathalie-ferron.png`,
        bio: `Coach agile et stratège en transformation organisationnelle. Experte en méthodologie de développement et en gestion du changement. Soutien la transformation des gestionnaires vers le Management 3.0`,
      },
      {
        name: `Magali Doucet`,
        picture: `assets/magali-doucet.png`,
        bio: `Maître en management public spécialisée en amélioration des processus dans les organisations publiques.`,
      }
    ],
  },
];

export const ConferencePm1: Conference[] = [
  {
    time: Time.timePM1,
    room: Room.room1,
    title: `Gérer l'inconnu avec peu de moyens par le développement itératif - L'Agilité chez PMCtire.com`,
    resume: `Nous naviguerons à travers la petite histoire de notre pratique Agile chez PMCtire.com , et comment nous sommes arrivés à passer d’une mise en production à tous les 6 mois à livrer de la valeur aux clients plusieurs fois par semaine. Nous aborderons notre pratique à travers différents axes: l’équipe, la gestion de projet, le code et les tests, l’infrastructure, etc.<br><br>Venez entendre comment nos principes itératifs, l’intégration continue et le déploiement continus nous ont permis d’accélérer et de mieux contrôler nos mises en production. Nous expliquerons comment Gitlab (un outil Open Source) nous aide à supporter notre pratique. À travers notre retour d’expérience, nous poserons un regard pragmatique et critique sur les pratiques Agile et Scrum. Intéressant peu importe l’outil que vous utilisez!`,
    company: `PMCtire`,
    presenters: [
      {
        name: `Benoit St-André`,
        picture: `assets/benoit-st-andre.png`,
        bio: `Benoit est Vice-président Technologies chez PMCtire.com. Durant les 20 dernières années, Benoit a contribué à la vision technologique et l’implémentation de technologies Web à titre de gestionnaire de développement, de conseiller technologique et de consultant pour plusieurs organisations du monde de l’entreprise, du gouvernement et de l’éducation, particulièrement en lien avec les logiciels libres et Open Source. Il oeuvrait précédemment à titre d’intrapreneur à l’innovation au sein de Wolters Kluwer Canada où il dirigeait une équipe de développement de produits innovants et a contribué à l’amélioration des processus agile pour les équipes de développement.`,
      },
      {
        name: `Frédéric Gauthier-Boutin`,
        picture: `assets/frederic-gauthier-boutin.png`,
        bio: `Frédéric est développeur full stack chez PMCtire.com. Mieux connu sous son pseudonyme de “Nostrada-Fred” par son habileté à connaître l’avenir, il apporte son intérêt à rendre les processus efficaces... tout en faisant ce qu’il aime le plus: coder. Il développe des applications en entreprise depuis 2007 tour à tour chez IBM à Bromont, le Ministère des Transports du Québec et Wolters Kluwer.`,
      }
    ],
  },
  {
    time: Time.timePM1,
    room: Room.room2,
    title: `CGI Sherbrooke: transformation agile en cours`,
    resume: `CGI est présent à Sherbrooke depuis 2008. Aujourd'hui, on y compte plus de 200 consultants et un vaste portefeuille d'expertises : banque, commerce en ligne, transports, industries, télécommunications...<br><br>La compagnie est présentement engagée dans une transformation agile. Ce qui se traduit localement par diverses initiatives : développements itératifs, projets scrum/kanban, stand-up meetings, post-its, story mapping, TDD, pratiques Lego® Serious Play®, communautés de pratique, lunch & learn, supports de formation, coaching, etc. Le développement des pratiques agiles est un élément clé dans la croissance de l’entreprise.<br><br>Cette présentation est l'occasion de partager ce qui est mis en œuvre dans le centre de livraison CGI Sherbrooke.`,
    company: `CGI`,
    presenters: [
      {
        name: `Sedera Randria`,
        picture: `assets/sedera-randria.png`,
        bio: `Sedera a développé son expertise en Europe (banques/assurances, véhicules électriques, télécommunications, distribution, commerce électronique, gestion documentaire) avant de se plaire au Québec. Aujourd’hui il anime plusieurs communautés de pratique à CGI Sherbrooke : le groupe Synergie des chargés de projet, les rencontres des analystes d’affaire, ainsi qu’un lunch & learn agile hebdomadaire. Avec sa boîte à outils et ses Legos, il partage sa passion pour l’efficacité agile à travers ses différents mandats de conseil. Il intervient également en tant que coach auprès d’équipes principalement à Sherbrooke, Montréal et au Saguenay.`,
      },
    ],
  },
  {
    // BIO MANQUANTE...
    time: Time.timePM1,
    room: Room.room3,
    title: `La valeur: édition du développeur`,
    resume: `Nous cherchons de plus en plus à mesurer notre travail en fonction d'une valeur livrée à chaque itération. En tant qu'équipe de développement, quelle est cette valeur et pourquoi est-elle si importante? Cette conférence discute de la relation entre ce concept de valeur et le travail d'une équipe de développement.`,
    company: `Pyxis`,
    presenters: [
      {
        name: `Luc St-Laurent`,
        picture: `assets/luc-st-laurent.png`,
        bio: `A venir...`,
      },
    ],
  },
  {
    time: Time.timePM1,
    room: Room.room4,
    title: `En route vers l'optimisation! Votre succès avec Kanban étape par étape`,
    resume: `Comment contrôler son flux de travail quand les demandes arrivent à tout moment et sont toutes urgentes ? Comment être prévisible envers nos clients afin de réduire la pression et augmenter notre crédibilité ?<br><br>La méthode Kanban, bien implantée et maîtrisée, vous permettra de rendre ces problèmes visibles de tous et d'identifier les solutions adéquates.<br><br>Pour réussir dans votre transformation Kanban et en retirer tous les bénéfices, nous vous proposons une démarche en 3 grands jalons:<br><br>INTRODUIRE - "Révéler le système"<br>L'objectif de ce jalon est de rendre visible le système d'alimentation d'une équipe, l'état de l'ensemble du travail en cours et les règles et processus internes afin de poser un diagnostic et les bases solides pour trouver les remèdes aux douleurs révélées.<br><br>STABILISER - "Stabiliser le système"<br>L'objectif de ce jalon est d'amener l'équipe à opérer les changements nécessaires pour qu'elle puisse devenir prédictible, tant au niveau de sa capacité que sur le débit de travail qu'elle est en mesure de livrer à sa clientèle. En stabilisant les facteurs générant de la variabilité, l'équipe pourra fournir des ententes de service fiables à ses clients.<br><br>PROPULSER - "Propulser l'équipe"<br>L'objectif de ce jalon est d'outiller l'équipe pour qu'elle soit en mesure d'optimiser son travail, ses processus et ses règles. Dans ce jalon, les conditions sont réunies afin de maximiser l'utilisation des métriques et des techniques de prédictibilité avancées.<br><br>Tout au long de cette démarche, l'accent est mis sur la gestion du changement auprès des principaux acteurs impactés: l'équipe, le gestionnaire, le client ainsi que les parties prenantes.`,
    company: `Facilité`,
    presenters: [
      {
        name: `Valéry Germain`,
        picture: `assets/valery-germain.png`,
        bio: `Conseiller en informatique depuis vingt ans, baignant avec bonheur dans l’agilité depuis 2010, j’ai découvert l’agilité dans un projet Scrum et n’ai jamais regardé en arrière depuis. J’interviens depuis comme Scrum Master,  coach agile et formateur. Depuis deux ans, je mets ma passion, mes connaissances, ma créativité et mon savoir-être au service de la transformation agile d’un grand organisme public. Mon implication dans le Centre d’Excellence Agile de Facilité me permet de nourrir mon insatiable envie de faire rayonner l’agilité.`,
      },
      {
        name: `Nicolas Mercier`,
        picture: `assets/nicolas-mercier.png`,
        bio: `Je suis un passionné d’agilité et c’est une passion contagieuse! Des gens qui communiquent efficacement entre eux et qui s’organisent pour livrer des produits avec une haute valeur d’affaires pour leurs clients, c’est ce qui me motive au plus haut point. J’ai découvert Scrum quelque part en 2007. Depuis, j’ai évolué dans des équipes d’abord comme développeur puis comme Scrum Master et maintenant, je me consacre à temps plein au rôle de coach Agile au sein du centre d'excellence Agile de Facilité. Je déploie donc toute mon énergie à transmettre ma passion pour l’agilité. Ayant évolué au sein d’organisations variées, je travaille avec celles-ci dans leur cheminement vers l’Agilité. Curieux, pragmatique et efficace, je m’efforce de bien saisir les défis des organisations en fonction de leur contexte et de leurs contraintes spécifiques et de les asseoir dans le siège du conducteur.`,
      },
    ],
  },
];

export const ConferencePm2: Conference[] = [
  {
    // RESUME CONFERENCE A REVOIR...
    time: Time.timePM2,
    room: Room.room1,
    title: `CI: Intégration continue, de la théorie à la pratique`,
    resume: `Dans mon expérience, j'ai étudié les principes de l'intégration continue (CI) et de la livraison continue (CD). J'ai eu la chance de pouvoir appliquer ces principes dans un monde réel et aujourd'hui il est possible de constater les bienfaits. Dans cette présentation, je démontre le fruit de ces efforts et comment nous y sommes arrivés.`,
    company: `Sherweb`,
    presenters: [
      {
        name: `Gabriel Blais-Bourget`,
        picture: `assets/gabriel-blais-bourget.png`,
        bio: `Avocat du « software craftmanship », Gabriel a développé un intérêt particulier envers l'intégration continue (CI) et la livraison continue (CD). Développeur depuis plus de 4 ans chez Sherweb, il a influencé un changement de mentalité envers le CI et CD. Aujourd’hui, il est possible de constater que ces concepts fonctionnent et aident grandement à l'organisation de l'équipe de développement.`,
      },
    ],
  },
  {
    time: Time.timePM2,
    room: Room.room2,
    title: `Gestionnaire : une profession en mutation`,
    resume: `Le travail de gestionnaire a constamment changé, et ce, dès le début de l’ère industrielle. Pourtant, au cours des dernières années, le changement s’est fait plus rapide et plus drastique au point où le fameux PODC (planifier, organiser, diriger, contrôler) est maintenant chose du passé. On parle maintenant de savoir-être, de compétence relationnelle, d’équipe auto-organisée…<br><br>C’est l’émergence d’une nouvelle « espèce » de gestionnaire. Que s’est-il passé pour qu’on en arrive là? Est-ce le fruit d’une évolution darwinienne? S’agit-il d’une mode passagère ou d’une tendance lourde qui n’a pas fini d’évoluer? Cette conférence propose une vision de ce qui a amené les organisations à revoir le travail du gestionnaire du passé au présent nous survolerons un ensemble d’évènements qui ont changé radicalement l’environnement des organisations et nous tenterons de relever des indices nous révélant certaines surprises que semble nous réserver l’avenir.`,
    company: `Revenu Québec`,
    presenters: [
      {
        name: `Daniel Prince`,
        picture: `assets/daniel-prince.png`,
        bio: `Daniel Prince, CRHA est psychosociologue et détient une maîtrise en administration publique avec une majeure en gestion des ressources humaines. Il a travaillé pour plusieurs grandes organisations tant dans le domaine publique que privé, principalement en accompagnement de gestionnaires, en développement organisationnel et en développement du leadership ainsi qu’en gestion du changement. Il a notamment contribué au succès des implantations de systèmes RH tels qu’Oracle et SAP. Il est présentement à l’emploi de Revenu Québec à la Direction principale des services technologiques en tant que Conseiller en changement (transformation) organisationnel.`,
      },
    ],
  },
  {
    time: Time.timePM2,
    room: Room.room3,
    title: `Architecture express pour petits projets`,
    resume: `Comment peut-on préparer un projet sans tomber dans les mécaniques lourdes de planification et d’architecture détaillées? Est-ce nécessaire dans un projet agile? Quels pourraient être les gains de mener une telle activité et comment pourrait-on la tenir?<br><br>Inspirée par Disciplined Agile, cette conférence propose une approche dynamique et énergisante permettant de cibler rapidement une vision de départ et d’en enclencher la réalisation. Collaboration, focus et un bon coffre à outils peuvent vous aider à démarrer votre projet du bon pied et vous éviter quelques pièges!`,
    company: `Facilité`,
    presenters: [
      {
        name: `Frédéric Paquet`,
        picture: `assets/frederic-paquet.png`,
        bio: `Avant de tomber dans le coaching agile, Frédéric a travaillé comme développeur, architecte, PCO, conseiller au Bureau de projets et chef de projets dans le privé et le parapublique.<br>Il a également cofondé une compagnie web dans le domaine de la psychométrie et le développement des compétences qu’il a dirigé pendant plus de 10 ans. Maintenant, il accompagne les organisations pour fluidifier et optimiser les modes d’opérations organisationnels à l’aide de son coffre à outils agile qu’il continue constamment d’améliorer.`,
      },
      {
        name: `Eric Lessard`,
        picture: `assets/eric-lessard.png`,
        bio: `Éric Lessard est un coach et praticien agile depuis plus de 10 ans. Il a occupé un éventail de rôles différents dans les équipes agiles comme développeur, analyste, chef d’équipe, coordonnateur et coach.<br>Il préconise une approche pragmatique et concrète à l’agilité, visant la livraison de résultats par des équipes humaines et engagées.`,
      },
      {
        name: `Patrick Bocquet`,
        picture: `assets/patrick-bocquet.png`,
        bio: `Je suis un Comptable Professionnel Agréé (CPA-CMA) mais j’ai toujours travaillé dans le domaine des technologies de l’information, en tant que gestionnaire ou gestionnaire de projet. Je suis Project Management Professional (PMP, pmi.org). J’avoue avoir un enthousiasme hors du commun envers l'Agilité depuis que j’ai été introduit plus particulièrement à Scrum au milieu des années 2000. Depuis ce temps, j’ai étendu mes connaissances et formalisé mon expérience à ce sujet. J’ai concrétisé une certification Certified Scrum Master (CSM, ScrumAlliance) et certification Professional Scrum Master I (PSM I, scrum.org)..`,
      },
    ],
  },
  {
    // A DETERMINER...
    time: Time.timePM2,
    room: Room.room4,
    title: `Conférence à déterminer`,
    resume: `A venir...`,
    company: ``,
    presenters: [
      {
        name: `Présentateur à confirmer`,
        picture: `assets/picture-not-available.png`,
        bio: `A venir...`,
      },
    ],
  },
];