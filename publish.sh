#!/usr/bin/env sh

# normal package for react native
npm publish

# special package for web-builder
echo "Deleting original Icon.tsx"
rm -rf src/components/Icon.tsx
node scripts/prepare-web-pak.js

echo "Creating Icon.web.tsx"
cp ./files/Icon.web.tsx ./src/components/Icon.tsx
npm publish
