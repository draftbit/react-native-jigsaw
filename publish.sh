#!/usr/bin/env sh

# special package for web-builder
echo "Deleting original Icon.tsx"
rm -rf src/components/Icon.tsx
node scripts/change-pak-name.js "web"

echo "Creating Icon.web.tsx"
cp ./files/Icon.web.tsx ./src/components/Icon.tsx
npm publish

echo "Resetting repo"
rm -rf ./src/components/Icon.tsx

# normal package for react native
node scripts/change-pak-name.js "ui"
echo "Creating Icon.native.tsx"
cp ./files/Icon.native.tsx ./src/components/Icon.tsx
npm publish
