# DNS Names
ENS supports importing DNS names into ENS, which makes it possible to use, for example, your `.com` `.net` or `.org` DNS name with ENS.
  
There are a few pre-requisites to importing a DNS name into ENS:

 * The DNS name must have DNSSEC enabled with `RSA/SHA-256` or `ECDSA` keys
   
 * An `_ens` `TXT record` must be created on the DNS name containing the wallet address to prove ownership of it.

## Hosting providers
A list of popular hosting providers and which DNSSEC key types they support

| Hosting providers | DNSSEC | RSA/SHA-256 | ECDSA | Details                                                        |
|-------------------|--------|-------------|-------|----------------------------------------------------------------|
| easyDNS           | `Yes`  | `Yes`       | `Yes` | [`DNSSEC Guide`](https://kb.easydns.com/knowledge/dnssec/)     |
| Google Cloud DNS  | `Yes`  | `Yes`       | `Yes` | [`DNSSEC Guide`](https://cloud.google.com/dns/docs/registrars) |
| Bluehost          | `Yes`  | `Yes`       | `Yes` |                                                                |
| Hostinger         | `Yes`  | `Yes`       | `Yes` |                                                                |
| Hostgator         | `Yes`  | `Yes`       | `Yes` |                                                                |
| GoDaddy           | `Yes`  | `No`        | `Yes` |                                                                |
| Wordpress         | `No`   | -           | -     |                                                                |

:::note
*(Support may have changed since this was last verified on 2022-05-22)*
:::

## Step 1: Enable DNSSEC

Go to the [ENS Manager App](https://app.ens.domains) and search for your DNS name. You should see a screen like this:

![Picture 1](/img/import_dnsname_img1.webp)

If your DNS provider supports DNSSEC, all you do is enable the option in their DNS manager:

![Picture 2](/img/import_dnsname_img2.webp)

If they don’t, you’ll need to migrate to a DNS provider that does. See:
> [**Hosting providers**](#hosting-providers)

## Step 2: Add the TXT-record
The DNS Registrar on ENS looks for a `TXT record` to verify ownership of the domain. This record has the following attributes:

|          |                         |
|----------|-------------------------|
| Type     | `TXT`                   |
| Name     | `_ens`                  |
| Contents | `a=wallet address`      |
| TTL      | `36000`                 |

To prove ownership of your DNS name, create a `TXT record` in your DNS zone, _ens.yourdomain.xyz, with text data of the form `a=walletaddress`... where `walletaddress` is the Ethereum wallet you want to give control of the ENS record to.

![Picture 3](/img/import_dnsname_img3.webp)

## Step 3: Linking the name with ENS
Now you should be able to go back to the [ENS Manager App](https://app.ens.domains) and finish linking the DNS name with ENS by pressing `Register`.

![Picture 4](/img/import_dnsname_img4.webp)

