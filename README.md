# blockchaine
Cour de la semaine du 20/06/2022 sur blockchaine

## Getting Started

Dans ce cours on peut retrouver 2 projets, l'un est un jeux non terminer dont le but était de nourrir un monstre en utilisant des ethereums pour lui acheté a manger ou d'achete d'autres monstres et l'autre est le projet de la candy machine v2 qui a permis à un utilisateur d'acheter 2 NFT et de les retrouver dans sa collection

### Prerequis

#### Pour le projet game il faudra installer : 

* [Git](https://git-scm.com/) 
* [Node js](https://nodejs.org/en/) 
* [Ganache](https://trufflesuite.com/ganache/) 
* [Extention MetaMask pour chrome]() 
* [Openzeppelin](https://www.npmjs.com/package/openzeppelin-solidity) 

```
npm install @openzeppelin/contracts
```

openzeppelin qui est open-source vas nous permettre d'utiliser des tokens déjà préfet et de les incorporer dans nous futur smart contract. On peut sité comme exemples de tokens ERC721 (qui permet de créer des NFT) et ERC20.

La principale différence entre ERC20 et ERC721 est que les jetons ERC20 sont fongibles, alors que les jetons ERC721 ne le sont pas (d'où leur nom de NFT).
Les jetons ERC20 sont également interchangeables et représentent un seul actif, tandis que ERC721 représente une classe d'actifs. De plus, ERC721 n'est pas divisible.

#### Pour le projet metaplex il faudra installer :

* [Git](https://git-scm.com/) 
* [Node js](https://nodejs.org/en/) 
* [metaplex](https://docs.metaplex.com/candy-machine-v2/introduction) - documentaion

Pour télécharger le repositorie de metaplax avec le quel nous tavaillerons utiliser la commande ci-dessous

```
git clone https://github.com/metaplex-foundation/metaplex.git
```
Si vous le souhaitez vous trouverez un tutoriel sur comment mettre en place la candy machine v2 : [tuto candy machine v2](https://www.youtube.com/watch?v=AJNxmBDRDAk)

