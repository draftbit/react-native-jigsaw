#!/usr/bin/env sh

# normal package for react native
npm publish

# special package for web-builder
echo "Deleting original Icon.tsx and AudioPlayer.tsx"
rm -rf src/components/Icon.tsx
rm -rf src/components/AudioPlayer.tsx
node scripts/prepare-web-pak.js

echo "Creating Icon.web.tsx and AudioPlayer.web.tsx"
cp ./files/Icon.web.tsx ./src/components/Icon.tsx
cp ./files/AudioPlayer.web.tsx ./src/components/AudioPlayer.tsx
npm publish

echo "Resetting repo"
git restore package.json src/components/Icon.tsx src/components/AudioPlayer.tsx
