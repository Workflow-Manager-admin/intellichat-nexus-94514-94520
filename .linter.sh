#!/bin/bash
cd /home/kavia/workspace/code-generation/intellichat-nexus-94514-94520/main_container_for_intelli_chat_nexus
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

