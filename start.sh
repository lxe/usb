#!/bin/bash

yarn http-server -S &
yarn nodemon -e ts,html --exec tsc
