# ENS Vision
The most common issues impacting users of ENS Vision and their solutions

## Can't set as Primary name
If you bought a name on ENS Vision that you can't set as your Primary name, this is caused by the `ETH Address` and `Resolver` records not being set. To fix it:

### Set the Resolver
Set the Resolver to the `ENS Public Resolver` by following the instructions in
> [**Resolver:** ENS Public Resolver](../../names/records/resolver.md#ens-public-resolver)

After this has been set refresh the page and a new `Addresses` section should appear.

### Set the ETH Address record
Set the `ETH Address` record to your wallet address by following the instructions in
> [**Address:** Set an Address record](../../names/records/address.md#set-an-address-record)

### Set the Primary name
Go back to *My Account* in the [ENS Manager App](https://app.ens.domains) and you should now be able to select the ENS name from the `Primary name` drop-down list.

## Lack of normalization
ENS Vision does not perform normalization when registering names which means that it's possible to register invalid names that will not be possible to manage, use or trade on certain marketplaces like OpenSea. 

Before registering a name on ENS Vision *always* make sure it is searchable in the official [ENS Manager App](https://app.ens.domains) first.
 
 

