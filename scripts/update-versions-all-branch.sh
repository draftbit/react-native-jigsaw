#!/bin/bash

# Array of branch names - you can modify this array as needed
branches=("50" "master" "52-beta")

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

handle_error() {
    echo -e "${RED}❌ Error: $1${NC}"
    exit 1
}

for branch in "${branches[@]}"; do
    echo -e "${BLUE}🔄 Processing branch: $branch${NC}"
    
    git checkout "$branch" || handle_error "Failed to checkout branch $branch"
    
    # Pull latest changes
    echo -e "${YELLOW}📥 Pulling latest changes...${NC}"
    git pull || handle_error "Failed to pull latest changes on branch $branch"
    
    # Clean install dependencies
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    rm -rf node_modules
    yarn install || handle_error "Failed to install dependencies on branch $branch"
    
    # Increase minor version
    echo -e "${YELLOW}⬆️  Increasing minor version...${NC}"
    yarn version:minor -- -y || handle_error "Failed to increase version on branch $branch"
    
    # Push code changes
    echo -e "${YELLOW}📤 Pushing code changes...${NC}"
    git push || handle_error "Failed to push code changes on branch $branch"
    
    # Push tags
    echo -e "${YELLOW}🏷️  Pushing tags...${NC}"
    git push --tags || handle_error "Failed to push tags on branch $branch"
    
    echo -e "${GREEN}✅ Completed processing branch: $branch${NC}"
    echo -e "${BLUE}----------------------------------------${NC}"
done

echo -e "${GREEN}🎉 All branches have been processed successfully!${NC}"