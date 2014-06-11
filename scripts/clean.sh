
#!/usr/bin/env bash

set -x

script=ember-page-titles

for type in amd yui cjs; do
  rm "${script}.${type}.js"
done
