# biscuit-js | Vanilla JavaScript implementation

This is a vanilla JavaScript implementation for handling very specific tasks on Biscuit authorization tokens. Mainly, this library supports token attenuation and adding of third-party blocks, signed by browser native Web Crypto API.

While [biscuit-wasm](https://github.com/biscuit-auth/biscuit-wasm) supports the full spec and can be used in browsers, it is also very heavy-weight (~1.7 MB). 

In contrast, the bundled and gzipped vanilla JavaScript implementation currently fits into ~16kb. 

## Use-cases 

- Per-request attenuation of tokens in the browser, i.e. [this recipe](https://github.com/biscuit-auth/website/issues/47)
- Third-party block for DPop like scenarios

## Choice of crypto library

While the goal is to use the native Web Crypto API as much as possible, it is not possible to use it for all operations, due the the restriction on exports of raw private keys. 

Therefore, an additional library supporting Ed25519 is required for signing and appending of blocks. Keypairs for appending of blocks are ephemeral, so this is not an issue from a security point of view. [noble-ed25519](https://github.com/paulmillr/noble-ed25519) has been chosen, due to its small foot-print and extensive documentation. 

For third-party signatures, Web Crypto API will be used. In case of third-party signatures, the key-pair is not ephemeral. The goal is to create a trust-relationship between multiple parties, where the private key will be used multiple times to sign third-party blocks for multiple tokens. It is therefore crucual that the private key used to sign the third-party block is not leaked. The Web Crypto API's same site policies for protecting private keys will make sure the key is safe. 

## Browser compatability 

Ed25519 support in the Web Crypto API is an [emerging specification](https://wicg.github.io/webcrypto-secure-curves/), support by browsers is only recent, and not yet in any mainstream distribution. 


- Chrome: Available in Chrome Canary
    - [Chrome Platform Status,  Feature: Curve25519 in Web Cryptography](https://chromestatus.com/feature/4913922408710144)
- Safari: Available in [Safari Technlogoy Preview 163](https://webkit.org/blog/13839/release-notes-for-safari-technology-preview-163/), released on Feb 8, 2023
    - [WebKit Standards Positions](https://github.com/WebKit/standards-positions/issues/67)