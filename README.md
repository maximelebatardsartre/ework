<p align="center">
  <img src="assets/banner.svg" alt="Ework, le compagnon de bureau de votre agent" width="100%">
</p>

<p align="center">
  <a href="https://github.com/maximelebatardsartre/ework/releases/latest"><img alt="Télécharger pour Windows" src="https://img.shields.io/badge/T%C3%A9l%C3%A9charger-Windows-E600BF?style=for-the-badge&logo=windows&logoColor=white"></a>
  &nbsp;
  <a href="https://github.com/maximelebatardsartre/ework/releases/latest"><img alt="Télécharger pour macOS" src="https://img.shields.io/badge/T%C3%A9l%C3%A9charger-macOS-E600BF?style=for-the-badge&logo=apple&logoColor=white"></a>
</p>

<p align="center">
  <a href="https://github.com/maximelebatardsartre/ework/releases/latest"><img alt="Dernière version" src="https://img.shields.io/github/v/release/maximelebatardsartre/ework?style=flat-square&label=version&color=131D22"></a>
  <img alt="Gratuit" src="https://img.shields.io/badge/prix-gratuit-82FFE4?style=flat-square">
  <img alt="Aucune télémétrie" src="https://img.shields.io/badge/t%C3%A9l%C3%A9m%C3%A9trie-aucune-82FFE4?style=flat-square">
  <a href="LICENCE-UTILISATION.md"><img alt="Licence propriétaire" src="https://img.shields.io/badge/licence-propri%C3%A9taire-131D22?style=flat-square"></a>
</p>

---

**Ework** est un compagnon de bureau pour Windows et macOS. C'est le visage de votre agent d'intelligence artificielle : on lui parle, on lui confie des missions et on le voit travailler, sans terminal.

Ework est le cœur du logo EWE, dessiné et animé entièrement en code. Il marche sur le bord de vos fenêtres, saute de l'une à l'autre, suit l'heure de la journée, réagit à la souris, et se fait discret dès qu'une application passe en plein écran.

## Sommaire

- [Ce que fait Ework](#ce-que-fait-ework)
- [Installer Ework](#installer-ework)
- [Relier votre agent](#relier-votre-agent)
- [Mises à jour](#mises-à-jour)
- [Vérifier le fichier téléchargé](#vérifier-le-fichier-téléchargé)
- [Confidentialité](#confidentialité)
- [Licence](#licence)

## Ce que fait Ework

| | |
| --- | --- |
| **Il montre ce que fait l'agent** | Il écoute, réfléchit, rédige, cherche, lit, range, envoie, analyse, exécute, patiente… Plus de soixante-dix états animés, avec élan, respiration, clignements et un regard qui suit la souris. |
| **Une bulle au-dessus de lui** | Un clic sur Ework : vous écrivez une mission, la réponse s'y écrit, une ligne dit ce que fait l'agent. Vous approuvez ou refusez ce qu'il demande, vous l'arrêtez. Raccourci : `Alt + Maj + Espace`. |
| **Une fenêtre complète** | Six rubriques : Conversation, Missions, Fichiers, Progression, Apparence, Réglages. Les conversations sont gardées sur votre ordinateur. |
| **Il vous ressemble** | Couleur, yeux, bouche, couvre-chef, lunettes, col, lueur, nom : chacun fait le sien. |
| **Il vit avec vous** | Salut le matin, café, déjeuner, bâillements le soir, sommeil la nuit. Il réagit à une copie, à un fichier qu'on lui tend, à la musique, à votre retour. |
| **Il propose son aide** | Quand une aide paraît utile, une petite carte la propose. Rien ne part vers l'agent sans votre accord. Désactivable. |
| **Progression sobre** | Facultative et désactivée au départ : niveaux, rangs, badges, une carte à partager. Aucun classement entre personnes. |
| **Discret au travail** | Il se cache en plein écran, aux heures calmes, quand un programme choisi tourne, ou une heure sur demande. |

## Installer Ework

Il vous faut un agent [Hermes](https://github.com/NousResearch/hermes-agent) avec son serveur d'API, sur votre ordinateur, votre réseau ou un serveur.

| | Windows | macOS |
| --- | --- | --- |
| **Système** | Windows 10 ou 11, 64 bits | macOS 11 Big Sur ou plus récent, Apple Silicon ou Intel |
| **Fichier** | `Ework_x.y.z_x64-setup.exe` | `Ework_x.y.z_universal.dmg` |
| **Droits administrateur** | Non | Non |

### Sur Windows

1. Ouvrez la [dernière version](https://github.com/maximelebatardsartre/ework/releases/latest) et, dans « Assets », téléchargez **`Ework_x.y.z_x64-setup.exe`**.
2. Lancez-le. L'installation se fait pour votre seul compte Windows.
3. Ework apparaît sur le bord de votre écran, et son icône près de l'horloge.

> [!NOTE]
> **« Windows a protégé votre ordinateur »** : l'installeur n'a pas de certificat de signature de code payant. Cliquez sur **Informations complémentaires**, puis sur **Exécuter quand même**. Vous pouvez d'abord [vérifier le fichier](#vérifier-le-fichier-téléchargé).

Pour désinstaller : Paramètres › Applications › Ework › Désinstaller.

### Sur Mac

1. Ouvrez la [dernière version](https://github.com/maximelebatardsartre/ework/releases/latest) et, dans « Assets », téléchargez **`Ework_x.y.z_universal.dmg`**.
2. Ouvrez-le et glissez **Ework** dans le dossier **Applications**.
3. Lancez Ework depuis Applications. Il apparaît sur votre écran, et son icône dans la barre des menus (pas dans le Dock).

> [!IMPORTANT]
> **Premier lancement** : Ework n'est pas encore notarié par Apple, donc macOS le bloque une première fois (« Ework ne peut pas être ouvert… »). Cliquez sur **OK**, puis ouvrez **Réglages Système › Confidentialité et sécurité**, descendez jusqu'au message sur Ework et cliquez sur **Ouvrir quand même**. Confirmez avec votre mot de passe : ce ne sera plus demandé.
>
> Si macOS dit que l'application est « endommagée », c'est la même protection : dans le Terminal, lancez `xattr -cr /Applications/Ework.app`, puis ouvrez Ework normalement.

Pour désinstaller : glissez Ework d'Applications vers la Corbeille.

#### Les autorisations de macOS

Ework fonctionne sans aucune autorisation : le personnage, la bulle, l'agent, le bord des fenêtres, le plein écran. Trois options de l'assistance, désactivées au départ, demandent un accord que macOS vous propose la première fois :

| Option d'Ework | Autorisation macOS | Ce qu'Ework en fait |
| --- | --- | --- |
| Le titre des fenêtres | **Enregistrement de l'écran** | Lire le **titre** de la fenêtre au premier plan. Aucune image de l'écran n'est prise. |
| L'écoute des raccourcis | **Surveillance de l'entrée** | Reconnaître sept raccourcis (Cmd+C, V, X, Z, S, Cmd+Tab, capture d'écran). Toute autre touche est ignorée sur-le-champ. |
| La lecture d'une fenêtre | **Accessibilité** | Lire le texte d'une fenêtre, seulement sur votre geste et pour un programme autorisé. Jamais un champ de mot de passe. |

Ces accords se donnent ou se retirent dans **Réglages Système › Confidentialité et sécurité**. Sur Mac, Ework sait qu'un son joue, mais pas le titre du morceau.

## Relier votre agent

1. Clic droit sur Ework, **Relier un agent**.
2. Collez ce que vous avez, puis **Connecter** :
   - l'adresse de l'agent, sous n'importe quelle forme (`192.168.1.20`, `agent.mondomaine.fr`, `https://…/v1`) ;
   - ou un bloc qui contient l'adresse et la clé (les lignes de son fichier `.env`, par exemple).
3. Ni adresse ni clé sous la main ? **Demander à mon agent** copie une consigne à coller dans la conversation de votre agent : il répond par un bloc à coller dans Ework.

La clé est rangée dans le trousseau du système (gestionnaire d'identification de Windows, trousseau de macOS) et n'est jamais affichée. Ework accepte HTTPS partout, et HTTP seulement vers votre ordinateur ou votre réseau privé.

<details>
<summary><b>Préparer l'agent à la main</b></summary>

Sur la machine de l'agent, dans `~/.hermes/.env` :

```
API_SERVER_ENABLED=true
API_SERVER_KEY=une-longue-cle-secrete
```

Puis lancez `hermes gateway` : le serveur écoute sur le port 8642. Pour un serveur distant, passez par un tunnel SSH (`ssh -N -L 8642:127.0.0.1:8642 utilisateur@serveur`, puis l'adresse `http://127.0.0.1:8642`) ou par un proxy inverse en HTTPS.

</details>

## Mises à jour

Dans « Réglages », vous choisissez entre mises à jour **automatiques** ou **manuelles**. Ework vérifie au lancement, puis toutes les six heures, jamais en plein écran. Chaque mise à jour est **signée** : Ework vérifie la signature avant de l'installer et refuse toute mise à jour qui ne la porte pas.

## Vérifier le fichier téléchargé

Les installeurs sont compilés uniquement par GitHub Actions, jamais sur un ordinateur personnel. Pour vérifier que votre fichier est bien celui publié :

1. Téléchargez `SHA256SUMS.txt` dans la même version.
2. Dans le dossier du téléchargement :

   ```powershell
   # Windows, dans PowerShell
   Get-FileHash .\Ework_x.y.z_x64-setup.exe
   ```

   ```bash
   # macOS, dans le Terminal
   shasum -a 256 Ework_x.y.z_universal.dmg
   ```

3. L'empreinte affichée doit être identique à celle du fichier.

Ework n'est publié **que** sur cette page. Un installeur trouvé ailleurs n'est pas le nôtre.

## Confidentialité

Pas de compte, pas de télémétrie, pas de publicité. Ework ne contacte que l'agent que vous avez indiqué, et cette page pour les mises à jour. Ce qu'il observe sur votre ordinateur n'en sort pas. Tout le détail : [page de confidentialité](CONFIDENTIALITE.md).

## Licence

Ework est **gratuit**, pour un usage personnel comme professionnel. Il n'est **pas open source** : le code source n'est pas publié, et l'application ne peut être ni revendue, ni redistribuée, ni modifiée, ni décompilée. Son utilisation est régie par la [licence d'utilisation](LICENCE-UTILISATION.md).

Ework, son personnage et ses animations © 2026 eSpri Studio. Tous droits réservés. Le nom et le logo EWE appartiennent à EWE.

<p align="center">
  <sub>Développé par <b>eSpri Studio</b> · Un agent sur mesure pour votre entreprise ? <a href="https://ewe.works">ewe.works</a></sub>
</p>
