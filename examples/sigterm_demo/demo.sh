#!/bin/bash
launcher=`bazel run --run_under "echo " :bin`
$launcher & pid=$!; sleep 1; kill -TERM $pid; wait $pid;
echo "launcher script terminated"
