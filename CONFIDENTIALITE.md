# Confidentialité

Ework est conçu pour garder vos données sur votre ordinateur.

## Ce qu'Ework ne fait pas

- Pas de compte à créer, pas de serveur Ework.
- Aucune télémétrie, aucune statistique d'usage, aucun traceur, aucune publicité.
- Aucun classement entre personnes : la progression reste sur votre ordinateur.
- Aucune frappe n'est enregistrée, le presse-papiers n'est jamais lu, l'écran n'est jamais capturé.

## Qui Ework contacte

| Destinataire | Quand | Ce qui part |
| --- | --- | --- |
| **L'agent que vous avez relié**, à l'adresse que vous avez donnée | Quand vous lui écrivez, et de temps en temps pour ses tâches prévues et ses fichiers | Vos messages, les fichiers que vous joignez, et ce que vous avez accepté d'envoyer |
| **Ce dépôt GitHub** | Au lancement puis toutes les 6 heures, si les mises à jour sont activées | Une simple demande du numéro de la dernière version, sans donnée personnelle |

Rien d'autre. Vers l'agent, Ework n'accepte que HTTPS, ou HTTP vers votre ordinateur ou votre réseau privé ; il le vérifie à chaque connexion.

## Ce qu'Ework regarde sur votre ordinateur

Tout cela est réglable dans « Réglages », groupe « Assistance », et rien n'en sort :

- le programme au premier plan et sa famille (navigateur, traitement de texte…), les changements de fenêtre ;
- l'activité et l'inactivité, le verrouillage, la sortie de veille ;
- le fait qu'un son joue et le fait qu'une copie a eu lieu, jamais ce qui a été copié ;
- la position et la taille des fenêtres, pour marcher sur leur bord, jamais leur contenu.

Désactivés au départ : le titre des fenêtres, le titre de ce qui joue, l'écoute de quelques raccourcis clavier, et la lecture du texte d'une fenêtre. Cette dernière ne se fait que sur un geste de votre part, pour un programme que vous avez autorisé par son nom ; le texte lu vous est montré avant tout envoi. Les gestionnaires de mots de passe, les fenêtres de navigation privée et les champs de mot de passe ne sont jamais lus.

Quand Ework propose une aide, la demande à l'agent est rédigée et montrée : rien ne part avant que vous choisissiez « Envoyer ».

## Où sont vos données

| Quoi | Où |
| --- | --- |
| Réglages, conversations, progression, nouvelles de l'agent | `%APPDATA%\works.ewe.ework\` |
| Clé de l'agent, mot de passe du service de fichiers | Gestionnaire d'identification de Windows |

La clé n'apparaît dans aucun fichier ni dans le journal de connexion. Pour tout effacer, désinstallez Ework puis supprimez le dossier ci-dessus ; la clé se retire avant, depuis « Réglages », groupe « Agent », bouton « Retirer ».

## Mises à jour

Les mises à jour sont signées. Ework vérifie cette signature avant toute installation et refuse une mise à jour qui ne la porte pas. Vous choisissez dans les réglages entre mises à jour automatiques et manuelles. Les installeurs sont compilés uniquement par GitHub Actions.

## Cartes à partager

Les cartes de statistiques et leur code QR sont dessinés sur votre ordinateur. Elles n'en sortent que si vous les copiez ou les enregistrez vous-même.
