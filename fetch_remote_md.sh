#!/bin/bash

# URL of the remote markdown file
REMOTE_MD_URL="https://raw.githubusercontent.com/jialeishen/CONTAM-ANT/main/README.md"

# Local path to save the fetched markdown file
LOCAL_MD_PATH="_includes/md/ANT_Intro.md"

# Fetch the remote markdown file and print the output
echo "Fetching remote markdown file from $REMOTE_MD_URL"
curl -o $LOCAL_MD_PATH $REMOTE_MD_URL

# Check if the file was fetched successfully
if [ $? -eq 0 ]; then
  echo "File fetched successfully. Contents of $LOCAL_MD_PATH:"
  cat $LOCAL_MD_PATH
else
  echo "Failed to fetch the file."
  exit 1
fi

# Verify the file was written correctly
echo "Verifying the contents of $LOCAL_MD_PATH:"
cat $LOCAL_MD_PATH

# List the directory contents to verify the file update
echo "Listing contents of _includes/md directory:"
ls -la _includes/md

# Check file permissions
echo "Checking file permissions for $LOCAL_MD_PATH:"
ls -l $LOCAL_MD_PATH