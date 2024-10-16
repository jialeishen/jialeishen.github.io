#!/bin/bash

# URL of the remote markdown file
REMOTE_MD_URL="https://raw.githubusercontent.com/jialeishen/CONTAM-ANT/main/README.md"

# Local path to save the fetched markdown file
LOCAL_MD_PATH="_includes/md/ANT_Intro.md"

# Fetch the remote markdown file
curl -o $LOCAL_MD_PATH $REMOTE_MD_URL