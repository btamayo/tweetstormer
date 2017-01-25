#!/bin/bash
set -x
openssl aes-256-cbc -K $encrypted_ebc3a9840b87_key -iv $encrypted_ebc3a9840b87_iv -in deploy-key-digitalocean-travis.enc -out deploy-key-digitalocean-travis -d
rm deploy-key-digitalocean-travis.enc
chmod 600 deploy-key-digitalocean-travis
mv deploy-key-digitalocean-travis ~/.ssh/id_rsa