# Resolver

The Resolver field for an ENS name is normally set to the `ENS Public Resolver` contract which helps resolve your ENS name into usable records like wallet addresses, avatars, etc. This is similar to how DNS helps resolve regular domain names into usable records like IP addresses.

There are a wide variety of records that can be set and resolved depending on your use case.

Some examples are:

* **Wallet address records**  
*Contains records about your various wallet addresses, so that funds can be sent to them.*
  
* **Avatar record**  
*Contains a link to an image stored as an NFT or on a website and used to visually represent your ENS name.*
  
* **Social links**  
*Useful links to, for example, your GitHub, LinkedIn, or Twitter profiles.*

## ENS Public Resolver
If the resolver is unset or you've changed it you can set it back to the default in the [ENS Manager App](https://app.ens.domains) by going to the ENS name, scrolling down and expanding `Advanced settings`, and setting the Resolver to the `ENS Public Resolver`:
```
0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41 
```
