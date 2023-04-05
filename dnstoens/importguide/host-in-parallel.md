---
title: "Host in Parallel DNS and ENS static content from IPFS"
description: "An Overview On How to Host in Parallel DNS and ENS static content from IPFS"
sidebar_position: 5
---

In this example, we will learn how to use the exact same IPFS location to host static website content for both a DNS name, and an ENS name. This negates the need for hosting files on a traditional web server or cloud infrastructure. In this scenario, an ENS .eth name can point its content record to the same exact IPFS location where the DNS domain retrieves IPFS content using [DNSLink](https://docs.ipfs.tech/concepts/dnslink/).

## IPFS and IPNS

IPNS is a naming system built on IPFS that creates what’s known as “mutable pointers” so that the address of the pointer can be shared once, yet the CIDs the pointer references can change. CIDs are immutable, meaning that they do not change once they are created.

![Alt text](https://dnstoens.com/images/ipns-ipfs.png "IPNS and IPFS")

Using a combination of DNSLink with the permanent IPFS content hash (CID), one can reliably host a decentralized website with both a mutable pointer on the DNS domain, and the immutable IPFS CID for the given content. In this way using the immutable CID ensures the integrity of the content because the CID is a permanent hash specifically derived from the content itself.

### Step 1: Save Your Website Content to IPFS

The next step is to save your content to the IPFS network. There are a number of platforms you can use to upload and pin content to IPFS. Once the content is uploaded, a CID will be generated for that content. For example, here is the CID for a version of Wikipedia hosted on IPFS:

`bafybeiaysi4s6lnjev27ln5icwm6tueaw2vdykrtjkwiphwekaywqhcjze`

The above is a CID v1 hash for the Wikipedia content which is the newest version of the CID content hash. CID v0 or the original content identifier format was 46 characters and started with “Qm”. For example:

`QmaCveU7uyVKUSczmiCc85N7jtdZuBoKMrmcHbnnP26DCx`

Both CID versions will resolve to the same content. The IPFS default will eventually be v1, but depending on where and how you’ve uploaded files to IPFS, you may get different versions of the CID. 


### Step 2: Setup your DNS Website to Resolve IPFS Content with DNSLink

To point your DNS domain to IPFS content using DNSLink, a TXT record will need to be created for your domain that references the IPFS CID. For example, you can query the TXT record for [_DNSLINK.EN.WIKIPEDIA-ON-IPFS.ORG](https://dnschecker.org/all-dns-records-of-domain.php?query=_dnslink.en.wikipedia-on-ipfs.org&rtype=TXT&dns=google) which will return:

`dnslink=/ipfs/bafybeiaysi4s6lnjev27ln5icwm6tueaw2vdykrtjkwiphwekaywqhcjze`

![Alt text](https://dnstoens.com/images/dnslink-ipfs.png "DNSLink with IPFS CID")

The DNSLink record could instead reference and IPNS link, `dnslink=/ipns/`, however we will use the immutable CID instead of an IPNS name for the purposes of this guide. To explore using IPNS, see: [Serve Dynamic Blockchain Content through DNS records](/dnstoens/importguide/dynamic-blockchain-content).


### Step 3: Setup your ENS name’s records to point to IPFS Content

Content hash records within the ENS protocol work similarly, except they are not updated by logging into your DNS domain. Instead, records are updated by interacting with the blockchain using a cryptographic key for the Ethereum wallet allowed to sign and approve transactions to make changes to the ENS records stored on the blockchain.

This can be done by logging into the [ENS Manager App](https://app.ens.domains) and updating the content record hash. Since we are using an IPFS CID, the formatting will be as follows:


`ipfs://bafybeiaysi4s6lnjev27ln5icwm6tueaw2vdykrtjkwiphwekaywqhcjze`

![Alt text](https://dnstoens.com/images/dweb-ipfs-ens.png "ENS with IPFS Content")


For detailed instructions on setting a content hash record for an ENS name, see: [Support Docs - The Content Record](https://support.ens.domains/docs/core/records/content-hash)

### Step 4: Visit your decentralized website

Now that we have the IPFS CID saved for both the DNS domain’s DNSLink TXT record and also the same CID saved in the ENS content record, we can visit the decentralized website in two ways. Referencing the decentralized version of Wikipedia previously, we can simply visit [en.wikipedia-on-ipfs.org](https://en.wikipedia-on-ipfs.org/) and the website content will be rendered from the distributed content files stored on IPFS.

The DNS domain is not truly decentralized even though the content the domain points to is decentralized. It can be looked at as a “hybrid” model using both DNS and decentralized services. The ENS name on the other hand, wikipedia-on-ipfs.eth is truly decentralized as the name itself and the content records are on the Ethereum blockchain. Most browsers do not natively support resolving .eth content records, but a few are able like Brave browser and Opera. Most browsers with Metamask installed are also able to resolve .eth content using a built in IPFS gateway. Additionally, a decentralized content hash resolver can be used like [eth.limo](https://eth.limo).

## DNS Domain Pointing to IPFS using DNSLink

![Alt text](https://dnstoens.com/images/dns-ipfs-dnslink.png "DNS with DNSLink to IPFS")

## ENS .eth Name Pointing to IPFS using ENS Records and .LIMO Resolver

![Alt text](https://dnstoens.com/images/dns-ipfs-limo.png "ENS IPFS Limo Resolving")

## Updating your decentralized website

Since the DNSLink and ENS content record point to the same location, you can update the website content by simply changing the IPFS CID the DNS domain points to, and the ENS content record to the same.

## Related

* [Cloudflare DNS and Web3](/dnstoens/importguide/cloudflare-dns-and-web3)
* [Support Docs - Create a Decentralized Website](https://support.ens.domains/docs/howto/decentralized_website)
* [IPFS - DNSLink Docs](https://docs.ipfs.tech/concepts/dnslink/)
* DNS and ENS Further Development
