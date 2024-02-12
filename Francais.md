# Choiceof.dev

Les développeurs doivent faire face à des choix plutôt difficiles chaque jour. Voici une collection des choix les plus complexes et amusants. Quel sera le vôtre ?


<p style="text-align: center;"><img src="readme/github-home.jpg"></p>

🗺 **Par les développeurs pour les développeurs**

## Comment ajouter une question à choiceof.dev

Comme il s'agit d'un projet créé par les développeurs pour les développeurs, nous voulons rendre la contribution cool et amusante pour apprendre à contribuer à un projet open source.
Pour ajouter une question, vous devez cloner le projet localement, le construire, mettre à jour un fichier et ajouter vos deux images.

Juste un rappel rapide, le projet est censé être drôle. Par conséquent, les questions doivent être... drôles. Si vous créez une question qui n'est pas extrêmement amusante dans le choix, au moins, essayez de trouver des images amusantes pour l'illustrer.

Le fichier à éditer est : `apps/devchoices-next/public/assets/data/questions.ts`

<p style="text-align: center;"><img src="readme/question-format.jpg" width="450"></p>

Vous y trouverez une liste de questions, avec un slug, un titre, une description, les choix de droite et de gauche ainsi que leurs images respectives.
Vous pouvez ajouter une question à la fin de la liste, ou au milieu, cela n'a pas d'importance.
Ensuite, vous devez ajouter deux images dans le dossier `apps/devchoices-next/public/assets/img` avec le nom que vous avez précisé dans l'autre fichier.

Ensuite, vous pouvez exécuter le projet localement et vérifier si tout fonctionne correctement. Vous pouvez tester votre question directement en accédant à l'URL suivante :
`localhost:4200/question/your-slug`

Si vous aimez le résultat, il est temps de générer l'aperçu de cette question pour les réseaux sociaux.
Pour ce faire, exécutez la commande :

`pnpm ts-node scripts/preview-generator.ts`

Si pour une raison quelconque vous voulez régénérer tous les aperçus, vous pouvez exécuter la commande :

`pnpm ts-node scripts/preview-generator.ts --override`

Maintenant, vous êtes prêt à soumettre votre PR. Nous le passerons en revue et si tout va bien, et si la blague est amusante, nous la fusionnerons et votre question sera disponible sur le site web 🎉

## Comment contribuer au projet principal et ajouter des fonctionnalités

Dans les problèmes du dépôt, vous verrez de nombreux tickets ouverts. Vous pouvez en prendre un si vous le souhaitez et proposer votre solution sur une PR.
Vous pouvez également créer des problèmes vous-même si vous avez rencontré un bogue ou si vous avez une idée pour une nouvelle fonctionnalité.

## Technologies

Le projet est une version modernisée de son petit frère [choiceof.dev](https://choiceof.dev)
Il est construit avec :

- [Nx](https://nx.dev/)
- [Next.js](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/fr/)
- [Testing Library](https://testing-library.com/)

Il existe également de nombreux [plugins communautaires](https://nx.dev/community) que vous pouvez ajouter.

## Exécution du projet localement

Clonez le dépôt, installez les dépendances et exécutez le projet :

```bash
pnpm install
npx nx serve
```

Vous devriez voir ceci :

<p style="text-align: center;"><img src="readme/server-running.jpg" width="450"></p>

Et en accédant à localhost:4200 vous devriez voir le projet fonctionner.

## Exécution du storybook

Si vous souhaitez travailler sur les composants, sur le système de conception, ou sur un environnement dédié sans les effets secondaires de l'application, vous pouvez exécuter le storybook :

```bash
 nx run shared-ui:storybook
```

Vous devriez voir ceci dans votre terminal

<p style="text-align: center;"><img src="readme/storybook-running.jpg" width="450"></p>

et sur `localhost:4400` vous devriez voir le storybook en cours d'exécution.

<p style="text-align: center;"><img src="readme/storybook-screenshot.jpg"></p>

## Credits

Ce projet open source et ce site web ont été créés par Benjamin Code pour célébrer ses 100 000 abonnés sur YouTube.
Le projet s'inspire de [choiceof.dev](https://choiceof.dev) qui est également un projet créé par [Benjamin Code](https://twitter.com/benjamincode) et qui lui a coûté beaucoup d'argent à l'époque... Si vous voulez en savoir plus sur cette histoire et comment un grand buzz sur votre projet secondaire amusant peut vous ruiner, vous trouverez [this article on Medium](https://medium.com/@benjamindebonmountain/choixdemerde-fr-le-buzz-couteux-6a46d3d6a480)

"L'histoire de choix de merde est terrible. Elle m'a coûté beaucoup de temps et d'argent et ne m'a jamais rien apporté. Mais les histoires sur ce développement catastrophique m'ont incité à démarrer une chaîne YouTube et jusqu'à présent, c'est la meilleure expérience de ma vie. Pour les 100k abonnés, je voulais ramener un peu de lumière sur cette histoire et compléter la boucle."
– Benjamin Code
