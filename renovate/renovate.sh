#!/bin/bash

export RENOVATE_CONFIG_FILE="config.json"
export RENOVATE_GIT_AUTHOR='Renovate Bot <bot@renovateapp.com>'
export RENOVATE_PLATFORM='github'

renovate
