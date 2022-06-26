# blockchaine
Cour de la semaine du 20/06/2022 sur blockchaine

## Getting Started

Dans ce cours on peut retrouver 3 projets : 
  - le projet game est un jeux non terminer dont le but était de nourrir un monstre en utilisant des ethereums pour lui acheté a manger ou d'achete d'autres monstres. 
  - le projet game2 est un jeux de mémoire ou il faut trouver un paire, une fois cela fais le joueur a la possibilité d'acheté le nft et de le mettre dans sa collection, des erreurs dans le code non pas encore été réglé (futur mise a jour : le joueur aura la possibilité de remplacer les nft de base par les sien en payant au préalable evidement). 
  - le projet de la candy machine v2 permet à un utilisateur d'acheter 2 NFT et de les retrouver dans sa collection

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

Il y a quelques différences au niveau du code entre ERC20 et ERC721, par exemple :

##### Pour ERC20 :

La fonction totalSupply est publique et donc accessible à tous, elle affiche le nombre total de jetons actuellement en circulation.
Étant donné que cette fonction est étiquetée avec un modificateur de vue, elle ne consomme pas de gas. De plus, il met à jour la valeur de jeton interne totalSupply_ chaque fois qu'un nouveau jeton est créé.

```
  function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }
```
La fonction balanceOf est une autre fonction public avec modificateur de vue qui le rend accessible à tous, et elle ne consomme pas de gas
elle prend l'adresse Ethereum et renvoie les jetons à l'adresse allouée.

```
   function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }
```
La fonction transfet permet de transférer les jetons d'une adresse à une autre à la demande des détenteurs de jetons respectifs
```
function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }
```

##### Pour ERC721 :

Ici Owns représente la liste complète des ID de jeton d'une adresse particulière. Alors que la fonction balanceOf renvoie le nombre de jetons de cette adresse.
```
    function balanceOf(address owner) public view virtual override returns (uint256) {
        require(owner != address(0), "ERC721: balance query for the zero address");
        return _balances[owner];
    }

    function ownerOf(uint256 tokenId) public view virtual override returns (address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "ERC721: owner query for nonexistent token");
        return owner;
    }
```

Le propriétaire du jeton de mappage prend le jeton et affiche le propriétaire de cet ID. 
Mais puisque sa visibilité est définie comme privée, en utilisant la fonction ownerOf , on peut définir la valeur de ce mappage comme public. Il nécessite également une vérification par rapport aux adresses zéro avant de renvoyer la valeur.

```
    function ownerOf(uint256 tokenId) public view virtual override returns (address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "ERC721: owner query for nonexistent token");
        return owner;
    }
```

La fonction safeTransferFrom prend l'adresse du nouveau propriétaire comme paramètre _to et _tokenId du jeton transféré
elle ne peut être appelée que par le propriétaire du jeton. Cela doit inclure la logique pour vérifier si le transfert efface le contrôle d'approbation, requis pour un transfert. Vient ensuite la logique de retirer la possession du jeton au propriétaire actuel et de l'ajouter à la liste des jetons appartenant au nouveau propriétaire.

```
function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        safeTransferFrom(from, to, tokenId, "");
    }
```

#### Pour le projet metaplex il faudra installer :

* [Git](https://git-scm.com/) 
* [Node js](https://nodejs.org/en/) 
* [metaplex](https://docs.metaplex.com/candy-machine-v2/introduction) - documentaion

Pour télécharger le repositorie de metaplax avec le quel nous tavaillerons utiliser la commande ci-dessous

```
git clone https://github.com/metaplex-foundation/metaplex.git
```
Si vous le souhaitez vous trouverez un tutoriel sur comment mettre en place la candy machine v2 : [tuto candy machine v2](https://www.youtube.com/watch?v=AJNxmBDRDAk)


#### Pour le projet game2 il faudra installer : 

* [Git](https://git-scm.com/) 
* [Node js](https://nodejs.org/en/) 
* [Ganache](https://trufflesuite.com/ganache/) 
* [Openzeppelin](https://www.npmjs.com/package/openzeppelin-solidity) 

Source qui on permit de lancer ce projet :

* [Tuto de Ania's](https://www.youtube.com/watch?v=tjyDOHzKN0w) 
* [Tuto de Dapp University](https://www.youtube.com/watch?v=x-6ruqmNS3o)
