#!/bin/bash
bazel run :bin & pid=$!; sleep 1; kill -TERM $pid; wait $pid;
echo "launcher script terminated"
