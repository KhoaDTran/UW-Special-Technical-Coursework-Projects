#!/bin/bash

####################################
# Name: Khoa Tran
# CSE 391 - Summer 2021
# Homework 4
####################################

function print_link {
  echo "https://gitlab.cs.washington.edu/cse391-21su-hw4/ktdt01"
}

function problem1 {
  # Type your answer to problem #1 below this line
  git log -1
}

function problem2 {
  # Type your answer to problem #1 below this line
  git diff HEAD..HEAD^^
}

function problem3 {
  # Type your answer to problem #1 below this line
  git blame menu.txt
}
