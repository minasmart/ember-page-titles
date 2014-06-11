#!/usr/bin/env bash

set -x

if [ ! -d tmp ]; then
  mkdir tmp
fi

script="ember/page-titles"

for type in amd yui cjs; do
  compile-modules "${script}.js" --infer-name --to tmp --type ${type}
  mv "tmp/${script}.js" "${script}.${type}.js"
done
