#!/bin/bash

NEW_VERSION=$1

# Exit if no version provided
if [ -z "$NEW_VERSION" ]; then
    echo "Error: No version provided"
    exit 1
fi

# Update package.json
sed -i "s/\"version\": \".*\"/\"version\": \"$NEW_VERSION\"/" package.json

# Update package-lock.json only if it exists
if [ -f "package-lock.json" ]; then
    sed -i "s/\"version\": \".*\"/\"version\": \"$NEW_VERSION\"/" package-lock.json
fi

echo "Version updated to $NEW_VERSION"
