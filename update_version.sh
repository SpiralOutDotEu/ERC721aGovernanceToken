#!/bin/bash

NEW_VERSION=$1

# Exit if no version provided
if [ -z "$NEW_VERSION" ]; then
    echo "Error: No version provided"
    exit 1
fi

# Update package.json
sed -i "s/\"version\": \".*\"/\"version\": \"$NEW_VERSION\"/" package.json

# Update package-lock.json
npm install

echo "Version updated to $NEW_VERSION"
